import { NextResponse } from 'next/server'
import { testimonials, SITE, googleReviewsConfig } from '@/lib/site-config'
import googleReviewsStore from '@/lib/google-reviews.json'

export const revalidate = 3600 // Cache for 1 hour

export async function GET(request) {
  try {
    // 1. Check for manual rollback / static mode override
    const forceStatic =
      googleReviewsConfig.forceStatic ||
      process.env.GOOGLE_REVIEWS_FORCE_STATIC === 'true'

    if (forceStatic) {
      return NextResponse.json({
        reviews: testimonials,
        rating: SITE.rating,
        reviewCount: SITE.reviewCount,
        source: 'static',
        fallback: true,
        reason: 'Force static mode active',
      })
    }

    // 2. Extract API credentials
    const apiKey =
      process.env.GOOGLE_PLACES_API_KEY ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY
    const placeId =
      process.env.GOOGLE_PLACE_ID ||
      process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID ||
      googleReviewsConfig.placeId

    // 3. Serve top 5 verified Google reviews from agent store (sorted 5★ to 0★)
    if (!apiKey) {
      const storeReviews = (googleReviewsStore && googleReviewsStore.reviews && googleReviewsStore.reviews.length > 0)
        ? googleReviewsStore.reviews
        : testimonials

      return NextResponse.json({
        reviews: storeReviews,
        rating: googleReviewsStore.rating || SITE.rating,
        reviewCount: googleReviewsStore.reviewCount || SITE.reviewCount,
        source: 'google',
        fallback: false,
        lastUpdated: googleReviewsStore.lastUpdated,
        placeId: placeId,
      })
    }

    // 4. Fetch Google Places Details with reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId
    )}&fields=name,rating,user_ratings_total,reviews&key=${encodeURIComponent(
      apiKey
    )}`

    const res = await fetch(url, {
      next: { revalidate: 3600 },
    })

    if (!res.ok) {
      throw new Error(`Google API HTTP status ${res.status}`)
    }

    const data = await res.json()

    if (data.status !== 'OK' || !data.result) {
      console.warn('Google Places API non-OK status:', data.status, data.error_message)
      return NextResponse.json({
        reviews: testimonials,
        rating: SITE.rating,
        reviewCount: SITE.reviewCount,
        source: 'static',
        fallback: true,
        reason: data.error_message || data.status,
      })
    }

    const result = data.result
    const rawReviews = result.reviews || []

    // 5. Filter and format 5 recent high-rated reviews
    const formattedReviews = rawReviews
      .filter((r) => r.rating >= 4 && r.text && r.text.trim().length > 0)
      .sort((a, b) => (b.time || 0) - (a.time || 0))
      .slice(0, googleReviewsConfig.maxReviews || 5)
      .map((r) => ({
        name: r.author_name || 'Verified Customer',
        role: r.relative_time_description || 'Google Review',
        quote: r.text,
        rating: r.rating || 5,
        tag: 'Google Review',
        avatar: r.profile_photo_url || null,
        time: r.time,
      }))

    if (formattedReviews.length === 0) {
      return NextResponse.json({
        reviews: testimonials,
        rating: result.rating || SITE.rating,
        reviewCount: result.user_ratings_total ? `${result.user_ratings_total}+` : SITE.reviewCount,
        source: 'static',
        fallback: true,
        reason: 'No suitable reviews found in Google payload',
      })
    }

    return NextResponse.json(
      {
        reviews: formattedReviews,
        rating: result.rating || SITE.rating,
        reviewCount: result.user_ratings_total ? `${result.user_ratings_total}+` : SITE.reviewCount,
        source: 'google',
        fallback: false,
      },
      {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
      }
    )
  } catch (error) {
    console.error('Error fetching Google Reviews:', error)
    return NextResponse.json({
      reviews: testimonials,
      rating: SITE.rating,
      reviewCount: SITE.reviewCount,
      source: 'static',
      fallback: true,
      reason: error.message,
    })
  }
}

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const PLACE_ID = process.env.GOOGLE_PLACE_ID || 'ChIJrYclcLy_wjsRuMOo-cm9wDs'
const API_KEY = process.env.GOOGLE_PLACES_API_KEY || ''
const OUTPUT_FILE = path.join(__dirname, '../lib/google-reviews.json')

export async function syncGoogleReviews() {
  console.log(`[Google Reviews Agent] Starting daily sync for Place ID: ${PLACE_ID}...`)

  let reviewsData = []
  let rating = 4.9
  let reviewCount = '321+'
  let isFromLiveApi = false

  if (API_KEY) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
        PLACE_ID
      )}&fields=name,rating,user_ratings_total,reviews&key=${encodeURIComponent(API_KEY)}`

      const res = await fetch(url)
      const data = await res.json()

      if (data.status === 'OK' && data.result && data.result.reviews) {
        rating = data.result.rating || 4.9
        reviewCount = data.result.user_ratings_total ? `${data.result.user_ratings_total}+` : '321+'
        
        reviewsData = data.result.reviews.map(r => ({
          name: r.author_name || 'Verified Customer',
          role: `${r.relative_time_description || 'Google Review'}`,
          quote: r.text,
          rating: r.rating || 5,
          tag: 'Google Review',
          avatar: r.profile_photo_url || null,
          time: r.time || 0
        }))
        isFromLiveApi = true
      }
    } catch (err) {
      console.warn('[Google Reviews Agent] API call failed, sorting stored reviews:', err.message)
    }
  }

  // If no live API data or API key missing, load existing stored reviews
  if (reviewsData.length === 0 && fs.existsSync(OUTPUT_FILE)) {
    try {
      const raw = fs.readFileSync(OUTPUT_FILE, 'utf8')
      const json = JSON.parse(raw)
      reviewsData = json.reviews || []
      rating = json.rating || 4.9
      reviewCount = json.reviewCount || '321+'
    } catch (e) {
      console.warn('[Google Reviews Agent] Error reading existing json store:', e.message)
    }
  }

  // Sort reviews by star rating descending (5 to 0 stars), then by date/time descending
  const sortedReviews = [...reviewsData].sort((a, b) => {
    // 1. Sort by rating: 5 stars to 0 stars
    if (b.rating !== a.rating) {
      return b.rating - a.rating
    }
    // 2. Secondary sort: timestamp/recency if available
    return (b.time || 0) - (a.time || 0)
  }).slice(0, 5)

  const payload = {
    lastUpdated: new Date().toISOString(),
    rating,
    reviewCount,
    placeId: PLACE_ID,
    source: isFromLiveApi ? 'google-live-api' : 'google-sync-agent',
    reviews: sortedReviews,
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(payload, null, 2), 'utf8')
  console.log(`[Google Reviews Agent] Successfully updated ${sortedReviews.length} top reviews (sorted 5★ -> 0★) in ${OUTPUT_FILE}`)
  return payload
}

// Execute directly if run via CLI node
if (process.argv[1] && process.argv[1].endsWith('sync-google-reviews.mjs')) {
  syncGoogleReviews()
    .then(p => console.log('Sync result:', p.reviews.map(r => `${r.name} (${r.rating}★)`)))
    .catch(console.error)
}

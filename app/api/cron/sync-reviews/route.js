import { NextResponse } from 'next/server'
import { syncGoogleReviews } from '@/scripts/sync-google-reviews.mjs'

export const dynamic = 'force-dynamic'

export async function GET(request) {
  try {
    const authHeader = request.headers.get('authorization')
    const cronSecret = process.env.CRON_SECRET

    // Optional authorization check if CRON_SECRET is configured
    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const updatedData = await syncGoogleReviews()

    return NextResponse.json({
      success: true,
      message: 'Google Reviews Agent successfully synced top 5 reviews (sorted 5★ to 0★)',
      data: updatedData,
    })
  } catch (error) {
    console.error('Error running Google Reviews sync agent:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

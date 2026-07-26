export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://1010computers.example'
  const now = new Date()
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ]
}

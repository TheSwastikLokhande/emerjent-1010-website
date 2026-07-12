export default function sitemap() {
  const base = process.env.NEXT_PUBLIC_BASE_URL || 'https://1010computers.example'
  const now = new Date()
  const routes = ['', '#services', '#build', '#about', '#gallery', '#reviews', '#faq', '#contact']
  return routes.map((r) => ({
    url: `${base}/${r}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.7,
  }))
}

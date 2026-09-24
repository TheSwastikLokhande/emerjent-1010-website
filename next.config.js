/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === 'true'

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  ...(isExport
    ? {
        output: 'export',
        images: {
          unoptimized: true,
        },
      }
    : {
        images: {
          remotePatterns: [
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'plus.unsplash.com' },
          ],
        },
      }),
}

module.exports = nextConfig

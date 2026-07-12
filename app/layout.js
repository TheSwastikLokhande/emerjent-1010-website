import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE } from '@/lib/site-config'

export const metadata = {
  title: '1010 Computers — Computer Repair Kothrud Pune | Laptop Dealer & Gaming PC Builder',
  description: 'Since 2015 — Laptop sales & repair, custom gaming PC builds, enterprise PC solutions, data recovery in Kothrud, Pune. 4.9★ from 321+ Google & Justdial reviews. Call or WhatsApp us today.',
  keywords: 'computer repair Kothrud Pune, laptop dealer Pune, gaming PC builder Pune, enterprise PC solutions Pune, custom PC assembly Kothrud, data recovery Pune, refurbished laptops Pune',
  authors: [{ name: '1010 Computers' }],
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://1010computers.example'),
  alternates: { canonical: '/' },
  openGraph: {
    title: '1010 Computers — Pune\'s Trusted Computer & Laptop Experts Since 2015',
    description: '4.9★ rated. 321+ reviews. Custom gaming rigs, enterprise PCs, repairs & more in Kothrud, Pune.',
    type: 'website',
    locale: 'en_IN',
    siteName: '1010 Computers',
  },
  twitter: {
    card: 'summary_large_image',
    title: '1010 Computers — Kothrud, Pune',
    description: 'Trusted computer & laptop experts. Gaming PC builds, repairs, enterprise IT.',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${process.env.NEXT_PUBLIC_BASE_URL || 'https://1010computers.example'}/#business`,
  name: SITE.name,
  image: 'https://images.unsplash.com/photo-1660855552442-1bae49431379',
  telephone: SITE.phoneRaw,
  email: SITE.email,
  priceRange: '₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
    addressLocality: 'Kothrud',
    addressRegion: 'Maharashtra',
    postalCode: '411038',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 18.5074, longitude: 73.8077 },
  openingHoursSpecification: [
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'], opens: '10:00', closes: '20:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: 'Sunday', opens: '11:00', closes: '18:00' },
  ],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: SITE.rating, reviewCount: 321 },
  foundingDate: '2015',
  areaServed: 'Pune, Maharashtra',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
      </head>
      <body className="antialiased bg-background text-foreground">
        <ThemeProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}

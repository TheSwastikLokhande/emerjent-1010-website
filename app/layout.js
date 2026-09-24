import './globals.css'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from '@/components/theme-provider'
import { SITE, faqs } from '@/lib/site-config'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://1010computers.in'

export const metadata = {
  title: '1010 Computers — Computer Repair Kothrud Pune | Laptop Dealer & Gaming PC Builder',
  description: 'Since 2015 — Pune\'s top-rated computer & laptop repair center in Kothrud. Screen replacement, motherboard repair, custom gaming PC builds, MacBook service, SSD upgrades & data recovery. 4.9★ from 321+ Google reviews. Call +91 91685 10101.',
  keywords: [
    'computer repair Kothrud Pune',
    'laptop repair shop near me',
    'laptop repair Kothrud Pune',
    'gaming PC builder Pune',
    'custom PC assembly Pune',
    'MacBook repair Kothrud Pune',
    'computer shop in Kothrud',
    'desktop repair Pune',
    'data recovery Kothrud Pune',
    'refurbished laptops Pune',
    'laptop screen replacement Pune',
    'motherboard repair Pune',
    'PC deep cleaning thermal repasting Pune',
    'computer dealer Pune',
    '1010 Computers Pune',
  ].join(', '),
  authors: [{ name: '1010 Computers', url: BASE_URL }],
  creator: '1010 Computers',
  publisher: '1010 Computers',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: '1010 Computers — Computer Repair Kothrud Pune | Laptop & Gaming PC Experts',
    description: '4.9★ rated from 321+ real reviews. Laptop repair, custom gaming PC builds, MacBook repair, desktop sales & data recovery in Kothrud, Pune. Same-day service available.',
    url: BASE_URL,
    siteName: '1010 Computers',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: `${BASE_URL}/hero-banner.jpg`,
        width: 1200,
        height: 630,
        alt: '1010 Computers Pune — Computer Repair & Custom PC Build Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '1010 Computers — Computer Repair Kothrud Pune',
    description: '4.9★ rated from 321+ reviews. Laptop repair, custom gaming PC builds, and IT hardware in Kothrud, Pune.',
    images: [`${BASE_URL}/hero-banner.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'gJQkr4h54movfkzJohVFQ8VjAVyQAPW3fC5SHsVy3zQ',
  },
  other: {
    'google-site-verification': 'gJQkr4h54movfkzJohVFQ8VjAVyQAPW3fC5SHsVy3zQ',
    'geo.region': 'IN-MH',
    'geo.placename': 'Pune, Kothrud, Maharashtra',
    'geo.position': '18.5074;73.8077',
    'ICBM': '18.5074, 73.8077',
  },
}

// 1. Local Business & Computer Store Schema
const computerStoreSchema = {
  '@context': 'https://schema.org',
  '@type': ['ComputerStore', 'LocalBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: SITE.name,
  alternateName: ['1010 Computers Pune', '1010 Computer Repair Kothrud'],
  url: BASE_URL,
  logo: `${BASE_URL}/hero-banner.jpg`,
  image: `${BASE_URL}/hero-banner.jpg`,
  description: 'Pune\'s trusted computer and laptop sales, repair, and custom gaming PC specialist center in Kothrud since 2015.',
  telephone: SITE.phoneRaw,
  email: SITE.email,
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, UPI, Credit Card, Debit Card, Net Banking',
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${SITE.address.line1}, ${SITE.address.line2}`,
    addressLocality: 'Kothrud',
    addressRegion: 'Maharashtra',
    postalCode: '411038',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 18.5074,
    longitude: 73.8077,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '10:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '11:00',
      closes: '18:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.rating,
    reviewCount: 321,
    bestRating: '5',
    worstRating: '1',
  },
  foundingDate: '2015',
  areaServed: [
    { '@type': 'City', name: 'Pune' },
    { '@type': 'AdministrativeArea', name: 'Kothrud' },
    { '@type': 'AdministrativeArea', name: 'Karve Nagar' },
    { '@type': 'AdministrativeArea', name: 'Bavdhan' },
    { '@type': 'AdministrativeArea', name: 'Warje' },
    { '@type': 'AdministrativeArea', name: 'Deccan Gymkhana' },
    { '@type': 'AdministrativeArea', name: 'Erandwane' },
    { '@type': 'AdministrativeArea', name: 'Baner' },
    { '@type': 'AdministrativeArea', name: 'Hinjawadi' },
    { '@type': 'AdministrativeArea', name: 'Shivaji Nagar' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: '1010 Computers Services & Products',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Laptop & Computer Repair',
          description: 'Screen replacement, keyboard, battery, motherboard repair, and OS setup for Dell, HP, Lenovo, Asus, Acer, and MacBooks in Kothrud, Pune.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Custom Gaming PC Assembly & Builds',
          description: 'High-performance gaming rigs and workstations tuned for 1080p, 1440p, or 4K with NVIDIA RTX and AMD Ryzen processors.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'MacBook Repair & Service',
          description: 'Specialist MacBook screen, battery, logic board, trackpad and liquid damage repair in Pune.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Data Recovery Service',
          description: 'Data recovery from failed HDDs, SSDs, external hard drives, and dead laptops with high recovery success rate.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Computer Maintenance, Deep Cleaning & Thermal Repasting',
          description: 'Internal dust removal, cooling fan cleaning, heat sink cleaning, CPU/GPU thermal paste replacement with premium compound.',
        },
      },
    ],
  },
}

// 2. FAQ Schema for Google Search Accordion Rich Results
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

// 3. WebSite Schema
const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${BASE_URL}/#website`,
  url: BASE_URL,
  name: '1010 Computers',
  description: 'Pune\'s Trusted Computer & Laptop Experts Since 2015',
  publisher: {
    '@id': `${BASE_URL}/#business`,
  },
  inLanguage: 'en-IN',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(computerStoreSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body className="antialiased bg-background text-foreground" suppressHydrationWarning>
        <ThemeProvider>
          {children}
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  )
}

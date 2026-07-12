import './globals.css'
import { Toaster } from '@/components/ui/sonner'

export const metadata = {
  title: '1010 Computers — Pune\'s Trusted Computer, Laptop & Gaming PC Experts | Kothrud',
  description: 'Since 2015 — Laptop sales & repair, custom gaming PC builds, enterprise PC solutions, data recovery. 4.9★ from 321+ reviews. Kothrud, Pune. Call or WhatsApp us today.',
  keywords: 'computer repair Kothrud Pune, laptop dealer Pune, gaming PC builder Pune, enterprise PC solutions Pune, custom PC assembly Kothrud, data recovery Pune',
  openGraph: {
    title: '1010 Computers — Pune\'s Trusted Computer & Laptop Experts Since 2015',
    description: '4.9★ rated. 321+ reviews. Custom gaming rigs, enterprise PCs, repairs & more in Kothrud, Pune.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}

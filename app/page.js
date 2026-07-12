'use client'

import { useState, useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'
import {
  Laptop, Monitor, Gamepad2, Building2, Wrench, HardDrive, Cpu,
  Keyboard, Database, Sparkles, Phone, MessageCircle, ArrowUp,
  Star, ShieldCheck, Zap, IndianRupee, Award, ChevronRight, Menu, X,
  MapPin, Clock, Mail, ArrowRight, CheckCircle2
} from 'lucide-react'
import { SITE, yearsExperience } from '@/lib/site-config'

const services = [
  { icon: Laptop, title: 'Laptop Sales', desc: 'New & pre-owned laptops from top brands with warranty.', gradient: 'from-blue-500 to-cyan-500' },
  { icon: Monitor, title: 'Desktop Sales', desc: 'Home, office and premium desktops — new & refurbished.', gradient: 'from-indigo-500 to-blue-500' },
  { icon: Gamepad2, title: 'Gaming PC Builds', desc: 'Custom gaming rigs tuned for 1080p, 1440p or 4K.', gradient: 'from-fuchsia-500 to-purple-500' },
  { icon: Building2, title: 'Enterprise Solutions', desc: 'Bulk PC orders & IT setup for offices and businesses.', gradient: 'from-slate-600 to-slate-800' },
  { icon: Cpu, title: 'Custom PC Assembly', desc: 'Build-to-order PCs based on your budget & use case.', gradient: 'from-orange-500 to-red-500' },
  { icon: Wrench, title: 'Laptop Repair', desc: 'Screen, keyboard, battery, motherboard-level repairs.', gradient: 'from-emerald-500 to-teal-500' },
  { icon: Wrench, title: 'Computer Repair', desc: 'Fast, honest diagnosis for desktops of all brands.', gradient: 'from-teal-500 to-cyan-500' },
  { icon: Sparkles, title: 'OS & Software Setup', desc: 'Genuine Windows / macOS installation and software config.', gradient: 'from-violet-500 to-indigo-500' },
  { icon: Database, title: 'Data Recovery', desc: 'Recover lost data from HDDs, SSDs and dead laptops.', gradient: 'from-rose-500 to-pink-500' },
  { icon: Keyboard, title: 'Accessories & Peripherals', desc: 'Keyboards, mice, monitors, SSDs, RAM, cables & more.', gradient: 'from-amber-500 to-orange-500' },
]

const buildTypes = [
  { name: 'Budget Build', desc: 'Everyday computing & study essentials', price: 'Starts ₹28,000', icon: IndianRupee, tone: 'from-emerald-500/10 to-emerald-500/0 border-emerald-200' },
  { name: 'Gaming Build', desc: 'AAA titles at high FPS with RGB flair', price: 'Starts ₹65,000', icon: Gamepad2, tone: 'from-fuchsia-500/10 to-fuchsia-500/0 border-fuchsia-200' },
  { name: 'Editing / Creator', desc: '4K editing, 3D & content creation', price: 'Starts ₹95,000', icon: Sparkles, tone: 'from-violet-500/10 to-violet-500/0 border-violet-200' },
  { name: 'Office PC', desc: 'Silent, reliable business machines', price: 'Starts ₹32,000', icon: Building2, tone: 'from-blue-500/10 to-blue-500/0 border-blue-200' },
  { name: 'Enterprise PC', desc: 'Bulk orders with support & warranty', price: 'Quote on request', icon: ShieldCheck, tone: 'from-slate-500/10 to-slate-500/0 border-slate-200' },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#build', label: 'Custom PC Builds' },
  { href: '#contact', label: 'Contact' },
]

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/60 shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold shadow-md">10</span>
          <span>1010 <span className="text-blue-600">Computers</span></span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-blue-600 transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <a href={`tel:${SITE.phoneRaw}`}><Button size="sm" variant="outline" className="rounded-full"><Phone className="h-4 w-4 mr-1.5"/>Call</Button></a>
          <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer"><Button size="sm" className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700"><MessageCircle className="h-4 w-4 mr-1.5"/>WhatsApp</Button></a>
        </div>
        <button className="md:hidden p-2 -mr-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-200">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-slate-700 hover:text-blue-600 font-medium">{l.label}</a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={`tel:${SITE.phoneRaw}`} className="flex-1"><Button variant="outline" className="w-full rounded-full"><Phone className="h-4 w-4 mr-1.5"/>Call</Button></a>
              <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" className="flex-1"><Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700"><MessageCircle className="h-4 w-4 mr-1.5"/>WhatsApp</Button></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  const prefersReduced = useReducedMotion()
  return (
    <section id="home" className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white"></div>
      <div className="absolute -z-10 top-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 shadow-sm px-3 py-1.5 text-xs font-medium text-slate-700">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400"/>{SITE.rating}★</span>
            <span className="text-slate-300">·</span>
            <span>{SITE.reviewCount} Google &amp; Justdial Reviews</span>
            <span className="text-slate-300">·</span>
            <span>Since {SITE.establishedYear}</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.05]">
            Pune&apos;s <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Trusted</span> Computer &amp; Laptop Experts.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl leading-relaxed">
            From custom gaming rigs to enterprise deployments, laptop repairs to data recovery — we&apos;ve served Kothrud, Pune with honest pricing and expert care for {yearsExperience()}+ years.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`}>
              <Button size="lg" className="rounded-full h-12 px-6 text-base bg-slate-900 hover:bg-slate-800 shadow-lg shadow-slate-900/20">
                <Phone className="h-4 w-4 mr-2"/>Call Now
              </Button>
            </a>
            <a href={`https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent('Hi 1010 Computers, I would like a quote.')}`} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-base border-slate-300 hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700">
                <MessageCircle className="h-4 w-4 mr-2"/>Get WhatsApp Quote
              </Button>
            </a>
            <a href="#build">
              <Button size="lg" variant="ghost" className="rounded-full h-12 px-6 text-base text-blue-700 hover:bg-blue-50">
                Build My PC <ArrowRight className="h-4 w-4 ml-2"/>
              </Button>
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            <Stat label="Established" value={SITE.establishedYear}/>
            <Stat label="Reviews" value={SITE.reviewCount}/>
            <Stat label="Rating" value={`${SITE.rating}★`}/>
          </div>
        </motion.div>

        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-blue-600 via-indigo-600 to-fuchsia-600 blur-2xl opacity-30"></div>
            <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl border border-white/60 bg-slate-900">
              <Image src="https://images.unsplash.com/photo-1660855552442-1bae49431379" alt="Custom gaming PC with blue RGB lighting built by 1010 Computers" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 500px"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
            </div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -left-6 top-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 grid place-items-center"><ShieldCheck className="h-5 w-5"/></div>
              <div>
                <div className="text-xs text-slate-500">Genuine Parts</div>
                <div className="text-sm font-semibold">Warranty Included</div>
              </div>
            </motion.div>
            <motion.div
              initial={prefersReduced ? {} : { opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="absolute -right-4 bottom-10 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 grid place-items-center"><Award className="h-5 w-5"/></div>
              <div>
                <div className="text-xs text-slate-500">Trusted Since</div>
                <div className="text-sm font-semibold">2015 · Kothrud, Pune</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({ label, value }) {
  return (
    <div>
      <div className="text-2xl font-semibold tracking-tight text-slate-900">{value}</div>
      <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">{label}</div>
    </div>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-50 border-0">Our Services</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">Everything you need — under one roof.</h2>
          <p className="mt-4 text-lg text-slate-600">Sales, repairs, custom builds and enterprise IT — served with the same honest, expert care since 2015.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => (
            <ServiceCard key={s.title} {...s} delay={i * 0.05}/>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ icon: Icon, title, desc, gradient, delay = 0 }) {
  const prefersReduced = useReducedMotion()
  return (
    <motion.div
      initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay, ease: 'easeOut' }}
      className="group relative"
    >
      <div className={`absolute -inset-px rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>
      <div className="relative h-full rounded-2xl bg-white border border-slate-200 p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className={`inline-grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg shadow-slate-900/10`}>
          <Icon className="h-5 w-5"/>
        </div>
        <h3 className="mt-4 text-base font-semibold text-slate-900">{title}</h3>
        <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-700 group-hover:gap-2 transition-all">
          Learn more <ChevronRight className="h-4 w-4"/>
        </a>
      </div>
    </motion.div>
  )
}

function BuildPC() {
  const steps = [
    { n: '01', title: 'Free Consultation', desc: 'Tell us your budget, use case & dreams. We recommend the right parts.', icon: MessageCircle },
    { n: '02', title: 'Component Selection', desc: 'Handpicked CPUs, GPUs, cooling & aesthetics — from genuine suppliers.', icon: Cpu },
    { n: '03', title: 'Assembly & Testing', desc: 'Professional cable management, stress testing & burn-in before delivery.', icon: ShieldCheck },
  ]
  return (
    <section id="build" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"></div>
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_50%)]"></div>
      <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(217,70,239,0.12),transparent_50%)]"></div>
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-white/10 text-white hover:bg-white/10 border-0 backdrop-blur">Custom Builds</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white">Build your dream PC — the way you imagined it.</h2>
          <p className="mt-4 text-lg text-slate-300">Whether you&apos;re chasing 4K gaming, editing 8K footage, or deploying 50 office machines — our experts design and assemble it, tested and ready.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white shadow-lg">
                  <s.icon className="h-5 w-5"/>
                </div>
                <span className="text-4xl font-semibold text-white/10">{s.n}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-white mb-6">Popular build types</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {buildTypes.map((b, i) => (
              <motion.div
                key={b.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 hover:border-white/30 transition-all hover:-translate-y-1"
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${b.tone} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative">
                  <b.icon className="h-6 w-6 text-white"/>
                  <div className="mt-4 text-white font-semibold">{b.name}</div>
                  <div className="text-sm text-slate-300 mt-1">{b.desc}</div>
                  <div className="mt-4 text-xs uppercase tracking-wider text-blue-300 font-medium">{b.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          <a href={`https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent('Hi, I want a free PC build consultation.')}`} target="_blank" rel="noreferrer">
            <Button size="lg" className="rounded-full h-12 px-6 bg-white text-slate-900 hover:bg-slate-100 text-base">
              Get Free Consultation <ArrowRight className="h-4 w-4 ml-2"/>
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-base bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">
              Ask an Expert
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      toast.error('Please enter your name and phone number.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact-form' }),
      })
      if (!res.ok) throw new Error('Request failed')
      toast.success("Thanks! We'll reach out shortly.")
      setForm({ name: '', phone: '', message: '' })
    } catch (err) {
      toast.error('Could not send. Please try WhatsApp instead.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <Badge className="rounded-full bg-blue-50 text-blue-700 hover:bg-blue-50 border-0">Get in touch</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-900">Visit us or drop a message.</h2>
          <p className="mt-4 text-lg text-slate-600">Walk in for a quick diagnosis, or send a message — we usually reply within minutes on WhatsApp.</p>

          <div className="mt-8 space-y-5">
            <ContactItem icon={MapPin} title="Store address">
              {SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}
            </ContactItem>
            <ContactItem icon={Clock} title="Business hours">{SITE.hours}</ContactItem>
            <ContactItem icon={Phone} title="Call us">
              <a href={`tel:${SITE.phoneRaw}`} className="hover:text-blue-600">{SITE.phone}</a>
            </ContactItem>
            <ContactItem icon={MessageCircle} title="WhatsApp">
              <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600">{SITE.whatsapp}</a>
            </ContactItem>
            <ContactItem icon={Mail} title="Email">{SITE.email}</ContactItem>
          </div>

          <div className="mt-8 aspect-[16/9] rounded-2xl border border-dashed border-slate-300 bg-white grid place-items-center text-slate-500 text-sm">
            <div className="text-center px-6">
              <MapPin className="h-6 w-6 mx-auto text-slate-400"/>
              <p className="mt-2 font-medium">Google Maps embed placeholder</p>
              <p className="text-xs text-slate-400">Kothrud, Pune · easy parking · service area covers all of Pune</p>
            </div>
          </div>
        </div>

        <Card className="p-6 md:p-8 rounded-3xl border-slate-200 shadow-xl shadow-slate-900/5 bg-white h-fit">
          <h3 className="text-xl font-semibold text-slate-900">Send an enquiry</h3>
          <p className="text-sm text-slate-500 mt-1">Book a service, ask about custom builds, or get a quote.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700">Your name</label>
              <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Rohan Sharma" className="mt-1.5 h-11 rounded-xl" required/>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Phone number</label>
              <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98XXX XXXXX" className="mt-1.5 h-11 rounded-xl" required/>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700">Message</label>
              <Textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what you need — laptop repair, custom PC build, bulk order, etc." className="mt-1.5 rounded-xl min-h-[120px]"/>
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-base">
              {loading ? 'Sending…' : <>Book a Service <ArrowRight className="h-4 w-4 ml-2"/></>}
            </Button>
            <p className="text-xs text-slate-500 text-center flex items-center justify-center gap-1">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500"/> We respect your privacy. No spam, ever.
            </p>
          </form>
        </Card>
      </div>
    </section>
  )
}

function ContactItem({ icon: Icon, title, children }) {
  return (
    <div className="flex gap-4">
      <div className="h-10 w-10 shrink-0 rounded-xl bg-white border border-slate-200 grid place-items-center text-blue-600 shadow-sm">
        <Icon className="h-5 w-5"/>
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-500 font-medium">{title}</div>
        <div className="mt-0.5 text-slate-800">{children}</div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12">
      <div className="container mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-white">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold">10</span>
          1010 Computers · Kothrud, Pune
        </div>
        <div className="text-sm text-slate-400">© {new Date().getFullYear()} 1010 Computers. All rights reserved.</div>
      </div>
    </footer>
  )
}

function FloatingActions() {
  const [showTop, setShowTop] = useState(false)
  useEffect(() => {
    const on = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      {showTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="h-12 w-12 rounded-full bg-white shadow-xl border border-slate-200 grid place-items-center text-slate-700 hover:bg-slate-50 transition">
          <ArrowUp className="h-5 w-5"/>
        </button>
      )}
      <a href={`tel:${SITE.phoneRaw}`} aria-label="Call 1010 Computers" className="h-14 w-14 rounded-full bg-slate-900 text-white grid place-items-center shadow-xl hover:bg-slate-800 transition">
        <Phone className="h-6 w-6"/>
      </a>
      <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp 1010 Computers" className="h-14 w-14 rounded-full bg-emerald-500 text-white grid place-items-center shadow-xl hover:bg-emerald-600 transition animate-pulse-slow">
        <MessageCircle className="h-6 w-6"/>
      </a>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen">
      <Nav/>
      <Hero/>
      <Services/>
      <BuildPC/>
      <Contact/>
      <Footer/>
      <FloatingActions/>
    </main>
  )
}

export default App

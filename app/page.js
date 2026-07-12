'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useReducedMotion, useInView, animate } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { toast } from 'sonner'
import {
  Laptop, Monitor, Gamepad2, Building2, Wrench, HardDrive, Cpu,
  Keyboard, Database, Sparkles, Phone, MessageCircle, ArrowUp,
  Star, ShieldCheck, Zap, IndianRupee, Award, ChevronRight, Menu, X,
  MapPin, Clock, Mail, ArrowRight, CheckCircle2, Sun, Moon, Facebook, Instagram, Globe,
} from 'lucide-react'
import {
  SITE, yearsExperience, trustBadges, brands, whyChooseUs,
  testimonials, faqs, galleryCategories, galleryImages,
} from '@/lib/site-config'

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
  { name: 'Budget Build', desc: 'Everyday computing & study essentials', price: 'Starts ₹28,000', icon: IndianRupee, tone: 'from-emerald-500/10 to-emerald-500/0' },
  { name: 'Gaming Build', desc: 'AAA titles at high FPS with RGB flair', price: 'Starts ₹65,000', icon: Gamepad2, tone: 'from-fuchsia-500/10 to-fuchsia-500/0' },
  { name: 'Editing / Creator', desc: '4K editing, 3D & content creation', price: 'Starts ₹95,000', icon: Sparkles, tone: 'from-violet-500/10 to-violet-500/0' },
  { name: 'Office PC', desc: 'Silent, reliable business machines', price: 'Starts ₹32,000', icon: Building2, tone: 'from-blue-500/10 to-blue-500/0' },
  { name: 'Enterprise PC', desc: 'Bulk orders with support & warranty', price: 'Quote on request', icon: ShieldCheck, tone: 'from-slate-500/10 to-slate-500/0' },
]

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#build', label: 'Custom Builds' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return <div className="h-9 w-9"/>
  const isDark = theme === 'dark'
  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label="Toggle dark mode"
      className="h-9 w-9 rounded-full grid place-items-center border border-border bg-background hover:bg-accent transition"
    >
      {isDark ? <Sun className="h-4 w-4"/> : <Moon className="h-4 w-4"/>}
    </button>
  )
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20)
    on(); window.addEventListener('scroll', on); return () => window.removeEventListener('scroll', on)
  }, [])
  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-semibold text-lg tracking-tight">
          <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold shadow-md">10</span>
          <span>1010 <span className="text-blue-600 dark:text-blue-400">Computers</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-muted-foreground">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle/>
          <a href={`tel:${SITE.phoneRaw}`}><Button size="sm" variant="outline" className="rounded-full"><Phone className="h-4 w-4 mr-1.5"/>Call</Button></a>
          <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer"><Button size="sm" className="rounded-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white"><MessageCircle className="h-4 w-4 mr-1.5"/>WhatsApp</Button></a>
        </div>
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle/>
          <button className="p-2 -mr-2" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-muted-foreground hover:text-foreground font-medium">{l.label}</a>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={`tel:${SITE.phoneRaw}`} className="flex-1"><Button variant="outline" className="w-full rounded-full"><Phone className="h-4 w-4 mr-1.5"/>Call</Button></a>
              <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" className="flex-1"><Button className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"><MessageCircle className="h-4 w-4 mr-1.5"/>WhatsApp</Button></a>
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
    <section id="home" className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-background dark:to-background"></div>
      <div className="absolute -z-10 top-0 right-[-10%] w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 left-[-10%] w-[500px] h-[500px] bg-fuchsia-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b50_1px,transparent_1px),linear-gradient(to_bottom,#1e293b50_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]"></div>

      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-background border border-border shadow-sm px-3 py-1.5 text-xs font-medium">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400"/>{SITE.rating}★</span>
            <span className="text-muted-foreground">·</span>
            <span>{SITE.reviewCount} Google &amp; Justdial Reviews</span>
            <span className="text-muted-foreground">·</span>
            <span>Since {SITE.establishedYear}</span>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05]">
            Pune&apos;s <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-fuchsia-600 bg-clip-text text-transparent">Trusted</span> Computer &amp; Laptop Experts.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            From custom gaming rigs to enterprise deployments, laptop repairs to data recovery — we&apos;ve served Kothrud, Pune with honest pricing and expert care for {yearsExperience()}+ years.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${SITE.phoneRaw}`}>
              <Button size="lg" className="rounded-full h-12 px-6 text-base bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 shadow-lg">
                <Phone className="h-4 w-4 mr-2"/>Call Now
              </Button>
            </a>
            <a href={`https://wa.me/${SITE.whatsappRaw}?text=${encodeURIComponent('Hi 1010 Computers, I would like a quote.')}`} target="_blank" rel="noreferrer">
              <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-base hover:bg-emerald-50 hover:border-emerald-300 hover:text-emerald-700 dark:hover:bg-emerald-950">
                <MessageCircle className="h-4 w-4 mr-2"/>Get WhatsApp Quote
              </Button>
            </a>
            <a href="#build">
              <Button size="lg" variant="ghost" className="rounded-full h-12 px-6 text-base text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950">
                Build My PC <ArrowRight className="h-4 w-4 ml-2"/>
              </Button>
            </a>
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
            <motion.div initial={prefersReduced ? {} : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} className="absolute -left-6 top-8 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 grid place-items-center"><ShieldCheck className="h-5 w-5"/></div>
              <div>
                <div className="text-xs text-muted-foreground">Genuine Parts</div>
                <div className="text-sm font-semibold">Warranty Included</div>
              </div>
            </motion.div>
            <motion.div initial={prefersReduced ? {} : { opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.5 }} className="absolute -right-4 bottom-10 bg-background/90 backdrop-blur-md rounded-2xl shadow-xl border border-border p-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 grid place-items-center"><Award className="h-5 w-5"/></div>
              <div>
                <div className="text-xs text-muted-foreground">Trusted Since</div>
                <div className="text-sm font-semibold">2015 · Kothrud, Pune</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function TrustBadgesStrip() {
  return (
    <section className="py-6 border-y border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
          {trustBadges.map((b) => (
            <div key={b} className="flex items-center gap-1.5 text-muted-foreground">
              <CheckCircle2 className="h-4 w-4 text-emerald-500"/>
              <span className="font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Counter({ to, suffix = '', duration = 1.8 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      onUpdate: v => setVal(v),
      ease: 'easeOut',
    })
    return () => controls.stop()
  }, [inView, to, duration])
  return <span ref={ref}>{Math.floor(val)}{suffix}</span>
}

function StatsSection() {
  return (
    <section className="py-20 md:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: 'Established', to: 2015, suffix: '' },
          { label: 'Years of Experience', to: yearsExperience(), suffix: '+' },
          { label: 'Reviews', to: 321, suffix: '+' },
          { label: 'Customer Rating', to: 4.9, suffix: '★', decimals: true },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-semibold tracking-tight bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              {s.decimals ? '4.9' : <Counter to={s.to} suffix={s.suffix}/>}
              {s.decimals ? s.suffix : null}
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-muted-foreground font-medium">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-3">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">About Us</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
            {yearsExperience()}+ years of honest tech expertise in Kothrud.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            1010 Computers was founded in 2015 with a simple idea — treat every customer&apos;s device like our own. Over the years we&apos;ve grown known for quick, accurate diagnosis, affordable pricing, prompt service and one of the widest selections of computer products in the area.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Whether you&apos;re a student picking your first laptop, a gamer chasing peak FPS, or a business rolling out 50 machines — we&apos;ll listen first, recommend honestly, and deliver reliably.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2 text-sm font-medium">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400"/> Trusted by Students, Gamers &amp; Businesses Across Pune
          </div>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {[
            { icon: Award, label: 'Since 2015', v: `${yearsExperience()}+ years` },
            { icon: Star, label: 'Rating', v: '4.9★' },
            { icon: MessageCircle, label: 'Reviews', v: '321+' },
            { icon: ShieldCheck, label: 'Parts', v: 'Genuine' },
          ].map((c) => (
            <div key={c.label} className="rounded-2xl bg-background border border-border p-5 shadow-sm">
              <c.icon className="h-6 w-6 text-blue-600 dark:text-blue-400"/>
              <div className="mt-3 text-2xl font-semibold">{c.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">Our Services</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Everything you need — under one roof.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Sales, repairs, custom builds and enterprise IT — served with the same honest, expert care since 2015.</p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} delay={i * 0.05}/>)}
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
      <div className="relative h-full rounded-2xl bg-background border border-border p-6 shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
        <div className={`inline-grid place-items-center h-11 w-11 rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}>
          <Icon className="h-5 w-5"/>
        </div>
        <h3 className="mt-4 text-base font-semibold">{title}</h3>
        <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{desc}</p>
        <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
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
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-between">
                <div className="grid place-items-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white shadow-lg"><s.icon className="h-5 w-5"/></div>
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
              <motion.div key={b.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group relative rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl p-5 hover:border-white/30 transition-all hover:-translate-y-1">
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
            <Button size="lg" className="rounded-full h-12 px-6 bg-white text-slate-900 hover:bg-slate-100 text-base">Get Free Consultation <ArrowRight className="h-4 w-4 ml-2"/></Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-full h-12 px-6 text-base bg-transparent text-white border-white/30 hover:bg-white/10 hover:text-white">Ask an Expert</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section className="py-16 md:py-20 bg-background border-y border-border">
      <div className="container mx-auto max-w-7xl px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground font-medium">Brands we deal in</p>
        <div className="mt-8 flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {brands.map(b => (
            <span key={b} className="text-xl md:text-2xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">Why Choose Us</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">The reasons Pune keeps coming back.</h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((w, i) => (
            <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="rounded-2xl bg-background border border-border p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="grid place-items-center h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white"><CheckCircle2 className="h-5 w-5"/></div>
              <h3 className="mt-4 text-lg font-semibold">{w.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const [i, setI] = useState(0)
  const n = testimonials.length
  useEffect(() => {
    const t = setInterval(() => setI(v => (v + 1) % n), 5500)
    return () => clearInterval(t)
  }, [n])
  const item = testimonials[i]
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">Reviews</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Loved by our customers.</h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-900 px-3 py-1 text-sm text-amber-800 dark:text-amber-300">
            <Star className="h-4 w-4 fill-amber-400 text-amber-500"/> 4.9★ from 321+ Google &amp; Justdial reviews
          </div>
        </div>

        <div className="mt-12 relative">
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="max-w-3xl mx-auto rounded-3xl bg-gradient-to-br from-blue-50 to-fuchsia-50 dark:from-blue-950/50 dark:to-fuchsia-950/30 border border-border p-8 md:p-12 shadow-xl">
            <div className="flex items-center gap-1 text-amber-500 mb-4">
              {[...Array(item.rating)].map((_, k) => <Star key={k} className="h-5 w-5 fill-current"/>)}
            </div>
            <p className="text-xl md:text-2xl leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <div className="font-semibold">{item.name}</div>
                <div className="text-sm text-muted-foreground">{item.role}</div>
              </div>
              <Badge variant="outline" className="text-xs">{item.tag}</Badge>
            </div>
          </motion.div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, k) => (
              <button key={k} onClick={() => setI(k)} aria-label={`Go to review ${k + 1}`} className={`h-2 rounded-full transition-all ${k === i ? 'w-8 bg-blue-600' : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60'}`}/>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-center text-muted-foreground">Testimonials shown are placeholders and will be replaced with real customer reviews.</p>
      </div>
    </section>
  )
}

function Gallery() {
  const [cat, setCat] = useState('all')
  const filtered = cat === 'all' ? galleryImages : galleryImages.filter(g => g.cat === cat)
  return (
    <section id="gallery" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">Gallery</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">A glimpse inside the workshop.</h2>
          <p className="mt-4 text-muted-foreground">Real builds, real repairs, real store. Placeholder images below — swap files in <code className="text-xs px-1.5 py-0.5 rounded bg-muted">/public/images</code> to update.</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          <FilterChip active={cat === 'all'} onClick={() => setCat('all')} label="All"/>
          {galleryCategories.map(c => (
            <FilterChip key={c.key} active={cat === c.key} onClick={() => setCat(c.key)} label={c.label}/>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((g, k) => (
            <motion.div key={g.src + k} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }} className={`relative overflow-hidden rounded-2xl bg-background border border-border shadow-sm group ${k % 5 === 0 ? 'aspect-[4/5]' : 'aspect-square'}`}>
              <Image src={g.src} alt={g.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 50vw, 25vw"/>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">{g.alt}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FilterChip({ active, onClick, label }) {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-full text-sm font-medium border transition ${active ? 'bg-slate-900 text-white border-slate-900 dark:bg-white dark:text-slate-900 dark:border-white' : 'bg-background text-muted-foreground border-border hover:text-foreground'}`}>
      {label}
    </button>
  )
}

function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto max-w-3xl px-6">
        <div className="text-center">
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">FAQ</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Common questions.</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base md:text-lg font-medium hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
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

  const mapQ = encodeURIComponent(`${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.city}`)

  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <Badge className="rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 hover:bg-blue-50 border-0">Get in touch</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">Visit us or drop a message.</h2>
          <p className="mt-4 text-lg text-muted-foreground">Walk in for a quick diagnosis, or send a message — we usually reply within minutes on WhatsApp.</p>

          <div className="mt-8 space-y-5">
            <ContactItem icon={MapPin} title="Store address">{SITE.address.line1}, {SITE.address.line2}, {SITE.address.city}</ContactItem>
            <ContactItem icon={Clock} title="Business hours">
              <div className="space-y-0.5">
                {SITE.hoursDetailed.map(h => (
                  <div key={h.day} className="flex gap-2"><span className="min-w-[150px] text-muted-foreground">{h.day}</span><span className="font-medium">{h.time}</span></div>
                ))}
              </div>
            </ContactItem>
            <ContactItem icon={Phone} title="Call us"><a href={`tel:${SITE.phoneRaw}`} className="hover:text-blue-600 dark:hover:text-blue-400 font-medium">{SITE.phone}</a></ContactItem>
            <ContactItem icon={MessageCircle} title="WhatsApp"><a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" className="hover:text-emerald-600 font-medium">{SITE.whatsapp}</a></ContactItem>
            <ContactItem icon={Mail} title="Email">{SITE.email}</ContactItem>
            <ContactItem icon={Zap} title="Service area">{SITE.serviceArea}</ContactItem>
            <ContactItem icon={ShieldCheck} title="Parking">{SITE.parking}</ContactItem>
          </div>

          <div className="mt-8 aspect-[16/10] rounded-2xl border border-border overflow-hidden shadow-lg bg-background">
            <iframe
              title="1010 Computers location on Google Maps"
              src={`https://www.google.com/maps?q=${mapQ}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <Card className="p-6 md:p-8 rounded-3xl shadow-xl bg-background h-fit">
          <h3 className="text-xl font-semibold">Send an enquiry</h3>
          <p className="text-sm text-muted-foreground mt-1">Book a service, ask about custom builds, or get a quote.</p>
          <form onSubmit={submit} className="mt-6 space-y-4">
            <div>
              <label className="text-sm font-medium">Your name</label>
              <Input value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Rohan Sharma" className="mt-1.5 h-11 rounded-xl" required/>
            </div>
            <div>
              <label className="text-sm font-medium">Phone number</label>
              <Input value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} placeholder="+91 98XXX XXXXX" className="mt-1.5 h-11 rounded-xl" required/>
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <Textarea value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us what you need — laptop repair, custom PC build, bulk order, etc." className="mt-1.5 rounded-xl min-h-[120px]"/>
            </div>
            <Button type="submit" disabled={loading} size="lg" className="w-full h-12 rounded-full bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 text-base">
              {loading ? 'Sending…' : <>Book a Service <ArrowRight className="h-4 w-4 ml-2"/></>}
            </Button>
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
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
      <div className="h-10 w-10 shrink-0 rounded-xl bg-background border border-border grid place-items-center text-blue-600 dark:text-blue-400 shadow-sm">
        <Icon className="h-5 w-5"/>
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-medium">{title}</div>
        <div className="mt-0.5">{children}</div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-16">
      <div className="container mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold text-white text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-bold">10</span>
            1010 Computers
          </div>
          <p className="mt-4 text-slate-400 max-w-sm">Pune&apos;s trusted destination for computer sales, laptop repairs, custom gaming PCs and enterprise IT since 2015.</p>
          <div className="mt-6 flex gap-3">
            <a href={SITE.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"><Facebook className="h-4 w-4"/></a>
            <a href={SITE.socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"><Instagram className="h-4 w-4"/></a>
            <a href={SITE.socials.google} target="_blank" rel="noreferrer" aria-label="Google Business" className="h-10 w-10 rounded-full bg-white/5 border border-white/10 grid place-items-center hover:bg-white/10 transition"><Globe className="h-4 w-4"/></a>
          </div>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wider text-white font-semibold">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.slice(0, 6).map(l => (
              <li key={l.href}><a href={l.href} className="hover:text-white transition">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-sm uppercase tracking-wider text-white font-semibold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-slate-400">
            <li>{SITE.address.line1}</li>
            <li>{SITE.address.line2}</li>
            <li>{SITE.address.city}</li>
            <li className="pt-2"><a href={`tel:${SITE.phoneRaw}`} className="hover:text-white">{SITE.phone}</a></li>
            <li><a href={`https://wa.me/${SITE.whatsappRaw}`} className="hover:text-white">WhatsApp us</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto max-w-7xl px-6 mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-slate-500">
        <div>© {new Date().getFullYear()} 1010 Computers. All rights reserved.</div>
        <div>Made with ♥ in Kothrud, Pune</div>
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
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top" className="h-12 w-12 rounded-full bg-background shadow-xl border border-border grid place-items-center hover:bg-accent transition">
          <ArrowUp className="h-5 w-5"/>
        </button>
      )}
      <a href={`tel:${SITE.phoneRaw}`} aria-label="Call 1010 Computers" className="h-14 w-14 rounded-full bg-slate-900 text-white grid place-items-center shadow-xl hover:bg-slate-800 transition">
        <Phone className="h-6 w-6"/>
      </a>
      <a href={`https://wa.me/${SITE.whatsappRaw}`} target="_blank" rel="noreferrer" aria-label="WhatsApp 1010 Computers" className="h-14 w-14 rounded-full bg-emerald-500 text-white grid place-items-center shadow-xl hover:bg-emerald-600 transition">
        <MessageCircle className="h-6 w-6"/>
      </a>
    </div>
  )
}

function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav/>
      <Hero/>
      <TrustBadgesStrip/>
      <StatsSection/>
      <About/>
      <Services/>
      <BuildPC/>
      <Brands/>
      <WhyChooseUs/>
      <Testimonials/>
      <Gallery/>
      <FAQ/>
      <Contact/>
      <Footer/>
      <FloatingActions/>
    </main>
  )
}

export default App

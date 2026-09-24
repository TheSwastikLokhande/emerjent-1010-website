// Central business config — update these once and it updates everywhere.
export const SITE = {
  name: '1010 Computers',
  tagline: "Pune's Trusted Computer & Laptop Experts Since 2015",
  establishedYear: 2015,
  rating: 4.9,
  reviewCount: '321+',
  address: {
    line1: 'Shop No. 10, Mandke Anubhav Building',
    line2: 'Vishwashanti Marg, Rambaug Colony',
    city: 'Kothrud, Pune, Maharashtra 411038',
    state: 'India',
  },
  phone: '+91 91685 10101',
  phoneRaw: '+919168510101',
  whatsapp: '+91 91685 10101',
  whatsappRaw: '919168510101',
  email: '1010computers.in@gmail.com',
  hours: 'Mon–Sat: 10:00 AM – 8:00 PM · Sun: 11:00 AM – 6:00 PM',
  hoursDetailed: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
  ],
  socials: {
    facebook: '#',
    instagram: '#',
    google: '#',
  },
  serviceArea: 'All over Pune',
  parking: '',
  mapQuery: '1010 Computers, Rambaug Colony, Kothrud, Pune, Maharashtra 411038',
}

export const yearsExperience = () => 20

export const trustBadges = [
  'Established Since 2015',
  '321+ Google & Justdial Reviews',
  'Genuine Parts',
  'Fast Repairs',
  'Affordable Pricing',
  'Expert Technicians',
  'Custom PC Specialists',
]

export const brands = [
  'Dell', 'HP', 'Lenovo', 'Asus', 'Acer', 'MSI', 'Logitech', 'Corsair', 'AMD', 'Intel', 'NVIDIA',
]

export const whyChooseUs = [
  { title: '4.9★ Rated by 321+ Customers', desc: 'Consistently high ratings on Google and Justdial from real Pune customers.' },
  { title: 'Experienced & Knowledgeable Staff', desc: '20+ years of hands-on experience with laptops, desktops and custom rigs.' },
  { title: 'Quick Turnaround Time', desc: 'Most repairs completed the same day. Diagnosis is always free.' },
  { title: 'Genuine Pricing, No Surprises', desc: 'Transparent quotes upfront — you approve before we start work.' },
  { title: 'Expert Build Consultancy', desc: 'Gaming rig or enterprise setup — we recommend parts that actually fit your needs.' },
  { title: 'Custom Assembly Tailored to You', desc: 'Every PC is built to your exact budget, performance goal and use case.' },
]

// Google Reviews Configuration & Rollback Controls
export const googleReviewsConfig = {
  // Set forceStatic to true to immediately rollback to static testimonials
  forceStatic: false,
  // Google Place ID for 1010 Computers (Kothrud, Pune)
  placeId: process.env.GOOGLE_PLACE_ID || process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID || 'ChIJrYclcLy_wjsRuMOo-cm9wDs',
  // Default count of recent reviews to show
  maxReviews: 5,
}

// Verified Real Google Reviews for 1010 Computers (Kothrud, Pune)
export const testimonials = [
  {
    name: 'MANTHAN',
    role: 'Google Review · 2 weeks ago',
    quote: 'Highly recommend this shop! My PC wouldn\'t start up at all, but the technician diagnosed and solved the issue immediately. Super friendly, incredibly professional, and fast service. I will definitely be coming back here for any future tech issues!',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'Kaustubh Margale',
    role: 'Google Review · a month ago',
    quote: 'Mr. Saurabh, is very helpful explain me issue with my laptop bitlock issue, and solved in 15min. It was very good experience.',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'Eesha Nema',
    role: 'Google Review · 3 months ago',
    quote: 'Responsive, skilled and knowledgeable mechanics. Got my HP 14 Laptop battery replacement there. They had the exact model of the one that was installed in my laptop and made it good as new. Highly recommend.',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'sagar kadam',
    role: 'Google Review · 3 months ago',
    quote: 'I had an amazing experience at 1010 computer. Mr. Rupesh and the team are incredibly knowledgeable, friendly, and efficient. Diagnosed and repaired my device in no time!',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'k susheel Kumar',
    role: 'Google Review · a month ago',
    quote: 'Excellent service, 100% satisfied',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'Sahil Raut',
    role: 'Google Review · 3 months ago',
    quote: 'Awesome place for laptop and Computer repairing',
    rating: 5,
    tag: 'Google Review',
  },
  {
    name: 'Rakesh Prajapat',
    role: 'Google Review · a month ago',
    quote: 'Reasonable rates n great service',
    rating: 5,
    tag: 'Google Review',
  },
]

export const faqs = [
  { q: 'Do you repair MacBooks?', a: 'Yes — we handle screen replacements, battery, keyboard, trackpad, logic board and liquid-damage repairs for most MacBook models. Free diagnosis before any work.' },
  { q: 'How long does laptop repair take?', a: 'Most common repairs (screen, keyboard, battery, OS) are completed the same day. Motherboard-level work usually takes 2–4 working days.' },
  { q: 'Do you build gaming PCs?', a: 'Absolutely — custom gaming rigs are one of our specialities. We tune builds for 1080p, 1440p or 4K gaming with the latest NVIDIA / AMD components.' },
  { q: 'Can I upgrade RAM or storage on my existing PC?', a: 'Yes. Bring in your laptop or desktop and we\'ll recommend compatible upgrades. RAM, SSD and GPU upgrades are typically done within an hour.' },
  { q: 'Do you sell refurbished laptops?', a: 'Yes, we stock certified second-hand laptops and desktops with a warranty. Great value for students and budget-conscious buyers.' },
  { q: 'Do you provide home / office service?', a: 'We offer on-site service for enterprise clients and bulk installations across Pune. Individual home visits can be arranged — call us to check availability.' },
]

export const galleryCategories = [
  { key: 'shop', label: 'Shop' },
  { key: 'repairs', label: 'Repairs' },
  { key: 'gaming', label: 'Gaming PCs' },
  { key: 'custom', label: 'Custom Builds' },
  { key: 'accessories', label: 'Accessories' },
  { key: 'beforeafter', label: 'Before / After' },
]

// Placeholder image set — replace files in /public/images to update.
export const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1', cat: 'shop', alt: 'Computer shop interior' },
  { src: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece', cat: 'shop', alt: 'Retail counter' },
  { src: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8', cat: 'repairs', alt: 'Laptop repair workbench' },
  { src: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837', cat: 'repairs', alt: 'Motherboard repair' },
  { src: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7', cat: 'gaming', alt: 'RGB gaming PC build' },
  { src: 'https://images.unsplash.com/photo-1605041197577-b7aa6282a9e8', cat: 'gaming', alt: 'Blue RGB gaming rig' },
  { src: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c', cat: 'custom', alt: 'Custom PC assembly' },
  { src: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b', cat: 'custom', alt: 'PC internal cabling' },
  { src: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef', cat: 'accessories', alt: 'Mechanical keyboard' },
  { src: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7', cat: 'accessories', alt: 'Gaming mouse' },
  { src: 'https://images.unsplash.com/photo-1588508065123-287b28e013da', cat: 'beforeafter', alt: 'Laptop before repair' },
  { src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', cat: 'beforeafter', alt: 'Laptop after repair' },
]

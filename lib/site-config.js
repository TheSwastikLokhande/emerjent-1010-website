// Central business config — update these once and it updates everywhere.
export const SITE = {
  name: '1010 Computers',
  tagline: "Pune's Trusted Computer & Laptop Experts Since 2015",
  establishedYear: 2015,
  rating: 4.9,
  reviewCount: '321+',
  address: {
    line1: 'Shop No. 8, Shopping Plaza',
    line2: 'Near Doctor Sunny Nursing Home, Paud Road',
    city: 'Kothrud, Pune - 411038',
    state: 'Maharashtra, India',
  },
  phone: '+91 91685 10101',
  phoneRaw: '+919168510101',
  whatsapp: '+91 91685 10101',
  whatsappRaw: '919168510101',
  email: 'contact@1010computers.example',
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
  serviceArea: 'Kothrud, Karve Nagar, Warje, Erandwane, Deccan, Baner · all of Pune',
  parking: 'Free parking available in front of the shop',
}

export const yearsExperience = () => new Date().getFullYear() - SITE.establishedYear

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
  { title: 'Experienced & Knowledgeable Staff', desc: 'A decade of hands-on experience with laptops, desktops and custom rigs.' },
  { title: 'Quick Turnaround Time', desc: 'Most repairs completed the same day. Diagnosis is always free.' },
  { title: 'Genuine Pricing, No Surprises', desc: 'Transparent quotes upfront — you approve before we start work.' },
  { title: 'Expert Build Consultancy', desc: 'Gaming rig or enterprise setup — we recommend parts that actually fit your needs.' },
  { title: 'Custom Assembly Tailored to You', desc: 'Every PC is built to your exact budget, performance goal and use case.' },
]

// Placeholder testimonials — replace with real reviews later.
export const testimonials = [
  { name: 'Aarav P.', role: 'Gamer, Kothrud', quote: 'Got my dream gaming rig built here — they explained every component and stayed within my budget. Runs Cyberpunk at ultra 1440p flawlessly.', rating: 5, tag: 'Placeholder' },
  { name: 'Meera S.', role: 'Small Business Owner', quote: 'We ordered 12 office PCs for our new branch. Delivered, set up and configured within 3 days. Very professional team.', rating: 5, tag: 'Placeholder' },
  { name: 'Kunal D.', role: 'Student, MIT Pune', quote: 'My MacBook wasn\'t charging. They diagnosed it for free, fixed the port the same day, and charged less than half of what Apple quoted.', rating: 5, tag: 'Placeholder' },
  { name: 'Rhea M.', role: 'Content Creator', quote: 'Editing 4K on my laptop was painful. They built me a creator PC with a RTX card and 64GB RAM — renders that took an hour now take 8 minutes.', rating: 5, tag: 'Placeholder' },
  { name: 'Sameer J.', role: 'IT Manager', quote: 'Our go-to vendor for anything hardware. Honest pricing, genuine parts, always picks up the phone. Highly recommended.', rating: 5, tag: 'Placeholder' },
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
  { src: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7', cat: 'shop', alt: 'Computer shop interior' },
  { src: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03', cat: 'shop', alt: 'Retail counter' },
  { src: 'https://images.unsplash.com/photo-1591370874773-6702e8f12fd8', cat: 'repairs', alt: 'Laptop repair workbench' },
  { src: 'https://images.unsplash.com/photo-1518770660439-4636190af475', cat: 'repairs', alt: 'Motherboard repair' },
  { src: 'https://images.unsplash.com/photo-1660855552442-1bae49431379', cat: 'gaming', alt: 'RGB gaming PC build' },
  { src: 'https://images.unsplash.com/photo-1605041197577-b7aa6282a9e8', cat: 'gaming', alt: 'Blue RGB gaming rig' },
  { src: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c', cat: 'custom', alt: 'Custom PC assembly' },
  { src: 'https://images.unsplash.com/photo-1587831990711-23ca6441447b', cat: 'custom', alt: 'PC internal cabling' },
  { src: 'https://images.unsplash.com/photo-1527814050087-3793815479db', cat: 'accessories', alt: 'Mechanical keyboard' },
  { src: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e', cat: 'accessories', alt: 'Gaming mouse' },
  { src: 'https://images.unsplash.com/photo-1547082299-de196ea013d6', cat: 'beforeafter', alt: 'Laptop before repair' },
  { src: 'https://images.unsplash.com/photo-1531492053471-c8fadd0b7b23', cat: 'beforeafter', alt: 'Laptop after repair' },
]

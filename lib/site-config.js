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
  // Replace these placeholders with the real numbers
  phone: '+91 98XXX XXXXX',
  phoneRaw: '+919800000000',
  whatsapp: '+91 98XXX XXXXX',
  whatsappRaw: '919800000000',
  email: 'contact@1010computers.example',
  hours: 'Mon–Sat: 10:00 AM – 8:30 PM · Sun: Closed',
  socials: {
    facebook: '#',
    instagram: '#',
    google: '#',
  },
}

export const yearsExperience = () => new Date().getFullYear() - SITE.establishedYear

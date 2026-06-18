// Site content and copy for Turf சென்னை
export const siteContent = {
  meta: {
    title: 'Turf சென்னை - Premium Sports Turf Booking in Chennai',
    description: 'Book premium cricket nets, 5-a-side football, and full-pitch turf in Chennai. Floodlit evening slots, instant WhatsApp confirmation. Your game, your time.',
    lang: 'ta',
  },

  hero: {
    badge: "வாங்க! Let's Play",
    headline: {
      line1: 'YOUR GAME.',
      line2: 'YOUR TIME.',
      line3: 'BOOK NOW.',
    },
    subtext: 'Premium turf in Chennai. Cricket nets, 5-a-side football, floodlit evening slots. Instant WhatsApp confirmation in 60 seconds.',
    ctaPrimary: 'BOOK YOUR SLOT NOW',
    ctaSecondary: 'View Pricing →',
    trustBadge: '50+ teams play here weekly',
    heroImage: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1600&q=80', // Cricket action under floodlights
  },

  booking: {
    overline: 'INSTANT CONFIRMATION',
    headline: 'Pick Your Slot. Play Today.',
    subtext: 'Select your sport, choose your time, get WhatsApp confirmation instantly. No calls. No hassle. Just book and play.',
    form: {
      sportLabel: 'Choose Your Sport',
      sports: [
        { id: 'cricket', name: 'Cricket Nets', icon: '🏏' },
        { id: 'football', name: '5-a-Side Football', icon: '⚽' },
        { id: 'fullpitch', name: 'Full Pitch', icon: '🏟️' },
      ],
      dateLabel: 'Select Date',
      slotsLabel: 'Available Slots',
      timeSlots: [
        '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM',
        '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
        '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM', '10:00 PM',
      ],
      whatsappLabel: 'Your WhatsApp Number',
      whatsappPlaceholder: '+91 98765 43210',
      whatsappHelper: "We'll send instant confirmation here",
      nameLabel: 'Your Name',
      namePlaceholder: 'Dhoni',
      submitButton: 'CONFIRM BOOKING →',
      submitting: 'BOOKING...',
    },
  },

  facilities: {
    overline: 'WORLD-CLASS INFRASTRUCTURE',
    headline: 'Built for Champions. Designed for You.',
    subtext: 'Professional-grade turf, powerful floodlights, quality equipment. Everything you need to play your best game.',
    features: [
      {
        title: 'Premium Turf Surface',
        description: 'FIFA-quality synthetic grass. Consistent bounce, minimal injuries, all-weather play.',
        image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Stadium Floodlights',
        description: 'Professional LED lighting for crystal-clear evening matches. Play until 10 PM every day.',
        image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Cricket Practice Nets',
        description: 'Four dedicated nets with quality bowling machines. Perfect for serious practice sessions.',
        image: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Quality Equipment',
        description: 'Professional footballs, cricket gear, and markers included. Just bring your boots.',
        image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Changing Rooms',
        description: 'Clean, spacious changing rooms with lockers. Hot water showers available.',
        image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      },
      {
        title: 'Free Parking',
        description: 'Secure parking for bikes and cars. Easy access from OMR and ECR.',
        image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
      },
    ],
  },

  pricing: {
    overline: 'TRANSPARENT PRICING',
    headline: 'Fair Rates. No Hidden Charges.',
    subtext: 'Pay only for the time you play. Group discounts available. All prices include equipment and floodlights.',
    plans: [
      {
        sport: 'Cricket Nets',
        icon: '🏏',
        popular: false,
        rates: [
          { time: 'Morning (6 AM - 12 PM)', price: '₹400', unit: 'per hour' },
          { time: 'Afternoon (12 PM - 5 PM)', price: '₹300', unit: 'per hour' },
          { time: 'Evening (5 PM - 10 PM)', price: '₹500', unit: 'per hour' },
        ],
        features: [
          'Single net access',
          'Bowling machine available',
          'Quality cricket balls',
          'Floodlights included',
        ],
      },
      {
        sport: '5-a-Side Football',
        icon: '⚽',
        popular: true,
        rates: [
          { time: 'Morning (6 AM - 12 PM)', price: '₹1,200', unit: 'per hour' },
          { time: 'Afternoon (12 PM - 5 PM)', price: '₹1,000', unit: 'per hour' },
          { time: 'Evening (5 PM - 10 PM)', price: '₹1,500', unit: 'per hour' },
        ],
        features: [
          'Half-pitch access',
          'Professional footballs',
          'Bibs & markers',
          'Floodlights included',
        ],
      },
      {
        sport: 'Full Pitch',
        icon: '🏟️',
        popular: false,
        rates: [
          { time: 'Morning (6 AM - 12 PM)', price: '₹2,000', unit: 'per hour' },
          { time: 'Afternoon (12 PM - 5 PM)', price: '₹1,800', unit: 'per hour' },
          { time: 'Evening (5 PM - 10 PM)', price: '₹2,500', unit: 'per hour' },
        ],
        features: [
          'Full pitch access',
          'Professional footballs',
          'Bibs & markers',
          'Floodlights included',
        ],
      },
    ],
    groupPackage: {
      title: 'Group Packages',
      description: 'Book 10 hours, get 1 free. Valid for 3 months. Perfect for regular teams.',
      cta: 'Ask about packages',
    },
  },

  location: {
    overline: 'EASY TO REACH',
    headline: 'Find Us in Chennai.',
    subtext: 'Conveniently located with easy access from OMR, ECR, and city centre. Free parking available.',
    address: {
      line1: 'Turf சென்னை Sports Arena',
      line2: 'OMR Road, Thoraipakkam',
      line3: 'Chennai, Tamil Nadu 600097',
    },
    landmarks: [
      'Near Phoenix Marketcity',
      '5 min from Thoraipakkam Signal',
      'Opposite to RMZ Millenia',
    ],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAyJzAwLjAiTiA4MMKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890',
    ctaDirections: 'Get Directions →',
  },

  socialProof: {
    overline: 'JOIN THE COMMUNITY',
    headline: 'Where Chennai Plays.',
    subtext: 'Over 50 teams book with us weekly. From weekend warriors to serious athletes, everyone plays here.',
    testimonials: [
      {
        quote: 'Best turf in Chennai. Floodlights are amazing, turf quality is consistent. We book every Sunday for our cricket practice.',
        author: 'Ramesh K.',
        role: 'Weekend Cricket Team',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
      },
      {
        quote: 'Finally found a place with proper booking system. WhatsApp confirmation is instant. No more calling and waiting.',
        author: 'Priya S.',
        role: 'Football Enthusiast',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
      },
      {
        quote: 'Great facility, friendly staff, fair pricing. The changing rooms are clean and parking is hassle-free.',
        author: 'Vijay M.',
        role: 'Regular Player',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
      },
    ],
    actionImages: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=600&q=80',
      'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?auto=format&fit=crop&w=600&q=80',
    ],
    stats: [
      { value: '50+', label: 'Weekly Bookings' },
      { value: '4.9★', label: 'Google Rating' },
      { value: '200+', label: 'Happy Players' },
    ],
  },

  contact: {
    overline: 'QUESTIONS? BOOK NOW.',
    headline: 'Call, WhatsApp, or Book Online.',
    subtext: "We're here 6 AM to 10 PM, every day. Get instant responses on WhatsApp or call us directly.",
    methods: [
      {
        icon: 'Phone',
        title: 'Call Us',
        value: '7550291233',
        link: 'tel:7550291233',
        description: 'Available 6 AM - 10 PM',
      },
      {
        icon: 'MessageCircle',
        title: 'WhatsApp',
        value: '7550291233',
        link: 'https://wa.me/917550291233',
        description: 'Instant booking confirmation',
      },
      {
        icon: 'Mail',
        title: 'Email',
        value: 'turfChennai@gmail.com',
        link: 'mailto:turfChennai@gmail.com',
        description: 'For group bookings & packages',
      },
    ],
    hours: {
      title: 'Operating Hours',
      schedule: [
        { day: 'Monday - Sunday', time: '6:00 AM - 10:00 PM' },
      ],
      note: 'Open all 365 days. Last booking at 9 PM.',
    },
  },

  footer: {
    tagline: "Chennai's Premier Sports Turf",
    description: 'Professional-grade facilities for cricket and football. Book instantly, play today.',
    social: [
      { platform: 'Instagram', url: 'https://instagram.com/turfchennai', icon: 'Instagram' },
      { platform: 'Facebook', url: 'https://facebook.com/turfchennai', icon: 'Facebook' },
      { platform: 'WhatsApp', url: 'https://wa.me/917550291233', icon: 'MessageCircle' },
    ],
    links: {
      quickLinks: [
        { label: 'Book Now', href: '#booking' },
        { label: 'Pricing', href: '#pricing' },
        { label: 'Facilities', href: '#facilities' },
        { label: 'Location', href: '#location' },
      ],
      contact: [
        { label: '7550291233', href: 'tel:7550291233' },
        { label: 'turfChennai@gmail.com', href: 'mailto:turfChennai@gmail.com' },
        { label: 'OMR Road, Thoraipakkam', href: '#location' },
      ],
    },
    legal: {
      copyright: '© 2024 Turf சென்னை. All rights reserved.',
      builtWith: 'Built with ❤️ in Chennai',
    },
  },
};

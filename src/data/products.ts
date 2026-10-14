export interface Product {
  id: string;
  name: string;
  category: 'headphone' | 'neckband' | 'airbuds' | 'handsfree';
  tagline: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  accentColor: 'pink' | 'cyan' | 'purple' | 'orange';
  badge?: string;
  specs: {
    batteryLife: string;
    driver: string;
    frequency: string;
    latency: string;
    connectivity: string;
    noiseControl: string;
  };
  features: string[];
  description: string;
  colors: { name: string; hex: string }[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'cyber-overdrive-pro-x',
    name: 'CyberOverDrive Pro X',
    category: 'headphone',
    tagline: '50mm Planar-Magnetic Studio Over-Ear with Cyberpunk Ambient Ring',
    price: 349,
    originalPrice: 429,
    rating: 4.9,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'pink',
    badge: 'FLAGSHIP SELLER',
    specs: {
      batteryLife: '65 Hours (ANC On)',
      driver: '50mm Custom Planar Magnetic',
      frequency: '5Hz - 48,000Hz',
      latency: '24ms Ultra-Low Gaming Mode',
      connectivity: 'Bluetooth 5.4 + LDAC + 3.5mm Analog',
      noiseControl: 'Hybrid Active Noise Cancelling (-45dB)',
    },
    features: [
      'Aero-grade aluminum suspension headband',
      'Dual neon mood glow earcups with reactive EQ pulse',
      'Lossless 24-bit/96kHz wireless transmission',
      'Memory foam cooling gel ear pads',
    ],
    description:
      'The definitive synthwave listening machine. Featuring dual planar magnetic diaphragms engineered to deliver seismic sub-bass and crystalline synthesizer highs without a trace of harmonic distortion.',
    colors: [
      { name: 'Neon Magenta', hex: '#ff2a85' },
      { name: 'Obsidian Black', hex: '#111827' },
      { name: 'Cyber Cyan', hex: '#06b6d4' },
    ],
  },
  {
    id: 'neonpulse-studio-800',
    name: 'NeonPulse Studio 800',
    category: 'headphone',
    tagline: 'Reference Open-Back Headphones with Beryllium Drivers',
    price: 289,
    originalPrice: 320,
    rating: 4.8,
    reviewsCount: 89,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'purple',
    badge: 'STUDIO GRADE',
    specs: {
      batteryLife: '55 Hours Playback',
      driver: '45mm Pure Beryllium Foil',
      frequency: '8Hz - 42,000Hz',
      latency: '30ms Direct Link',
      connectivity: 'Bluetooth 5.4 + aptX Lossless',
      noiseControl: 'Passive Acoustic Isolation Chamber',
    },
    features: [
      'Acoustic honeycomb rear venting',
      'Replaceable velour magnetic ear cushions',
      'Dedicated physical retro rotary volume dial',
      'Quad beamforming ENC mics for studio comms',
    ],
    description:
      'Tuned specifically for analog synthesizer tracks, synth-pop, and deep electronic soundscapes. An expansive, panoramic soundstage that places you in the driver seat of a midnight cruiser.',
    colors: [
      { name: 'Deep Purple', hex: '#8b5cf6' },
      { name: 'Sunset Chrome', hex: '#f59e0b' },
    ],
  },
  {
    id: 'vaporbass-horizon-anc',
    name: 'VaporBass Horizon ANC',
    category: 'headphone',
    tagline: 'Deep Sub-bass Tuning with Intelligent Wind-Noise Deflector',
    price: 219,
    originalPrice: 260,
    rating: 4.7,
    reviewsCount: 116,
    image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'orange',
    specs: {
      batteryLife: '72 Hours Monster Pack',
      driver: '40mm Titanium-Coated Dynamic',
      frequency: '10Hz - 40,000Hz',
      latency: '35ms Game/Movie Sync',
      connectivity: 'Bluetooth 5.3 + Multi-Point Pairing',
      noiseControl: 'Triple-Mic Smart ANC (-42dB)',
    },
    features: [
      'Sub-bass haptic immersion motor',
      'Foldable swiveling magnesium frame',
      'Fast charge: 10 mins yields 8 hours',
      'Vaporwave gradient touch-control panel',
    ],
    description:
      'Built for bass lovers who want to physically feel the 808 drop and the rhythmic pulse of neon city drives. Extreme stamina with 72 hours of uninterrupted battery life.',
    colors: [
      { name: 'Solar Amber', hex: '#f97316' },
      { name: 'Midnight Purple', hex: '#6366f1' },
    ],
  },
  {
    id: 'synthromagnet-200',
    name: 'SynthroMagnetic 200',
    category: 'neckband',
    tagline: 'Titanium Memory-Wire Ergonomic Neckband with Magnetic Clasp',
    price: 119,
    originalPrice: 149,
    rating: 4.8,
    reviewsCount: 78,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'cyan',
    badge: 'BEST FOR ACTIVE',
    specs: {
      batteryLife: '42 Hours Continuous Play',
      driver: '12mm Dual-Chamber Neodymium',
      frequency: '15Hz - 32,000Hz',
      latency: '40ms Quick-Response',
      connectivity: 'Bluetooth 5.3 + AAC / SBC',
      noiseControl: 'CVC 8.0 Dual-Mic Noise Reduction',
    },
    features: [
      'Liquid silicone skin-friendly neckband',
      'Auto-pause upon magnetic earbud contact',
      'IPX7 sweat and coastal rainproof certification',
      'Integrated neon cyan vibration alert motor',
    ],
    description:
      'Zero-slip comfort for nocturnal joggers and highway riders. Contoured memory titanium wire rests weightlessly across the collarbone while locking in punchy bass and crystalline vocals.',
    colors: [
      { name: 'Electric Cyan', hex: '#06b6d4' },
      { name: 'Neon Fuchsia', hex: '#f43f5e' },
      { name: 'Midnight Jet', hex: '#1f2937' },
    ],
  },
  {
    id: 'nightrider-flex-titanium',
    name: 'NightRider Flex Titanium',
    category: 'neckband',
    tagline: 'High-Impact Sports Neckband with Reflective Synthwave Weave',
    price: 139,
    originalPrice: 169,
    rating: 4.9,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'pink',
    specs: {
      batteryLife: '48 Hours (Fast Charge USB-C)',
      driver: '13.6mm Bio-Cellulose Composite',
      frequency: '12Hz - 35,000Hz',
      latency: '32ms Ultra-Stable',
      connectivity: 'Bluetooth 5.4 + Hi-Res Wireless',
      noiseControl: 'Dual Feed-Forward Active Noise Filter',
    },
    features: [
      'Reflective neon safety strip for night running',
      'Tactile click mechanical playback buttons',
      'Gold-plated magnetic clasp contacts',
      'Extreme durability aircraft-grade titanium core',
    ],
    description:
      'Engineered for maximum endurance under high velocity. Whether hitting the pavement or cruising under city streetlights, the NightRider Flex delivers pure acoustic adrenaline.',
    colors: [
      { name: 'Hot Pink Glow', hex: '#ff2a85' },
      { name: 'Stealth Carbon', hex: '#1e1b4b' },
    ],
  },
  {
    id: 'aurapods-cyber-edition',
    name: 'AuraPods Cyber Edition',
    category: 'airbuds',
    tagline: 'True Wireless In-Ear with Transparent Cyberpunk Charging Pod',
    price: 179,
    originalPrice: 219,
    rating: 4.9,
    reviewsCount: 203,
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'pink',
    badge: 'HOTTEST DROP',
    specs: {
      batteryLife: '9h Buds + 36h Charging Case',
      driver: '11mm Graphene High-Excursion',
      frequency: '10Hz - 40,000Hz',
      latency: '22ms Pro Esports Mode',
      connectivity: 'Bluetooth 5.4 + Qi Wireless Charging',
      noiseControl: 'Adaptive Hybrid ANC (-48dB)',
    },
    features: [
      'See-through tinted smoked-acrylic case with glowing battery diodes',
      'Full 360-degree spatial audio tracking',
      'Pressure-sensitive stem touch controls',
      'IPX5 water and sweat resistance',
    ],
    description:
      'Futuristic aesthetics meet surgical acoustic precision. The see-through case exposes neon circuit traces and an internal battery bar that breathes in sync with your music charging cycle.',
    colors: [
      { name: 'Cyber Violet', hex: '#a855f7' },
      { name: 'Neon Sun', hex: '#f59e0b' },
      { name: 'Glitch Cyan', hex: '#06b6d4' },
    ],
  },
  {
    id: 'neonbuds-pro-active',
    name: 'NeonBuds Pro Active',
    category: 'airbuds',
    tagline: 'Ultra-Compact Ergonomic Wireless Buds with Soundstage EQ',
    price: 149,
    originalPrice: 179,
    rating: 4.7,
    reviewsCount: 94,
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'cyan',
    specs: {
      batteryLife: '8h Buds + 28h Case',
      driver: '10mm DLC (Diamond-Like Carbon)',
      frequency: '15Hz - 38,000Hz',
      latency: '28ms Direct Link',
      connectivity: 'Bluetooth 5.3 + AAC',
      noiseControl: 'Environment Awareness Transparency Mode',
    },
    features: [
      'Featherweight 4.1g per earbud design',
      'Dual mic environmental beamforming for clear calls',
      'Companion app with 10-band retro equalizer presets',
      'Touch capacitive volume glide',
    ],
    description:
      'Discreet in size, monumental in acoustic impact. The Diamond-Like Carbon diaphragm generates ultra-fast transient responses so snare hits and synth arpeggios hit with razor clarity.',
    colors: [
      { name: 'Laser Cyan', hex: '#06b6d4' },
      { name: 'Synth Magenta', hex: '#ec4899' },
    ],
  },
  {
    id: 'streetsonic-retro-cabled',
    name: 'StreetSonic Retro Cabled',
    category: 'handsfree',
    tagline: 'Silver-Plated Braided Handsfree IEM with In-Line Mic & DAC',
    price: 79,
    originalPrice: 99,
    rating: 4.8,
    reviewsCount: 135,
    image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'purple',
    badge: 'AUDIOPHILE ZERO-LAG',
    specs: {
      batteryLife: 'Passive (Unlimited Zero-Charge)',
      driver: '10mm Dynamic + Knowles Balanced Armature',
      frequency: '5Hz - 45,000Hz',
      latency: '0ms Zero Latency Analog',
      connectivity: '3.5mm Gold Plated + USB-C Hi-Fi DAC Dongle',
      noiseControl: 'High-Density Memory Foam Ear-Tips (-26dB Passive)',
    },
    features: [
      'Detachable 2-pin 0.78mm custom braided cable',
      'Aviation aluminum housing with synthwave wave engraving',
      'MEMS studio-grade broadcast in-line microphone',
      'Included USB-C 32-bit/384kHz hardware DAC dongle',
    ],
    description:
      'For purists who demand zero latency, zero battery anxiety, and genuine analog warmth. Dual-driver hybrid architecture fuses a deep dynamic bass driver with a balanced armature for micro-detail.',
    colors: [
      { name: 'Neon Purple Silver', hex: '#8b5cf6' },
      { name: 'Laser Pink Copper', hex: '#ec4899' },
    ],
  },
  {
    id: 'laserline-studio-in-ear',
    name: 'LaserLine Studio Handsfree',
    category: 'handsfree',
    tagline: 'Heavy-Duty Kevlar Reinforced Handsfree with Analog Volume Slider',
    price: 59,
    originalPrice: 75,
    rating: 4.7,
    reviewsCount: 82,
    image: 'https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=1000&auto=format&fit=crop',
    accentColor: 'orange',
    specs: {
      batteryLife: 'Passive (Battery-Free Operation)',
      driver: '9.2mm Carbon Nanotube Diaphragm',
      frequency: '10Hz - 40,000Hz',
      latency: '0ms True Instantaneous',
      connectivity: '3.5mm L-Shaped Reinforced Plug',
      noiseControl: 'Deep Insert Ergonomic Isolation',
    },
    features: [
      'Retro physical slider volume control (no digital stepping)',
      'Tangle-free neon ribbed reflective cable jacket',
      'Gold-plated 4-pole TRRS microphone connection',
      'Solid CNC zinc-alloy acoustic chambers',
    ],
    description:
      'Rugged, vintage-tactile cabled handsfree built to withstand life on the road. Features an authentic physical potentiometer slide switch for buttery smooth analog volume attenuation.',
    colors: [
      { name: 'Sunset Amber', hex: '#f59e0b' },
      { name: 'Cyberpunk Black', hex: '#18181b' },
    ],
  },
];

export const CATEGORIES = [
  { id: 'all', name: 'All Devices', icon: 'Sparkles' },
  { id: 'headphone', name: 'Headphones', icon: 'Headphones' },
  { id: 'neckband', name: 'Neckbands', icon: 'Activity' },
  { id: 'airbuds', name: 'Airbuds', icon: 'Radio' },
  { id: 'handsfree', name: 'Handsfree', icon: 'Cable' },
];

export const REVIEWS = [
  {
    id: 'rev-1',
    author: 'Kaelen Vance',
    role: 'Synthwave Producer & Sound Designer, Neo-Tokyo',
    rating: 5,
    product: 'CyberOverDrive Pro X',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop',
    comment:
      'The planar magnetic resolution on the CyberOverDrive Pro X is astonishing. The low-end synth bass sits tight without masking the delicate analog chorus on lead poly-synths. It feels like wearing high-art hardware in a 1980s neon dream.',
    date: 'Verified Buyer · October 2026',
  },
  {
    id: 'rev-2',
    author: 'Maya Lin',
    role: 'Night Runner & Cyberpunk Illustrator',
    rating: 5,
    product: 'NightRider Flex Titanium',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop',
    comment:
      'Finally a neckband that doesn’t bounce or slip during high-speed runs along the coastal boardwalk! The reflective neon weave glows vividly under streetlights, and the battery lasts an entire week between charges.',
    date: 'Verified Buyer · September 2026',
  },
  {
    id: 'rev-3',
    author: 'Darius "Hex" Thorne',
    role: 'Competitive Sim Racer & Audiophile',
    rating: 5,
    product: 'AuraPods Cyber Edition',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop',
    comment:
      'Zero audio lag in 22ms esports mode. Spatial imaging is so accurate I can pinpoint rival engine revs down to the inch. Plus, the see-through illuminated charging case is pure retro-futurism eye candy.',
    date: 'Verified Buyer · October 2026',
  },
  {
    id: 'rev-4',
    author: 'Elena Rostova',
    role: 'Recording Engineer & Vinyl Archivist',
    rating: 5,
    product: 'StreetSonic Retro Cabled',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=300&auto=format&fit=crop',
    comment:
      'The included hardware DAC with the StreetSonic wired set delivers clean, uncompressed master dynamics. Zero latency, rich midrange resonance, and beautiful metal hardware that will outlast any disposable plastic earbud.',
    date: 'Verified Buyer · August 2026',
  },
];

export const FAQS = [
  {
    question: 'How fast is worldwide shipping and how can I track my package?',
    answer:
      'We dispatch all orders within 24 hours from our regional fulfillment centers in Tokyo, Frankfurt, and San Francisco. Domestic US and EU delivery takes 2 to 4 business days. International express takes 4 to 6 business days. You will receive an instant neon tracking link with real-time GPS telemetry once your package leaves our dock.',
  },
  {
    question: 'What is covered under the 3-Year NeonCare™ Manufacturer Warranty?',
    answer:
      'Every NeonWave device includes comprehensive 36-month coverage against driver degradation, battery capacity drops below 80%, Bluetooth transceiver issues, and structural defects. If your gear ever malfunctions under normal usage, we swap it out with a brand-new unit with expedited return shipping prepaid.',
  },
  {
    question: 'Can I connect these devices to multiple audio sources simultaneously?',
    answer:
      'Yes! All our wireless headphones, neckbands, and airbuds feature Bluetooth 5.3/5.4 Multipoint pairing. You can seamlessly stream music or podcasts from your laptop and automatically take incoming voice calls on your smartphone without manual re-pairing.',
  },
  {
    question: 'What is the 30-Day "Sonic Drift" trial and return policy?',
    answer:
      'We believe you should audition your sound gear in your own sanctuary. Enjoy your NeonWave hardware for 30 full days. If the sound profile or fit does not ignite your musical soul, return it in original condition for a 100% full refund with complimentary return postage.',
  },
  {
    question: 'Is there an equalizer companion app for customized sound profiles?',
    answer:
      'Yes, the NeonWave Companion App is available for iOS, Android, macOS, and Windows. It features 10 curated synthwave acoustic curves (e.g. "80s Neon Sunset", "Club Cyber Sub", "Vocal Horizon", "Pristine Studio Flat") plus an unrestricted 10-band parametric EQ and custom LED ring animation controls.',
  },
];

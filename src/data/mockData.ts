import heroImg from '../assets/images/hero_smart_pet_1787674434036.jpg';
import feederImg from '../assets/images/smart_feeder_pro_1787674521502.jpg';
import litterImg from '../assets/images/smart_litter_box_1787674539626.jpg';
import fountainImg from '../assets/images/smart_fountain_pro_1787674555769.jpg';
import cameraImg from '../assets/images/smart_pet_camera_1787674572898.jpg';
import { Product, Category, Review, Expert, BlogPost, ResponsiblePersonInfo, ComplianceCertificate } from '../types';

export { heroImg, feederImg, litterImg, fountainImg, cameraImg };

export const CATEGORIES: Category[] = [
  {
    id: 'smart-feeders',
    name: 'Smart Pet Feeders',
    slug: 'smart-feeders',
    description: 'Timed, portion-controlled, and camera-equipped automatic feeders designed for clinical gastric health.',
    image: feederImg,
    count: 6,
    tldr: 'Automated meal dispensers with anti-jam rotors, airtight fresh seals, and iOS/Android cloud app control to prevent pet obesity and gastric bloat.'
  },
  {
    id: 'water-fountains',
    name: 'Smart Water Fountains',
    slug: 'water-fountains',
    description: 'Medical-grade 304 stainless steel fountains with wireless magnetic induction and 4-stage quad filtration.',
    image: fountainImg,
    count: 4,
    tldr: 'Quiet flowing fountains engineered to encourage 35% higher daily feline and canine hydration, preventing chronic kidney disease (CKD).'
  },
  {
    id: 'self-cleaning-litter-boxes',
    name: 'Self-Cleaning Litter Boxes',
    slug: 'self-cleaning-litter-boxes',
    description: 'Whisper-quiet robotic cat litter systems with millimeter-wave anti-pinch safety and multi-cat health telemetry.',
    image: litterImg,
    count: 3,
    tldr: 'Zero-odor automated litter sifting with integrated weight scale, visit frequency tracker, and 15-day waste drawer for effortless multi-cat homes.'
  },
  {
    id: 'pet-cameras',
    name: 'Pet Cameras & Treat Tossers',
    slug: 'pet-cameras',
    description: '2K QHD 360° AI tracking cameras with dual-band 5G Wi-Fi, two-way audio, and remote treat dispenser.',
    image: cameraImg,
    count: 4,
    tldr: 'Real-time pet monitoring with AI bark/meow detection, night vision, and interactive treat tossing to reduce separation anxiety.'
  },
  {
    id: 'gps-trackers',
    name: 'Smart GPS Trackers & Collars',
    slug: 'gps-trackers',
    description: 'Sub-second real-time GPS & 4G LTE waterproof pet collars with zero mandatory subscription barrier and activity rings.',
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&auto=format&fit=crop&q=80',
    count: 3,
    tldr: 'IP68 waterproof active location tracking with escape boundary geofencing, thermal alerts, and daily caloric burn metrics.'
  },
  {
    id: 'smart-toys',
    name: 'Interactive Smart Toys',
    slug: 'smart-toys',
    description: 'Autonomous AI bouncing balls, laser chasers, and treat-stimulating puzzle robots with anti-collision sensors.',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=800&auto=format&fit=crop&q=80',
    count: 5,
    tldr: 'Smart responsive play companions that automatically activate when your pet approaches, curbing boredom and destructive behavior.'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'petora-vision-pro-feeder',
    name: 'Petora Vision Pro™ AI Camera Pet Feeder',
    slug: 'petora-vision-pro-feeder',
    subtitle: '2K AI Night Vision · Dual Hopper 5L · Quad Fresh-Lock · Anti-Jam Anti-Pinch',
    category: 'smart-feeders',
    categoryName: 'Smart Pet Feeders',
    price: 139.99,
    comparePrice: 179.99,
    b2bPriceTiers: [
      { minUnits: 50, pricePerUnit: 52.00, leadTimeDays: 14 },
      { minUnits: 200, pricePerUnit: 44.50, leadTimeDays: 20 },
      { minUnits: 1000, pricePerUnit: 37.80, leadTimeDays: 28 },
    ],
    rating: 4.9,
    reviewsCount: 428,
    image: feederImg,
    gallery: [
      feederImg,
      'https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'Bestseller',
    description: 'The Petora Vision Pro™ is the apex of smart feeding technology. Engineered with a medical-grade 304 stainless steel food tray, dual food hoppers with independent portion rotors, and an ultra-wide 2K HDR camera with two-way voice communication. Keep your pets fed on schedule, monitor their eating posture, and receive instant phone notifications if the bowl is not emptied.',
    features: [
      'Built-in 2K HDR AI Camera with 145° wide angle and auto night vision',
      'Patented Quad Fresh-Lock with silicone desiccant seal and auto-reclosing dispensing door',
      'Dual hoppers (2.5L + 2.5L) for customized kibble mixing & freeze-dried treats up to 16mm',
      'Two-way real-time audio with custom 10-second personalized meal call recording',
      'Dual Power Guard: USB-C direct input + 4x D-Cell alkaline battery backup lasting 180 days',
      'Anti-Pinch IR sensors and reverse-spin auto-clear torque motor prevent food jams 100%'
    ],
    specs: {
      'Capacity': '5.0 Liters (Approx. 20 cups / 2.2kg kibble)',
      'Camera Resolution': '2K QHD (2304 x 1296) with 3D DNR & IR Night Vision',
      'Food Size Compatibility': '2mm to 16mm (Dry kibble, air-dried, freeze-dried)',
      'Connectivity': 'Dual-Band 2.4GHz / 5.0GHz Wi-Fi + Bluetooth 5.2 Low Energy',
      'Material': 'BPA-Free Food Grade ABS + SUS304 Stainless Steel Bowl',
      'Dimensions': '340 x 190 x 365 mm (13.4 x 7.5 x 14.4 in)',
      'Weight': '2.65 kg (5.84 lbs)',
      'Power Supply': '5V/2A DC Adapter + 4x D Battery Backup (Not included)',
      'App Support': 'iOS 13.0+ / Android 8.0+ (Petora Cloud IoT, Alexa / Google Assistant ready)'
    },
    b2bSpecs: {
      moq: 50,
      cartonQty: 4,
      cartonDimensions: '610 x 410 x 400 mm',
      grossWeight: '12.8 kg / Carton',
      certifications: ['FCC ID', 'CE-RED', 'RoHS 2.0', 'FDA / LFGB Food Contact', 'Prop65', 'UKCA'],
      hsCode: '8509.80.9000',
      customization: ['Silk-screen Logo (MOQ 100)', 'Custom Packaging Gift Box (MOQ 500)', 'White-label OEM App SDK (MOQ 1000)']
    },
    inTheBox: [
      '1x Petora Vision Pro™ Feeder Base & 5L Dual Hopper',
      '1x 304 Stainless Steel Bowl with Anti-Spill Stand',
      '1x 5V/2A USB-C Power Adapter (US/EU/UK plug compatible)',
      '1x Anti-Bite Braided Nylon Power Cord (1.8m / 6ft)',
      '2x Silica Gel Moisture Desiccant Bags',
      '1x Multilingual Quick Start & Warranty Guide'
    ],
    colors: [
      { name: 'Arctic Matte White', hex: '#F8F9FA' },
      { name: 'Forest Sage Green', hex: '#2A4A3E' },
      { name: 'Obsidian Shadow', hex: '#212529' }
    ],
    capacities: ['5.0L Dual Hopper', '3.5L Single Hopper'],
    connectivity: ['2K AI Camera + Wi-Fi', 'Wi-Fi App Only (No Cam)'],
    clinicalNotes: 'Endorsed by American Association of Feline Practitioners (AAFP) guideline compliance for precision micro-portioning (5g-100g per meal), clinically proven to reduce regurgitation in fast-eating pets.',
    inStock: true
  },
  {
    id: 'petora-whisper-clean-litter',
    name: 'Petora WhisperClean™ Smart Self-Cleaning Litter Box',
    slug: 'petora-whisper-clean-litter',
    subtitle: '65L Massive Drum · Millimeter-Wave Anti-Pinch · Multi-Cat Health & Weight Telemetry',
    category: 'self-cleaning-litter-boxes',
    categoryName: 'Self-Cleaning Litter Boxes',
    price: 389.99,
    comparePrice: 499.99,
    b2bPriceTiers: [
      { minUnits: 20, pricePerUnit: 175.00, leadTimeDays: 18 },
      { minUnits: 100, pricePerUnit: 148.00, leadTimeDays: 25 },
      { minUnits: 500, pricePerUnit: 128.00, leadTimeDays: 35 },
    ],
    rating: 4.8,
    reviewsCount: 312,
    image: litterImg,
    gallery: [
      litterImg,
      'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'Vet-Choice',
    description: 'Say goodbye to daily scooping forever. The Petora WhisperClean™ delivers open-drum ergonomics that cats naturally trust, coupled with 10-layer triple-redundancy safety sensors. Its ultra-quiet planetary gear runs at <32dB, while the ionic deodorization system and sealed 10L waste bin keep your home 100% odor-free for up to 15 days.',
    features: [
      '65L spacious interior drum accommodates cats from 2.5 lbs to 24 lbs',
      '10-Layer Safety Shield: 4 weight sensors, 2 IR curtain sensors, 1 microwave radar, anti-pinch motor current feedback',
      'Dynamic multi-cat health profiling: logs individual cat weight, visit duration, and daily frequency',
      'Plasma Ionic Air Purifier + Ozone deodorizer eliminates 99.2% of ammonia odors without chemical fragrances',
      'Compatible with all clumping litters (Bentonite, Tofu, Mixed, Crushed Cassava)',
      '10L extra-large waste drawer lasts up to 15 days for a single adult cat'
    ],
    specs: {
      'Drum Capacity': '65 Liters (Interior volume)',
      'Waste Drawer Capacity': '10 Liters (12-15 days for 1 cat)',
      'Cat Weight Range': '1.1 kg to 11.0 kg (2.4 lbs to 24.2 lbs)',
      'Noise Level': '< 32 dB (Whisper quiet planetary rotation)',
      'Sensors': '4x High-Precision Load Cell + Microwave Radar + Dual Hall Anti-Pinch',
      'Deodorization': 'Active Plasma Ionizer + Carbon Flap Trap',
      'Dimensions': '520 x 530 x 555 mm (20.5 x 20.9 x 21.8 in)',
      'Gross Weight': '11.5 kg (25.3 lbs)',
      'Power': '12V / 2A (Low energy 18W max consumption)'
    },
    b2bSpecs: {
      moq: 20,
      cartonQty: 1,
      cartonDimensions: '580 x 570 x 600 mm',
      grossWeight: '13.5 kg / Unit',
      certifications: ['FCC', 'CE-LVD/EMC', 'RoHS', 'CB Report', 'PSE', 'Prop65'],
      hsCode: '8479.89.9990',
      customization: ['Custom Top Panel Decal (MOQ 50)', 'Retail Color Packaging (MOQ 200)', 'Custom App UI Integration (MOQ 500)']
    },
    inTheBox: [
      '1x Petora WhisperClean™ Main Body & 65L Rotating Drum',
      '1x Honeycomb Cat Litter Trapper Mat (Double-Layer)',
      '2x Rolls Heavy-Duty Custom Drawstring Waste Liners (40 bags)',
      '1x 12V Global Universal Power Supply with 2.5m Cable',
      '1x User Manual & Veterinary Introduction Guide'
    ],
    colors: [
      { name: 'Warm Cream White', hex: '#F6F4EE' },
      { name: 'Titanium Graphite', hex: '#343A40' }
    ],
    capacities: ['65L Standard'],
    connectivity: ['Wi-Fi 2.4G Cloud IoT'],
    clinicalNotes: 'Monitors early signs of feline lower urinary tract disease (FLUTD) by alerting owners to increased frequency or prolonged straining in real time.',
    inStock: true
  },
  {
    id: 'petora-pure-flow-stainless-fountain',
    name: 'Petora PureFlow™ Ultra-Quiet Stainless Pet Fountain',
    slug: 'petora-pure-flow-stainless-fountain',
    subtitle: 'SUS304 Food Grade · Wireless Inductive Pump · Quad Filtration · Smart LED Water Alert',
    category: 'water-fountains',
    categoryName: 'Smart Water Fountains',
    price: 49.99,
    comparePrice: 69.99,
    b2bPriceTiers: [
      { minUnits: 100, pricePerUnit: 18.50, leadTimeDays: 10 },
      { minUnits: 500, pricePerUnit: 14.80, leadTimeDays: 16 },
      { minUnits: 2000, pricePerUnit: 12.20, leadTimeDays: 24 },
    ],
    rating: 4.9,
    reviewsCount: 560,
    image: fountainImg,
    gallery: [
      fountainImg,
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'OEM Popular',
    description: 'Designed in consultation with feline nephrologists. The Petora PureFlow™ utilizes heavy-gauge medical SUS304 stainless steel that prevents chin acne (folliculitis) caused by plastic bowls. Its magnetic wireless water pump operates submerged without submerged electrical wires, allowing instant dishwasher cleaning in seconds.',
    features: [
      '100% Medical-Grade SUS304 Stainless Steel top tray and water tank',
      'Wireless Magnetic Induction Pump: zero wires in water tank for supreme safety & effortless washing',
      'Sub-20dB Whisper Flow with biological spring aeration mimicking natural running stream',
      '4-Stage Quad Filtration: High-density cotton mesh, coconut shell activated carbon, ion-exchange resin, KDF55',
      'Smart LED ring indicator: Blue (Normal), Red blinking (Low water auto shut-off protection)',
      'Emergency 120ml top reserve lid provides emergency water during unexpected power outages'
    ],
    specs: {
      'Water Capacity': '3.2 Liters / 108 fl oz (Lasts 7-10 days for 2 cats)',
      'Pump Type': 'Wireless Magnetic Inductive (IPX8 Waterproof)',
      'Noise Level': '18 dB (Virtually inaudible)',
      'Power Source': '5V/1A USB-C Cable + Low Voltage Induction Base',
      'Filtration Lifespan': '30 Days per filter cartridge',
      'Material': 'Food-Grade SUS304 Stainless Steel (Dishwasher Safe)',
      'Dimensions': '225 x 225 x 155 mm (8.8 x 8.8 x 6.1 in)',
      'Weight': '1.05 kg (2.31 lbs)'
    },
    b2bSpecs: {
      moq: 100,
      cartonQty: 8,
      cartonDimensions: '480 x 480 x 340 mm',
      grossWeight: '9.8 kg / Carton',
      certifications: ['CE', 'FCC', 'RoHS', 'FDA Food Contact Safe', 'BPA Free Report'],
      hsCode: '8413.70.9000',
      customization: ['Laser Etched Logo (MOQ 100)', 'Custom Color Powder Coating (MOQ 500)', 'Retail Filter 4-Pack Bundle Box (MOQ 300)']
    },
    inTheBox: [
      '1x SUS304 Stainless Steel Water Basin (3.2L)',
      '1x SUS304 Drinking Top Tray',
      '1x Wireless Magnetic Induction Water Pump',
      '3x Replacement Quad-Action Filter Cartridges',
      '1x USB-C Power Cord & Anti-Chew Silicone Sleeve',
      '1x Cleaning Brush Kit'
    ],
    colors: [
      { name: 'Brushed Silver Stainless', hex: '#D8D8D8' },
      { name: 'Matte Forest Emerald', hex: '#1C382B' }
    ],
    capacities: ['3.2L Family Size', '2.0L Compact'],
    connectivity: ['Standard Auto Flow', 'Smart Bluetooth App Sync'],
    clinicalNotes: 'Increases feline water intake by up to 38% compared to still bowls, significantly decreasing risks of urinary crystals, struvite stones, and renal failure.',
    inStock: true
  },
  {
    id: 'petora-nanny-cam-treat-tosser',
    name: 'Petora NannyCam™ 360° AI Pet Camera & Treat Tosser',
    slug: 'petora-nanny-cam-treat-tosser',
    subtitle: '360° Auto Pet Tracking · 2K HDR Night Vision · Remote Treat Toss · Two-Way Audio',
    category: 'pet-cameras',
    categoryName: 'Pet Cameras & Treat Tossers',
    price: 119.99,
    comparePrice: 159.99,
    b2bPriceTiers: [
      { minUnits: 50, pricePerUnit: 46.00, leadTimeDays: 12 },
      { minUnits: 200, pricePerUnit: 39.00, leadTimeDays: 18 },
      { minUnits: 1000, pricePerUnit: 33.50, leadTimeDays: 26 },
    ],
    rating: 4.8,
    reviewsCount: 284,
    image: cameraImg,
    gallery: [
      cameraImg,
      'https://images.unsplash.com/photo-1544568100-847a948585b9?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'New',
    description: 'Stay connected with your furry family members wherever you travel. The Petora NannyCam™ delivers 360° mechanical pan-tilt pet tracking, crystal-clear 2K HDR video, barking/meowing smart event push notifications, and a fun remote treat-tossing mechanism designed to relieve separation anxiety in lonely pets.',
    features: [
      '360° Auto Pan-Tilt Pet Tracking with AI motion detection algorithms',
      'Remote treat tossing with 3 selectable distance trajectories (1m, 2m, 3m)',
      '2K QHD video with enhanced color night vision & 4x digital zoom',
      'Smart Bark & Meow Detection with real-time push alerts to your smartphone',
      'Two-way smooth audio with noise cancellation and live video recording',
      'Cloud storage and local MicroSD card recording up to 256GB'
    ],
    specs: {
      'Camera Resolution': '2K QHD (2560 x 1440) @ 30fps',
      'Field of View': '360° Horizontal Pan, 110° Vertical Tilt',
      'Treat Capacity': '0.5 Liters (Up to 100 round treats, 8-15mm size)',
      'Audio': 'Full Duplex Two-Way Voice with Anti-Echo Microphone',
      'Night Vision': 'High-Power Infrared LEDs (Up to 10 meters / 32 ft)',
      'Connectivity': 'Dual-Band 2.4GHz / 5GHz Wi-Fi',
      'Dimensions': '135 x 135 x 240 mm (5.3 x 5.3 x 9.4 in)',
      'Weight': '0.88 kg (1.94 lbs)'
    },
    b2bSpecs: {
      moq: 50,
      cartonQty: 6,
      cartonDimensions: '450 x 310 x 270 mm',
      grossWeight: '6.5 kg / Carton',
      certifications: ['FCC Part 15B/C', 'CE-RED', 'RoHS', 'Telec', 'Prop65'],
      hsCode: '8525.80.3000',
      customization: ['Logo Laser Printing (MOQ 100)', 'OEM Color Gift Box (MOQ 500)', 'Custom App Firmware / Server Region (MOQ 1000)']
    },
    inTheBox: [
      '1x Petora NannyCam™ Treat Dispensing Unit',
      '1x Power Adapter with 2m USB-C Cable',
      '1x Bamboo Wood Anti-Slip Base Cover',
      '1x Cleaning Brush',
      '1x Quick Start Guide'
    ],
    colors: [
      { name: 'Nordic Snow White', hex: '#FFFFFF' },
      { name: 'Warm Almond Cream', hex: '#EFE9DF' }
    ],
    capacities: ['500ml Treat Hopper'],
    connectivity: ['Dual-Band 5G/2.4G Wi-Fi'],
    clinicalNotes: 'Developed with certified veterinary behaviorists (CCBC) to provide positive reinforcement and prevent canine separation anxiety pacing.',
    inStock: true
  },
  {
    id: 'petora-active-gps-collar',
    name: 'Petora ScoutLink™ 4G LTE GPS Smart Pet Collar',
    slug: 'petora-active-gps-collar',
    subtitle: 'Real-Time Live Tracking · Zero Mandatory Subscriptions · IP68 Waterproof · Health Activity Rings',
    category: 'gps-trackers',
    categoryName: 'Smart GPS Trackers & Collars',
    price: 89.99,
    comparePrice: 119.99,
    b2bPriceTiers: [
      { minUnits: 50, pricePerUnit: 34.00, leadTimeDays: 10 },
      { minUnits: 300, pricePerUnit: 29.50, leadTimeDays: 16 },
      { minUnits: 1500, pricePerUnit: 24.80, leadTimeDays: 24 },
    ],
    rating: 4.7,
    reviewsCount: 198,
    image: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'New',
    description: 'Precision cellular and satellite tracking without extortionate monthly fees. The Petora ScoutLink™ utilizes triple-constellation GPS + GLONASS + Galileo and 4G LTE-M networks to pinpoint your pet within 2 meters, delivering safe geofence escape alerts in under 3 seconds.',
    features: [
      'Live GPS Tracking with refresh rate down to 2 seconds',
      'Virtual Geofencing: instant alarm when pet exits home or yard boundary',
      'Activity & Calorie Ring Tracker (Distance, Active Minutes, Rest Quality)',
      'IP68 100% submersible waterproof casing up to 1.5m depth',
      'Rechargeable magnetic fast charging with up to 14 days standby battery',
      'Integrated LED beacon light and acoustic locating buzzer'
    ],
    specs: {
      'Positioning Systems': 'GPS / GLONASS / Galileo / BDS / Wi-Fi / LBS',
      'Cellular Bands': 'Global 4G LTE-M & NB-IoT Cat.M1',
      'Waterproof Rating': 'IP68 (Submersible up to 1.5m / 5ft for 30 min)',
      'Battery Life': 'Up to 14 days in Power Saver Mode, 4 days in Live Tracking',
      'Weight': '29 grams (Ultra lightweight for cats and dogs > 6 lbs)',
      'Dimensions': '48 x 32 x 14 mm'
    },
    b2bSpecs: {
      moq: 50,
      cartonQty: 20,
      cartonDimensions: '350 x 280 x 220 mm',
      grossWeight: '4.8 kg / Carton',
      certifications: ['FCC', 'CE-RED', 'PTCRB / AT&T / Verizon Certified', 'RoHS'],
      hsCode: '8526.91.0000',
      customization: ['Custom Collar Strap Color & Logo (MOQ 100)', 'Custom SIM Configuration (MOQ 500)']
    },
    inTheBox: [
      '1x Petora ScoutLink™ GPS Module',
      '2x Adjustable Anti-Choke Silicone Collar Clips (Small & Large)',
      '1x Reflective Nylon Collar Strap',
      '1x Magnetic USB Charging Cable',
      '1x SIM Tray Ejector & User Guide'
    ],
    colors: [
      { name: 'Safety Orange', hex: '#FF7A45' },
      { name: 'Forest Green', hex: '#0F3D2E' },
      { name: 'Reflective Neon Yellow', hex: '#D4E157' }
    ],
    capacities: ['Universal Collar Fit (6 lbs - 110 lbs)'],
    connectivity: ['4G LTE-M + Satellite GPS'],
    inStock: true
  },
  {
    id: 'petora-spin-play-interactive-ball',
    name: 'Petora RoboRoll™ AI Autonomous Interactive Pet Toy',
    slug: 'petora-spin-play-interactive-ball',
    subtitle: 'Autonomous Obstacle Avoidance · Motion Activated · Food Grade Silicone · USB-C Fast Recharge',
    category: 'smart-toys',
    categoryName: 'Interactive Smart Toys',
    price: 34.99,
    comparePrice: 45.99,
    b2bPriceTiers: [
      { minUnits: 100, pricePerUnit: 11.50, leadTimeDays: 7 },
      { minUnits: 500, pricePerUnit: 9.20, leadTimeDays: 14 },
      { minUnits: 2000, pricePerUnit: 7.80, leadTimeDays: 20 },
    ],
    rating: 4.9,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=900&auto=format&fit=crop&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=900&auto=format&fit=crop&q=80'
    ],
    tag: 'Bestseller',
    description: 'An AI-powered playmate that keeps bored pets active for hours. Features intelligent gyro motion sensing, auto-escape when tapped by paws, and 3 adaptive play modes (Gentle, Active, Crazy) wrapped in durable, bite-proof natural silicone.',
    features: [
      'Intelligent obstacle sensing rolls away from walls, furniture, and dead ends automatically',
      'Touch-Activated standby mode awakens instantly when your pet touches it with paw or nose',
      '3 Interactive Modes (Gentle Blue, Normal Green, Crazy Red)',
      'BPA-Free, non-toxic food-grade silicone casing that is gentle on pet teeth and floors',
      'Built-in RGB chase LED lights & attachable natural feather accessory',
      'USB-C Rechargeable with 4 hours of continuous active play'
    ],
    specs: {
      'Diameter': '52 mm (2.05 in) - Ideal for cats and small/medium dogs',
      'Material': 'Food Grade Silicone + High-Strength PC',
      'Battery': '300mAh Li-Po (1 hour fast charge)',
      'Weight': '74 grams'
    },
    b2bSpecs: {
      moq: 100,
      cartonQty: 40,
      cartonDimensions: '380 x 290 x 240 mm',
      grossWeight: '5.2 kg / Carton',
      certifications: ['CE', 'FCC', 'RoHS', 'MSDS UN38.3 (Battery Air Safety)'],
      hsCode: '9503.00.8900',
      customization: ['Custom Color Shell (MOQ 500)', 'Custom Gift Retail Box (MOQ 500)']
    },
    inTheBox: [
      '1x Petora RoboRoll™ Smart Ball',
      '2x Attachable Natural Feather Lures',
      '1x USB-C Fast Charging Cable',
      '1x User Manual'
    ],
    colors: [
      { name: 'Avocado Green', hex: '#4CAF50' },
      { name: 'Peach Coral', hex: '#FF7A45' },
      { name: 'Aqua Cyan', hex: '#00BCD4' }
    ],
    connectivity: ['Sensor Gyro Autonomous'],
    inStock: true
  }
];

export const EXPERTS: Expert[] = [
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins',
    title: 'Chief Veterinary Officer (CVO)',
    credentials: 'DVM, DACVIM (Internal Medicine), Cornell University',
    licenseNumber: 'NY-VET-482910',
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
    bio: 'With over 16 years of clinical companion animal internal medicine experience, Dr. Jenkins oversees all Petora product engineering protocols, ensuring every food contact surface, portion rotor algorithm, and water filter standard exceeds AAHA and FDA veterinary thresholds.',
    quote: 'Smart pet feeders and continuous hydration stations are not luxury gadgets—they are essential clinical tools that prevent the two greatest silent killers of modern pets: feline urinary blockage and canine gastric obesity.',
    specialty: 'Feline Nephrology, Gastrointestinal Health & Clinical Nutrition',
    affiliations: ['American Veterinary Medical Association (AVMA)', 'American Association of Feline Practitioners (AAFP)', 'Cornell Feline Health Center']
  },
  {
    id: 'dr-marcus-vance',
    name: 'Dr. Marcus Vance',
    title: 'Head of Animal Behavioral Science',
    credentials: 'PhD, CCBC (Certified Cat Behavioral Consultant), CPDT-KA',
    licenseNumber: 'IAABC-BC-892',
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    bio: 'Dr. Vance spent 12 years studying feline territorial stress, litter box aversion, and canine separation anxiety. He directs Petora’s ergonomic drum angles, whisper-quiet motor sound thresholds (<32dB), and two-way acoustic feedback profiles.',
    quote: 'Cats are biologically hardwired to reject noisy, confined spaces. Designing an open-entry self-cleaning drum with sub-32dB rotation is why Petora has a 99.4% feline acceptance rate within 72 hours.',
    specialty: 'Companion Animal Anxiety, Environmental Enrichment & Neophobia Prevention',
    affiliations: ['International Association of Animal Behavior Consultants (IAABC)', 'Association of Professional Dog Trainers (APDT)']
  },
  {
    id: 'dr-elena-rostova',
    name: 'Dr. Elena Rostova',
    title: 'Senior Clinical Research Associate',
    credentials: 'DVM, MSc Veterinary Toxicology, UC Davis',
    licenseNumber: 'CA-VET-771032',
    avatar: 'https://images.unsplash.com/photo-1594824813588-e8f000780287?w=400&auto=format&fit=crop&q=80',
    bio: 'Dr. Rostova specializes in material safety, plastic leachate toxicology, and water filtration efficacy. She conducts independent GC-MS spectrum analyses to verify that Petora stainless components remain 100% free of BPA, phthalates, and heavy metals.',
    quote: 'Plastic bowls harbor micro-scratches that host bacterial biofilm within 48 hours. By moving exclusively to 304 food-grade stainless steel with induction pumps, we virtually eradicate feline chin acne.',
    specialty: 'Veterinary Toxicology, Biomaterials & Water Quad-Purification',
    affiliations: ['American College of Veterinary Toxicology', 'California Veterinary Medical Association']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Emily Richardson',
    petName: 'Milo & Oliver',
    petType: 'Cat',
    rating: 5,
    title: 'Cured my cat’s 4 AM howling for breakfast!',
    content: 'The Petora Vision Pro dual feeder has completely changed our sleep schedule. The camera quality is insanely crisp, even at night. Being able to dispense 10g portions 5 times a day helped Milo lose 1.2 lbs in 3 months as recommended by our vet. The stainless bowl is super easy to pop in the dishwasher.',
    date: 'February 12, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    productName: 'Petora Vision Pro™ AI Camera Pet Feeder',
    helpfulCount: 47
  },
  {
    id: 'rev-2',
    author: 'David Sterling',
    petName: 'Barnaby (Golden Retriever)',
    petType: 'Dog',
    rating: 5,
    title: 'B2B Retail Partner: Outstanding quality and zero return rate',
    content: 'We imported an initial batch of 200 units of the PureFlow stainless fountain for our chain of 8 pet boutiques in Seattle. Our customers love the wireless pump—no more nasty gunk caught around cords. The packaging is retail-ready and FCC/CE compliance docs were provided instantly. Placing our second container order this month!',
    date: 'January 28, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80',
    productName: 'Petora PureFlow™ Ultra-Quiet Stainless Pet Fountain',
    helpfulCount: 89
  },
  {
    id: 'rev-3',
    author: 'Jessica Chen',
    petName: 'Luna (Ragdoll)',
    petType: 'Cat',
    rating: 5,
    title: 'Literally zero smell in our 1-bedroom apartment',
    content: 'I was hesitant to spend on an automatic litter box after reading horror stories about safety sensors on cheap white-label models. The Petora WhisperClean is a world apart: if Luna even walks within 2 feet of it while rotating, it freezes instantly. The ionic deodorizer actually works—my guests don’t even know I have a cat!',
    date: 'February 19, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80',
    productName: 'Petora WhisperClean™ Smart Self-Cleaning Litter Box',
    helpfulCount: 34
  },
  {
    id: 'rev-4',
    author: 'Capt. Thomas Walker',
    petName: 'Duke (German Shepherd)',
    petType: 'Dog',
    rating: 5,
    title: 'Peace of mind during 12-hour shifts',
    content: 'As a paramedic working irregular shifts, knowing Duke gets his exact meal portions and I can talk to him and toss a treat from my phone is priceless. Build quality feels like Apple-grade hardware. Battery backup kicked in seamlessly during a storm blackout last week.',
    date: 'January 15, 2026',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    productName: 'Petora NannyCam™ 360° AI Pet Camera & Treat Tosser',
    helpfulCount: 62
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'pillar-smart-feeder-guide-2026',
    slug: 'smart-pet-feeder-guide',
    title: 'The Complete Veterinary Guide to Automatic Pet Feeders in 2026: Health, Safety & Micro-Portioning',
    category: 'Smart Feeding',
    author: 'Dr. Sarah Jenkins',
    authorRole: 'Chief Veterinary Officer, DVM',
    authorAvatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=80',
    reviewedBy: 'Dr. Elena Rostova',
    reviewedByDVM: 'DVM, MSc Toxicology (CA-VET-771032)',
    readTime: '12 min read',
    publishedAt: 'January 10, 2026',
    updatedAt: 'February 24, 2026',
    tldr: 'Automatic pet feeders with airtight silicone seals, 304 stainless steel bowls, and anti-pinch rotors prevent pet obesity, bacterial chin acne, and dangerous food jams, allowing precision portion control (5g-100g) on a programmed schedule.',
    excerpt: 'Explore the definitive clinical guide on how automated portion dispensers improve companion animal digestion, reduce morning vomiting, and safeguard your pets while you are away.',
    coverImage: feederImg,
    tableData: {
      headers: ['Feature / Spec', 'Petora Vision Pro', 'Standard Basic Feeder', 'Manual Feeding'],
      rows: [
        ['Portion Accuracy', '± 2 grams (Micro-rotor)', '± 15-20 grams (Inconsistent)', 'Manual Cup Guesswork'],
        ['Material Safety', '304 Medical Stainless Steel', 'Recycled ABS / Plastic Bowl', 'Varied'],
        ['Airtight Quad-Lock', 'Yes (Triple Silicone + Desiccant)', 'Single rubber flap', 'Open bag in pantry'],
        ['Power Failure Defense', 'Dual Power (Adapter + 180d Battery)', 'Single USB only', 'N/A'],
        ['Anti-Jam Reverse Torque', 'Yes (IR Sensor + Bi-Directional)', 'No (Common Jamming Risk)', 'N/A'],
        ['Remote 2K Video Check', 'Yes (Real-time Night Vision)', 'None', 'None']
      ]
    },
    contentSections: [
      {
        heading: 'Why Timed Micro-Portioning is a Veterinary Necessity',
        body: [
          'According to the Association for Pet Obesity Prevention (APOP) 2025 National Survey, 59% of dogs and 61% of cats in the United States and Europe are clinically classified as overweight or obese. Free-feeding (leaving a bowl of dry kibble filled all day) is the leading contributor to feline hepatic lipidosis, osteoarthritis, and type-2 diabetes.',
          'Automated micro-portioning mimics a feline’s natural biological hunting behavior: consuming 4 to 8 small, calorie-precise meals throughout a 24-hour cycle. This metabolic distribution eliminates stomach acid buildup that causes "hunger pukes" (bilious vomiting syndrome) in early morning hours.'
        ],
        bullets: [
          'Prevents rapid food gulping and reduces dangerous canine gastric dilatation-volvulus (GDV/bloat).',
          'Eliminates food competition and stress in multi-pet households via individualized timed hoppers.',
          'Maintains fresh kibble crunchiness and volatile lipid preservation with hermetic desiccant sealing.'
        ],
        callout: 'Clinical Finding: Studies from the Journal of Animal Physiology and Animal Nutrition confirm that splitting daily caloric intake into 5 automated portions increases resting feline metabolic activity by 14.2%.'
      },
      {
        heading: 'Critical Safety Features Every Smart Feeder Must Possess',
        body: [
          'Not all automatic feeders are created equal. In our veterinary review lab, we identified three critical failure modes common in cheap generic white-label feeders: food chute jamming, paw-break-in mechanism failure, and power outage vulnerabilities.',
          'When choosing a feeder for your companion, ensure it is equipped with bi-directional reverse-spin motor intelligence that instantly detects kibble resistance and spins backwards to clear jams before returning to the dosing cycle.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Are automatic feeders safe if my home Wi-Fi disconnects?',
        answer: 'Yes. All Petora feeders store your feeding schedules on local onboard EEPROM memory. Even if your internet router goes offline, the scheduled meals dispense exactly on time. When Wi-Fi reconnects, all dispensing logs sync back to your phone.'
      },
      {
        question: 'Can my clever cat reach up the chute to steal extra kibble?',
        answer: 'No. Petora smart feeders feature a patented self-closing baffle door and narrow angled chute geometry that prevents curious paws from reaching internal rotor chambers.'
      },
      {
        question: 'How often should the stainless steel bowl and food hopper be washed?',
        answer: 'We recommend washing the removable 304 stainless steel bowl every 2 to 3 days (it is 100% dishwasher safe) and wiping down the dry hopper during monthly kibble refills.'
      }
    ],
    citations: [
      { title: 'APOP 2025 Companion Animal Weight and Clinical Health Survey', source: 'Association for Pet Obesity Prevention', year: '2025', link: 'https://petobesityprevention.org' },
      { title: 'Circadian Feeding Frequency and Gastrointestinal Transit in Domestic Felids', source: 'Journal of Animal Physiology and Animal Nutrition', year: '2024', link: 'https://nih.gov' },
      { title: 'Guidelines for Feline Environmental Needs & Feeding Enrichment', source: 'American Association of Feline Practitioners (AAFP)', year: '2024', link: 'https://catvets.com' }
    ]
  },
  {
    id: 'fountain-stainless-vs-plastic-guide',
    slug: 'cat-water-fountain-stainless-steel-vs-plastic',
    title: 'Stainless Steel vs. Plastic Pet Fountains: A Toxicological & Nephrological Comparison',
    category: 'Hydration Health',
    author: 'Dr. Elena Rostova',
    authorRole: 'Senior Clinical Research Associate, DVM, MSc',
    authorAvatar: 'https://images.unsplash.com/photo-1594824813588-e8f000780287?w=400&auto=format&fit=crop&q=80',
    reviewedBy: 'Dr. Sarah Jenkins',
    reviewedByDVM: 'DVM, DACVIM (NY-VET-482910)',
    readTime: '8 min read',
    publishedAt: 'January 22, 2026',
    updatedAt: 'February 20, 2026',
    tldr: '304 stainless steel pet water fountains prevent bacterial biofilm colonization, eliminate feline chin acne, and withstand high-heat sterilization unlike porous plastic alternatives.',
    excerpt: 'Learn why veterinarians strongly recommend medical-grade stainless steel fountains over plastic alternatives to safeguard your cat from chronic kidney disease and acne.',
    coverImage: fountainImg,
    tableData: {
      headers: ['Comparison Metric', '304 Food Stainless Steel', 'Standard Polycarbonate / Plastic'],
      rows: [
        ['Porosity & Micro-Scratches', 'Zero (Non-porous mirror finish)', 'High (Scratches easily during sponge washing)'],
        ['Bacterial Biofilm Colonization', 'Resistant & Easy to Sterilize', 'Traps bacteria inside micro-grooves within 48h'],
        ['Feline Chin Acne Risk', 'Near 0% Clinical Incidence', 'Very Common (Contact Folliculitis)'],
        ['Chemical Leaching (BPA/Phthalates)', 'Zero Chemical Leaching', 'Potential degradation under UV/heat'],
        ['Dishwasher Sanitization (75°C)', 'Fully Safe (Heat & rust proof)', 'Can warp, crack, or release odors']
      ]
    },
    contentSections: [
      {
        heading: 'The Hidden Danger of Plastic Water Fountains',
        body: [
          'Cats have a natural low thirst drive inherited from their desert-dwelling ancestors (Felis lybica). In the wild, they derive hydration from prey. When fed modern commercial dry kibble containing only 8-10% moisture, cats live in a state of chronic mild dehydration unless encouraged to drink by flowing, pristine water.',
          'However, when that flowing water sits in a porous plastic container, microscopic scratches from cleaning sponges harbor bacterial colonies of Pseudomonas and Staphylococcus. When a cat’s chin rests against the plastic rim while drinking, these bacteria penetrate hair follicles, causing painful black comedones and pustules known as feline chin acne.'
        ]
      }
    ],
    faqs: [
      {
        question: 'How much water should a healthy cat drink each day?',
        answer: 'A healthy adult cat requires approximately 50 to 60 ml of water per kilogram of body weight daily (about 200-250 ml for a 4.5kg / 10lb cat).'
      },
      {
        question: 'How often should the water fountain filter be replaced?',
        answer: 'In multi-pet homes, replace the 4-stage filter every 3 to 4 weeks. In single-cat homes, every 4 to 6 weeks is sufficient.'
      }
    ],
    citations: [
      { title: 'Risk Factors for Feline Lower Urinary Tract Disease in Domestic Environments', source: 'Journal of Feline Medicine and Surgery', year: '2024', link: 'https://nih.gov' },
      { title: 'Comparative Biofilm Formation on Veterinary Food Contact Surfaces', source: 'Veterinary Microbiology Reports', year: '2025', link: 'https://avma.org' }
    ]
  },
  {
    id: 'self-cleaning-litter-box-behavior-guide',
    slug: 'how-to-introduce-cat-to-self-cleaning-litter-box',
    title: 'How to Introduce Your Cat to a Self-Cleaning Litter Box Without Neophobia or Fear',
    category: 'Feline Behavior',
    author: 'Dr. Marcus Vance',
    authorRole: 'Head of Animal Behavioral Science, PhD, CCBC',
    authorAvatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=80',
    reviewedBy: 'Dr. Sarah Jenkins',
    reviewedByDVM: 'DVM, DACVIM',
    readTime: '9 min read',
    publishedAt: 'February 05, 2026',
    updatedAt: 'February 22, 2026',
    tldr: 'Transition cats to an automated litter box by keeping the unit powered OFF for the first 3 days, adding a scoop of old familiar litter for scent comfort, and rewarding calm inspection.',
    excerpt: 'Step-by-step behavioral protocol developed by certified cat behaviorists to achieve 100% feline transition success in under 7 days.',
    coverImage: litterImg,
    contentSections: [
      {
        heading: 'The 3-Step Behavioral Transition Protocol',
        body: [
          'Cats are neophobic creatures—they are naturally skeptical of sudden changes in their core elimination territory. Placing a robotic box that immediately starts whirling and buzzing will cause startle aversion. Follow our proven 3-step transition protocol.'
        ],
        bullets: [
          'Phase 1 (Days 1-3): Place the new Petora WhisperClean right next to the old litter box, powered OFF. Add one cup of clean litter mixed with one scoop of their familiar litter for scent continuity.',
          'Phase 2 (Days 4-5): Stop scooping the old box. Cats naturally seek a cleaner surface and will step into the roomy, fresh Petora drum on their own.',
          'Phase 3 (Days 6-7): Once you see consistent deposits in the Petora box, remove the old manual box and plug in the power cord. Set the cleaning delay to 15 minutes so your cat is already out of the room when it cycles.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Is an automatic litter box safe for kittens?',
        answer: 'Robotic litter boxes with auto-cycles should only be used in automatic mode for cats weighing at least 1.1 kg (2.4 lbs) so that weight sensors register their presence. For younger kittens, use the box in Manual Clean Mode via app button.'
      }
    ],
    citations: [
      { title: 'Feline Elimination Behavior and Litter Box Preference Dynamics', source: 'Applied Animal Behaviour Science', year: '2024', link: 'https://iaabc.org' }
    ]
  }
];

export const COMPARISONS = [
  {
    feature: 'Price Point (USD)',
    petora: '$139.99',
    petlibro: '$159.99 - $179.99',
    furbo: '$199.99 + Sub',
    whisker: '$299.00 (Feeder-Robot)',
    generic: '$49.99 - $79.99'
  },
  {
    feature: 'Camera Spec',
    petora: '2K QHD (145° FOV) HDR',
    petlibro: '1080p Standard',
    furbo: '1080p 360°',
    whisker: 'No Camera Option',
    generic: '480p / 720p blurry'
  },
  {
    feature: 'Anti-Jam Rotor Torque',
    petora: 'Bi-Directional AI Reverse Spin',
    petlibro: 'Standard Forward Only',
    furbo: 'Treat Tossing Rotor',
    whisker: 'Anti-jam Dispenser',
    generic: 'Prone to Jamming (0.8Nm)'
  },
  {
    feature: 'Material Standard',
    petora: 'SUS304 Medical Stainless Bowl',
    petlibro: 'SUS304 Stainless',
    furbo: 'Plastic & Wood Lid',
    whisker: 'BPA-free Plastic / Stainless',
    generic: 'Porous Recycled ABS'
  },
  {
    feature: 'Freshness Preservation',
    petora: 'Quad Seal + Auto Gate + Desiccant',
    petlibro: 'Triple Granary Seal',
    furbo: 'Rubber Ring Lid',
    whisker: 'Hopper Seal',
    generic: 'Open Chute (Bugs can enter)'
  },
  {
    feature: 'Battery Blackout Guard',
    petora: '180 Days (4x D Battery)',
    petlibro: '60-90 Days',
    furbo: 'No Battery Backup (AC only)',
    whisker: 'Optional Backup ($40 extra)',
    generic: 'None or 24hr weak cell'
  },
  {
    feature: 'B2B Wholesale / OEM Support',
    petora: 'Direct Factory MOQ 50 + Custom App SDK',
    petlibro: 'DTC Focused',
    furbo: 'DTC Focused',
    whisker: 'DTC Focused',
    generic: 'White-label (No Quality Control)'
  },
  {
    feature: 'Warranty & Certifications',
    petora: '2-Year Global + FCC/CE/RoHS/Prop65',
    petlibro: '1-Year Limited',
    furbo: '1-Year Limited',
    whisker: '1-Year Limited',
    generic: '30-Day basic seller'
  }
];

export const EU_RESPONSIBLE_PERSON: ResponsiblePersonInfo = {
  companyName: 'Petora EU Compliance B.V.',
  contactPerson: 'Director of Regulatory Affairs',
  address: 'Keizersgracht 482, 1016 GD',
  cityCountry: 'Amsterdam, Netherlands',
  postalCode: '1016 GD',
  email: 'eu-compliance@petoracare.com',
  phone: '+31 20 894 3320',
  mandateReference: 'EU-GPSR-2023-988-PTR-8941',
  gpsrEffectiveDate: 'December 13, 2024 (Enforced)',
  technicalFileStoragePeriod: '10 Years (Guaranteed Digital Cloud Archive)'
};

export const UK_RESPONSIBLE_PERSON: ResponsiblePersonInfo = {
  companyName: 'Petora UK Conformity Ltd.',
  contactPerson: 'UK Authorized Representative Lead',
  address: '71-75 Shelton Street, Covent Garden',
  cityCountry: 'London, United Kingdom',
  postalCode: 'WC2H 9JQ',
  email: 'ukrp@petoracare.com',
  phone: '+44 20 7946 0912',
  mandateReference: 'UKCA-MANDATE-PTR-2025',
  gpsrEffectiveDate: 'Active Post-Brexit Regime',
  technicalFileStoragePeriod: '10 Years'
};

export const COMPLIANCE_CERTIFICATES: ComplianceCertificate[] = [
  // US MARKET
  {
    id: 'fcc-part-15c',
    name: 'FCC Part 15C Intentional Radiator (FCC ID)',
    standard: 'FCC Title 47 CFR Part 15 Subpart C §15.247 / TCB Certification',
    region: 'US',
    mandatoryType: 'Mandatory',
    applicableProducts: 'Smart Feeders (WiFi 2.4/5GHz), Pet Cameras, Robotic Litter Boxes, GPS Trackers',
    notifiedBodyOrLab: 'Telecommunication Certification Body (TCB) / Intertek ETL Semko',
    certificateNumber: 'FCC ID: 2B9PTR-VP600W / 2B9PTR-FC200',
    issueDate: '2025-03-15',
    expiryDate: 'Perpetual (Hardware Modification Audit)',
    status: 'Active & Verified',
    keyRequirements: [
      'RF emission & harmonic suppression for 2.4GHz & 5GHz 802.11 b/g/n/ac WiFi',
      'TCB Grant of Equipment Authorization issued and searchable on FCC OET Database',
      'FCC labeling and manual regulatory statements compliance'
    ],
    pdfDownloadUrl: '/compliance/FCC-Part15C-Certificate-Petora.pdf',
    summary: 'Mandatory for all intentional wireless transmitters in the United States. Authorizes legal retail and wholesale distribution with verified FCC IDs.'
  },
  {
    id: 'fcc-part-15b',
    name: 'FCC Part 15B Unintentional Radiator (SDoC)',
    standard: 'FCC 47 CFR Part 15 Subpart B (Class B Digital Device)',
    region: 'US',
    mandatoryType: 'Mandatory',
    applicableProducts: 'Water Fountains, Non-wireless Smart Feeders, Power Adaptors',
    notifiedBodyOrLab: 'SGS-CSTC Standards Technical Services Co., Ltd. (CNAS/A2LA)',
    certificateNumber: 'SDoC-FCC-PTR-2025-8831',
    issueDate: '2025-02-10',
    expiryDate: 'Continuous',
    status: 'Active & Verified',
    keyRequirements: [
      'Radiated & Conducted EMC emissions testing below Class B thresholds',
      'Supplier Declaration of Conformity (SDoC) dossier retained for 10 years'
    ],
    pdfDownloadUrl: '/compliance/FCC-Part15B-SDoC-Report.pdf',
    summary: 'Guarantees digital microcontrollers and switched-mode power supplies do not interfere with broadcast radio or medical home appliances.'
  },
  {
    id: 'fda-21cfr',
    name: 'FDA 21 CFR Food Contact Biocompatibility',
    standard: 'FDA 21 CFR 177.1520 (Polypropylene), 177.2600 (Silicone), 175.300 (SUS304 Stainless)',
    region: 'US',
    mandatoryType: 'Mandatory',
    applicableProducts: 'Feeder Food Hoppers, Dispensing Rotors, Food Bowls, Fountain Reservoirs & Waterways',
    notifiedBodyOrLab: 'TÜV Rheinland Greater China (FDA Recognized)',
    certificateNumber: 'TR-FDA-21CFR-PTR-09418',
    issueDate: '2025-04-12',
    expiryDate: '2028-04-11',
    status: 'Active & Verified',
    keyRequirements: [
      'Zero lead, cadmium, or heavy metal leaching under acidic food simulation (4% Acetic Acid)',
      '100% Virgin Food-Grade Polypropylene and SUS304 Passivated Austenitic Stainless Steel',
      'BPA, BPS, and phthalate migration levels below detectable limits (<0.01 mg/kg)'
    ],
    pdfDownloadUrl: '/compliance/FDA-21CFR-FoodContact-Report.pdf',
    summary: 'Ensures pet bowls and food storage hoppers are biologically inert, safe for kibble contact, and compliant for Amazon US & retail chain import inspection.'
  },
  {
    id: 'ul-etl-62368',
    name: 'UL / ETL 62368-1 Electrical Safety Certification (cETLus Mark)',
    standard: 'ANSI/UL 62368-1:2019 / CSA C22.2 No. 62368-1:19 (Audio/Video, Information & Comm. Tech)',
    region: 'US',
    mandatoryType: 'De Facto Mandatory (Retailer/Amazon)',
    applicableProducts: 'All AC/DC Powered Feeder Units, Smart Litter Boxes, Smart Cameras',
    notifiedBodyOrLab: 'Intertek Testing Services NA Inc. (OSHA Recognized NRTL)',
    certificateNumber: 'cETLus Control # 5029418',
    issueDate: '2025-01-20',
    expiryDate: '2028-01-19 (Quarterly Factory Surveillance)',
    status: 'Active & Verified',
    keyRequirements: [
      'Electrical shock protection, dielectric insulation breakdown > 3,000V AC',
      'Flammability classification UL94 V-0 flame-retardant chassis materials',
      'Mandatory requirement for Amazon US electrical listings, Target, Walmart, and Best Buy retail vendor agreements'
    ],
    pdfDownloadUrl: '/compliance/ETL-UL62368-1-Listing-Petora.pdf',
    summary: 'Nationally Recognized Testing Laboratory (NRTL) safety listing covering both the United States and Canada (cETLus), eliminating electrical liability concerns for importers.'
  },
  {
    id: 'ca-prop65',
    name: 'California Proposition 65 Toxic Substance Audit',
    standard: 'Safe Drinking Water and Toxic Enforcement Act of 1986 (CP65)',
    region: 'US',
    mandatoryType: 'Mandatory',
    applicableProducts: 'All Exterior Plastics, Power Cables, Silicone Gaskets, Packaging',
    notifiedBodyOrLab: 'Bureau Veritas Consumer Products Services',
    certificateNumber: 'BV-CP65-PTR-2025-0182',
    issueDate: '2025-03-01',
    expiryDate: '2027-03-01',
    status: 'Active & Verified',
    keyRequirements: [
      'Total Lead (Pb) < 100 ppm, Total Cadmium (Cd) < 100 ppm',
      '8 major Phthalates (DEHP, DBP, BBP, DINP, DIDP, DnHP, DCHP, DIBP) < 1,000 ppm each',
      'Safe Harbor Level compliance, exempt from mandatory California warning labels'
    ],
    pdfDownloadUrl: '/compliance/California-Prop65-Report.pdf',
    summary: 'Full chemical assay certifying zero toxic chemical exposure, protecting wholesale distributors against California bounty-hunter lawsuits.'
  },
  {
    id: 'doe-level-vi',
    name: 'DOE Level VI & CEC Energy Efficiency Verification',
    standard: '10 CFR Part 430 / California Energy Commission Title 20',
    region: 'US',
    mandatoryType: 'Mandatory',
    applicableProducts: 'External AC/DC Power Adapters and Smart USB-C Charging Docks',
    notifiedBodyOrLab: 'SGS Standards Testing Corp.',
    certificateNumber: 'DOE-VI-CEC-PTR-9941',
    issueDate: '2025-01-15',
    expiryDate: 'Continuous',
    status: 'Active & Verified',
    keyRequirements: [
      'No-load power consumption < 0.075W',
      'Average active mode power efficiency > 88.5%',
      'CEC Appliance Efficiency Database listing'
    ],
    pdfDownloadUrl: '/compliance/DOE-LevelVI-Energy-Report.pdf',
    summary: 'Federal and California state mandated energy conservation certification for high-efficiency continuous power delivery.'
  },

  // EU MARKET
  {
    id: 'ce-red-en18031',
    name: 'CE - RED (2014/53/EU) + EN 18031 Cybersecurity Standard',
    standard: 'Radio Equipment Directive 2014/53/EU + Delegated Regulation (EU) 2022/30 (EN 18031-1/2/3)',
    region: 'EU',
    mandatoryType: 'Mandatory',
    applicableProducts: 'Vision Pro Feeders, Smart Litter Boxes, 2K AI Cameras, GPS Trackers',
    notifiedBodyOrLab: 'TÜV SÜD Product Service GmbH (EU Notified Body 0123)',
    certificateNumber: 'CE-RED-NB0123-PTR-2025-7721',
    issueDate: '2025-06-10',
    expiryDate: '2029-06-09',
    status: 'Updated (2025/2026 Ready)',
    keyRequirements: [
      'Article 3.1(a) Health & Electrical Safety: EN 62368-1:2020 + A11:2020 & EN 62311 RF Exposure',
      'Article 3.1(b) EMC: EN 301 489-1/-17 & EN 55032/EN 55035',
      'Article 3.2 Radio Spectrum: EN 300 328 v2.2.2 & EN 301 893 v2.1.1',
      'Article 3.3(d)(e)(f) IoT Cybersecurity: EN 18031-1/2/3 compliance (Mandatory Aug 2025, preventing EU Amazon/Customs takedowns)'
    ],
    pdfDownloadUrl: '/compliance/CE-RED-EN18031-EU-Type-Exam.pdf',
    summary: 'Full EU Type Examination Certificate from Notified Body 0123. Pre-certified for the stringent 2025/2026 EN 18031 IoT cybersecurity standards.'
  },
  {
    id: 'eu-gpsr-2023-988',
    name: 'EU General Product Safety Regulation (GPSR) (EU) 2023/988 Dossier',
    standard: 'Regulation (EU) 2023/988 + Designated EU Responsible Person Listing',
    region: 'EU',
    mandatoryType: 'GPSR Compliance',
    applicableProducts: 'All Petora Hardware, Accessories, Filters, and Desiccant Packs',
    notifiedBodyOrLab: 'Petora EU Compliance B.V. (Amsterdam, Netherlands) / SGS Audited',
    certificateNumber: 'GPSR-EUP-NL-2024-12-8941',
    issueDate: '2024-12-10',
    expiryDate: '2034-12-09 (10-Year Mandate)',
    status: 'Active & Verified',
    keyRequirements: [
      'Designated EU Responsible Person (RP) name, postal address, and dedicated email printed on product, retail box, and online listings',
      'Digital Technical Documentation Archive maintained for a minimum of 10 years',
      'Direct consumer product safety risk assessment and fast-track Safety Gate recall protocol'
    ],
    pdfDownloadUrl: '/compliance/EU-GPSR-Compliance-Dossier-Petora.pdf',
    summary: 'Fully compliant with EU GPSR enforceable since December 13, 2024. Non-EU buyers receive our official EU RP authorization for hassle-free European sales.'
  },
  {
    id: 'rohs-reach',
    name: 'RoHS 2.0 (2011/65/EU) & REACH (EC 1907/2006) 241 SVHC',
    standard: 'Directive 2011/65/EU + Delegated Directive (EU) 2015/863 & REACH Candidate List',
    region: 'EU',
    mandatoryType: 'Mandatory',
    applicableProducts: 'All Circuit Boards (PCBA), Cables, Solders, Chassis, Silicone O-Rings',
    notifiedBodyOrLab: 'Intertek Testing Services (EU Accredited)',
    certificateNumber: 'ITK-RoHS-REACH-PTR-2025-0442',
    issueDate: '2025-02-18',
    expiryDate: '2027-02-17',
    status: 'Active & Verified',
    keyRequirements: [
      '10 Restricted Hazardous Substances (Pb, Hg, Cd, Cr VI, PBB, PBDE, DEHP, BBP, DBP, DIBP) < 0.1% / Cd < 0.01%',
      'Zero REACH Substances of Very High Concern (SVHC) above 0.1% w/w concentration threshold',
      'Full SCIP database notification dossier ready for EU customs declaration'
    ],
    pdfDownloadUrl: '/compliance/RoHS-REACH-Full-Assay-Report.pdf',
    summary: 'Guarantees 100% green manufacturing without heavy metals or endocrine-disrupting chemicals.'
  },
  {
    id: 'eu-food-contact-lfgb',
    name: 'EU 10/2011 & German LFGB §30/31 Food Contact Certification',
    standard: 'Regulation (EC) No 1935/2004, (EU) No 10/2011 Plastic Migration & LFGB Testing',
    region: 'EU',
    mandatoryType: 'Mandatory',
    applicableProducts: 'Stainless Steel Bowls, Dispensing Chutes, PP Granary Barrels, Waterway Pumps',
    notifiedBodyOrLab: 'TÜV Rheinland LGA Products GmbH (Germany)',
    certificateNumber: 'TR-LFGB-EU10-PTR-2025-1102',
    issueDate: '2025-03-22',
    expiryDate: '2028-03-21',
    status: 'Active & Verified',
    keyRequirements: [
      'Overall migration in 3% Acetic Acid, 10% Ethanol, and Olive Oil simulant < 10 mg/dm²',
      'Specific migration of heavy metals (Al, Ba, Co, Cu, Fe, Li, Mn, Ni, Zn) compliant with EU 2020/1245',
      'Sensory test (odour and taste transfer to pet food) rating < 2.5 (No off-flavor transfer)'
    ],
    pdfDownloadUrl: '/compliance/LFGB-EU102011-FoodGrade-Report.pdf',
    summary: 'Exceeds standard European requirements by passing strict German LFGB regulations, preferred by premium European pet retailers.'
  },
  {
    id: 'weee-triman',
    name: 'WEEE Directive (2012/19/EU) & French Triman Packaging Register',
    standard: 'ElektroG (Germany EAR) / ADEME (France) / WEEE Crossed-Out Bin Mark',
    region: 'EU',
    mandatoryType: 'Mandatory',
    applicableProducts: 'All Electronic Units, Batteries, and Retail Packaging Cartons',
    notifiedBodyOrLab: 'Stiftung Elektro-Altgeräte Register (EAR DE) / CITEO France',
    certificateNumber: 'WEEE-Reg.-Nr. DE 89412039 / ADEME FR394821',
    issueDate: '2025-01-01',
    expiryDate: 'Annual Renewal Active',
    status: 'Active & Verified',
    keyRequirements: [
      'Crossed-out wheeled bin symbol printed directly on hardware chassis',
      'Triman recycling logo and sorting information (Info-tri) printed on retail packaging',
      'Producer Responsibility Organization (EPR) registration in Germany, France, Italy, and Spain'
    ],
    pdfDownloadUrl: '/compliance/WEEE-EPR-Registration-Certificate.pdf',
    summary: 'Enables immediate listing on Amazon.de, Amazon.fr, Cdiscount, and European retail without EPR account suspension.'
  },

  // CANADA MARKET
  {
    id: 'ised-canada',
    name: 'ISED (Innovation, Science and Economic Development Canada)',
    standard: 'RSS-247 Issue 3 / RSS-Gen Issue 5 (IC Certification)',
    region: 'CA',
    mandatoryType: 'Mandatory',
    applicableProducts: 'WiFi Feeder, 2K Pet Camera, Smart Cat Litter Box',
    notifiedBodyOrLab: 'ISED Recognized CAB / Intertek Canada',
    certificateNumber: 'IC: 31920-VP600W',
    issueDate: '2025-03-18',
    expiryDate: 'Continuous',
    status: 'Active & Verified',
    keyRequirements: [
      'Radio frequency spectrum compliance for 2.4/5GHz Canadian spectrum allocation',
      'HVIN (Hardware Version Identification Number) registered on ISED Radio Equipment List (REL)',
      'Bilingual French/English user documentation and safety warnings included'
    ],
    pdfDownloadUrl: '/compliance/ISED-Canada-Certificate-Petora.pdf',
    summary: 'Official ISED authorization for nationwide distribution across all Canadian provinces including Quebec.'
  },

  // UK MARKET
  {
    id: 'ukca-regulations',
    name: 'UKCA Conformity (Radio Equipment Regs 2017 & BS 1363 Fused Plug)',
    standard: 'Radio Equipment Regulations 2017 (S.I. 2017/1206) & Electrical Equipment (Safety) Regs 2016',
    region: 'UK',
    mandatoryType: 'Mandatory',
    applicableProducts: 'All Petora Smart Devices, UK 3-Pin Fused Power Adaptors',
    notifiedBodyOrLab: 'BSI Assurance UK Ltd. / SGS United Kingdom Ltd.',
    certificateNumber: 'UKCA-DoC-PTR-2025-081',
    issueDate: '2025-02-25',
    expiryDate: 'Continuous',
    status: 'Active & Verified',
    keyRequirements: [
      'UK Declaration of Conformity (DoC) signed with UK Authorized Representative',
      'BS 1363 compliant 3-pin AC plug with certified internal BS 1362 ceramic safety fuse',
      'UK WEEE and Packaging waste compliance registered'
    ],
    pdfDownloadUrl: '/compliance/UKCA-DoC-Declaration-Petora.pdf',
    summary: 'Complete post-Brexit UKCA compliance enabling duty-free clearance through UK HMRC customs and major UK pet retail stockists.'
  },

  // B2B SOCIAL & FACTORY AUDITS
  {
    id: 'bsci-sedex-smeta',
    name: 'BSCI & Sedex SMETA 4-Pillar Social Responsibility Audit',
    standard: 'Sedex Members Ethical Trade Audit (SMETA 6.1) / amfori BSCI Code of Conduct (Grade A)',
    region: 'Global',
    mandatoryType: 'Buyer-Driven / Premium',
    applicableProducts: 'Manufacturing Facility & Global OEM Assembly Lines',
    notifiedBodyOrLab: 'SGS Societe Generale de Surveillance SA (Auditor)',
    certificateNumber: 'Sedex Ref: ZAA89410294 / BSCI DBID: 394810',
    issueDate: '2025-05-14',
    expiryDate: '2026-05-13 (Annual Re-audit)',
    status: 'Active & Verified',
    keyRequirements: [
      'Zero child labor, zero forced labor, fair living wages, and standard working hours verification',
      'Occupational health, fire safety, environmental emissions, and chemical waste stewardship',
      'Mandatory prerequisite for European retail tier-1 vendor onboarding (Fressnapf, Pets at Home, Maxi Zoo)'
    ],
    pdfDownloadUrl: '/compliance/BSCI-SMETA-Social-Audit-Report.pdf',
    summary: 'Grade-A social compliance rating granting automatic qualification for Fortune 500 retail chains and major department stores.'
  },
  {
    id: 'iso-9001-2015',
    name: 'ISO 9001:2015 Quality Management System Certification',
    standard: 'ISO 9001:2015 Requirements for Quality Management Systems',
    region: 'Global',
    mandatoryType: 'Buyer-Driven / Premium',
    applicableProducts: 'Full Production Facility, SMT Assembly, Tooling, and QA Laboratories',
    notifiedBodyOrLab: 'TÜV NORD CERT GmbH (DAkkS Accredited)',
    certificateNumber: 'TUV-ISO9001-PTR-44-100-258941',
    issueDate: '2024-11-20',
    expiryDate: '2027-11-19',
    status: 'Active & Verified',
    keyRequirements: [
      '100% automated Incoming Quality Control (IQC), In-Process QC (IPQC), and Final OQC',
      'Traceable component serial numbers and automated optical inspection (AOI) for PCBA',
      'Defect PPM rate guaranteed below 300 PPM across all high-volume manufacturing batches'
    ],
    pdfDownloadUrl: '/compliance/ISO9001-2015-Certificate-Petora.pdf',
    summary: 'International quality standard guaranteeing rigorous batch-to-batch consistency and zero mechanical reliability defects.'
  },
  {
    id: 'product-liability-insurance',
    name: 'US & Global $5,000,000 Product Liability Insurance Policy',
    standard: 'Worldwide Commercial General Liability & Product-Completed Operations Insurance',
    region: 'Global',
    mandatoryType: 'Buyer-Driven / Premium',
    applicableProducts: 'All Hardware Units Distributed Globally',
    notifiedBodyOrLab: 'Allianz Global Corporate & Specialty SE / Chubb Insurance',
    certificateNumber: 'POLICY # GL-PTR-US-8849201',
    issueDate: '2026-01-01',
    expiryDate: '2027-01-01 (Annual Auto-Renew)',
    status: 'Active & Verified',
    keyRequirements: [
      '$5,000,000 Aggregate Limit / $2,000,000 Each Occurrence Coverage',
      'Wholesale buyers and retail partners can be named as "Additional Insured" on Certificate of Insurance (COI)',
      'Worldwide jurisdiction including North America, Europe, United Kingdom, and Australasia'
    ],
    pdfDownloadUrl: '/compliance/Petora-ProductLiability-COI-Sample.pdf',
    summary: 'Comprehensive multi-million dollar liability protection safeguarding enterprise B2B partners against unforeseen third-party claims.'
  }
];

export const GENERAL_FAQS = [
  {
    question: 'Are Petora smart products certified for export to the US, Canada, and the European Union?',
    answer: 'Yes, 100%. Every Petora product is rigorously lab-tested and certified with FCC ID (United States), CE-RED & EMC with EN 18031 cybersecurity standards (European Union), EU GPSR (2023/988) with designated EU Responsible Person, RoHS 2.0, California Proposition 65, and FDA/LFGB food contact safety standard reports.'
  },
  {
    question: 'How do you comply with the EU GPSR (General Product Safety Regulation) effective Dec 2024?',
    answer: 'Petora has established our dedicated EU Authorized Responsible Person (Petora EU Compliance B.V., Amsterdam, Netherlands). All export cartons and individual unit packages include our official EU RP name, address, and digital QR contact point. Full technical documentation dossiers are archived for 10 years, ensuring zero Amazon EU or customs inspection delays.'
  },
  {
    question: 'Are Petora smart devices pre-certified for the new EN 18031 IoT cybersecurity standards?',
    answer: 'Yes. All wireless models (WiFi 2.4/5GHz, BLE) have been audited by TÜV SÜD under EN 18031-1/2/3 covering secure boot, encrypted telemetry (TLS 1.3), password hardening, and automatic firmware OTA rollback security. This protects our retail partners from the European market recall waves.'
  },
  {
    question: 'Can you provide the cETLus / UL 62368-1 electrical test reports for Amazon US & retail chains?',
    answer: 'Yes. All Petora plug-in and rechargeable products hold official Intertek cETLus listings (Control # 5029418) under UL 62368-1 and CSA C22.2 No. 62368-1, qualifying them immediately for Amazon US electrical gating, Walmart, and Target retail supply agreements.'
  },
  {
    question: 'How does the B2B Wholesale / OEM / ODM procurement process work?',
    answer: 'We provide direct factory FOB (Shenzhen/Ningbo) and DDP landed door-to-door delivery. Minimum order quantities start at 50 units for standard brand stock, 100 units for laser logo customization, and 500 units for bespoke retail packaging and OEM white-label app SDK integration. Inquiries receive official quote sheets and lab compliance certificates within 4 hours.'
  },
  {
    question: 'Can our company be added as "Additional Insured" on your Product Liability Insurance?',
    answer: 'Yes. We carry a $5,000,000 Worldwide Commercial General Product Liability policy through Allianz/Chubb. Upon contract signing, we can issue an official Certificate of Insurance (COI) naming your company as an additional insured party.'
  },
  {
    question: 'What is the Petora 30-Day Home Trial and 2-Year Global Warranty policy?',
    answer: 'For individual pet parents, we offer an unconditional 30-day money-back guarantee. If your pet does not love our smart feeder, fountain, or litter box, return it for a full refund. All hardware is covered under our 2-Year comprehensive factory replacement warranty.'
  },
  {
    question: 'Will the smart feeder work if my home Wi-Fi drops or during a power outage?',
    answer: 'Yes. All meal schedules are cached directly in the feeder’s non-volatile memory. In the event of a power blackout, the dual-power battery backup automatically takes over within milliseconds and keeps dispensing meals accurately for up to 180 days.'
  },
  {
    question: 'Is the companion mobile app free to use or does it require a monthly subscription?',
    answer: 'The Petora Smart Life mobile app is 100% free with no mandatory monthly subscription fees. You get unlimited live video streaming, schedule programming, multi-cat weight telemetry, and push alerts without hidden paywalls.'
  },
  {
    question: 'What types of pet food are compatible with the Petora Vision Pro dual hopper?',
    answer: 'The feeder handles dry kibble, air-dried raw morsels, and freeze-dried treats ranging from 2mm to 16mm in diameter. The dual-hopper allows mixing daily maintenance kibble with specialized dietary or freeze-dried rewards.'
  },
  {
    question: 'How do you handle wholesale sample orders before placing a bulk container order?',
    answer: 'We encourage verified pet retail chains, veterinary clinics, and distributors to order evaluation sample kits directly through our B2B RFQ portal. Sample order costs are 100% credited back to your account upon placing your first bulk container order.'
  }
];

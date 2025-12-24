// Sample data for the Wanderlux Journeys website

export interface Destination {
  id: string;
  slug: string;
  name: string;
  country: string;
  region: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  highlights: string[];
  bestTimeToVisit: string;
  weather: string;
  currency: string;
  language: string;
  coordinates: { lat: number; lng: number };
  featured: boolean;
  experiences: string[];
}

export interface Experience {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  duration: string;
  priceFrom: number;
  destinations: string[];
  highlights: string[];
  included: string[];
}

export interface Itinerary {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  destinations: string[];
  duration: string;
  priceFrom: number;
  highlights: string[];
  days: {
    day: number;
    title: string;
    description: string;
    activities: string[];
  }[];
  included: string[];
  excluded: string[];
  featured: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  image: string;
  quote: string;
  trip: string;
  rating: number;
}

// Sample Destinations
export const destinations: Destination[] = [
  {
    id: "1",
    slug: "santorini",
    name: "Santorini",
    country: "Greece",
    region: "europe",
    tagline: "Where the sunset paints the sky gold",
    description:
      "Discover the iconic white-washed villages perched on volcanic cliffs, overlooking the endless Aegean Sea.",
    longDescription:
      "Santorini is a crescent-shaped island that enchants travelers with its dramatic volcanic cliffs, iconic blue-domed churches, and breathtaking sunsets. The island offers a perfect blend of natural beauty, rich history, and world-class hospitality. From the charming villages of Oia and Fira to the ancient ruins of Akrotiri, every corner reveals a new wonder.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
      "https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80",
    ],
    highlights: [
      "Legendary Oia sunset views",
      "Wine tasting at volcanic vineyards",
      "Ancient Akrotiri archaeological site",
      "Private sailing excursions",
      "Boutique cave hotels",
    ],
    bestTimeToVisit: "April to October",
    weather: "Mediterranean climate with warm, dry summers",
    currency: "Euro (EUR)",
    language: "Greek",
    coordinates: { lat: 36.3932, lng: 25.4615 },
    featured: true,
    experiences: ["luxury-cruises", "cultural", "wellness"],
  },
  {
    id: "2",
    slug: "maldives",
    name: "Maldives",
    country: "Maldives",
    region: "asia",
    tagline: "Paradise found in the Indian Ocean",
    description:
      "Experience ultimate luxury in overwater villas surrounded by crystal-clear turquoise lagoons.",
    longDescription:
      "The Maldives is the epitome of tropical luxury, featuring pristine beaches, vibrant coral reefs, and some of the world's most exclusive resorts. Each private island resort offers an escape from the ordinary, where underwater dining, spa treatments at dawn, and bespoke experiences await.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80",
      "https://images.unsplash.com/photo-1540202404-1b927e27fa8b?w=800&q=80",
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=800&q=80",
    ],
    highlights: [
      "Overwater villa experiences",
      "Private island dining",
      "World-class diving & snorkeling",
      "Sunset dolphin cruises",
      "Underwater spa treatments",
    ],
    bestTimeToVisit: "November to April",
    weather: "Tropical with year-round warmth",
    currency: "Maldivian Rufiyaa (MVR)",
    language: "Dhivehi, English",
    coordinates: { lat: 3.2028, lng: 73.2207 },
    featured: true,
    experiences: ["wellness", "honeymoon", "diving"],
  },
  {
    id: "3",
    slug: "swiss-alps",
    name: "Swiss Alps",
    country: "Switzerland",
    region: "europe",
    tagline: "Majestic peaks and timeless elegance",
    description:
      "Journey through snow-capped mountains, pristine lakes, and charming alpine villages.",
    longDescription:
      "The Swiss Alps offer an unparalleled combination of natural grandeur and refined luxury. From the iconic Matterhorn to the glamorous resort towns of Zermatt and St. Moritz, experience world-class skiing, scenic train journeys, and Michelin-starred dining against a backdrop of stunning mountain scenery.",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      "https://images.unsplash.com/photo-1491555103944-7c647fd857e6?w=800&q=80",
      "https://images.unsplash.com/photo-1548345680-f5475ea5df84?w=800&q=80",
    ],
    highlights: [
      "Glacier Express scenic railway",
      "World-class skiing & snowboarding",
      "Luxury chalet accommodations",
      "Michelin-starred mountain dining",
      "Private helicopter tours",
    ],
    bestTimeToVisit: "December to March (winter), June to September (summer)",
    weather: "Alpine climate with cold winters and mild summers",
    currency: "Swiss Franc (CHF)",
    language: "German, French, Italian",
    coordinates: { lat: 46.8182, lng: 8.2275 },
    featured: true,
    experiences: ["adventure", "luxury-stays", "culinary"],
  },
  {
    id: "4",
    slug: "kyoto",
    name: "Kyoto",
    country: "Japan",
    region: "asia",
    tagline: "Where ancient traditions meet serene beauty",
    description:
      "Immerse yourself in centuries of Japanese culture, from sacred temples to intimate tea ceremonies.",
    longDescription:
      "Kyoto is Japan's cultural heart, home to over 2,000 temples, traditional geisha districts, and some of the world's most exquisite gardens. Experience the artistry of kaiseki cuisine, the tranquility of Zen gardens, and the timeless elegance of ryokan hospitality in this city where every season brings new beauty.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&q=80",
      "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
    ],
    highlights: [
      "Private temple visits at dawn",
      "Authentic tea ceremony experiences",
      "Geisha district walking tours",
      "Traditional ryokan stays",
      "Kaiseki culinary journeys",
    ],
    bestTimeToVisit: "March to May (cherry blossoms), October to November (autumn foliage)",
    weather: "Humid subtropical with distinct seasons",
    currency: "Japanese Yen (JPY)",
    language: "Japanese",
    coordinates: { lat: 35.0116, lng: 135.7681 },
    featured: true,
    experiences: ["cultural", "culinary", "wellness"],
  },
  {
    id: "5",
    slug: "serengeti",
    name: "Serengeti",
    country: "Tanzania",
    region: "africa",
    tagline: "Where the wild roams free",
    description:
      "Witness the Great Migration and experience Africa's most iconic wildlife safari.",
    longDescription:
      "The Serengeti is one of Africa's most celebrated wilderness areas, offering unparalleled wildlife viewing and the spectacle of the Great Migration. Stay in luxury tented camps and witness lions, elephants, and millions of wildebeest against the backdrop of endless golden plains.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80",
      "https://images.unsplash.com/photo-1549366021-9f761d450615?w=800&q=80",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80",
    ],
    highlights: [
      "Great Migration game drives",
      "Hot air balloon safaris",
      "Luxury tented camp experiences",
      "Private bush dinners",
      "Maasai cultural encounters",
    ],
    bestTimeToVisit: "June to October (dry season), January to February (calving season)",
    weather: "Tropical savanna with wet and dry seasons",
    currency: "Tanzanian Shilling (TZS)",
    language: "Swahili, English",
    coordinates: { lat: -2.3333, lng: 34.8333 },
    featured: true,
    experiences: ["safari", "adventure", "photography"],
  },
  {
    id: "6",
    slug: "amalfi-coast",
    name: "Amalfi Coast",
    country: "Italy",
    region: "europe",
    tagline: "La Dolce Vita by the sea",
    description:
      "Cruise along dramatic coastal cliffs, discovering charming villages and world-renowned cuisine.",
    longDescription:
      "The Amalfi Coast is Italy's most glamorous stretch of coastline, where colorful villages cling to dramatic cliffs above the azure Mediterranean. From the sophisticated allure of Positano to the historic charm of Ravello, experience la dolce vita with private yacht excursions, authentic cooking classes, and stays in clifftop boutique hotels.",
    image:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=800&q=80",
      "https://images.unsplash.com/photo-1533587851505-d119e13fa0d7?w=800&q=80",
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80",
    ],
    highlights: [
      "Private yacht cruises",
      "Limoncello tasting experiences",
      "Authentic Italian cooking classes",
      "Path of the Gods hiking",
      "Villa stays with sea views",
    ],
    bestTimeToVisit: "May to September",
    weather: "Mediterranean climate with warm, dry summers",
    currency: "Euro (EUR)",
    language: "Italian",
    coordinates: { lat: 40.6333, lng: 14.6 },
    featured: false,
    experiences: ["culinary", "luxury-cruises", "honeymoon"],
  },
  {
    id: "7",
    slug: "patagonia",
    name: "Patagonia",
    country: "Argentina & Chile",
    region: "americas",
    tagline: "The end of the world, the beginning of everything",
    description:
      "Explore vast wilderness of glaciers, mountains, and pristine nature at the edge of the world.",
    longDescription:
      "Patagonia is one of Earth's last wild frontiers, where massive glaciers meet turquoise lakes and granite spires pierce the sky. This remote region spanning Argentina and Chile offers extraordinary adventures from trekking Torres del Paine to witnessing the thundering Perito Moreno Glacier.",
    image:
      "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80",
      "https://images.unsplash.com/photo-1545703549-7bdb1d01b734?w=800&q=80",
    ],
    highlights: [
      "Torres del Paine trekking",
      "Perito Moreno Glacier expeditions",
      "Luxury estancia stays",
      "Wildlife watching",
      "Scenic helicopter flights",
    ],
    bestTimeToVisit: "October to April",
    weather: "Subpolar oceanic climate with strong winds",
    currency: "Argentine Peso / Chilean Peso",
    language: "Spanish",
    coordinates: { lat: -51.0, lng: -73.0 },
    featured: false,
    experiences: ["adventure", "photography", "nature"],
  },
  {
    id: "8",
    slug: "bora-bora",
    name: "Bora Bora",
    country: "French Polynesia",
    region: "oceania",
    tagline: "The jewel of the South Pacific",
    description:
      "Discover the ultimate tropical paradise with its legendary lagoon and luxury overwater bungalows.",
    longDescription:
      "Bora Bora is the epitome of romantic tropical luxury, renowned for its stunning lagoon in every shade of blue, dramatic Mount Otemanu, and world-famous overwater bungalows. This French Polynesian paradise offers unparalleled seclusion, exceptional dining, and unforgettable experiences.",
    image:
      "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1200&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
      "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=800&q=80",
    ],
    highlights: [
      "Overwater bungalow stays",
      "Glass-bottom boat tours",
      "Shark and ray feeding",
      "Private motu picnics",
      "Sunset sailing cruises",
    ],
    bestTimeToVisit: "May to October",
    weather: "Tropical maritime with warm temperatures year-round",
    currency: "CFP Franc (XPF)",
    language: "French, Tahitian",
    coordinates: { lat: -16.5004, lng: -151.7415 },
    featured: false,
    experiences: ["honeymoon", "luxury-stays", "diving"],
  },
];

// Sample Experiences
export const experiences: Experience[] = [
  {
    id: "1",
    slug: "private-tours",
    name: "Private Tours",
    tagline: "Exclusively yours, endlessly memorable",
    description:
      "Experience destinations with your own expert guide, tailored entirely to your interests and pace.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=80",
    icon: "compass",
    duration: "Customizable",
    priceFrom: 5000,
    destinations: ["santorini", "kyoto", "amalfi-coast"],
    highlights: [
      "Personal expert guides",
      "Customized itineraries",
      "Skip-the-line access",
      "Private transportation",
      "Flexible scheduling",
    ],
    included: [
      "Expert local guides",
      "Luxury vehicle transfers",
      "VIP access to attractions",
      "Personalized recommendations",
      "24/7 concierge support",
    ],
  },
  {
    id: "2",
    slug: "luxury-cruises",
    name: "Luxury Cruises",
    tagline: "Sail into extraordinary",
    description:
      "Navigate the world's most stunning coastlines aboard intimate, ultra-luxury vessels.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    icon: "ship",
    duration: "7-21 days",
    priceFrom: 8000,
    destinations: ["santorini", "amalfi-coast", "maldives"],
    highlights: [
      "Small ship intimacy",
      "All-inclusive luxury",
      "Shore excursions included",
      "Michelin-starred dining",
      "Butler service",
    ],
    included: [
      "Suite accommodations",
      "All meals & beverages",
      "Shore excursions",
      "Onboard entertainment",
      "Gratuities included",
    ],
  },
  {
    id: "3",
    slug: "safari-adventures",
    name: "Safari Adventures",
    tagline: "Where the wild meets luxury",
    description:
      "Witness Africa's magnificent wildlife from exclusive camps with expert naturalist guides.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    icon: "binoculars",
    duration: "5-14 days",
    priceFrom: 7500,
    destinations: ["serengeti"],
    highlights: [
      "Expert wildlife guides",
      "Luxury tented camps",
      "Hot air balloon safaris",
      "Bush dining experiences",
      "Conservation encounters",
    ],
    included: [
      "All game drives",
      "Park fees & conservancy fees",
      "Full board accommodation",
      "Laundry services",
      "Internal flights",
    ],
  },
  {
    id: "4",
    slug: "cultural-immersions",
    name: "Cultural Immersions",
    tagline: "Connect deeply with ancient traditions",
    description:
      "Go beyond sightseeing to experience authentic traditions, artisans, and local life.",
    image:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1200&q=80",
    icon: "landmark",
    duration: "3-10 days",
    priceFrom: 3500,
    destinations: ["kyoto", "santorini", "amalfi-coast"],
    highlights: [
      "Private ceremonies & rituals",
      "Artisan workshops",
      "Home-hosted meals",
      "Historical deep dives",
      "Local expert access",
    ],
    included: [
      "Cultural activities",
      "Expert cultural guides",
      "Authentic local meals",
      "Workshop materials",
      "Transportation",
    ],
  },
  {
    id: "5",
    slug: "wellness-retreats",
    name: "Wellness Retreats",
    tagline: "Restore, rejuvenate, transform",
    description:
      "Find balance at the world's most exclusive wellness destinations and spas.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
    icon: "heart",
    duration: "5-14 days",
    priceFrom: 6000,
    destinations: ["maldives", "swiss-alps", "bora-bora"],
    highlights: [
      "World-class spa treatments",
      "Yoga & meditation",
      "Healthy gourmet cuisine",
      "Fitness programs",
      "Holistic healing",
    ],
    included: [
      "Daily spa treatments",
      "Wellness activities",
      "Healthy meal plans",
      "Personal consultations",
      "Mindfulness sessions",
    ],
  },
  {
    id: "6",
    slug: "adventure-expeditions",
    name: "Adventure Expeditions",
    tagline: "For the bold at heart",
    description:
      "Push your limits with expertly guided adventures in the world's most dramatic landscapes.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    icon: "mountain",
    duration: "7-21 days",
    priceFrom: 5500,
    destinations: ["swiss-alps", "patagonia"],
    highlights: [
      "Expert mountain guides",
      "Premium equipment",
      "Remote lodge stays",
      "Helicopter access",
      "Photography opportunities",
    ],
    included: [
      "Professional guides",
      "Technical equipment",
      "Accommodation",
      "All meals",
      "Emergency support",
    ],
  },
];

// Sample Itineraries
export const itineraries: Itinerary[] = [
  {
    id: "1",
    slug: "greek-island-odyssey",
    name: "Greek Island Odyssey",
    tagline: "Island-hopping through ancient legends",
    description:
      "Sail through the Aegean, discovering the magic of Santorini, Mykonos, and hidden gems along the way.",
    image:
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=1200&q=80",
    destinations: ["santorini"],
    duration: "10 Days",
    priceFrom: 12500,
    highlights: [
      "Private yacht charter",
      "Sunset in Oia",
      "Ancient Delos exploration",
      "Wine tasting in Santorini",
      "Beach club experiences",
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Athens",
        description:
          "Welcome to Greece! Private transfer to your luxury hotel with views of the Acropolis.",
        activities: [
          "Airport VIP meet & greet",
          "Private transfer",
          "Welcome dinner at rooftop restaurant",
        ],
      },
      {
        day: 2,
        title: "Athens Discovery",
        description:
          "Explore the ancient wonders of Athens with your private guide.",
        activities: [
          "Early morning Acropolis visit",
          "Ancient Agora exploration",
          "Traditional lunch in Plaka",
          "Evening at leisure",
        ],
      },
      {
        day: 3,
        title: "Fly to Santorini",
        description: "Arrive in Santorini and settle into your cave suite in Oia.",
        activities: [
          "Scenic flight to Santorini",
          "Private transfer to hotel",
          "Afternoon wine tasting",
          "Famous Oia sunset",
        ],
      },
      {
        day: 4,
        title: "Santorini Exploration",
        description:
          "Discover the island's volcanic heritage and stunning villages.",
        activities: [
          "Akrotiri archaeological site",
          "Black beach visit",
          "Village hopping",
          "Private dining experience",
        ],
      },
      {
        day: 5,
        title: "Catamaran Cruise",
        description:
          "Sail around the caldera on your private catamaran.",
        activities: [
          "Morning departure",
          "Hot springs swimming",
          "Lunch on board",
          "Sunset cruise",
        ],
      },
    ],
    included: [
      "Luxury hotel accommodations",
      "Daily breakfast",
      "Private transfers throughout",
      "Private guided tours",
      "Domestic flights",
      "Private yacht charter",
      "Welcome & farewell dinners",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
      "Meals not specified",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "african-safari-luxury",
    name: "Ultimate African Safari",
    tagline: "Witness nature's greatest show",
    description:
      "Experience the magic of the Serengeti with exclusive camp stays and unforgettable wildlife encounters.",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1200&q=80",
    destinations: ["serengeti"],
    duration: "12 Days",
    priceFrom: 18000,
    highlights: [
      "Great Migration viewing",
      "Hot air balloon safari",
      "Private bush dinners",
      "Maasai village visit",
      "Ngorongoro Crater",
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Arusha",
        description:
          "Welcome to Tanzania! Relax at your luxury lodge before the adventure begins.",
        activities: [
          "VIP airport reception",
          "Private transfer to lodge",
          "Safari briefing",
          "Welcome dinner",
        ],
      },
      {
        day: 2,
        title: "Fly to Serengeti",
        description:
          "Scenic flight over the Rift Valley to your luxury tented camp.",
        activities: [
          "Bush plane flight",
          "Camp check-in",
          "Afternoon game drive",
          "Sundowners in the bush",
        ],
      },
      {
        day: 3,
        title: "Full Day Safari",
        description:
          "Spend the day tracking the Big Five across the endless plains.",
        activities: [
          "Dawn game drive",
          "Bush breakfast",
          "Big cat tracking",
          "Evening wildlife viewing",
        ],
      },
    ],
    included: [
      "Luxury tented camp accommodations",
      "All meals & drinks",
      "Twice-daily game drives",
      "Park & conservancy fees",
      "Internal flights",
      "Hot air balloon safari",
      "Expert naturalist guides",
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Travel insurance",
      "Gratuities",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "japan-cultural-journey",
    name: "Japan: The Art of Living",
    tagline: "A journey through timeless traditions",
    description:
      "From ancient temples to modern marvels, experience Japan's unique blend of tradition and innovation.",
    image:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80",
    destinations: ["kyoto"],
    duration: "14 Days",
    priceFrom: 15000,
    highlights: [
      "Private temple openings",
      "Authentic tea ceremony",
      "Ryokan experience",
      "Kaiseki dining",
      "Mt. Fuji views",
    ],
    days: [
      {
        day: 1,
        title: "Arrival in Tokyo",
        description:
          "Welcome to Japan! Settle into your luxury hotel in the heart of Tokyo.",
        activities: [
          "VIP airport meet & greet",
          "Private transfer",
          "Orientation walk",
          "Welcome kaiseki dinner",
        ],
      },
      {
        day: 2,
        title: "Tokyo Highlights",
        description:
          "Explore the contrasts of Japan's dynamic capital.",
        activities: [
          "Tsukiji Outer Market",
          "Historic Asakusa",
          "Shibuya & Harajuku",
          "Omakase sushi dinner",
        ],
      },
    ],
    included: [
      "5-star hotel & ryokan stays",
      "Daily breakfast",
      "Private transfers",
      "Japan Rail Pass (Green Car)",
      "Private guided experiences",
      "Cultural activities",
      "Special dining experiences",
    ],
    excluded: [
      "International flights",
      "Travel insurance",
      "Personal expenses",
    ],
    featured: true,
  },
];

// Sample Blog Posts
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "art-of-slow-travel",
    title: "The Art of Slow Travel: Why Less is More",
    excerpt:
      "Discover why the world's most discerning travelers are embracing a slower pace.",
    content:
      "In a world of fast-paced travel and bucket-list ticking, a new movement is emerging among luxury travelers...",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80",
    author: "Alexandra Sterling",
    date: "2024-12-15",
    category: "Travel Philosophy",
    tags: ["slow travel", "luxury", "mindful travel"],
    featured: true,
  },
  {
    id: "2",
    slug: "hidden-gems-mediterranean",
    title: "Hidden Gems of the Mediterranean",
    excerpt:
      "Beyond the crowds: Discover secret islands and coastal villages known only to locals.",
    content:
      "While Santorini and the Amalfi Coast draw millions, the Mediterranean holds countless secret treasures...",
    image:
      "https://images.unsplash.com/photo-1534008757030-27299c4371b6?w=1200&q=80",
    author: "Marcus Chen",
    date: "2024-12-10",
    category: "Destinations",
    tags: ["mediterranean", "hidden gems", "islands"],
    featured: true,
  },
  {
    id: "3",
    slug: "future-of-sustainable-luxury",
    title: "The Future of Sustainable Luxury Travel",
    excerpt:
      "How the world's finest hotels and experiences are leading the sustainability revolution.",
    content:
      "Luxury travel is being redefined by a new generation of eco-conscious properties and experiences...",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80",
    author: "Emma Richardson",
    date: "2024-12-05",
    category: "Sustainability",
    tags: ["sustainable travel", "eco luxury", "responsible tourism"],
    featured: false,
  },
  {
    id: "4",
    slug: "ultimate-honeymoon-guide",
    title: "The Ultimate Honeymoon Planning Guide",
    excerpt:
      "Everything you need to know to plan the romantic getaway of your dreams.",
    content:
      "Your honeymoon is one of the most significant trips of your life. Here's how to make it unforgettable...",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=80",
    author: "Alexandra Sterling",
    date: "2024-11-28",
    category: "Honeymoons",
    tags: ["honeymoon", "romance", "planning"],
    featured: true,
  },
];

// Sample Testimonials
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Victoria & James Hartford",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    quote:
      "Wanderlux transformed our anniversary into a fairy tale. Every detail was perfection, from the private yacht in Santorini to the surprise dinner under the stars.",
    trip: "Greek Island Odyssey",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    quote:
      "The Serengeti safari exceeded every expectation. Our guide's knowledge was extraordinary, and the luxury camps were beyond compare.",
    trip: "Ultimate African Safari",
    rating: 5,
  },
  {
    id: "3",
    name: "Sarah & David Miller",
    location: "New York, USA",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    quote:
      "Our Japan journey was truly transformative. The private temple visits and authentic cultural experiences were unlike anything we've ever encountered.",
    trip: "Japan: The Art of Living",
    rating: 5,
  },
];

// Helper functions
export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getExperienceBySlug(slug: string): Experience | undefined {
  return experiences.find((e) => e.slug === slug);
}

export function getItineraryBySlug(slug: string): Itinerary | undefined {
  return itineraries.find((i) => i.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedDestinations(): Destination[] {
  return destinations.filter((d) => d.featured);
}

export function getFeaturedItineraries(): Itinerary[] {
  return itineraries.filter((i) => i.featured);
}

export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}

export function getDestinationsByRegion(region: string): Destination[] {
  return destinations.filter((d) => d.region === region);
}

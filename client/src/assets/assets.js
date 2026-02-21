import tourist from "./tourist.png";
import worldmap from "./world2.png";
import touristimage from "./touristimage.png";

// paris images
import paris from "./paris.jpg";
import paris1 from "./paris1.jpg";
import paris2 from "./paris2.jpg";

// tokyo
import tokyo from "./tokyo.jpg";
import tokyo1 from "./tokyo1.jpg";
import tokyo2 from "./tokyo2.jpg";

// newyork
import newyork from "./newyork.jpg";
import newyork1 from "./newyork1.jpg";
import newyork2 from "./newyork2.png";

import author1 from "./author1.jpg";
import author2 from "./author2.jpg";
import author3 from "./author3.jpg";

const assets = {
  tourist,
  worldmap,
  touristimage,
};
export default assets;

export const categories = [
  { id: 1, name: "Beach Getaways", count: 24, icon: "🏖️" },
  { id: 2, name: "Mountain Adventures", count: 18, icon: "🏔️" },
  { id: 3, name: "City Breaks", count: 32, icon: "🏙️" },
  { id: 4, name: "Cultural Tours", count: 21, icon: "🏛️" },
  { id: 5, name: "Romantic Escapes", count: 15, icon: "❤️" },
  { id: 6, name: "Family Friendly", count: 27, icon: "👨‍👩‍👧‍👦" },
  { id: 7, name: "Adventure Travel", count: 19, icon: "🧗" },
  { id: 8, name: "Luxury Experiences", count: 12, icon: "✨" },
];

// destinations
export const topDestinations = [
  {
    id: 1,
    name: "Paris",
    country: "France",
    image: paris,
    images: [paris1, paris2],
    rating: 4.9,
    reviews: 2789,
    price: "KES599",
    description:
      "The City of Light beckons with iconic landmarks, world-class cuisine, and romantic ambiance. From the Eiffel Tower to charming cafés, experience timeless elegance.",
    highlights: [
      "Eiffel Tower",
      "Louvre Museum",
      "Seine River Cruise",
      "French Cuisine",
    ],
    bestTime: "April-June, Sept-Oct",
    duration: "4-7 days",
  },
  {
    id: 2,
    name: "Tokyo",
    country: "Japan",
    image: tokyo,
    images: [tokyo1, tokyo2],
    rating: 4.9,
    reviews: 2789,
    price: "KES899",
    description:
      "Where ancient traditions meet futuristic innovation. Explore serene temples, neon-lit streets, and the world's finest dining scene in this mesmerizing metropolis.",
    highlights: [
      "Shibuya Crossing",
      "Senso-ji Temple",
      "Tsukiji Market",
      "Cherry Blossoms",
    ],
    bestTime: "March-May, Oct-Nov",
    duration: "5-8 days",
  },
  {
    id: 3,
    name: "New York",
    country: "USA",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 2789,
    price: "KES699",
    description:
      "The city that never sleeps offers world-famous attractions, diverse neighborhoods, and endless entertainment. Experience the energy of the Big Apple.",
    highlights: [
      "Statue of Liberty",
      "Times Square",
      "Central Park",
      "Broadway Shows",
    ],
    bestTime: "April-June, Sept-Nov",
    duration: "4-6 days",
  },
  {
    id: 4,
    name: "Rome",
    country: "Italy",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 2789,
    price: "KES649",
    description:
      "Walk through 2,500 years of history in the Eternal City. Ancient ruins, Renaissance art, and authentic Italian cuisine create an unforgettable journey.",
    highlights: [
      "Colosseum",
      "Vatican City",
      "Trevi Fountain",
      "Italian Pasta",
    ],
    bestTime: "April-June, Sept-Oct",
    duration: "4-6 days",
  },

  {
    id: 5,
    name: "Bali",
    country: "Indonesia",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 2789,
    price: "KES499",
    description:
      "Paradise found! Lush rice terraces, ancient temples, and pristine beaches await. Immerse yourself in spiritual culture and breathtaking natural beauty.",
    highlights: [
      "Uluwatu Temple",
      "Rice Terraces",
      "Beach Clubs",
      "Yoga Retreats",
    ],
    bestTime: "April-Oct",
    duration: "6-10 days",
  },
  {
    id: 6,
    name: "London",
    country: "UK",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 2789,
    price: "KES749",
    description:
      "Royal heritage, world-class museums, and vibrant culture define this historic capital. From Buckingham Palace to modern art, London offers endless discovery.",
    highlights: [
      "London Eye",
      "Tower of London",
      "British Museum",
      "West End Theatre",
    ],
    bestTime: "May-Sept",
    duration: "4-6 days",
  },
  {
    id: 7,
    name: "Dubai",
    country: "UAE",
    image: newyork,
    images: [newyork1, newyork2],
    price: "$849",
    rating: 4.9,
    reviews: 2789,
    description:
      "A desert metropolis of superlatives. Marvel at futuristic architecture, shop in luxury malls, and experience Arabian hospitality in the heart of the desert.",
    highlights: [
      "Burj Khalifa",
      "Desert Safari",
      "Dubai Mall",
      "Palm Jumeirah",
    ],
    bestTime: "Nov-March",
    duration: "4-5 days",
  },
  {
    id: 8,
    name: "Santorini",
    country: "Greece",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 2789,
    price: "$679",
    description:
      "Iconic whitewashed buildings perched on volcanic cliffs. Sunset views, crystal waters, and charming villages make this the ultimate romantic getaway.",
    highlights: [
      "Oia Sunset",
      "Caldera Views",
      "Black Sand Beaches",
      "Wine Tasting",
    ],
    bestTime: "May-Oct",
    duration: "3-5 days",
  },
  {
    id: 9,
    name: "Swiss Alps",
    country: "Switzerland",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.9,
    reviews: 1987,
    price: "KES1299",
    category: "Mountain Adventures",
    duration: "5-7 days",
    description: "Breathtaking mountain scenery and world-class skiing.",
    highlights: ["Matterhorn", "Jungfrau", "Ski Resorts"],
    bestTime: "Dec-March",
  },
  {
    id: 10,
    name: "Kyoto",
    country: "Japan",
    image: newyork,
    images: [newyork1, newyork2],
    rating: 4.8,
    reviews: 2156,
    price: "KES799",
    category: "Cultural Tours",
    duration: "4-6 days",
    description: "Ancient temples, traditional gardens, and geisha culture.",
    highlights: ["Fushimi Inari", "Kinkaku-ji", "Arashiyama"],
    bestTime: "March-May, Oct-Nov",
  },
];

export const travelStories = [
  {
    id: 1,
    title: "10 Hidden Gems in Bali You Must Visit",
    excerpt:
      "Away from the crowds, discover these secret spots that only locals know about.",

    author: "Sarah Johnson",
    authorImage: author1,
    date: "Mar 15, 2024",
    readTime: "5 min read",
    category: "Travel Tips",
  },
  {
    id: 2,
    title: "Ultimate Guide to Japanese Cuisine",
    excerpt: "From street food to Michelin stars, what to eat in Japan.",

    author: "Mike Chen",
    authorImage: author2,
    date: "Mar 12, 2024",
    readTime: "8 min read",
    category: "Food Guide",
  },
  {
    id: 3,
    title: "Budget Travel: How to Visit Europe for Less",
    excerpt: "Smart tips to save money while experiencing the best of Europe.",

    author: "Emma Watson",
    authorImage: author3,
    date: "Mar 10, 2024",
    readTime: "6 min read",
    category: "Budget Travel",
  },
];

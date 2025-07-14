export interface Property {
  id: number;
  name: string;
  location: string;
  area: string;
  rooms: string;
  features: string[];
  images: string[];
  price?: string;
  year?: string;
  parking?: string;
  garden?: boolean;
  pool?: boolean;
  view?: string;
  style?: string;
  sold?: boolean;
  // Extended property details
  size: number;
  bedrooms: number;
  bathrooms: number;
  energyClass: string;
  description: string;
  landSize: number;
  yearBuilt: number;
  heatingType: string;
  parkingSpaces: number;
  additionalCosts: string;
  commission: string;
  totalPrice: string;
  nearbyAmenities: string[];
  distances: { location: string; distance: string }[];
}

export const properties: Property[] = [
  {
    id: 1,
    name: "Residenz Kössen",
    location: "Kitzbüheler Alpen, Österreich",
    area: "320 m²",
    rooms: "5 Zimmer",
    year: "2021",
    parking: "2 Stellplätze",
    view: "Alpenpanorama",
    style: "Modern",
    features: ["Privatgarten", "Infinity-Pool", "Alpenpanorama", "Wellness-Bereich"],
    images: [
      "/images/properties/haus-koessen/haus-1.jpg",
      "/images/properties/haus-koessen/wohnzimmer-5.jpg",
      "/images/properties/haus-koessen/schlafzimmer-1.jpg",
      "/images/properties/haus-koessen/badezimmer-1.jpg",
      "/images/properties/haus-koessen/garten-1.jpg",
      "/images/properties/haus-koessen/pool-2.jpg"
    ],
    price: "2.850.000 €",
    size: 320,
    bedrooms: 4,
    bathrooms: 3,
    energyClass: "A+",
    description: "Diese exquisite Residenz in den Kitzbüheler Alpen vereint modernste Architektur mit höchstem Wohnkomfort. Die großzügige Raumaufteilung bietet optimale Lichtverhältnisse durch bodentiefe Fenster und eine durchdachte Grundrissgestaltung. Besondere Highlights sind das atemberaubende Alpenpanorama sowie die hochwertige Ausstattung mit Smart-Home-System und energieeffizienter Haustechnik.",
    landSize: 850,
    yearBuilt: 2021,
    heatingType: "Wärmepumpe",
    parkingSpaces: 2,
    additionalCosts: "85.000 €",
    commission: "3,57% inkl. MwSt.",
    totalPrice: "2.987.000 €",
    nearbyAmenities: [
      "Skigebiet Wilder Kaiser - 2,5 km",
      "Golfplatz Kaiserwinkl - 3 km", 
      "Einkaufszentrum - 1,5 km",
      "Restaurants & Cafés - 800 m",
      "Wanderwege - 200 m"
    ],
    distances: [
      { location: "Kufstein", distance: "12 km" },
      { location: "Kitzbühel", distance: "25 km" },
      { location: "München", distance: "120 km" },
      { location: "Salzburg", distance: "85 km" }
    ]
  },
  {
    id: 2,
    name: "Villa Kufstein",
    location: "Kufstein, Österreich",
    area: "280 m²",
    rooms: "4 Zimmer",
    year: "2020",
    parking: "Garage",
    view: "Stadtblick",
    style: "Minimalistisch",
    features: ["Minimalistische Architektur", "Wellness-Bereich", "Panoramaterrasse", "Smart-Home"],
    images: [
      "/images/properties/haus-kufstein/haus-2.jpg",
      "/images/properties/haus-kufstein/schlafzimmer-9.jpg",
      "/images/properties/haus-kufstein/badezimmer-2.jpg",
      "/images/properties/haus-kufstein/pool-1.jpg"
    ],
    price: "1.890.000 €",
    size: 280,
    bedrooms: 3,
    bathrooms: 2,
    energyClass: "A",
    description: "Moderne Villa mit minimalistischer Architektur in bester Lage von Kufstein. Die durchdachte Raumaufteilung und hochwertige Ausstattung schaffen ein einzigartiges Wohngefühl. Große Glasfronten bieten herrliche Ausblicke auf die umliegende Berglandschaft.",
    landSize: 650,
    yearBuilt: 2020,
    heatingType: "Fernwärme",
    parkingSpaces: 2,
    additionalCosts: "65.000 €",
    commission: "3,57% inkl. MwSt.",
    totalPrice: "2.022.000 €",
    nearbyAmenities: [
      "Altstadt Kufstein - 1 km",
      "Festung Kufstein - 1,2 km",
      "Einkaufszentrum - 800 m",
      "Schulen - 600 m",
      "Sportzentrum - 1,5 km"
    ],
    distances: [
      { location: "München", distance: "95 km" },
      { location: "Salzburg", distance: "65 km" },
      { location: "Innsbruck", distance: "45 km" },
      { location: "Kössen", distance: "12 km" }
    ]
  },
  {
    id: 3,
    name: "Domizil Vorarlberg",
    location: "Vorarlberg, Österreich",
    area: "450 m²",
    rooms: "6 Zimmer",
    year: "2019",
    parking: "3 Stellplätze",
    view: "Bergpanorama",
    style: "Luxuriös",
    features: ["Luxuriöse Ausstattung", "Parkähnlicher Garten", "Exklusiver Pool", "Weinkeller"],
    images: [
      "/images/properties/haus-vorarlberg/haus-5.jpg",
      "/images/properties/haus-vorarlberg/wohnzimmer-2.jpg",
      "/images/properties/haus-vorarlberg/schlafzimmer-7.jpg",
      "/images/properties/haus-vorarlberg/badezimmer-3.jpg",
      "/images/properties/haus-vorarlberg/garten-2.jpg",
      "/images/properties/haus-vorarlberg/pool-3.jpg"
    ],
    price: "3.650.000 €",
    size: 450,
    bedrooms: 5,
    bathrooms: 4,
    energyClass: "A+",
    description: "Exklusives Domizil in Vorarlberg mit luxuriöser Ausstattung und parkähnlichem Garten. Diese einzigartige Immobilie bietet höchsten Wohnkomfort in einer der schönsten Regionen Österreichs mit direktem Blick auf die majestätische Berglandschaft.",
    landSize: 1200,
    yearBuilt: 2019,
    heatingType: "Geothermie",
    parkingSpaces: 3,
    additionalCosts: "125.000 €",
    commission: "3,57% inkl. MwSt.",
    totalPrice: "3.905.000 €",
    nearbyAmenities: [
      "Skigebiet Brandnertal - 5 km",
      "Golfplatz - 2 km",
      "Luxus-Spa - 3 km",
      "Einkaufszentrum - 4 km",
      "Restaurants - 1 km"
    ],
    distances: [
      { location: "Bludenz", distance: "15 km" },
      { location: "St. Anton", distance: "35 km" },
      { location: "Zürich", distance: "180 km" },
      { location: "Innsbruck", distance: "95 km" }
    ]
  },
  {
    id: 4,
    name: "Penthouse Oberhaching",
    location: "Oberhaching, Deutschland",
    area: "380 m²",
    rooms: "7 Zimmer",
    year: "2022",
    parking: "Tiefgarage",
    view: "Panoramablick",
    style: "Exklusiv",
    features: ["Exklusiver Wellness-Bereich", "Rooftop-Pool", "Panoramablick", "Butler-Service"],
    images: [
      "/images/properties/mfh-oberhaching/haus-3.jpg",
      "/images/properties/mfh-oberhaching/wohnzimmer-3.jpg",
      "/images/properties/mfh-oberhaching/schlafzimmer-8.jpg",
      "/images/properties/mfh-oberhaching/badezimmer-4.jpg",
      "/images/properties/mfh-oberhaching/pool-4.jpg",
      "/images/properties/mfh-oberhaching/pool-innen-1.jpg"
    ],
    price: "4.250.000 €",
    size: 380,
    bedrooms: 5,
    bathrooms: 4,
    energyClass: "A++",
    description: "Exklusives Penthouse in Oberhaching mit atemberaubendem Panoramablick und luxuriösem Wellness-Bereich. Diese einzigartige Immobilie bietet höchsten Komfort und Privatsphäre in einer der begehrtesten Lagen Münchens.",
    landSize: 150,
    yearBuilt: 2022,
    heatingType: "Smart-Klimasystem",
    parkingSpaces: 3,
    additionalCosts: "145.000 €",
    commission: "3,57% inkl. MwSt.",
    totalPrice: "4.546.000 €",
    nearbyAmenities: [
      "S-Bahn Station - 500 m",
      "München Zentrum - 15 km",
      "Einkaufszentrum - 1 km",
      "Restaurants - 300 m",
      "Fitnessstudio - 800 m"
    ],
    distances: [
      { location: "München", distance: "15 km" },
      { location: "Flughafen München", distance: "25 km" },
      { location: "Starnberger See", distance: "20 km" },
      { location: "A8 Autobahn", distance: "5 km" }
    ]
  },
  {
    id: 5,
    name: "Residenz Tengstraße",
    location: "München, Deutschland",
    area: "250 m²",
    rooms: "4 Zimmer",
    year: "2021",
    parking: "1 Stellplatz",
    view: "Stadtblick",
    style: "Elegant",
    features: ["Zentrale Lage", "Stilvolle Architektur", "Südterrasse", "Concierge-Service"],
    images: [
      "/images/properties/tengstr/haus-4.jpg",
      "/images/properties/tengstr/wohnzimmer-1.jpg",
      "/images/properties/tengstr/wohnzimmer-4.jpg",
      "/images/properties/tengstr/schlafzimmer-6.jpg",
      "/images/properties/tengstr/badezimmer-5.jpg",
      "/images/properties/tengstr/terrasse-1.jpg"
    ],
    price: "1.950.000 €",
    size: 250,
    bedrooms: 3,
    bathrooms: 2,
    energyClass: "A",
    description: "Elegante Residenz in zentraler Münchener Lage mit stilvoller Architektur und exklusiver Ausstattung. Die Südterrasse und der Concierge-Service machen diese Immobilie zu einem besonderen Wohnjuwel.",
    landSize: 85,
    yearBuilt: 2021,
    heatingType: "Fernwärme",
    parkingSpaces: 1,
    additionalCosts: "75.000 €",
    commission: "3,57% inkl. MwSt.",
    totalPrice: "2.094.000 €",
    nearbyAmenities: [
      "Marienplatz - 2 km",
      "Englischer Garten - 1,5 km",
      "Luxus-Shopping - 500 m",
      "Restaurants - 200 m",
      "U-Bahn - 300 m"
    ],
    distances: [
      { location: "Hauptbahnhof", distance: "3 km" },
      { location: "Flughafen", distance: "45 km" },
      { location: "Olympiapark", distance: "8 km" },
      { location: "BMW Welt", distance: "10 km" }
    ]
  }
];

// Sold properties (fake data for demonstration)
export const soldProperties: Property[] = [
  {
    id: 101,
    name: "Villa München",
    location: "München, Deutschland",
    area: "420 m²",
    rooms: "6 Zimmer",
    year: "2020",
    parking: "2 Stellplätze",
    view: "Stadtblick",
    style: "VERKAUFT",
    features: ["Verkauft"],
    images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
    sold: true,
    price: "VERKAUFT",
    size: 420,
    bedrooms: 5,
    bathrooms: 3,
    energyClass: "A",
    description: "Diese Villa wurde erfolgreich verkauft.",
    landSize: 800,
    yearBuilt: 2020,
    heatingType: "Wärmepumpe",
    parkingSpaces: 2,
    additionalCosts: "VERKAUFT",
    commission: "VERKAUFT",
    totalPrice: "VERKAUFT",
    nearbyAmenities: ["VERKAUFT"],
    distances: [{ location: "VERKAUFT", distance: "VERKAUFT" }]
  },
  {
    id: 102,
    name: "Penthouse Berlin",
    location: "Berlin, Deutschland", 
    area: "380 m²",
    rooms: "5 Zimmer",
    year: "2021",
    parking: "Tiefgarage",
    view: "Panoramablick",
    style: "VERKAUFT",
    features: ["Verkauft"],
    images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
    sold: true,
    price: "VERKAUFT",
    size: 380,
    bedrooms: 4,
    bathrooms: 3,
    energyClass: "A+",
    description: "Dieses Penthouse wurde erfolgreich verkauft.",
    landSize: 120,
    yearBuilt: 2021,
    heatingType: "Fernwärme",
    parkingSpaces: 2,
    additionalCosts: "VERKAUFT",
    commission: "VERKAUFT",
    totalPrice: "VERKAUFT",
    nearbyAmenities: ["VERKAUFT"],
    distances: [{ location: "VERKAUFT", distance: "VERKAUFT" }]
  },
  {
    id: 103,
    name: "Landhaus Salzburg",
    location: "Salzburg, Österreich",
    area: "520 m²", 
    rooms: "8 Zimmer",
    year: "2019",
    parking: "3 Stellplätze",
    view: "Alpenpanorama",
    style: "VERKAUFT",
    features: ["Verkauft"],
    images: ["https://placehold.co/600x400/f3f4f6/6b7280?text=VERKAUFT"],
    sold: true,
    price: "VERKAUFT",
    size: 520,
    bedrooms: 6,
    bathrooms: 5,
    energyClass: "B",
    description: "Dieses Landhaus wurde erfolgreich verkauft.",
    landSize: 1500,
    yearBuilt: 2019,
    heatingType: "Ölheizung",
    parkingSpaces: 3,
    additionalCosts: "VERKAUFT",
    commission: "VERKAUFT",
    totalPrice: "VERKAUFT",
    nearbyAmenities: ["VERKAUFT"],
    distances: [{ location: "VERKAUFT", distance: "VERKAUFT" }]
  }
];

export const allProperties = [...properties, ...soldProperties];

// Hilfsfunktion um aus Text einen URL-Slug zu machen
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Akzente entfernen
    .replace(/[^a-z0-9\s-]/g, '') // Nur Buchstaben, Zahlen, Leerzeichen und Bindestriche
    .replace(/\s+/g, '-') // Leerzeichen zu Bindestrichen
    .replace(/-+/g, '-') // Mehrfache Bindestriche reduzieren
    .trim();
}

// Hilfsfunktion um Property URL zu generieren
export function getPropertyUrl(property: Property): string {
  const region = createSlug(property.location.split(',')[0]);
  const title = createSlug(property.name);
  return `/properties/${region}/${title}`;
}

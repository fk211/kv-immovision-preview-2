import PropertyDetailNew from '@/components/properties/PropertyDetailNew';
import { properties, createSlug, type Property } from '@/data/properties';
import { notFound } from 'next/navigation';

interface PropertyPageProps {
  params: Promise<{
    region: string;
    title: string;
  }>;
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  const { region, title } = await params;
  
  // Property anhand der URL-Parameter finden
  const property = properties.find((p: Property) => {
    const regionSlug = createSlug(p.location.split(',')[0]); // Ersten Teil der Location nehmen
    const titleSlug = createSlug(p.name);
    
    return regionSlug === region && titleSlug === title;
  });

  if (!property) {
    notFound();
  }

  return <PropertyDetailNew property={property} />;
}

// Metadata für SEO
export async function generateMetadata({ params }: PropertyPageProps) {
  const { region, title } = await params;
  
  const property = properties.find((p: Property) => {
    const regionSlug = createSlug(p.location.split(',')[0]);
    const titleSlug = createSlug(p.name);
    
    return regionSlug === region && titleSlug === title;
  });

  if (!property) {
    return {
      title: 'Property not found'
    };
  }

  return {
    title: `${property.name} - ${property.location} | KG Immovision`,
    description: `${property.area} ${property.rooms} in ${property.location}. ${property.features.join(', ')}.`,
    openGraph: {
      title: property.name,
      description: `Luxusimmobilie in ${property.location}`,
      images: property.images.slice(0, 1),
    },
  };
}

// Statische Pfade für bessere Performance generieren
export async function generateStaticParams() {
  return properties.map((property: Property) => ({
    region: createSlug(property.location.split(',')[0]),
    title: createSlug(property.name),
  }));
}

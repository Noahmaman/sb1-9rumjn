import { useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import { MapPin } from 'lucide-react';

const cityProperties = {
  "new-york": {
    name: "New York",
    description: "Experience the vibrant energy of the Big Apple with our curated selection of stays across Manhattan, Brooklyn, and beyond.",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    properties: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Luxury Manhattan Loft",
        location: "Manhattan, New York",
        price: 450,
        rating: 4.92,
        dates: "Mar 15-20"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        title: "Brooklyn Brownstone",
        location: "Brooklyn, New York",
        price: 380,
        rating: 4.88,
        dates: "Apr 1-6"
      }
    ]
  }
};

export default function DestinationPage() {
  const { city } = useParams();
  const destination = cityProperties[city as keyof typeof cityProperties];

  if (!destination) {
    return <div>Destination not found</div>;
  }

  return (
    <div>
      <div className="relative h-[400px]">
        <img 
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center justify-center">
              <MapPin className="h-5 w-5" />
              <span className="ml-2">{destination.properties.length} properties</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mb-12">
          {destination.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {destination.properties.map((property) => (
            <PropertyCard key={property.id} {...property} />
          ))}
        </div>
      </div>
    </div>
  );
}
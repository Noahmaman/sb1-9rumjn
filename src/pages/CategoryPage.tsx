import { useParams } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';

const categoryProperties = {
  beach: [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Beachfront Villa",
      location: "Maui, Hawaii",
      price: 650,
      rating: 4.96,
      dates: "Mar 15-20"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Ocean View Suite",
      location: "Cancun, Mexico",
      price: 450,
      rating: 4.89,
      dates: "Apr 1-6"
    }
  ],
  mountains: [
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Alpine Chalet",
      location: "Swiss Alps",
      price: 550,
      rating: 4.92,
      dates: "Mar 20-25"
    }
  ]
};

export default function CategoryPage() {
  const { category } = useParams();
  const properties = categoryProperties[category as keyof typeof categoryProperties] || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 capitalize">{category} Stays</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
}
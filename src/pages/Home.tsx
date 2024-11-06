import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProperties from '../components/FeaturedProperties';
import PopularDestinations from '../components/PopularDestinations';
import PropertyCard from '../components/PropertyCard';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa with Ocean View",
    location: "Malibu, California",
    price: 550,
    rating: 4.95,
    dates: "Mar 15-20"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Penthouse Downtown",
    location: "Manhattan, New York",
    price: 800,
    rating: 4.98,
    dates: "Apr 1-6"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Cozy Mountain Cabin",
    location: "Aspen, Colorado",
    price: 350,
    rating: 4.92,
    dates: "Mar 20-25"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Beachfront Paradise",
    location: "Miami Beach, Florida",
    price: 450,
    rating: 4.87,
    dates: "Apr 10-15"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Historic Downtown Loft",
    location: "Chicago, Illinois",
    price: 275,
    rating: 4.89,
    dates: "Mar 25-30"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Desert Oasis Villa",
    location: "Scottsdale, Arizona",
    price: 420,
    rating: 4.94,
    dates: "Apr 5-10"
  }
];

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <FeaturedProperties />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Places to stay</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
      </div>

      <PopularDestinations />
    </div>
  );
}
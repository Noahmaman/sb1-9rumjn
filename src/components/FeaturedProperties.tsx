import PropertyCard from './PropertyCard';

const featuredProperties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Modern Villa with Ocean View",
    location: "Malibu, California",
    price: 550,
    rating: 4.95,
    dates: "Mar 15-20",
    featured: true
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    title: "Luxury Penthouse Downtown",
    location: "Manhattan, New York",
    price: 800,
    rating: 4.98,
    dates: "Apr 1-6",
    featured: true
  }
];

export default function FeaturedProperties() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold mb-6">Featured Places to Stay</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {featuredProperties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  );
}
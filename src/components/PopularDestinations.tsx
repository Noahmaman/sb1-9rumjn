import { Link } from 'react-router-dom';

const destinations = [
  {
    name: "New York",
    slug: "new-york",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: 1234
  },
  {
    name: "Paris",
    slug: "paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: 892
  },
  {
    name: "Tokyo",
    slug: "tokyo",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: 645
  },
  {
    name: "London",
    slug: "london",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    properties: 1023
  }
];

export default function PopularDestinations() {
  return (
    <section className="container mx-auto px-4 py-12 bg-gray-50">
      <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <Link 
            key={destination.name}
            to={`/destination/${destination.slug}`}
            className="relative rounded-lg overflow-hidden group cursor-pointer"
          >
            <img 
              src={destination.image} 
              alt={destination.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
            />
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-4 text-white">
              <h3 className="font-semibold text-lg">{destination.name}</h3>
              <p className="text-sm">{destination.properties} properties</p></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
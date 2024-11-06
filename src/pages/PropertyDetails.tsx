import { useParams } from 'react-router-dom';
import { Star, MapPin, Calendar, Users, Wifi, Car, Tv, Coffee } from 'lucide-react';

export default function PropertyDetails() {
  const { id } = useParams();

  // In a real app, fetch property details based on id
  const property = {
    id: 1,
    title: "Modern Villa with Ocean View",
    location: "Malibu, California",
    price: 550,
    rating: 4.95,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
    ],
    description: "Experience luxury living in this stunning modern villa overlooking the Pacific Ocean. Perfect for families or groups looking for an unforgettable stay in Malibu.",
    amenities: ["WiFi", "Parking", "TV", "Kitchen"]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{property.title}</h1>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1 font-semibold">{property.rating}</span>
            <span className="ml-1 text-gray-600">({property.reviews} reviews)</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-5 w-5" />
            <span className="ml-1">{property.location}</span>
          </div>
        </div>
        <span className="text-2xl font-bold">${property.price} <span className="text-base font-normal">/ night</span></span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        <img 
          src={property.images[0]} 
          alt={property.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        <div className="grid grid-cols-2 gap-4">
          {property.images.slice(1).map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`${property.title} ${index + 2}`}
              className="w-full h-[195px] object-cover rounded-lg"
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">About this place</h2>
          <p className="text-gray-600 mb-6">{property.description}</p>

          <h3 className="text-xl font-semibold mb-4">Amenities</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Wifi className="h-5 w-5" />
              <span>WiFi</span>
            </div>
            <div className="flex items-center space-x-2">
              <Car className="h-5 w-5" />
              <span>Parking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Tv className="h-5 w-5" />
              <span>TV</span>
            </div>
            <div className="flex items-center space-x-2">
              <Coffee className="h-5 w-5" />
              <span>Kitchen</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border h-fit sticky top-24">
          <div className="flex items-center justify-between mb-6">
            <span className="text-2xl font-bold">${property.price}</span>
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1">{property.rating}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="border rounded-lg p-2">
                <label className="block text-sm text-gray-600">Check-in</label>
                <input type="date" className="w-full mt-1" />
              </div>
              <div className="border rounded-lg p-2">
                <label className="block text-sm text-gray-600">Check-out</label>
                <input type="date" className="w-full mt-1" />
              </div>
            </div>

            <div className="border rounded-lg p-2">
              <label className="block text-sm text-gray-600">Guests</label>
              <div className="flex items-center mt-1">
                <Users className="h-5 w-5 text-gray-400" />
                <select className="w-full ml-2 bg-transparent">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-rose-500 text-white py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
              Reserve
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
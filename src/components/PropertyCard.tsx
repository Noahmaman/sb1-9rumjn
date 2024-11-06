import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  id: number;
  image: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  dates: string;
}

export default function PropertyCard({ id, image, title, location, price, rating, dates }: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`} className="group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={title}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full hover:bg-gray-100/90"
          onClick={(e) => {
            e.preventDefault();
            // Handle wishlist logic
          }}
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>
      
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <h3 className="font-medium text-lg">{title}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-gray-500">{location}</p>
        <p className="text-gray-500">{dates}</p>
        <p className="mt-2">
          <span className="font-semibold">${price}</span> night
        </p>
      </div>
    </Link>
  );
}
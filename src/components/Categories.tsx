import { Palmtree, Mountain, Building2, Tent, Warehouse, Castle } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  { name: 'beach', label: 'Beach', icon: Palmtree },
  { name: 'mountains', label: 'Mountains', icon: Mountain },
  { name: 'city', label: 'City', icon: Building2 },
  { name: 'camping', label: 'Camping', icon: Tent },
  { name: 'lofts', label: 'Lofts', icon: Warehouse },
  { name: 'castles', label: 'Castles', icon: Castle },
];

export default function Categories() {
  return (
    <div className="container mx-auto px-4 py-4 border-b">
      <div className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category/${category.name}`}
            className="flex flex-col items-center space-y-2 text-gray-600 hover:text-gray-900 hover:border-b-2 border-gray-900 pb-2 transition-colors min-w-fit"
          >
            <category.icon className="h-6 w-6" />
            <span className="text-sm">{category.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
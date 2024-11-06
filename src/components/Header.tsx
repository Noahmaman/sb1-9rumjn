import { Search, MapPin, Menu, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 text-rose-500">
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.0002 2L5.13452 6.32C3.77252 7.19 3.77252 9.19 5.13452 10.06L12.0002 14.38L18.8652 10.06C20.2272 9.19 20.2272 7.19 18.8652 6.32L12.0002 2Z"/>
            <path d="M5.13452 13.94L12.0002 18.26L18.8652 13.94C20.2272 13.07 20.2272 11.07 18.8652 10.2L12.0002 14.52L5.13452 10.2C3.77252 11.07 3.77252 13.07 5.13452 13.94Z"/>
            <path d="M5.13452 17.82L12.0002 22.14L18.8652 17.82C20.2272 16.95 20.2272 14.95 18.8652 14.08L12.0002 18.4L5.13452 14.08C3.77252 14.95 3.77252 16.95 5.13452 17.82Z"/>
          </svg>
          <span className="text-xl font-bold">stayscape</span>
        </Link>

        <div className="flex items-center px-4 py-2 rounded-full border shadow-sm hover:shadow-md transition-shadow">
          <input 
            type="text" 
            placeholder="Where to?" 
            className="outline-none w-[180px] sm:w-[300px]"
          />
          <Search className="h-5 w-5 text-gray-500 cursor-pointer" />
        </div>

        <div className="flex items-center space-x-4">
          <Link 
            to="/become-host" 
            className="hidden sm:block hover:bg-gray-100 px-4 py-2 rounded-full"
          >
            Become a host
          </Link>
          <button className="flex items-center space-x-2 border p-2 rounded-full hover:shadow-md transition-shadow">
            <Menu className="h-5 w-5" />
            <User2 className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
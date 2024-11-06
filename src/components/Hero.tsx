import { Search } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-[500px] mb-8">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Find your next adventure
        </h1>
        <p className="text-xl text-center mb-8">
          Discover unique places to stay around the world
        </p>
        
        <div className="bg-white rounded-full shadow-lg p-2 flex items-center w-full max-w-xl">
          <input 
            type="text"
            placeholder="Where do you want to go?"
            className="flex-1 px-4 py-2 outline-none text-gray-800"
          />
          <button className="bg-rose-500 text-white p-3 rounded-full hover:bg-rose-600 transition-colors">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
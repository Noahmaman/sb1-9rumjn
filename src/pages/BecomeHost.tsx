import { Building2, DollarSign, Calendar, Star } from 'lucide-react';

export default function BecomeHost() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[400px]">
        <img 
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Become a host"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Become a Host Today
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Host with Stayscape?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Building2 className="h-8 w-8 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">List Your Space</h3>
              <p className="text-gray-600">Share your home, room, or unique space and earn extra income as a host.</p>
            </div>

            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <DollarSign className="h-8 w-8 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
              <p className="text-gray-600">Set your own price and earn money sharing your space with travelers.</p>
            </div>

            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Calendar className="h-8 w-8 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Host whenever you want, with complete control over your availability.</p>
            </div>

            <div className="p-6 rounded-lg border hover:shadow-lg transition-shadow">
              <Star className="h-8 w-8 text-rose-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Great Support</h3>
              <p className="text-gray-600">Get 24/7 support and host protection programs for peace of mind.</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-rose-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-rose-600 transition-colors">
              Start Hosting
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
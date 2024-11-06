import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">How it works</a></li>
              <li><a href="#" className="hover:text-gray-300">Newsroom</a></li>
              <li><a href="#" className="hover:text-gray-300">Investors</a></li>
              <li><a href="#" className="hover:text-gray-300">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Diversity & Belonging</a></li>
              <li><a href="#" className="hover:text-gray-300">Accessibility</a></li>
              <li><a href="#" className="hover:text-gray-300">Associates</a></li>
              <li><a href="#" className="hover:text-gray-300">Guest Referrals</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Host</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Host your home</a></li>
              <li><a href="#" className="hover:text-gray-300">Host an experience</a></li>
              <li><a href="#" className="hover:text-gray-300">Responsible hosting</a></li>
              <li><a href="#" className="hover:text-gray-300">Resource Center</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Help Center</a></li>
              <li><a href="#" className="hover:text-gray-300">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-gray-300">Cancellation options</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Facebook className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            <Twitter className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            <Instagram className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
            <Youtube className="h-5 w-5 hover:text-gray-300 cursor-pointer" />
          </div>
          
          <div className="text-center md:text-right">
            <p>&copy; 2024 Stayscape. All rights reserved.</p>
            <div className="flex space-x-4 mt-2 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-300">Privacy</a>
              <a href="#" className="hover:text-gray-300">Terms</a>
              <a href="#" className="hover:text-gray-300">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import { Droplets, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="fbg-wave text-white">
      <div className='footer-wave-cov'>
          <svg className="footer-wave" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 184">
                  <path className="fbg-wave" d="M1285.4,81.2c-34,12.5-98.3,33.1-186.9,39.8c-230.8,17.6-274.8-85-472.8-71.3
              c-182,12.6-219.4,104.5-345.3,65.2C237.9,101.6,177,70.7,91.6,81.2c-31.7,4-62.6,13-91.6,26.6V184h1440V0
              C1392.2,33.7,1340.3,61,1285.4,81.2z"></path>                
          </svg>
      </div>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Droplets className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Jazmyne</span>
            </div>
            <p className="text-gray-400">At Jazmyne Water Factory, we are committed to producing premium, purified water that meets the highest standards of quality and purity. Since our founding, we have been dedicated to providing businesses, wholesalers, distributors, and large-scale companies with reliable access to clean, fresh drinking water.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#become-distributor" className="text-gray-400 hover:text-white">Become a Distributor</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Water Street</li>
              <li>Cityville, ST 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@jazmyne.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jazmyne Water Bottling Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
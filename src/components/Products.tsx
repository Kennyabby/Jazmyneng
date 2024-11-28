import React from 'react';
import { Droplets, ShieldCheck, Truck, Award } from 'lucide-react';

const products = [
  {
    size: '50cl',
    description: 'Perfect for individual consumption',
    features: ['BPA-free bottle', 'Easy grip design', 'Made in Nigeria'],
    price: '₦150',
    image: 'https://images.unsplash.com/photo-1606168094336-48f8b0c9d15d?auto=format&fit=crop&q=80',
    popular: false
  },
  {
    size: '75cl',
    description: 'Ideal for sports and outdoor activities',
    features: ['Sports cap', 'Ergonomic design', 'Nigerian Excellence'],
    price: '₦200',
    image: 'https://images.unsplash.com/photo-1616118132534-381148898bb4?auto=format&fit=crop&q=80',
    popular: true
  },
  {
    size: '150cl',
    description: 'Great for sharing and family use',
    features: ['Handle grip', 'Extra capacity', 'Premium Quality'],
    price: '₦350',
    image: 'https://images.unsplash.com/photo-1613114016915-6d4a709428f4?auto=format&fit=crop&q=80',
    popular: false
  }
];

const Feature = ({ title, icon: Icon }: { title: string; icon: any }) => (
  <div className="flex items-center space-x-2">
    <Icon className="h-5 w-5 text-blue-500" />
    <span className="text-gray-600">{title}</span>
  </div>
);

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Cpath fill='%23008751' d='M36 27c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v18z'/%3E%3Cpath fill='%23FFF' d='M32 27c0 2.209-1.791 4-4 4H8c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h20c2.209 0 4 1.791 4 4v18z'/%3E%3Cpath fill='%23008751' d='M24 27c0 2.209-1.791 4-4 4h-4c-2.209 0-4-1.791-4-4V9c0-2.209 1.791-4 4-4h4c2.209 0 4 1.791 4 4v18z'/%3E%3C/svg%3E" alt="Nigerian flag" className="w-8 h-8" />
            <h2 className="text-4xl font-bold text-gray-900">Premium Nigerian Water</h2>
          </div>
          <p className="text-xl text-gray-600 mb-8">Pure hydration from the heart of Nigeria, sized for your lifestyle</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <Feature title="Nigerian Quality" icon={ShieldCheck} />
            <Feature title="Nationwide Delivery" icon={Truck} />
            <Feature title="NAFDAC Approved" icon={Award} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.size}
              className={`relative bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 ${
                product.popular ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <div className="h-56 overflow-hidden relative group">
                <img 
                  src={product.image}
                  alt={`${product.size} water bottle`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{product.size}</h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                  <Droplets className="h-8 w-8 text-green-500" />
                </div>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="h-1.5 w-1.5 bg-green-500 rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <span className="text-sm text-gray-500">Starting at</span>
                    <p className="text-2xl font-bold text-green-600">{product.price}</p>
                  </div>
                  <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
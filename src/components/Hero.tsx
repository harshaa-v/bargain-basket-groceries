
import { Button } from '@/components/ui/button';
import { ArrowRight, Percent } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-orange-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-orange-600">
              <Percent className="h-5 w-5" />
              <span className="font-semibold">Up to 40% OFF</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Fresh Groceries at 
              <span className="text-green-600"> Unbeatable</span> Prices
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get the freshest produce, pantry essentials, and household items delivered to your door. 
              We guarantee the lowest prices in town!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                View Deals
              </Button>
            </div>
            <div className="flex items-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free delivery over $50</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Price match guarantee</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Fresh Groceries" 
                className="w-full h-80 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg transform rotate-12">
                SAVE 40%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

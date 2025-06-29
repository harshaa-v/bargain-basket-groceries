
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, ArrowRight } from 'lucide-react';

const DealsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <Badge className="bg-red-500 hover:bg-red-600 text-white">
              Limited Time Offer
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900">
              Weekend Special
              <span className="text-red-500"> 50% OFF</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stock up on fresh produce and pantry essentials. This weekend only - 
              save big on over 200 items!
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <Clock className="h-4 w-4" />
              <span>Offer ends Sunday midnight</span>
            </div>
            <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
              Shop Weekend Deals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Deal 1" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="text-center">
                    <p className="text-sm font-medium">Organic Apples</p>
                    <p className="text-green-600 font-bold">$1.99/lb</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <img 
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                    alt="Deal 2" 
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <div className="text-center">
                    <p className="text-sm font-medium">Fresh Salmon</p>
                    <p className="text-green-600 font-bold">$8.99/lb</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg text-center">
                <p className="text-green-700 font-semibold">+ 198 more deals available!</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold text-lg transform -rotate-12 shadow-lg">
              50% OFF
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;

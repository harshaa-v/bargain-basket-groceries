
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  discount?: number;
  unit: string;
}

const ProductCard = ({ name, price, originalPrice, image, rating, discount, unit }: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border hover:border-green-200">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {discount && (
          <Badge className="absolute top-2 left-2 bg-red-500 hover:bg-red-600">
            -{discount}%
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
          {name}
        </h3>
        
        <div className="flex items-center space-x-1 mb-3">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-gray-600">{rating}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-green-600">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-sm text-gray-400 line-through">${originalPrice.toFixed(2)}</span>
              )}
            </div>
            <span className="text-xs text-gray-500">per {unit}</span>
          </div>
          
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600 text-white">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

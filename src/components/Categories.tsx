
import { Apple, Beef, Milk, ShoppingBag, Coffee, Cookie } from 'lucide-react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      icon: Apple,
      itemCount: 156,
      discount: "25% OFF",
      image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Vegetables",
      icon: ShoppingBag,
      itemCount: 89,
      discount: "30% OFF", 
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Dairy Products",
      icon: Milk,
      itemCount: 67,
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Meat & Seafood",
      icon: Beef,
      itemCount: 43,
      discount: "20% OFF",
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Beverages",
      icon: Coffee,
      itemCount: 124,
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Snacks",
      icon: Cookie,
      itemCount: 91,
      discount: "15% OFF",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
          <p className="text-lg text-gray-600">Find everything you need at unbeatable prices</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;

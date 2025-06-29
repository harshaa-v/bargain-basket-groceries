
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      name: "Organic Bananas",
      price: 2.99,
      originalPrice: 3.99,
      image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      discount: 25,
      unit: "bunch"
    },
    {
      name: "Fresh Avocados",
      price: 1.99,
      originalPrice: 2.49,
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      discount: 20,
      unit: "each"
    },
    {
      name: "Organic Carrots",
      price: 1.49,
      image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.7,
      unit: "lb"
    },
    {
      name: "Red Bell Peppers",
      price: 3.99,
      originalPrice: 4.99,
      image: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.5,
      discount: 20,
      unit: "lb"
    },
    {
      name: "Organic Spinach",
      price: 2.79,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.9,
      unit: "bag"
    },
    {
      name: "Fresh Strawberries",
      price: 4.99,
      originalPrice: 6.99,
      image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.8,
      discount: 29,
      unit: "container"
    },
    {
      name: "Organic Tomatoes",
      price: 3.49,
      image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.4,
      unit: "lb"
    },
    {
      name: "Fresh Broccoli",
      price: 2.99,
      originalPrice: 3.49,
      image: "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 4.6,
      discount: 14,
      unit: "head"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Fresh picks at amazing prices</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;

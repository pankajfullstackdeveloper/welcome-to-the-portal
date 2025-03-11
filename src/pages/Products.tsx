
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ProductCard from "@/components/ProductCard";
import { ShoppingCart, Filter } from "lucide-react";
import { Link } from "react-router-dom";

// Temporary product data until we connect to the backend
const TEMP_PRODUCTS = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 149.99,
    description: "Premium noise-cancelling wireless headphones with 30-hour battery life",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    description: "Fitness tracking smartwatch with heart rate monitoring and notifications",
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Organic Cotton T-Shirt",
    price: 29.99,
    description: "Sustainable, eco-friendly cotton t-shirt in various colors",
    category: "Clothing",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Coffee Maker",
    price: 89.99,
    description: "Programmable coffee maker with thermal carafe and auto-shutoff",
    category: "Home",
    image: "https://images.unsplash.com/photo-1570701123784-0b73a4fa76e8?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Leather Wallet",
    price: 49.99,
    description: "Genuine leather wallet with RFID protection",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Yoga Mat",
    price: 35.99,
    description: "Non-slip, eco-friendly yoga mat with carrying strap",
    category: "Fitness",
    image: "https://images.unsplash.com/photo-1592432678012-d361c3e98fe0?q=80&w=300&auto=format&fit=crop"
  }
];

const Products = () => {
  const [products, setProducts] = useState(TEMP_PRODUCTS);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    // Extract unique categories from products
    const uniqueCategories = [...new Set(products.map(product => product.category))];
    setCategories(uniqueCategories);
  }, [products]);

  const filterByCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "") {
      setProducts(TEMP_PRODUCTS);
    } else {
      setProducts(TEMP_PRODUCTS.filter(product => product.category === category));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopEase</Link>
          <div className="flex gap-4 items-center">
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart (0)
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Shop Our Products</h1>
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-slate-500" />
            <select 
              className="rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" 
              value={selectedCategory}
              onChange={e => filterByCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <p className="text-xl text-slate-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;

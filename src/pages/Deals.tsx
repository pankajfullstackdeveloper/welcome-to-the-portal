
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Tag, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useAppSelector } from "@/hooks/useRedux";

const Deals = () => {
  const cartItems = useAppSelector((state) => state.cart.items);
  
  const featuredDeals = [
    {
      id: 1,
      title: "Summer Flash Sale",
      discount: "Up to 50% Off",
      category: "Electronics",
      endDate: "Jun 30, 2024",
      image: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Weekend Special",
      discount: "Buy One Get One Free",
      category: "Clothing",
      endDate: "Jun 15, 2024",
      image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=400&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Limited Time Offer",
      discount: "25% Off All Accessories",
      category: "Accessories",
      endDate: "Jun 20, 2024",
      image: "https://images.unsplash.com/photo-1614164185128-e4ec99c436d7?q=80&w=400&auto=format&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopEase</Link>
          <div className="flex gap-4 items-center">
            <Button asChild variant="ghost">
              <Link to="/about">About</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/deals">Deals</Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link to="/cart">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Cart ({cartItems.length})
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-blue-600 text-white rounded-lg p-8 mb-12">
          <h1 className="text-4xl font-bold mb-3">Special Deals & Promotions</h1>
          <p className="text-blue-100 text-xl mb-6">Discover our best offers and save big on your favorite products!</p>
          <Button 
            className="bg-white text-blue-600 hover:bg-blue-50"
            asChild
          >
            <Link to="/products">
              Shop All Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Tag className="mr-2 h-5 w-5 text-blue-600" />
            Featured Deals
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredDeals.map(deal => (
              <Card key={deal.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-100 relative">
                  <img src={deal.image} alt={deal.title} className="w-full h-full object-cover" />
                  <div className="absolute top-0 left-0 bg-red-500 text-white px-3 py-1 font-bold">
                    {deal.discount}
                  </div>
                </div>
                
                <CardContent className="p-5">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 py-1 px-2 rounded-full">
                      {deal.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Clock className="h-4 w-4 mr-1" />
                    Ends: {deal.endDate}
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-500" asChild>
                    <Link to="/products">Shop Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Current Promotions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-orange-50 border-orange-100">
              <h3 className="text-xl font-bold text-orange-800 mb-2">Free Shipping on Orders Over $50</h3>
              <p className="text-orange-700 mb-4">Enter code FREESHIP at checkout</p>
              <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </Card>
            
            <Card className="p-6 bg-green-50 border-green-100">
              <h3 className="text-xl font-bold text-green-800 mb-2">15% Off for New Customers</h3>
              <p className="text-green-700 mb-4">Enter code WELCOME15 at checkout</p>
              <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white" asChild>
                <Link to="/products">Shop Now</Link>
              </Button>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Deals;


import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag, Search, CreditCard, Truck } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">ShopEase</div>
          <nav className="hidden md:flex space-x-6">
            <Link to="/products" className="text-gray-700 hover:text-blue-600 transition-colors">Products</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition-colors">Categories</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition-colors">Deals</Link>
            <Link to="#" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button asChild variant="ghost">
              <Link to="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link to="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                Shop Smarter, <br />
                <span className="text-blue-600">Live Better</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-md">
                Discover a world of products at your fingertips. Quality, convenience, and unbeatable prices.
              </p>
              <div className="flex gap-4">
                <Button asChild className="bg-blue-600 hover:bg-blue-500 h-12 px-6 text-lg">
                  <Link to="/products">
                    <ShoppingBag className="mr-2 h-5 w-5" />
                    Shop Now
                  </Link>
                </Button>
                <Button asChild variant="outline" className="h-12 px-6 text-lg">
                  <Link to="/products">
                    <Search className="mr-2 h-5 w-5" />
                    Explore
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-10 relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=600&auto=format&fit=crop" 
                  alt="Shopping products" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-3/4 h-3/4 bg-blue-100 rounded-xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Truck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600">Get your products delivered to your doorstep quickly and reliably</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
              <p className="text-gray-600">Shop with confidence with our secure payment processing</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-gray-600">All our products are carefully sourced and quality-checked</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Shopping?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of satisfied customers who have transformed their shopping experience with ShopEase.
          </p>
          <Button asChild className="bg-white text-blue-600 hover:bg-blue-50 h-12 px-8 text-lg">
            <Link to="/products">Browse Products</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopEase</h3>
              <p className="text-gray-400">Your one-stop shop for all your needs.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Categories</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Deals</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Shipping</Link></li>
                <li><Link to="#" className="text-gray-400 hover:text-white transition-colors">Returns</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to get updates on our latest products and offers.</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-4 py-2 rounded-l-md focus:outline-none text-gray-900 w-full"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ShopEase. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

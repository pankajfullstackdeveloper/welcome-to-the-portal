
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart, Heart, ArrowLeft, Truck, Shield, Star } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { fetchProductById } from "@/redux/slices/productSlice";
import { addToCart } from "@/redux/slices/cartSlice";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const { selectedProduct, loading, error } = useAppSelector((state) => state.products);
  
  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(parseInt(id, 10)));
    }
  }, [dispatch, id]);

  const handleAddToCart = () => {
    if (selectedProduct) {
      dispatch(addToCart(selectedProduct));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading product...</p>
      </div>
    );
  }

  if (error || !selectedProduct) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-red-500 mb-4">
          {error || "Product not found"}
        </p>
        <Button asChild>
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>
      </div>
    );
  }

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
                Cart
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6" 
          asChild
        >
          <Link to="/products">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.title} 
              className="w-full h-auto object-contain aspect-square" 
            />
          </div>

          <div>
            <div className="mb-2">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 py-1 px-2 rounded-full">
                {selectedProduct.category}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h1>
            
            <div className="flex items-center gap-1 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className="h-5 w-5 text-yellow-400" 
                    fill="currentColor" 
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">(24 reviews)</span>
            </div>

            <p className="text-gray-600 mb-6">{selectedProduct.description}</p>
            
            <div className="text-3xl font-bold text-gray-900 mb-6">
              ${selectedProduct.price.toFixed(2)}
            </div>

            <div className="flex gap-4 mb-8">
              <Button 
                className="flex-1 bg-blue-600 hover:bg-blue-500"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            <Card className="p-4 bg-gray-50 border-gray-200 mb-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Free Shipping</h3>
                  <p className="text-sm text-gray-600">Free standard shipping on orders over $50</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gray-50 border-gray-200">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">30-Day Returns</h3>
                  <p className="text-sm text-gray-600">Shop with confidence with our 30-day return policy</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

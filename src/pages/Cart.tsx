
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useAppSelector, useAppDispatch } from "@/hooks/useRedux";
import { removeFromCart, updateQuantity, clearCart } from "@/redux/slices/cartSlice";
import { Trash2, Minus, Plus, ArrowLeft, CreditCard } from "lucide-react";

const Cart = () => {
  const { items, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const [promoCode, setPromoCode] = useState("");

  const handleRemoveItem = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleUpdateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ productId, quantity: newQuantity }));
    }
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <header className="bg-white shadow-sm py-4 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">ShopEase</Link>
          <Button asChild variant="ghost">
            <Link to="/products">Continue Shopping</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Your Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Button asChild className="bg-blue-600 hover:bg-blue-500">
              <Link to="/products">
                Browse Products
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="overflow-hidden">
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold">Cart Items ({items.length})</h2>
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={handleClearCart}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Clear Cart
                    </Button>
                  </div>
                </div>

                <div className="divide-y">
                  {items.map((item) => (
                    <div key={item.product.id} className="p-4 flex items-center">
                      <div className="w-20 h-20 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                        <img 
                          src={item.product.image} 
                          alt={item.product.title} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      <div className="ml-4 flex-grow">
                        <h3 className="font-medium text-gray-900">{item.product.title}</h3>
                        <p className="text-sm text-gray-500">{item.product.category}</p>
                        <div className="mt-1 font-bold">${item.product.price.toFixed(2)}</div>
                      </div>

                      <div className="flex items-center">
                        <button 
                          className="p-1 rounded-full hover:bg-gray-100"
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          className="p-1 rounded-full hover:bg-gray-100"
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="ml-6 font-bold">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </div>

                      <button 
                        className="ml-4 p-2 text-gray-400 hover:text-red-500"
                        onClick={() => handleRemoveItem(item.product.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div>
              <Card className="overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                </div>
                
                <div className="p-4">
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-medium">${total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="font-medium">$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span className="font-medium">${(total * 0.1).toFixed(2)}</span>
                    </div>
                    <div className="pt-4 border-t flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">${(total + (total * 0.1)).toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex gap-2 mb-4">
                      <Input 
                        placeholder="Promo code" 
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                      />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>

                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-500 mb-3"
                  >
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Checkout
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    asChild
                  >
                    <Link to="/products">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;

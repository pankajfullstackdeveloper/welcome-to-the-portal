
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "@/hooks/useRedux";
import { addToCart } from "@/redux/slices/cartSlice";
import { toast } from "sonner";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart!`);
  };

  return (
    <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
      <div className="relative h-48 overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
        />
        <button 
          className="absolute top-2 right-2 bg-white/80 backdrop-blur-sm p-1.5 rounded-full hover:bg-white transition-colors"
          aria-label="Add to wishlist"
        >
          <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
      </div>
      
      <CardContent className="p-4">
        <div className="mb-2">
          <span className="text-xs font-medium text-blue-600 bg-blue-50 py-1 px-2 rounded-full">
            {product.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-1 text-gray-900 truncate">
          {product.title}
        </h3>
        <p className="text-sm text-gray-600 mb-2 line-clamp-2">
          {product.description}
        </p>
        <div className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </div>
      </CardContent>
      
      <CardFooter className="px-4 pb-4 pt-0 flex gap-2">
        <Button 
          className="w-full gap-2 bg-blue-600 hover:bg-blue-500"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
        <Button 
          variant="outline" 
          className="flex-shrink-0"
          asChild
        >
          <Link to={`/product/${product.id}`}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

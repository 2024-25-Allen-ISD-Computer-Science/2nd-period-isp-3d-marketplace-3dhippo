import { useCart } from "@/hooks/use-cart";
import { IProduct } from "@/types/product";
import { X, ImageIcon } from "lucide-react";
import Image from "next/image";

const CartItem = ({ product }: { product: IProduct }) => {
  const { removeItem } = useCart();
  const image = "/product-picture-display/car.jpg";
  const label = product.category.charAt(0).toUpperCase() + product.category.slice(1);

  return (  
    <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg shadow-sm">
      <div className="flex items-center gap-4">
        {/* Product Image */}
        <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200">
          {image ? (
            <Image
              src={image}
              alt={product.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex items-center justify-center h-full w-full text-gray-500">
              <ImageIcon className="h-5 w-5" />
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-1">
          <span className="text-sm font-semibold text-gray-900 line-clamp-1">
            {product.name}
          </span>
          <span className="text-xs text-gray-500 capitalize">{label}</span>
          <span className="text-sm font-medium text-gray-900">${product.price.toFixed(2)}</span>
        </div>
      </div>

      {/* Remove Button */}
      <button
        onClick={() => removeItem(product._id)}
        className="text-gray-500 hover:text-red-600 transition-all duration-200"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default CartItem;

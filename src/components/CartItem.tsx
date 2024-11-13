import { useCart } from '@/hooks/use-cart';
import { formatPrice } from '@/lib/utils';
import { IProduct } from '@/types/product';
import { ImageIcon, X } from 'lucide-react';
import Image from 'next/image';

const CartItem = ({ product }: { product: IProduct }) => {
  // Ensure we use the first picture if available, otherwise use a placeholder or fallback
  const image = product.pictures && product.pictures.length > 0 ? product.pictures[0] : null;

  const { removeItem } = useCart();

  // Label might come from a different source, adapt if needed
  const label = product.category.charAt(0).toUpperCase() + product.category.slice(1); 

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {image ? (
              <Image
                src={image}
                alt={product.name}
                fill
                className="absolute object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon
                  aria-hidden="true"
                  className="h-4 w-4 text-muted-foreground"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.name}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {label}
            </span>

            <div className="mt-4 text-xs text-muted-foreground">
              <button
                onClick={() => removeItem(product._id)}
                className="flex items-center gap-0.5">
                <X className="w-3 h-4" />
                Remove
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-1 font-medium">
          <span className="ml-auto line-clamp-1 text-sm">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;

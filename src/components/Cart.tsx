"use client";

import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { useEffect, useState } from "react";
import Image from "next/image"; // Import Next.js Image component
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const itemCount = items.length;

  // Calculate total price based on items in the cart
  const cartTotal = items.reduce(
    (total, { product }) => total + product.price,
    0
  );

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <Sheet>
      <SheetTrigger className="group -m-2 flex items-center p-2">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
          {isMounted ? itemCount : 0}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="space-y-2.5 pr-6 flex justify-center">
          <SheetTitle className="text-lg font-semibold text-gray-900 text-center">
            Cart ({itemCount})
          </SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            {/* This will show when items are present */}
            <div className="flex w-full flex-col pr-6 space-y-2">
              <ScrollArea>
                {items.map(({ product }) => (
                  <CartItem
                    product={product}
                    key={product._id}
                  />
                ))}
              </ScrollArea>
              <p className="text-md text-gray-600">Cart Items</p>
              {items.map(({ product }) => (
                <div className="flex items-center justify-between" key={product._id}>
                  <p>{product.name}</p>
                  <p>${product.price.toFixed(2)}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 pr-6 pt-4">
              <Separator className="my-2" />

              {/* Shipping and other details */}
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between">
                  <span className="flex-1">Shipping</span>
                  <span>To be calculated at checkout</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span className="flex-1">Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Empty cart state with the hippo image */
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div
              aria-hidden="true"
              className="relative mb-4 h-60 w-60 text-muted-foreground"
            >
              <Image
                src="/hippo-empty-cart.png" // Use the public path to access the image
                alt="Empty shopping cart"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg font-semibold">Your cart is empty</p>
            <SheetTrigger asChild>
              <Link
                href="/marketplace"
                className="text-sm text-blue-600 hover:underline"
              >
                Add items to your cart to checkout
              </Link>
            </SheetTrigger>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

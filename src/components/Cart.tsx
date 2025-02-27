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
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";

const Cart = () => {
  const { items } = useCart();
  const [isMounted, setIsMounted] = useState(false);
  const itemCount = items.length;
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
          className="h-6 w-6 flex-shrink-0 text-gray-400 transition-all duration-200 group-hover:text-gray-700"
        />
        <span className="ml-2 text-sm font-semibold text-gray-700 group-hover:text-gray-900">
          {isMounted ? itemCount : 0}
        </span>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg bg-white shadow-lg">
        <SheetHeader className="flex justify-center border-b border-gray-200 p-4">
          <SheetTitle className="text-lg font-bold text-gray-900">
            Cart ({itemCount})
          </SheetTitle>
        </SheetHeader>

        {itemCount > 0 ? (
          <>
            <ScrollArea className="flex w-full flex-col p-4 space-y-4">
              {items.map(({ product }) => (
                <CartItem product={product} key={product._id} />
              ))}
            </ScrollArea>

            <div className="p-4 space-y-3 border-t border-gray-200">
              <Separator className="my-2" />

              {/* Shipping and Total Details */}
              <div className="text-sm space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Link
                href="/checkout"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-200"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2 py-16">
            <div className="relative w-40 h-40">
              <Image
                src="/hippo-empty-cart.png"
                alt="Empty Cart"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-lg font-medium text-gray-800">
              Your cart is empty
            </p>
            <Link
              href="/marketplace"
              className="text-sm text-blue-600 hover:underline"
            >
              Add items to your cart
            </Link>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;

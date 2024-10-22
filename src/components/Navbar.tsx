"use client";

import Link from "next/link";
import { useUser, UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Icons } from "./Icons";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Cart from "./Cart"

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="bg-white top-0 z-50 w-full h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-between">
              <div className="ml-4 flex space-x-4 lg:ml-0">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
                <div className="hidden md:flex space-x-4">
                  <Link href="/marketplace">
                    <Button variant="ghost">Marketplace</Button>
                  </Link>
                  <Link href="/about">
                    <Button variant="ghost">About</Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <SignedIn>
                  <UserButton afterSignOutUrl="/" />
                </SignedIn>
                <SignedOut>
                  <Link href="/sign-in">
                    <Button variant="ghost">Sign in</Button>
                  </Link>
                  <Separator orientation="vertical" className="h-6" />
                  <Link href="/sign-up">
                    <Button variant="ghost">Create account</Button>
                  </Link>
                </SignedOut>
                <Separator orientation="vertical" className="h-6" />
                {/* Use the Cart component here */}
                <Cart />
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;

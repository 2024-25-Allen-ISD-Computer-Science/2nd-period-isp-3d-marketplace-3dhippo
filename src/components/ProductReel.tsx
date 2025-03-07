"use client";

import React from "react";
import ProductCard from "@/components/ProductCard";

const ProductReel: React.FC = () => {
  const placeholderProducts = [
    {
      id: "1",
      name: "Placeholder Product 1",
      description: "This is a placeholder description for Product 1.",
      price: 19.99,
      displayPicture: "https://via.placeholder.com/150",
      pictures: [],
      brand: "Placeholder Brand",
    },
    {
      id: "2",
      name: "Placeholder Product 2",
      description: "This is a placeholder description for Product 2.",
      price: 29.99,
      displayPicture: "https://via.placeholder.com/150",
      pictures: [],
      brand: "Placeholder Brand",
    },
    {
      id: "3",
      name: "Placeholder Product 3",
      description: "This is a placeholder description for Product 3.",
      price: 39.99,
      displayPicture: "https://via.placeholder.com/150",
      pictures: [],
      brand: "Placeholder Brand",
    },
    {
      id: "4",
      name: "Placeholder Product 4",
      description: "This is a placeholder description for Product 4.",
      price: 49.99,
      displayPicture: "https://via.placeholder.com/150",
      pictures: [],
      brand: "Placeholder Brand",
    },
  ];

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Discover More</h2>
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide px-2 py-4">
          {placeholderProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64">
              <ProductCard
                id={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                displayPicture={product.displayPicture}
                pictures={product.pictures}
                brand={product.brand}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductReel;

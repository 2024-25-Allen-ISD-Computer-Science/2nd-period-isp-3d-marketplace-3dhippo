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
    <div className="ml-16 mt-16 px-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Discover More</h2>
      <div className="flex space-x-6 overscroll-none">
        {placeholderProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description} 
            price={product.price}
            displayPicture={product.displayPicture}
            pictures={product.pictures}
            brand={product.brand}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductReel;

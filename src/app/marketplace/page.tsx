"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CategorySidebar from "@/components/CategorySidebar";
import ProductCard from "@/components/ProductCard";
import { IProduct } from "@/models/Products";

const Marketplace = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        setProducts(response.data.data); // Store all products
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="marketplace flex">
      <CategorySidebar />
      <div className="marketplace-content flex-1 p-6">
        <h1 className="text-3xl font-bold mb-4 mt-5 text-center">Welcome to the Marketplace!</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Browse through our marketplace or select a category to filter products.
        </p>

        {loading ? (
          <p className="text-center text-gray-600">Loading products...</p>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-6">
            {products.map((product) => (
              <ProductCard
                key={product._id as string}
                id={product._id as string}
                name={product.name}
                description={product.description}
                price={product.price}
                displayPicture={product.displayPicture}
                pictures={product.pictures}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default Marketplace;

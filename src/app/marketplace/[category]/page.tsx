// app/marketplace/[category]/page.tsx
"use client";

import { useParams } from "next/navigation";
import CategorySidebar from "@/components/CategorySidebar";
import ProductCard from "../../../components/ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../../models/Products";

const CategoryPage = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : (params.category as string); // Finding the category
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        // Filter products by category
        const filteredProducts = response.data.data.filter((product: IProduct) => product.category.toLowerCase === category.toLowerCase);
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [category]); // Dependency array to trigger the effect when the category changes

  return (
    <div className="flex p-4">
      <CategorySidebar />
      <div className="products-list p-4 flex flex-wrap justify-start">
        <h1 className="text-xl font-bold mb-4 capitalize w-full">{category}</h1>
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={product._id as string}
              id={product._id as string}
              name={product.name}
              description={product.description}
              price={product.price}
              displayPicture={product.displayPicture}
              pictures={product.pictures}
            />
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;

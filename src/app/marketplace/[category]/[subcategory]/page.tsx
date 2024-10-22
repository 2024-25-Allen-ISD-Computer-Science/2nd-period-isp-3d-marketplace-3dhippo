"use client"

import { useParams } from 'next/navigation';
import CategorySidebar from '@/components/CategorySidebar';
import ProductCard from '../../../../components/ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../models/Products';

const SubcategoryPage = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category as string; //finding the category
  const subcategory = Array.isArray(params.subcategory) ? params.subcategory[0] : params.subcategory as string; //finding the subcategory
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        const filteredProducts = response.data.data.filter((product: IProduct) => product.subcategory === subcategory); // Filter products by subcategory
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [subcategory]);

  return (
    <div className="flex p-4">
      <CategorySidebar />
      <div className="products-list p-4 flex flex-wrap justify-start">
        <h1 className="text-xl font-bold mb-4 capitalize w-full">{subcategory || category}</h1>
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={(product._id as string)}
              id={(product._id as string)}
              name={product.name}
              description={product.description}
              price={product.price}
              displayPicture={product.displayPicture}
              pictures={product.pictures}
            />
          ))
        ) : (
          <p>No products found in this subcategory.</p>
        )}
      </div>
    </div>
  );
};

export default SubcategoryPage;

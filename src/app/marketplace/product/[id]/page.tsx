"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../models/Products';
import AddToCartButton from '@/components/AddToCartButton';
import { Check, Shield } from 'lucide-react';
import Link from 'next/link';
import STLViewer from '@/components/STLViewer'; // Import the STLViewer component
import ProductReel from '@/components/ProductReel';

const BREADCRUMBS = [
  { id: 1, name: 'Home', href: '/' },
  { id: 2, name: 'Products', href: '/products' },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id;

  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.data);
      } catch (err) {
        setError("Error fetching product details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-6 flex justify-center mt-32">
      <div className="grid grid-cols-1 gap-16 w-full max-w-6xl">
        {/* Product Details Section */}
        <div className="ml-16 flex flex-col lg:flex-row items-center lg:items-start gap-12">
          {/* STL Viewer for 3D Model */}
          <div className="lg:w-1/2 w-3/4 flex justify-center lg:justify-end">
            {product.STLfile ? (
              <STLViewer modelUrl={product.STLfile} /> // Render the STL file with STLViewer
            ) : (
              <p>No 3D model available for this product.</p> // Fallback if STL file is missing
            )}
          </div>

          {/* Product Details on the right */}
          <div className="pl-15 w-full text-center lg:text-left">
            <nav className="text-sm text-gray-500 mb-4">
              <ol className="flex justify-center lg:justify-start space-x-2">
                {BREADCRUMBS.map((breadcrumb, i) => (
                  <li key={breadcrumb.id} className="inline-flex items-center">
                    <Link href={breadcrumb.href} className="hover:text-gray-700">
                      {breadcrumb.name}
                    </Link>
                    <span className="mx-2">/</span>
                  </li>
                ))}
                <li className="text-gray-500">{product.name}</li>
              </ol>
            </nav>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-xl font-semibold text-gray-800 mb-4">${product.price.toFixed(2)}</p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <Check aria-hidden="true" className="h-5 w-5 text-green-500 mr-2" />
              <p className="text-sm text-gray-500">Eligible for instant delivery</p>
            </div>
            <div className="flex items-center justify-center lg:justify-start mb-4">
              <p className="text-sm text-gray-500 mr-2 h-5 w-5">🇺🇸</p>
              <p className="text-sm text-gray-500">Printed in the USA</p>
            </div>
            <AddToCartButton product={product} />
            <div className="mt-6">
              <div className="group inline-flex text-sm text-gray-500">
                <Shield aria-hidden="true" className="mr-2 h-5 w-5 text-gray-400" />
                <span>30 Day Return Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Reel Section */}
        <div className="w-full">
          <ProductReel />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

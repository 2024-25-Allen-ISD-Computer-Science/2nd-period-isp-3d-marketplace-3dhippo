"use client";

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../../../../models/Products';
import AddToCartButton from '@/components/AddToCartButton';
import { Check, Shield } from 'lucide-react';
import Link from 'next/link';

// Define the breadcrumb navigation structure
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

  // Prepare image URLs for the main image and gallery
  const mainImageUrl = product.displayPicture;

  return (
    <div className="bg-white p-6">
      {/* Breadcrumb navigation */}
      <nav className="text-sm text-gray-500 mb-4">
        <ol className="flex space-x-2">
          {BREADCRUMBS.map((breadcrumb, i) => (
            <li key={breadcrumb.id}>
              <Link href={breadcrumb.href} className="hover:text-gray-700">
                {breadcrumb.name}
              </Link>
              {i !== BREADCRUMBS.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </li>
          ))}
          <li>{product.name}</li>
        </ol>
      </nav>

      {/* Main content layout */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Product Details on the left */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-800 mb-4">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-gray-600 mb-6">{product.description}</p>

          {/* Eligibility info */}
          <div className="flex items-center mb-4">
            <Check aria-hidden="true" className="h-5 w-5 text-green-500 mr-2" />
            <p className="text-sm text-gray-500">Eligible for instant delivery</p>
          </div>

          {/* Add to cart button */}
          <AddToCartButton product={product} />

          {/* Guarantee message */}
          <div className="mt-6 text-center">
            <div className="group inline-flex text-sm text-gray-500">
              <Shield aria-hidden="true" className="mr-2 h-5 w-5 text-gray-400" />
              <span>30 Day Return Guarantee</span>
            </div>
          </div>
        </div>

        {/* Product Image on the right */}
        <div className="lg:w-1/2 lg:flex lg:justify-end">
          <div className="aspect-square rounded-lg shadow-lg overflow-hidden">
            <Image
              src={mainImageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;

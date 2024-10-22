"use client";

import { useParams } from 'next/navigation'; // Import the useParams hook from Next.js to access dynamic route parameters
import Image from 'next/image'; // Import the Image component for optimized image rendering
import { useEffect, useState } from 'react'; // Import React hooks for state management and side effects
import axios from 'axios'; // Import axios for making HTTP requests
import { IProduct } from '../../../../models/Products'; // Import the IProduct interface for type safety

const ProductDetailsPage = () => {
  // Use useParams to get the 'id' parameter from the URL
  const { id } = useParams();
  const productId = Array.isArray(id) ? id[0] : id; // Handle the case where 'id' could be an array

  // Define state variables for the product data, loading state, and error state
  const [product, setProduct] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect hook to fetch product details when the component mounts or when productId changes
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch product details from the API using axios
        const response = await axios.get(`/api/products/${productId}`);
        setProduct(response.data.data); // Update state with fetched product data
      } catch (err) {
        setError("Error fetching product details."); // Set error message if fetching fails
        console.error(err); // Log the error for debugging
      } finally {
        setLoading(false); // Set loading to false after fetching is complete, whether it succeeded or failed
      }
    };

    fetchProduct(); // Call the function to fetch product details
  }, [productId]); // Dependency array ensures this effect runs when productId changes

  // Conditional rendering: Display loading message while fetching data
  if (loading) {
    return <p>Loading...</p>;
  }

  // Conditional rendering: Display error message if there is an error
  if (error) {
    return <p>{error}</p>;
  }

  // Conditional rendering: Display 'Product not found' if no product is returned
  if (!product) {
    return <p>Product not found</p>;
  }

  // Render the product details
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <div className="flex">
        {/* Main product image */}
        <div className="w-1/2">
          <Image src={product.displayPicture} alt={product.name} width={500} height={500} />
        </div>
        {/* Product details section */}
        <div className="w-1/2 pl-4">
          <p className="mb-4">{product.description}</p>
          <p className="text-xl font-bold mb-4">${product.price.toFixed(2)}</p>
          {/* Add more product details as needed */}
        </div>
      </div>
      {/* Render additional pictures of the product */}
      <div className="mt-4 flex">
        {product.pictures.map((pic, index) => (
          <div key={index} className="w-1/4 p-2">
            <Image src={pic} alt={`${product.name} ${index}`} width={500} height={500} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetailsPage;

import React from "react";
import Link from "next/link";
import { supabase } from '@/utils/supabaseClient';

type ProductCardProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number; 
  displayPicture: string;
  pictures: string[];
  brand?: string; 
};

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  discountPrice,
  displayPicture,
  brand = "Brand", // default to brand to "Brand" if brand is not provided in DB
}) => {
  return (
    <div className="w-56 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
      <Link href={`/marketplace/product/${id}`}>
        <div>
          <img
            src={displayPicture}
            alt={name}
            className="h-48 w-56 object-cover rounded-t-xl"
          />
          <div className="px-3 py-2 w-56">
            <span className="text-gray-400 mr-2 uppercase text-xs">{brand}</span>
            <p className="text-md font-bold text-black truncate block capitalize"> {/* Product Name */}
              {name}
            </p>
            <div className="flex items-center"> 
              <p className="text-md font-semibold text-black my-2">${price}</p>  {/* Product Price */}
              {discountPrice && (
                <del>
                  <p className="text-xs text-gray-600 ml-2">${discountPrice}</p>  {/* Discounted Price if applicable */}
                </del>
              )}
              <div className="ml-auto"> {/* Add to cart icon */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-bag-plus"
                  viewBox="0 0 16 16"
                >
                  <path 
                    fillRule="evenodd"
                    d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z"
                  />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;

// Update any MongoDB specific code to use Supabase
const fetchProduct = async (id: string) => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

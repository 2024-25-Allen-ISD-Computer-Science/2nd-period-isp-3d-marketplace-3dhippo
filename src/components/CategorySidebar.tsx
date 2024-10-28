"use client"; // Ensures this component is a client component

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const categories = [
  {
    name: 'Tech',
    slug: 'tech',
    subcategories: [
      { name: 'Airsoft & Paintball', slug: 'airsoft-paintball' },
      { name: 'Camera & Video', slug: 'camera-video' },
      { name: 'Cases', slug: 'cases' },
      { name: 'Drone Parts', slug: 'drone-parts' },
      { name: 'Maker/DIY', slug: 'maker-diy' },
      { name: 'Mechanical Parts', slug: 'mechanical-parts' },
      { name: 'RC Cars', slug: 'rc-cars' },
      { name: 'Robotics', slug: 'robotics' },
      { name: 'Other', slug: 'other' },
    ],
  },
  { name: 'Accessories', slug: 'accessories', subcategories: [] },
  { name: 'Jewelry', slug: 'jewelry', subcategories: [] },
  { name: 'Art', slug: 'art', subcategories: [] },
  { name: 'For Your Home', slug: 'for-your-home', subcategories: [] },
  { name: 'Games', slug: 'games', subcategories: [] },
  { name: 'Miniatures', slug: 'miniatures', subcategories: [] },
  { name: 'Other', slug: 'other', subcategories: [] },
];

const CategorySidebar = () => {
  const params = useParams();
  const category = Array.isArray(params.category) ? params.category[0] : params.category;
  const subcategory = Array.isArray(params.subcategory) ? params.subcategory[0] : params.subcategory;
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  useEffect(() => {
    if (category) {
      setOpenCategory(category);
    }
  }, [category]);

  const toggleCategory = (slug: string) => {
    if (openCategory === slug) {
      setOpenCategory(null);
    } else {
      setOpenCategory(slug);
    }
  };

  const renderCategories = () => {
    return categories.map((cat) => (
      <li key={cat.slug} className="mb-4">
        <div className="flex items-center justify-between">
          <Link href={`/marketplace/${cat.slug}`} className={`text-gray-600 hover:text-blue-600 text-base font-semibold ${category === cat.slug ? 'font-bold text-gray-900' : ''}`}>
            {cat.name}
          </Link>
          {cat.subcategories.length > 0 && (
            <button
              onClick={() => toggleCategory(cat.slug)}
              className="focus:outline-none transition-transform duration-300"
              aria-label="Toggle Subcategories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 transform ${
                  openCategory === cat.slug ? 'rotate-180' : ''
                } transition-transform`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          )}
        </div>
        {openCategory === cat.slug && cat.subcategories.length > 0 && (
          <ul className="pl-4 mt-2 transition-all duration-500 ease-in-out">
            {cat.subcategories.map((subcat) => (
              <li key={subcat.slug} className="mb-1">
                <Link href={`/marketplace/${cat.slug}/${subcat.slug}`} className={`text-sm font-medium ${subcategory === subcat.slug ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600`}>
                  {subcat.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));
  };

  const renderSingleCategory = (categorySlug: string) => {
    const cat = categories.find(cat => cat.slug === categorySlug);
    if (!cat) return null;

    return (
      <li key={cat.slug} className="mb-4">
        <div className="flex items-center justify-between">
          <Link href={`/marketplace/${cat.slug}`} className="text-gray-900 hover:text-blue-600 text-base font-bold">
            {cat.name}
          </Link>
          {cat.subcategories.length > 0 && (
            <button
              onClick={() => toggleCategory(cat.slug)}
              className="focus:outline-none transition-transform duration-300"
              aria-label="Toggle Subcategories"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 transform ${
                  openCategory === cat.slug ? 'rotate-180' : ''
                } transition-transform`}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          )}
        </div>
        {openCategory === cat.slug && cat.subcategories.length > 0 && (
          <ul className="pl-4 mt-2 transition-all duration-500 ease-in-out">
            {cat.subcategories.map((subcat) => (
              <li key={subcat.slug} className="mb-1">
                <Link href={`/marketplace/${cat.slug}/${subcat.slug}`} className={`text-sm font-medium ${subcategory === subcat.slug ? 'text-blue-600' : 'text-gray-500'} hover:text-blue-600`}>
                  {subcat.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    );
  };

  return (
    <div className="p-6 font-rubik w-64 bg-white rounded-lg">
      <h3 className="text-gray-400 uppercase text-xs mb-6 tracking-wider font-semibold">Categories</h3>
      <ul className="list-none p-0 ">
        {(category || subcategory) && (
          <li className="mb-4">
            <Link href="/marketplace" className="text-gray-500 hover:text-blue-600 text-sm font-semibold">
              ‹ All Categories
            </Link>
          </li>
        )}
        {category ? renderSingleCategory(category) : renderCategories()}
      </ul>
    </div>
  );
};

export default CategorySidebar;

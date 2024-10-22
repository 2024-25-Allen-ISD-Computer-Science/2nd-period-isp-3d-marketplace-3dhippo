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
      <li key={cat.slug} className="mb-2">
        <div className="flex items-center">
          <button
            onClick={() => toggleCategory(cat.slug)}
            className="mr-2 focus:outline-none"
          >
            <span
              className={`font-semibold ${
                openCategory === cat.slug ? 'text-blue-600' : 'text-gray-500'
              } hover:text-blue-800`}
            >
              {openCategory === cat.slug ? '˅' : '˃'}
            </span>
          </button>
          <Link href={`/marketplace/${cat.slug}`} className={`text-gray-600 hover:text-blue-600 text-sm font-semibold ${category === cat.slug ? 'font-bold text-gray-800' : ''}`}>
            {cat.name}
          </Link>
        </div>
        {openCategory === cat.slug && cat.subcategories.length > 0 && (
          <ul className="list-none pl-4 mt-2 transition-all duration-500 ease-in-out max-h-96 overflow-hidden">
            {cat.subcategories.map((subcat) => (
              <li key={subcat.slug} className="mb-1">
                <Link href={`/marketplace/${cat.slug}/${subcat.slug}`} className={`text-sm font-semibold ${subcategory === subcat.slug ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}>
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
      <li key={cat.slug} className="mb-2">
        <div className="flex items-center">
          <button
            onClick={() => toggleCategory(cat.slug)}
            className="mr-2 focus:outline-none"
          >
            <span
              className={`font-semibold ${
                openCategory === cat.slug ? 'text-blue-600' : 'text-gray-500'
              } hover:text-blue-800`}
            >
              {openCategory === cat.slug ? '˅' : '˃'}
            </span>
          </button>
          <Link href={`/marketplace/${cat.slug}`} className="text-gray-800 hover:text-blue-600 text-sm font-bold">
            {cat.name}
          </Link>
        </div>
        {openCategory === cat.slug && cat.subcategories.length > 0 && (
          <ul className="list-none pl-4 mt-2 transition-all duration-500 ease-in-out max-h-96 overflow-hidden">
            {cat.subcategories.map((subcat) => (
              <li key={subcat.slug} className="mb-1">
                <Link href={`/marketplace/${cat.slug}/${subcat.slug}`} className={`text-sm font-semibold ${subcategory === subcat.slug ? 'text-blue-600' : 'text-gray-600'} hover:text-blue-600`}>
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
    <div className="p-4 font-rubik w-56">
      <h3 className="text-category uppercase text-xs mb-4 tracking-wider text-gray-400 font-semibold">Categories</h3>
      <ul className="list-none p-0">
        {(category || subcategory) && (
          <li className="mb-2">
            <Link href="/marketplace" className="text-gray-600 hover:text-blue-600 text-sm font-semibold">
              ‹ All Categories
            </Link>
          </li>
        )}
        {category ? renderSingleCategory(category) : renderCategories()}
      </ul>
      <hr className="mt-4 border-gray-300" />
    </div>
  );
};

export default CategorySidebar;

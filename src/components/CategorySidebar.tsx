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
  {
    name: 'Accessories',
    slug: 'accessories',
    subcategories: [
      { name: 'Bags & Backpacks', slug: 'bags-backpacks' },
      { name: 'Hats & Caps', slug: 'hats-caps' },
      { name: 'Phone Accessories', slug: 'phone-accessories' },
      { name: 'Watches', slug: 'watches' },
      { name: 'Keychains', slug: 'keychains' },
      { name: 'Wallets & Cardholders', slug: 'wallets-cardholders' },
      { name: 'Sunglasses', slug: 'sunglasses' },
    ],
  },
  {
    name: 'Jewelry',
    slug: 'jewelry',
    subcategories: [
      { name: 'Necklaces', slug: 'necklaces' },
      { name: 'Rings', slug: 'rings' },
      { name: 'Bracelets', slug: 'bracelets' },
      { name: 'Earrings', slug: 'earrings' },
      { name: 'Anklets', slug: 'anklets' },
      { name: 'Custom Engraved Jewelry', slug: 'custom-engraved-jewelry' },
      { name: 'Jewelry Storage & Displays', slug: 'jewelry-storage-displays' },
    ],
  },
  {
    name: 'Art',
    slug: 'art',
    subcategories: [
      { name: 'Wall Art & Prints', slug: 'wall-art-prints' },
      { name: 'Sculpture', slug: 'sculpture' },
      { name: 'Digital Art', slug: 'digital-art' },
      { name: 'Handcrafted Items', slug: 'handcrafted-items' },
      { name: 'Mixed Media', slug: 'mixed-media' },
      { name: 'Stationery & Calligraphy', slug: 'stationery-calligraphy' },
      { name: 'Art Supplies', slug: 'art-supplies' },
    ],
  },
  {
    name: 'For Your Home',
    slug: 'for-your-home',
    subcategories: [
      { name: 'Home Décor', slug: 'home-decor' },
      { name: 'Kitchen & Dining Accessories', slug: 'kitchen-dining-accessories' },
      { name: 'Furniture', slug: 'furniture' },
      { name: 'Storage & Organization', slug: 'storage-organization' },
      { name: 'Outdoor Décor', slug: 'outdoor-decor' },
      { name: 'Lighting Fixtures', slug: 'lighting-fixtures' },
      { name: 'Bedding & Textiles', slug: 'bedding-textiles' },
    ],
  },
  {
    name: 'Games',
    slug: 'games',
    subcategories: [
      { name: 'Board Games', slug: 'board-games' },
      { name: 'Card Games', slug: 'card-games' },
      { name: 'Puzzles', slug: 'puzzles' },
      { name: 'Tabletop RPG Accessories', slug: 'tabletop-rpg-accessories' },
      { name: 'Video Game Memorabilia', slug: 'video-game-memorabilia' },
      { name: 'Custom Dice', slug: 'custom-dice' },
      { name: 'Game Storage Solutions', slug: 'game-storage-solutions' },
    ],
  },
  {
    name: 'Miniatures',
    slug: 'miniatures',
    subcategories: [
      { name: '3D Printed Miniatures', slug: '3d-printed-miniatures' },
      { name: 'Painted Miniatures', slug: 'painted-miniatures' },
      { name: 'Unpainted Miniatures', slug: 'unpainted-miniatures' },
      { name: 'Miniature Terrain', slug: 'miniature-terrain' },
      { name: 'Custom Figurines', slug: 'custom-figurines' },
      { name: 'Dollhouse Miniatures', slug: 'dollhouse-miniatures' },
      { name: 'Scale Model Kits', slug: 'scale-model-kits' },
    ],
  },
  {
    name: 'Other',
    slug: 'other',
    subcategories: [
      { name: 'Educational Kits', slug: 'educational-kits' },
      { name: 'Novelty Items', slug: 'novelty-items' },
      { name: 'Personalized Gifts', slug: 'personalized-gifts' },
      { name: 'Vintage Collectibles', slug: 'vintage-collectibles' },
      { name: 'Event Decorations', slug: 'event-decorations' },
      { name: 'Seasonal Items', slug: 'seasonal-items' },
      { name: 'Miscellaneous Craft Supplies', slug: 'miscellaneous-craft-supplies' },
    ],
  },
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

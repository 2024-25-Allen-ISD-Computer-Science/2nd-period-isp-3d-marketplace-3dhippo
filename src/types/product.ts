// src/types/product.ts

export interface IProduct {
  _id: string; // Ensure _id is a string here too
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  displayPicture: string;
  pictures: string[];
}

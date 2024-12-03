// src/models/Products.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProduct extends Document {
  _id: string; // Set _id to string
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  displayPicture: string;
  pictures: string[];
  STLfile?: string;
}

const productSchema: Schema<IProduct> = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  displayPicture: { type: String, required: true },
  pictures: { type: [String], required: true },
});

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
export type { IProduct };

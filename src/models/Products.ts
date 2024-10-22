// src/models/Product.ts

import mongoose, { Document, Model, Schema } from 'mongoose';

interface IProduct extends Document {
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  displayPicture: string;
  pictures: string[];
}

const productSchema: Schema<IProduct> = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  subcategory: { type: String, required: true },
  displayPicture: { type: String, required: true },
  pictures: { type: [String], required: true },
}, { collection: 'Products' }); // Use the collection name 'Products'

const Product: Model<IProduct> = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);

export default Product;
export type { IProduct };
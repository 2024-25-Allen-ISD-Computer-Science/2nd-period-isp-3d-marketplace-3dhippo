import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Product from '@/models/Products';

// Define the GET request handler for fetching a single product by ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  // Connect to the database
  await dbConnect();

  try {
    // Extract the product ID from the request parameters
    const { id } = params;

    // Find the product by ID in the database
    const product = await Product.findById(id);

    // If the product is not found, return a 404 response
    if (!product) {
      return NextResponse.json({ success: false, message: 'Product not found' }, { status: 404 });
    }

    // Return the found product as a JSON response
    return NextResponse.json({ success: true, data: product });
  } catch (error) {
    // If there's an error, log it and return a 500 response
    console.error('Error fetching product:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

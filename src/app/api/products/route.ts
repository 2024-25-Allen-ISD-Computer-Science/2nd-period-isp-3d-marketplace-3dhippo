import { NextResponse } from 'next/server';
import dbConnect from '@/utils/dbConnect';
import Products from '@/models/Products';

// Handle GET requests
export async function GET(request: Request) {
  await dbConnect();

  try {
    const products = await Products.find({});
    return NextResponse.json({ success: true, data: products }, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { success: false, message: "Request Failed. Please try again." },
      { status: 400 }
    );
  }
}

// Handle POST requests
export async function POST(request: Request) {
  await dbConnect();

  try {
    const body = await request.json();
    const product = await Products.create(body);
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
import { NextResponse } from 'next/server';
import { getDbClient } from '@/utils/dbConnect';

// Handle GET requests
export async function GET(request: Request) {
  const client = await getDbClient();
  const db = client.db("3dhippo");
  const collection = db.collection("Products");

  try {
    // Fetch all products
    const products = await collection.find({}).toArray();
    console.log(`Products: ${products}`);
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
  const client = await getDbClient();
  const db = client.db("3dhippo");
  const collection = db.collection("Products");

  try {
    // Parse the request body
    const body = await request.json();
    
    // Insert the new product into the collection
    const result = await collection.insertOne(body);

    // Return the inserted product data with its ID
    const insertedProduct = { ...body, _id: result.insertedId };
    return NextResponse.json({ success: true, data: insertedProduct }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

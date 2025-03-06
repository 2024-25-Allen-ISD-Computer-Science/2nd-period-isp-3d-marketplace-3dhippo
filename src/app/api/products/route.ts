import { NextResponse } from 'next/server';
import { supabase } from '@/utils/supabaseClient';

// GET all products
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*');
    
    if (error) throw error;
    return NextResponse.json({ success: true, data });
  } catch (error) {
    // Type guard to check if error is an Error object
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    // Handle unknown error type
    return NextResponse.json({ success: false, message: 'An unknown error occurred' }, { status: 500 });
  }
}

// POST new product
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { data, error } = await supabase
      .from('products')
      .insert([body])
      .select();
    
    if (error) throw error;
    return NextResponse.json({ success: true, data: data[0] }, { status: 201 });
  } catch (error) {
    // Type guard to check if error is an Error object
    if (error instanceof Error) {
      return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
    // Handle unknown error type
    return NextResponse.json({ success: false, message: 'An unknown error occurred' }, { status: 500 });
  }
}

import { createClient } from '@supabase/supabase-js';
const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_ANON_KEY!);

export interface IProduct {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  display_picture: string;
  pictures: string[];
  stl_file?: string;
  created_at?: string;
}

// Supabase table name
export const PRODUCTS_TABLE = 'products';

// Helper functions for Supabase operations
export const getProducts = async () => {
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .select('*');
  
  if (error) throw error;
  return data;
};

export const getProductById = async (id: string) => {
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

export const createProduct = async (product: IProduct) => {
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .insert([product])
    .select();
  
  if (error) throw error;
  return data?.[0];
};

export const updateProduct = async (id: string, updates: Partial<IProduct>) => {
  const { data, error } = await supabase
    .from(PRODUCTS_TABLE)
    .update(updates)
    .eq('id', id)
    .select();
  
  if (error) throw error;
  return data?.[0];
};

export const deleteProduct = async (id: string) => {
  const { error } = await supabase
    .from(PRODUCTS_TABLE)
    .delete()
    .eq('id', id);
  
  if (error) throw error;
  return true;
};

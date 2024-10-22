// src/utils/dbConnect.ts

import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb://localhost:27017/3dhippo'; // Specify the database name '3dhippo'

const dbConnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose.set('strictQuery', false); // Optional: To suppress deprecation warnings
  try {
    await mongoose.connect(MONGODB_URI, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};

export default dbConnect;
import { MongoClient } from "mongodb";

// Define the MongoDB Atlas URI
const uri = process.env.MONGODB_URI || "mongodb+srv://ronshaked07:<3o7ZX28kXbR7Laik>@aeris.xaqqj.mongodb.net/?retryWrites=true&w=majority&appName=Aeris";

// Define the database name
const dbName = "3dhippo";

// Define a variable to store the MongoClient instance
let client: MongoClient | null = null;

// Function to get the MongoClient instance
export async function getDbClient(): Promise<MongoClient> {
  if (!client) {
    // Initialize the client if not already done
    client = new MongoClient(uri);

    try {
      // Connect to MongoDB
      await client.connect();
      console.log(`Connected to MongoDB database: ${dbName}`);
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }

  return client;
}
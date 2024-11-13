import { MongoClient } from "mongodb";

// Define the URI and database name
const uri = "mongodb://localhost:27017/3dhippo";

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
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      throw error;
    }
  }
  
  return client;
}

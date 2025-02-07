"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// ... existing code ...

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [productData, setProductData] = useState(null);

  useEffect(() => {
    if (isLoaded) {
      // Check if the user is logged in and has the 'admin' role
      if (!user || user.publicMetadata?.role !== "admin") {
        // Redirect to /home if not authorized
        router.push("/home");
      }
    }
  }, [user, isLoaded, router]);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`/api/products?name=${productName}`);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    }
  };

  const addProduct = async () => {
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: newProduct }),
      });
      if (response.ok) {
        alert("Product added successfully!");
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  if (!isLoaded) {
    return <p>Loading...</p>; // Show a loading state while Clerk is initializing
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      {/* Add your admin-specific content here */}

      <div>
        <h2 className="text-xl">Fetch Product</h2>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="Enter product name"
        />
        <button onClick={fetchProduct}>Fetch Product</button>
        {productData && <div>{JSON.stringify(productData)}</div>}
      </div>

      <div>
        <h2 className="text-xl">Add Product</h2>
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Enter new product name"
        />
        <button onClick={addProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default AdminDashboard;
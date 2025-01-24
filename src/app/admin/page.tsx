"use client";

import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminDashboard = () => {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded) {
      // Check if the user is logged in and has the 'admin' role
      if (!user || user.publicMetadata?.role !== "admin") {
        // Redirect to /home if not authorized
        router.push("/home");
      }
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) {
    return <p>Loading...</p>; // Show a loading state while Clerk is initializing
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      {/* Add your admin-specific content here */}
    </div>
  );
};

export default AdminDashboard;
import CategorySidebar from "@/components/CategorySidebar";
import Link from "next/link";

const Marketplace = () => {
  return (
    <div className="marketplace flex">
      <CategorySidebar />
      <div className="marketplace-content flex-1 p-6 flex flex-col items-center justify-center">
      {/* Empty Cart Image */}
      <img  
          src="/hippo-empty-cart.png"
          alt="Empty Marketplace"
          className="w-64 h-64 mb-6"
        /> 
        {/* Header & Description */}
        <h1 className="text-3xl font-bold mb-4 text-center">No Category Selected</h1>
        <p className="text-lg text-gray-600 text-center mb-6">
          Get started by selecting a category on the left side!
        </p>
        {/* Redirect back to home button */}
        <Link
          href="/home"
          className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"> Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Marketplace;

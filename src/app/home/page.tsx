import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit, Leaf, RotateCcw } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Free Returns",
    Icon: RotateCcw,
    description: "Free returns on all eligible orders with a full refund."
  },
  {
    name: "Full Customization",
    Icon: Edit,
    description: "All products are fully customizable with your own engraving and color choice for no extra charge."
  },
  {
    name: "Eco-Friendly",
    Icon: Leaf,
    description: "All our products are 3D printed using eco-friendly, biodegradable materials. Enjoy your unique creations while supporting sustainability."
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your marketplace for high-quality <span className="text-blue-600">3D prints</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-gray-600">
            Welcome to 3DHippo. Every asset is team-verified for top quality, backed by a satisfaction guarantee and great support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/marketplace" className={buttonVariants()}>Browse Trending</Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {perks.map((perk) => (
              <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    <perk.Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-lg font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-gray-600">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white py-16" id="about">
        <MaxWidthWrapper>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900">Our Story</h2>
            <p className="mt-6 text-lg text-gray-600">
              At 3DHippo, we started with a passion for creativity and technology. Our mission is to bring your unique ideas to life through custom, eco-friendly 3D prints. From personalized designs to high-quality materials, we stand behind every product we create.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Why Choose Us?</h3>
                <p className="mt-4 text-gray-600">We offer unmatched customization and a commitment to sustainability with our eco-friendly, biodegradable materials. Whether you're a hobbyist or professional, we are dedicated to ensuring the highest quality.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-4 text-gray-600">We believe in creating a sustainable future where technology and creativity coexist. Every product is crafted with care and precision, ensuring a minimal environmental footprint while maintaining top-tier quality.</p>
              </div>
            </div>
            <Link href="/about" className="mt-8 inline-block text-blue-600 font-semibold">
              Learn More About Us &rarr;
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>

    </>
  );
}

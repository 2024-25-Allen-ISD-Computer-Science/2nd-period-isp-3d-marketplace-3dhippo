import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit, Leaf, RotateCcw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Welcome to 3DHippo
          </h1>
          <p className="mt-6 text-lg max-w-prose text-gray-600">
            Every asset is individually hand-inspected for top quality, backed
            by a satisfaction guarantee and great support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link href="/marketplace" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant="ghost">Our Quality Promise &rarr;</Button>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Hero Image Section */}
      <div className="relative flex justify-center items-center mt-12">
        <Image
          src="/hippo-email-sent.png"
          alt="Email Sent Illustration"
          width={600}
          height={600}
          className="rounded-lg"
        />
      </div>

      {/* About Section */}
      <section className="bg-white py-16" id="about">
        <MaxWidthWrapper>
          <div className="text-center max-w-4xl mx-auto space-y-12">
            <div>
              <h2 className="text-4xl font-semibold text-gray-900">Who We Are</h2>
              <p className="mt-6 text-lg text-gray-600">
                At 3DHippo, we’re a team of tech enthusiasts and creative minds
                who love turning your ideas into tangible, eco-friendly 3D
                prints. We started this journey to make custom 3D printing
                accessible and sustainable for everyone. Every product we craft
                reflects our dedication to quality and the environment.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-gray-900">Our Commitment</h2>
              <p className="mt-6 text-lg text-gray-600">
                We envision a future where technology and creativity coexist
                sustainably. Our goals include reducing our carbon footprint
                with every product, staying at the forefront of 3D printing
                technology to bring your ideas to life, and providing tools and
                support to help you create responsibly.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                Inspired by leaders in the 3D printing industry, we’ve embraced
                values that drive us forward, such as building a supportive
                community for sharing knowledge and inspiration, encouraging
                continuous learning in the ever-evolving world of 3D printing,
                and making 3D printing technology accessible and understandable
                for all.
              </p>
            </div>

            <div>
              <h2 className="text-4xl font-semibold text-gray-900">
                Why Choose 3DHippo?
              </h2>
              <p className="mt-6 text-lg text-gray-600">
                Choosing 3DHippo means embracing personalized service and a
                commitment to a greener planet. We specialize in bringing your
                unique ideas to life, using biodegradable materials to minimize
                environmental impact. Whether you’re a hobbyist or a
                professional, we ensure top-notch quality in every print.
              </p>
            </div>

            <Link href="/home" className="text-blue-600 font-semibold">
              Return to Home Page &rarr;
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
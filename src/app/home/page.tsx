import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Edit,
  Leaf,
  RotateCcw,
  Lightbulb,
  Truck,
  CheckCircle,
  Star,
} from "lucide-react";

const perks = [
  {
    name: "Free Returns",
    Icon: RotateCcw,
    description:
      "Enjoy hassle-free returns on all eligible orders with a full refund guarantee.",
  },
  {
    name: "Full Customization",
    Icon: Edit,
    description:
      "Customize every product with personalized engraving and a wide range of color options at no extra cost.",
  },
  {
    name: "Eco-Friendly",
    Icon: Leaf,
    description:
      "Experience eco-friendly, biodegradable 3D printed products that are as sustainable as they are unique.",
  },
];

const howItWorksSteps = [
  {
    title: "Design",
    description:
      "Bring your ideas to life with our intuitive design tools and expert guidance.",
    Icon: Lightbulb,
  },
  {
    title: "Customize",
    description:
      "Personalize your design with custom engraving and a variety of color options.",
    Icon: Edit,
  },
  {
    title: "Print",
    description:
      "Our state-of-the-art 3D printers ensure precision and quality in every print.",
    Icon: CheckCircle,
  },
  {
    title: "Delivery",
    description: "Enjoy fast, reliable shipping directly to your doorstep.",
    Icon: Truck,
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    feedback:
      "3DHippo made my 3D printing process seamless and efficient. The quality was outstanding and the delivery was lightning fast. I give it 5 stars!",
  },
  {
    name: "Maria Rodriguez",
    feedback:
      "The entire experience was incredibly easy and stress-free. Fast delivery and superb quality—3DHippo truly streamlined my 3D printing needs. 5 stars all the way!",
  },
  {
    name: "Sam Lee",
    feedback:
      "I was amazed at how quick and reliable the service was. The process was smooth and hassle-free. Definitely 5 stars!",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Your Marketplace for High-Quality{" "}
            <span className="text-blue-600">3D Prints</span>
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-prose">
            Welcome to 3DHippo, where every asset is team-verified for superior quality.
            Enjoy a satisfaction guarantee, dedicated support, and products that push the
            boundaries of innovation.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/marketplace" className={buttonVariants()}>
              Browse Marketplace
            </Link>
            <Link href="/about" className={buttonVariants({ variant: "ghost" })}>
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Perks Section */}
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="flex flex-col items-center text-center space-y-4"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-900">
                  <perk.Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      {/* Our Story Section */}
      <section className="bg-white py-16" id="about">
        <MaxWidthWrapper>
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-semibold text-gray-900">Our Story</h2>
            <p className="mt-6 text-lg text-gray-600">
              At 3DHippo, our journey began with a passion for merging creativity and technology.
              We believe in pushing the boundaries of innovation through custom, eco-friendly 3D prints.
              Our commitment to quality and sustainability drives us to deliver exceptional products
              that meet the evolving needs of our customers.
            </p>
            <p className="mt-4 text-lg text-gray-600">
              From personalized designs to precision manufacturing, every step of our process is engineered
              to ensure excellence. We empower our customers with products that inspire and transform
              their visions into reality.
            </p>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-block text-blue-600 font-semibold hover:underline"
              >
                Discover More About Our Journey &rarr;
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-50 py-16">
        <MaxWidthWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600">
              Our streamlined process makes it easy to bring your ideas to life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step) => (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-900">
                  <step.Icon className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="bg-white py-16">
        <MaxWidthWrapper>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold text-gray-900">
              What Our Customers Say
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Real feedback from customers who appreciate our streamlined 3D printing service.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-gray-50 p-6 rounded-lg shadow flex flex-col justify-between min-h-[180px]"
              >
                <div className="flex flex-col">
                  <div className="flex items-center mb-2">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500"
                          fill="currentColor"
                          stroke="none"
                        />
                      ))}
                  </div>
                  <p className="text-sm text-gray-600 italic">
                    "{testimonial.feedback}"
                  </p>
                </div>
                <div className="mt-4 pt-2">
                  <p className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}

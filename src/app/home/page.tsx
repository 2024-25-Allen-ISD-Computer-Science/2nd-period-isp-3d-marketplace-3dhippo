import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { Edit, Leaf, RotateCcw } from "lucide-react";
import Link from "next/link";
import { Redirect } from "next";

const perks = [
  {
    name: "Free Returns",
    Icon: RotateCcw,
    description: "Free returns on all eligible orders with a full refund."
  },
  {
    name: "Full Customization",
    Icon: Edit,
    description: "All products are fully custumizable with your own engraving and color choice for no extra charge."
  },
  {
    name: "Eco-Friendly",
    Icon: Leaf,
    description: "All our products are 3D printed using eco-friendly, biodegradable materials. Enjoy your unique creations while supporting sustainability."
  },
]

export default function Home() {
  return (
    
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold trackign-tight text-gray-900 sm:text-6xl">Your marketplace for high quality <span className="text-blue-600"> 3D prints</span>.</h1>
        <p className="mt-6 text-large max-w-prose text-muted-foreground">Welcome to 3DHippo. Every asset is team-verified for top quality, backed by satisfaction guarantee and great support.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/marketplace" className={buttonVariants()}>Browse Trending</Link>
          <Button variant='ghost'>Our Quality Promise &rarr;</Button>
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
                  {<perk.Icon  className="w-1/3 h-1/3"/>}
                </div>
              </div>
              <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                <p className="mt-3 text-small text-muted-foreground">{perk.description}</p>
              </div>
            </div>
          ))}
        </div>
      </MaxWidthWrapper>
    </section>

    </>
  )
}

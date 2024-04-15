import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen w-full">
      <div className="">
        <div>
          <Image
            src="/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg"
            alt="Hands"
            fill
            className="absolute inset-0 object-cover object-center h-full w-full -z-50 bg-black bg-blend-darken"
          />
        </div>
        <div className="translate-y-1/2 lg:mt-16">
          {/* find way center div */}
          <MaxWidthWrapper>
            <div className="flex flex-col gap-4 lg:w-1/2 w-3/4  text-white items-start z-20 ">
              <h1 className="text-6xl tracking-tighter leading-none font-bold capitalize">
                Be a life saver for someone
              </h1>
              <p className="uppercase border-t border-white pr-4 text-right w-full">
                below poverty line
              </p>
              <div className="flex items-center justify-end gap-4 py-4">
                <Link href="#" className={cn(buttonVariants({}), "px-6")}>
                  Donate
                </Link>
                <Link
                  href="#"
                  className={cn(
                    "text-primary",
                    buttonVariants({ variant: "outline" })
                  )}
                >
                  Discover &rarr;
                </Link>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
        {/* <div className="absolute bottom-4 inset-x-1/2 text-white opacity-75">
          <div className="flex flex-col items-center scale-90 animate-pulse gap-2">
            <ArrowDown className="h-7 w-7" />
            <p>Scroll</p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;

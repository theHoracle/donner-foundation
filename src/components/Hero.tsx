import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Paragraph from "./ui/paragraph";

interface heroProps {
  heroImage?: string;
  showButtons?: boolean | null;
  topic: string;
  heroText: string;
}
const Hero = ({ heroImage, heroText, showButtons, topic }: heroProps) => {
  return (
    <div className="relative h-screen w-full">
      <div className="">
        <div>
          <Image
            src={
              heroImage ||
              "/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg"
            }
            alt="Hands"
            fill
            className="absolute inset-0 object-cover object-center h-full w-full -z-50 bg-black bg-blend-darken"
          />
        </div>
        <div className="py-20 h-screen grid place-items-center">
          {/* find way center div */}
          <MaxWidthWrapper>
            <div className="flex flex-col gap-4 lg:w-1/2 w-3/4  text-white items-start z-20 ">
              <Paragraph variant="topic" className="-mb-2">
                {topic}
              </Paragraph>
              <h1 className="text-6xl tracking-tighter font-bold capitalize">
                {heroText}
              </h1>
              {showButtons && (
                <div className="w-full flex flex-col">
                  {" "}
                  <p className="uppercase border-t border-white pr-4 text-right w-full">
                    below poverty line
                  </p>
                  <div className="flex items-center justify-start gap-4 py-4">
                    <Link href="#" className={cn(buttonVariants(), "px-6")}>
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
              )}
            </div>
          </MaxWidthWrapper>
        </div>
      </div>
    </div>
  );
};

export default Hero;

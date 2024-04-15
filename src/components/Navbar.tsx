"use client";
import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [screenHeight, setScreenHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window !== undefined) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setScreenHeight(window.innerHeight);
    if (scrollY > screenHeight) {
      // Change navbar background color when scrolled down
      setIsScrolledDown(true);
    } else {
      // Reset navbar background color when scrolled to the top
      setIsScrolledDown(false);
    }
  }, [scrollY, screenHeight]);
  return (
    <div className="sticky z-50 top-0 inset-x-0 h-16 text-gray-700">
      <div className="relative overflow-hidden">
        <div
          className={cn({
            "absolute inset-0 -z-10 blur-sm bg-slate-500/80 scale-150 transition-all":
              isScrolledDown,
          })}
        />
        <MaxWidthWrapper>
          <div className="flex h-16 items-center">
            <div>{/* Mobile nav */}</div>

            <div className="lg:ml-4  flex">
              <Link href="/">Logo</Link>
            </div>
            <div>
              {/* Hot */}
              {/* Hot */}
            </div>
            <div className="ml-auto flex items-center ">
              {/* sign in / up */}
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link
                  href="/sign-in"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Sign In
                </Link>
                <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                <Link
                  href="/sign-up"
                  className={buttonVariants({ variant: "ghost" })}
                >
                  Create account
                </Link>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default Navbar;

"use client";
import Link from "next/link";
import ImageSlider from "./ImageSlider";
import Heading from "./ui/heading";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import { Cause } from "@/payload-types";
import { Skeleton } from "./ui/skeleton";
import { useEffect, useState } from "react";

interface CauseListingProps {
  cause: Cause | null;
  index: number;
}
const CauseListing = ({ cause, index }: CauseListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const validImageUrls = cause?.images
    ?.map(({ images }) => (typeof images === "string" ? images : images.url))
    .filter(Boolean) as string[];

  console.log("A cause image: ", validImageUrls);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);
  const progressValue = (function progressBar() {
    //if raised amt should  be 0 or undefined return 0 progress
    if (!cause?.raisedAmount || cause?.target === undefined) {
      return 0;
    } else {
      // find percentage to nearest number
      return Math.round((cause.raisedAmount / cause.target) * 100);
    }
  })();

  if (!cause && !isVisible) return <CausePlaceholder />;

  if (cause && isVisible) {
    return (
      <Link href={`/donate/${cause?.id}`} className="bg-gray-100 rounded-xl">
        <div className="flex flex-col w-full">
          <ImageSlider urls={validImageUrls} />
          <div className="px-3 py-2.5 flex flex-col gap-3">
            <h3 className="font-medium text-sm">{cause.title}</h3>
            <div>
              <Progress value={progressValue} className="h-1" />
              <div className="flex items-center justify-between mx-0 my-1">
                <p className="text-xs text-muted-foreground">
                  Raised: ${cause.raisedAmount}
                </p>
                <p className="text-xs text-muted-foreground">
                  Goal: ${cause.target}
                </p>
              </div>
            </div>
            <Link href="#" className={cn(buttonVariants())}>
              Donate
            </Link>
          </div>
        </div>
      </Link>
    );
  }
};

const CausePlaceholder = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl">
        <Skeleton className="w-full h-full" />
      </div>
      <Skeleton className="mt-4 w-2/3 h-4 rounded-lg" />
      <div>
        <Skeleton className="mt-2 w-full h-4 rounded-lg" />
        <div className="flex flex-row items-center justify-between">
          <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
          <Skeleton className="mt-2 w-16 h-4 rounded-lg" />
        </div>
      </div>
      <Skeleton className="mt-2 w-full h-4 rounded-lg" />
    </div>
  );
};

export default CauseListing;

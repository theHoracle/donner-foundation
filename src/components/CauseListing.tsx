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
import ProgressBar from "./ProgressBar";

interface CauseListingProps {
  cause: Cause | null;
  index: number;
}
const CauseListing = ({ cause, index }: CauseListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const validImageUrls = cause?.images
    ?.map(({ image }) => (typeof image === "string" ? image : image.url))
    .filter(Boolean) as string[];

  console.log("A cause image: ", validImageUrls);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * 75);

    return () => clearTimeout(timer);
  }, [index]);
 

  if (!cause && !isVisible) return <CausePlaceholder />;

  if (cause && isVisible) {
    return (
      <div className="bg-gray-100 rounded-xl">
        <div className="flex flex-col w-full">
          <ImageSlider urls={validImageUrls} />
          <div className="px-3 py-2.5 flex flex-col gap-3">
            <h3 className="font-medium text-sm">{cause.title}</h3>
            <ProgressBar raisedAmount={cause.raisedAmount} target={cause.target} />
            <Link href={`/donate/${cause.id}`} className={cn(buttonVariants())}>
              Donate
            </Link>
          </div>
        </div>
      </div>
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

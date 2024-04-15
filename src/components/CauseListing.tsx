import Link from "next/link";
import ImageSlider from "./ImageSlider";
import Heading from "./ui/heading";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

interface CauseListingProps {}
const CauseListing = (props: CauseListingProps) => {
  const imageUrls = [
    "/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg",
    "/care-package.jpg",
  ];
  return (
    <div className="bg-white rounded-xl">
      <div className="flex flex-col w-full">
        <ImageSlider urls={imageUrls} />
        <div className="px-3 py-2.5 flex flex-col gap-3">
          <h3 className="font-medium text-sm">Important Cause: Finding Nemo</h3>
          <div>
            <Progress value={20} className="h-1" />
            <div className="flex items-center justify-between mx-0 my-1">
              <p className="text-xs text-muted-foreground">Raised: #50k</p>
              <p className="text-xs text-muted-foreground">Goal: #500k</p>
            </div>
          </div>
          <Link href="#" className={cn(buttonVariants())}>
            Donate
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CauseListing;

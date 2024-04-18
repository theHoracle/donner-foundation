"use client";
import { TQueryValidator } from "@/lib/validators/query-validator";
import CauseListing from "./CauseListing";
import { trpc } from "@/trpc/client";
import { Cause } from "@/payload-types";

interface CauseReelProps {
  query?: TQueryValidator;
}
const FALLBACK_LIMIT = 4;

const CauseReel = (props: CauseReelProps) => {
  const { query } = props;
  const { data: queryResult, isLoading } =
    trpc.getInfiniteCauses.useInfiniteQuery(
      {
        limit: query?.limit ?? FALLBACK_LIMIT,
        query: query || { category: "", limit: 4, sort: "desc" },
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage,
      }
    );
  const causes = queryResult?.pages.flatMap((page) => page.items);
  let map: (Cause | null)[] = [];
  if (causes && causes.length !== 0) {
    map = causes;
  } else {
    map = new Array<null>(query?.limit ?? FALLBACK_LIMIT).fill(null);
  }

  return (
    <div className="py-12">
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
        {map.map((cause, index) => {
          return <CauseListing key={index} cause={cause} index={index} />;
        })}
      </div>
    </div>
  );
};
export default CauseReel;

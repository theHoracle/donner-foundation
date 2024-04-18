import CauseListing from "@/components/CauseListing";
import CauseReel from "@/components/CauseReel";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

type Param = string | string[] | undefined;
interface CausesPageProps {
  searchParams: { [key: string]: Param };
}
const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};
const Causes = ({ searchParams }: CausesPageProps) => {
  const sort = parse(searchParams.sort);

  return (
    <main className="flex flex-col">
      <Hero heroText="Our Causes" topic="Donations" />
      <MaxWidthWrapper>
        <section className="py-20">
          <CauseReel
            query={{
              limit: 40,
              sort: sort === "desc" || sort === "asc" ? sort : undefined,
            }}
          />
        </section>
      </MaxWidthWrapper>
    </main>
  );
};
export default Causes;

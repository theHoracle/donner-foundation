import CauseListing from "./CauseListing";

interface CauseReelProps {
  quantity: number;
}

const CauseReel = (props: CauseReelProps) => {
  const { quantity } = props;
  const element = [];
  for (let index = 0; index < quantity; index++) {
    element.push(index);
  }
  return (
    <div className="py-12">
      <div className="w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-4 md:gap-y-10 lg:gap-x-8">
        {element.map((el) => {
          return <CauseListing key={el} />;
        })}
      </div>
    </div>
  );
};
export default CauseReel;

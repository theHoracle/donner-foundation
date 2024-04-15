import MaxWidthWrapper from "./MaxWidthWrapper";
import TestimonialCard from "./TestimonialCard";
import Heading from "./ui/heading";
import Paragraph from "./ui/paragraph";

const Testimonials = () => {
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <Paragraph variant="topic">Testimonials</Paragraph>
            <h2>
              <Heading variant="light">What people say about us</Heading>
            </h2>
          </div>
          <div className="w-full">
            <div className="grid md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 py-16">
              <TestimonialCard />
            </div>
          </div>
          <div>{/* Record */}</div>
          <div>{/* Brands we dey with */}</div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Testimonials;

import Hero from '@/components/Hero';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Heading from '@/components/ui/heading';
import Paragraph from '@/components/ui/paragraph';
import { Check, Quote } from 'lucide-react';
import Image from 'next/image';

const AboutUsPage = () => {
  return (
    <main>
      <Hero heroText="About our foundation" topic="what we do" />
      <MaxWidthWrapper>
        <section className="my-20">
          <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-x-6">
            <div className="relative row-span-1 h-full sm:col-span-1">
              <Image
                src="/about-us/community_kids.jpeg"
                alt="Kids gathered around from a community for a photo"
                fill
                className="h-full w-full object-cover object-center z-10"
              />
            </div>
            <div className="row-start-2 md:col-start-2 flex flex-col gap-2.5">
              <div>
                <Paragraph variant="topic">About us</Paragraph>
                <h2 className="text-2xl leading-tight tracking-tighter font-bold">
                  Finding solutions to assist people in need.
                </h2>
              </div>
              <Paragraph>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                sapiente voluptatibus ab iusto ipsum! Est necessitatibus debitis
                quisquam omnis alias!
              </Paragraph>
              <div className="px-3 py-2 bg-black/50 rounded-sm">
                <Paragraph className="text-center text-white">
                  At Donner-foundation we believe every child has a future!
                </Paragraph>
              </div>
              <div className="bg-primary/60 hidden -ml-40 -mb-8 z-10 text-white w-4/6 min-w-72 max-w-80 py-4 px-2 md:flex flex-col items-end">
                <div className="flex items-center text-2xl justify-between gap-2">
                  <Quote className="-scale-x-100 h-20 w-40" />
                  <p className="leading-none tracking-tight">
                    Children are our most valuable resource
                  </p>
                </div>
                <cite className="text-right w-full">- Herbert Hoover</cite>
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-gray-200">Brands</section>
        <section className="my-20">
          <div className="flex items-center flex-col md:flex-row md:gap-x-6">
            <div className="">
              <h3 className="font-serif font-semibold text-xl ">Our Goals</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Accusantium sed placeat tenetur facilis reiciendis, eligendi
                veritatis molestias quaerat nesciunt deserunt?
              </p>
              <div className="my-4">
                {/* map */}
                <ul className="flex flex-col items-start gap-3">
                  {[0, 0, 0, 0, 0].map((goal, index) => {
                    return (
                      <li key={index} className="flex items-center gap-4">
                        <Check />
                        Goal {index}
                      </li>
                    );
                  })}
                </ul>
                <p className="my-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Excepturi, magni.
                </p>
              </div>
            </div>
            <div className="">
              <h3 className="font-serif font-semibold text-xl ">Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                eaque expedita deleniti ad aut assumenda? Architecto minima sit
                atque inventore?
              </p>
              <div className="relative w-full h-52 overflow-hidden rounded-md">
                <Image
                  src="/about-us/kids_about_to_ball.jpeg"
                  alt="Boys about to play football"
                  fill
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <p className="my-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur, temporibus!
              </p>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </main>
  );
};

export default AboutUsPage;

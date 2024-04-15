import About from "@/components/About";
import CauseReel from "@/components/CauseReel";
import EventsCalender from "@/components/EventsCalender";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import SubToNewsLetter from "@/components/SubToNewsLetter";
import Testimonials from "@/components/Testimonials";
import Volunteer from "@/components/Volunteer";
import { buttonVariants } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import Paragraph from "@/components/ui/paragraph";
import { howItWorks } from "@/config/HowItWorks";
import { cn } from "@/lib/utils";
import { HandHeart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const team = [
    {
      image: "/theHoracle.jpg",
      fullName: "John Doe",
      socials: ["https://www.x.com/", "https://www.instagram.com/"],
    },
    {
      image: "/theHoracle.jpg",
      fullName: "John Doe",
      socials: ["https://www.x.com/", "https://www.instagram.com/"],
    },
    {
      image: "/theHoracle.jpg",
      fullName: "John Doe",
      socials: ["https://www.x.com/", "https://www.instagram.com/"],
    },
    {
      image: "/theHoracle.jpg",
      fullName: "John Doe",
      socials: ["https://www.x.com/", "https://www.instagram.com/"],
    },
  ];
  return (
    <main className="flex flex-col">
      <Hero />
      <MaxWidthWrapper className="-translate-y-1/2 hidden md:block text-white">
        <div className="flex items-center gap-0 h-64 lg:mx-28 md:mx-0">
          <div className="w-1/3 grid place-items-center px-6 bg-green-500 justify-center h-full">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-lg">Education</h3>
              <p>
                70% of kids below 15 in Nigeria are out of school. This needs to
                change
              </p>
              <Link
                href="/#"
                className={cn(buttonVariants(), "bg-white text-green-500")}
              >
                Donate
              </Link>
            </div>
          </div>
          <div className="w-1/3 bg-primary justify-center bg-red-500 grid place-items-center px-6 h-full">
            <div className="flex flex-col gap-4 ">
              <h3 className="font-semibold text-lg">Become a volunteer</h3>
              <p>
                Our foundation welcomes any one with a good heart who volunteers
                to help with our work
              </p>
              <Link
                href="/#"
                className={cn(
                  "text-white",
                  buttonVariants({ variant: "link" }),
                  "text-white"
                )}
              >
                Join foundation
              </Link>
            </div>
          </div>
          <div className="w-1/3 relative overflow-hidden bg-red-500 h-full">
            <Image
              src="/care-package.jpg"
              fill
              alt="Care package"
              className="absolute object-cover object-center "
            />
          </div>
        </div>
      </MaxWidthWrapper>
      {/* About us */}
      <About />
      {/* Causes section */}
      <section className="bg-blue-100">
        <MaxWidthWrapper>
          <div className="py-20">
            <div className="flex items-end justify-between">
              <div className="md:w-1/2">
                <Paragraph variant="topic" size="sm">
                  Causes
                </Paragraph>
                <h2>
                  <Heading variant="light">
                    You can help lots of people by just donating a little
                  </Heading>
                </h2>
              </div>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "link" }),
                  "hidden md:block"
                )}
              >
                See all projects &rarr;
              </Link>
            </div>
            <div>
              <CauseReel quantity={4} />
            </div>
            <Link
              href="#"
              className={cn(
                buttonVariants({ variant: "link" }),
                "block md:hidden text-right"
              )}
            >
              See all projects &rarr;
            </Link>
          </div>
        </MaxWidthWrapper>
      </section>
      {/* Volunteer section */}
      <Volunteer />
      <section className="border  border-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="flex flex-col items-center">
            <Paragraph variant="topic">What we do</Paragraph>
            <h2>
              <Heading variant="light">We do for people in need</Heading>
            </h2>
          </div>
          <div className="grid grid-cols-2 grid-rows-3 gap-x-6 gap-y-12 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-0">
            {howItWorks.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex items-start text-left lg:block lg:text-center py-10"
                >
                  <div>
                    <div className="md:flex-shrink-0 flex lg:justify-center">
                      <div className="h-16 w-16 rounded-full flex items-center justify-center bg-blue-100 text-blue-900">
                        {<item.icon className="h-1/3 w-1/3" />}
                      </div>
                    </div>
                    <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                      <h3 className="text-base font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm  text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
      <section>
        <div className="grid grid-cols-4 grid-rows-2 py-20 w-screen">
          <div className="col-span-2 max-h-  bg-green-200 p-4 md:p-12 ">
            <div className="flex flex-col items-start">
              <Paragraph variant="topic">what we did</Paragraph>
              <Heading variant="light">Completed Projects</Heading>
              <Paragraph className="max-h-12 md:max-h-20 overflow-x-scroll">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis neque ab quaerat. Assumenda quod natus earum
                consectetur consequuntur sunt animi officia, dolore cum
                inventore eveniet?
              </Paragraph>
              <Link
                href="#"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "text-sm mt-3"
                )}
              >
                See Completed Projects
              </Link>
            </div>
          </div>
          <div className="col-span-1 bg-red-200 "></div>
          <div className="col-span-1 bg-blue-200 "></div>
          <div className="col-span-1 bg-zinc-200 "></div>
          <div className="col-span-1 bg-rose-400 "></div>
          <div className="col-span-1 bg-purple-200 "></div>
          <div className="col-span-1 bg-lime-800 "></div>
        </div>
      </section>
      <Testimonials />
      <section className="bg-zinc-100 py-20">
        {/* Team */}
        <MaxWidthWrapper>
          <div>
            <div className="flex flex-col items-center ">
              <Paragraph variant="topic">Team</Paragraph>
              <h2>
                <Heading variant="light">Meet our volunteers</Heading>
              </h2>
            </div>
            <div>
              <div
                className="grid grid-cols-2 grid-rows-2 lg:grid-cols-4 gap-x-4 my-10
              "
              >
                {team.map((member, index) => {
                  if (index > 2) return;
                  return (
                    <div
                      key={index}
                      className="flex flex-col items-center rounded-xl overflow-hidden"
                    >
                      <div className="relative h-72 w-full">
                        <Image
                          src={member.image}
                          alt={member.fullName}
                          fill
                          className="absolute object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col items-center my-2 px-4">
                        <h4 className="font-medium text-lg">
                          {member.fullName}
                        </h4>
                        <div className="flex items-center -mt-2 justify-around">
                          {member.socials.map((social) => (
                            <SocialIcon
                              key={social}
                              url={social}
                              bgColor="transparent"
                              className="h-3 w-3 "
                              fgColor="gray"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
                <div className="bg-zinc-200 rounded-xl overflow-hidden grid place-items-center px-4 min-w-24">
                  <div className="flex flex-col items-center gap-2 ">
                    <div className="border rounded-full p-4 bg-primary">
                      <HandHeart className="h-7 w-7 text-white z-10" />
                    </div>
                    <h4 className="font-semibold text-lg text-center">
                      Become a Volunteer
                    </h4>
                    <Paragraph className="text-center">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Tenetur esse aspernatur aliquam maiores natus odio
                      repudiandae illum, cumque rerum culpa.
                    </Paragraph>
                    <Link
                      href="#volunteer"
                      className={cn(buttonVariants({ variant: "link" }))}
                    >
                      Become a member
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </section>
      <EventsCalender />
      <SubToNewsLetter />
    </main>
  );
}

import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Heading from "./ui/heading";
import Paragraph from "./ui/paragraph";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { LocateFixedIcon, Timer } from "lucide-react";

const EventsCalender = () => {
  const upcommingEvent = [
    {
      day: 12,
      month: "May",
      title: "Empowering widows",
      creator: "theHoracle",
      description: "Lorem says something about the way life works",
    },
    {
      day: 12,
      month: "May",
      title: "Empowering widows",
      creator: "theHoracle",
      description: "Lorem says something about the way life works",
    },
    {
      day: 12,
      month: "May",
      title: "Empowering widows",
      creator: "theHoracle",
      description: "Lorem says something about the way life works",
    },
  ];
  return (
    <section className="py-20">
      <MaxWidthWrapper>
        <div>
          <div className="flex flex-col items-start md:flex-row md:items-end md:justify-between">
            <div>
              <Paragraph variant="topic">Our Events</Paragraph>
              <h2>
                <Heading variant="light">
                  Join upcomming events, replays & webinars
                </Heading>
              </h2>
            </div>
            <Link
              href="/events"
              className={cn(buttonVariants({ variant: "link" }), "pl-0")}
            >
              See all upcomming events &rarr;
            </Link>
          </div>
          <div className="my-10 flex flex-col md:flex-row items-start gap-4">
            <div className="md:w-3/5">
              <div className="relative h-64 w-full">
                <Image
                  src="/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg"
                  fill
                  alt="Event image"
                  className="absolute object-cover object-center"
                />
                <div className="bg-primary/70 px-6 py-4 absolute top-0 left-0 text-white flex flex-col items-center">
                  <p className="font-bold text-2xl ">1</p>
                  <Paragraph className="text-white uppercase">April</Paragraph>
                </div>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-muted-foreground text-sm">
                <p>Organized by: TheHoracle</p>
                <p className="flex items-center gap-2 ">
                  {" "}
                  <Timer className="h-4 w-4 text-red-500" /> 10:00am - 12:00pm{" "}
                </p>
              </div>
              <div className="mt-3">
                <h4 className="font-semibold capitalize leading-tight tracking-tight">
                  Education for poor children
                </h4>
                <Paragraph>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dolores incidunt maiores beatae nesciunt sunt unde vel nobis!
                  Nisi, possimus consectetur?
                </Paragraph>
              </div>
              <div className="flex items-center gap-3 bg-zinc-100 mt-4">
                <LocateFixedIcon className="h-4 w-4 text-blue-500" />
                Location: Online{" "}
              </div>
            </div>
            <div className="w-full">
              <div className="flex my-2 items-center gap-1.5">
                <Heading variant="light" className=" min-w-max">
                  Upcoming events
                </Heading>
                <div className="h-px w-full bg-red-500" />
              </div>
              <ul className="divide-y divide-gray-200 border-b w-full">
                {upcommingEvent.map((event, index) => {
                  return (
                    <li
                      className="py-4 first:pt-0 flex gap-4 items-center text-sm "
                      key={index}
                    >
                      <div className="bg-primary px-6 py-4 text-white flex flex-col items-center">
                        <p className="font-bold text-4xl ">{event.day}</p>
                        <Paragraph className="text-white uppercase">
                          {event.month}
                        </Paragraph>
                      </div>
                      <div className="flex flex-col gap-4">
                        <p className="">
                          Organized by :{" "}
                          <span className="text-primary font-medium">
                            {event.creator}
                          </span>{" "}
                        </p>
                        <h4 className="font-semibold capitalize leading-tight tracking-tight">
                          {event.title}
                        </h4>
                        <Paragraph>{event.description}</Paragraph>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};
export default EventsCalender;

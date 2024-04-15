"use client";
import { Check, CheckCheck } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Progress } from "./ui/progress";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Paragraph from "./ui/paragraph";
import Heading from "./ui/heading";

const About = () => {
  const [progress, setProgress] = useState<number>(10);
  const goals = [
    "food donations",
    "water supply",
    "money donation",
    "education donation",
    "clothes donations",
    "toys donation",
  ];
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col md:flex-row justify-between py-20">
        <div className="md:w-1/2 flex flex-col gap-2.5">
          <div className="">
            <Paragraph variant="topic" size="sm">
              About us
            </Paragraph>
            <h2>
              <Heading variant="light">Helping people, our main goal!</Heading>
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <p className="text-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quam quidem aut doloremque quasi architecto
              reprehenderit ipsum animi similique illo.
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              vero necessitatibus velit sunt, culpa eligendi corrupti nobis
              blanditiis.
            </p>
          </div>
          <div>
            <Link
              href="#"
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
            >
              Learn more about what we do &rarr;
            </Link>
          </div>
        </div>
        <div className="md:w-2/5  bg-zinc-100 px-10 py-12 rounded-lg grid place-items-center">
          <div className="grid w-full grid-cols-2 grid-rows-3 gap-x-4 gap-y-2 mb-4">
            {goals.map((goal, index) => {
              return (
                <div key={goal} className="flex items-center gap-2">
                  <Check className="bg-green-500 h-5 w-5 p-1 rounded-full" />
                  <p className="capitalize ">{goal}</p>
                </div>
              );
            })}
          </div>
          <div className="w-full mt-4 ">
            <h2 className="font-semibold leading-tight tracking-tighter capitalize  text-lg">
              Total Donation
            </h2>

            <Progress value={progress} className="w-full h-1.5 mt-4 bg-white" />
            <div className="flex items-center justify-between mx-0 my-1">
              <p className="text-xs text-muted-foreground">Collected: #500k</p>
              <p className="text-xs text-muted-foreground">Goal: #50M</p>
            </div>
          </div>
          <Link
            href="/donate"
            className={cn("place-self-start mt-4", buttonVariants())}
          >
            Donate{" "}
          </Link>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
export default About;

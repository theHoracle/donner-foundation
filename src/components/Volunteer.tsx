"use client";
import {
  TVolunteerFormValidator,
  VolunteerFormValidator,
} from "@/lib/validators/volunteer-form-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Paragraph from "./ui/paragraph";
import Heading from "./ui/heading";
import { Button } from "./ui/button";

const Volunteer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TVolunteerFormValidator>({
    resolver: zodResolver(VolunteerFormValidator),
  });

  const onSubmit = () => {};
  return (
    <div id="volunteer" className="relative grid place-items-center py-20">
      <div className="absolute  w-full h-full bg-black/60">
        <Image
          src="/care-package.jpg"
          fill
          alt="Care Package"
          className="absolute object-cover object-center -z-10 blur-sm"
        />
      </div>
      <MaxWidthWrapper className="z-10 text-white">
        <div className="flex flex-col md:flex-row items-center gap-0 md:gap-8 w-full">
          <div className=" md:w-1/2 py-10 px-6 flex flex-col gap-4">
            <div>
              <Paragraph variant="topic" className="text-white">
                want to help
              </Paragraph>
              <h2>
                <Heading variant="light">
                  Join the community as a volunteer
                </Heading>
              </h2>
            </div>
            <Paragraph className="text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              cupiditate accusamus, eligendi quod sapiente dolores dolorem ipsa
              minus aliquam, vel, rem beatae commodi non maiores! Saepe ea
              exercitationem enim blanditiis!
            </Paragraph>
            <div className="relative w-full h-44">
              <Image
                src="/flat-lay-paper-hand-holding-heart-with-copy-space.jpeg"
                fill
                alt="hands of love"
                className="absolute object-cover object-center rounded-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full px-6 md:py-10 py-4">
            <div className="grid gap-6 ">
              <form action="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    required
                    {...register("fullName")}
                    placeholder="John Doe"
                    className={cn({
                      "focus-visible::ring-red-500": errors.fullName,
                    })}
                  />
                  {errors?.fullName && (
                    <p className="text-sm text-red-500">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    required
                    {...register("email")}
                    placeholder="you@example.com"
                    className={cn({
                      "focus-visible::ring-red-500": errors.email,
                    })}
                  />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    {...register("phoneNumber")}
                    placeholder="081234567890"
                    className={cn({
                      "focus-visible::ring-red-500": errors.phoneNumber,
                    })}
                  />
                  {errors?.phoneNumber && (
                    <p className="text-sm text-red-500">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-1 py-2">
                  <Label htmlFor="text">Why do you want to join us?</Label>
                  <Textarea
                    {...register("text")}
                    placeholder="I want to do good"
                    className={cn({
                      "focus-visible::ring-red-500": errors.text,
                    })}
                  />
                  {errors?.text && (
                    <p className="text-sm text-red-500">
                      {errors.text.message}
                    </p>
                  )}
                </div>
                <Button variant="secondary">Submit</Button>
              </form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
export default Volunteer;

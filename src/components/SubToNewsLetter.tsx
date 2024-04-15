"use client";
import { useForm } from "react-hook-form";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Heading from "./ui/heading";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import Paragraph from "./ui/paragraph";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const emailValidator = z.object({
  email: z.string().email(),
});
type TEmailValidator = z.infer<typeof emailValidator>;
const SubToNewsLetter = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<TEmailValidator>({
    resolver: zodResolver(emailValidator),
  });
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <section className="bg-primary md:grid md:grid-cols-4 md:grid-rows-1 flex flex-col">
      <MaxWidthWrapper className="md:col-span-2 py-4 md:py-16 text-white">
        <Paragraph variant="topic" className="text-white">
          subscribe
        </Paragraph>
        <h2>
          <Heading variant="light" className="text-white">
            To Our Newsletter
          </Heading>
        </h2>
        <Paragraph className="text-white">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod
          provident, atque placeat minima corporis maiores sint pariatur eius
          minus! Voluptates?
        </Paragraph>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="email">Email</Label>
          <Input
            {...register("email")}
            placeholder="you@example.com"
            required
            className={cn({
              "focus-visible::ring-red-500": errors.email,
            })}
          />

          <Button variant="secondary" className="my-4">
            Subscribe
          </Button>
        </form>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="bg-rose-500  md:col-span-2 py-4 md:py-16">
        <div className="flex flex-col">
          <div>
            <Paragraph variant="topic" className="text-white">
              Blog
            </Paragraph>
            <h2>
              <Heading variant="light" className="text-white">
                Take a look at our recent blog posts
              </Heading>
            </h2>
          </div>
          <div>
            <div className="w-full hidden md:block h-32 my-3 bg-white rounded-sm overflow-scroll">
              {/* some blogs with titles */}
            </div>
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "link" }),
                "text-white pl-0"
              )}
            >
              See all posts &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default SubToNewsLetter;

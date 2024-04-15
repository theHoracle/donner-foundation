import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const headingVariants = cva("leading-tight tracking-tight", {
  variants: {
    variant: {
      default: "uppercase font-bold text-4xl",
      light: "capitalize font-semibold text-2xl",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface headingProps
  extends React.HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}
const Heading = React.forwardRef<HTMLHeadingElement, headingProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <div
        className={cn(headingVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
Heading.displayName = "Heading";

export default Heading;

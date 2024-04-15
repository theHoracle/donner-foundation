import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const ParagraphVariants = cva(
  "leading-normal text-left font-normal tracking-normal",
  {
    variants: {
      variant: {
        default: "text-gray-900",
        topic: "uppercase font-semibold text-muted-foreground ",
      },
      size: {
        default: "text-sm",
        sm: "text-xs",
        lg: "text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ParagraphProps
  extends React.HtmlHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof ParagraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, variant, size, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(ParagraphVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";
export default Paragraph;

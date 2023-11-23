import { cva } from "class-variance-authority";

export const TypographyVariants = cva(
  /* base style */
  "",
  {
    variants: {
      intent: {
        h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
        p: "leading-7 [&:not(:first-child)]:mt-6",
      },

      color: {
        primary: "text-primary",
        secondary: "text-secondary",
        destructive: "text-destructive",
        accent: "text-accent",
      },
      align: {
        left: "text-left",
        center: "text-center",
        right: "text-right",
      },
      style: {
        none: "",
        underline: "border-b",
      },
    },

    defaultVariants: {
      intent: "p",
      color: "primary",
      align: "left",
      style: "none",
    },
  }
);

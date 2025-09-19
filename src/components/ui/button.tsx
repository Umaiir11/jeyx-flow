import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-primary-foreground hover:scale-105 hover:shadow-glow",
        destructive: "bg-error text-error-foreground hover:bg-error/90 hover:scale-105",
        outline: "glass border-2 border-primary/30 text-foreground hover:border-primary hover:bg-primary/10 hover:scale-105",
        secondary: "bg-surface text-foreground hover:bg-surface-hover hover:scale-105",
        ghost: "text-foreground hover:bg-surface/50 hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline hover:text-primary-hover",
        glass: "glass text-foreground hover:bg-surface-hover hover:scale-105 hover:shadow-glass",
        success: "bg-gradient-success text-success-foreground hover:scale-105 hover:shadow-success-glow",
        hero: "bg-gradient-primary text-primary-foreground hover:scale-110 hover:shadow-glow transform transition-all duration-300 font-semibold",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-xl px-8 text-base",
        icon: "h-12 w-12",
        hero: "h-16 px-10 text-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

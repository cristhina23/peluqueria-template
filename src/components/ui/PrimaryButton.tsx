import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface PrimaryButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}

export function PrimaryButton({
  children,
  asChild = false,
  className,
  ...props
}: PrimaryButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full",
        "bg-primary text-primary-foreground font-medium",
        "transition-all duration-300 ease-out",
        "shadow-lg hover:shadow-xl",
        "before:absolute before:inset-0 before:bg-white/20 before:opacity-0 before:transition-opacity",
        "after:absolute after:-left-1/2 after:top-0 after:h-full after:w-1/2 after:bg-white/30 after:rotate-12 after:blur-lg after:opacity-0 after:transition-all after:duration-500",
        "hover:before:opacity-100 hover:after:left-full hover:after:opacity-100",
        "active:scale-[0.97]",
        className
      )}
    >
      {children}
    </Comp>
  );
}
 
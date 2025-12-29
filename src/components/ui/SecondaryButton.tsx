import type { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  icon?: ReactNode;
  asChild?: boolean;
}

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  children,
  icon,
  asChild = false,
  className,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full overflow-hidden",
        "border-2 border-primary text-primary bg-transparent",
        "transition-all duration-300 ease-out",
        "active:scale-[0.97]",
        className
      )}
    >
      {/* Hover overlay */}
      <span
        className="
          pointer-events-none
          absolute inset-0
          bg-primary/30 backdrop-blur-sm
          translate-y-full
          transition-transform duration-300 ease-out
          group-hover:translate-y-0
        "
      />

      {/* Icon */}
      {icon && (
        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
          {icon}
        </span>
      )}

      {/* Text */}
      <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
        {children}
      </span>
    </Comp>
  );
};

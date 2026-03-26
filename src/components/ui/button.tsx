import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button variants defined with class-variance-authority.
 * Supports `variant` and `size` props for consistent styling.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold rounded-[var(--radius-button)] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500",
        secondary:
          "bg-secondary-500 text-white hover:bg-secondary-600 focus-visible:ring-secondary-400",
        accent: "bg-accent-600 text-white hover:bg-accent-700 focus-visible:ring-accent-500",
        outline:
          "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-primary-950 focus-visible:ring-primary-500",
        ghost:
          "text-text-muted hover:bg-surface-alt hover:text-text dark:hover:bg-zinc-800 focus-visible:ring-primary-500",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

type ButtonVariantProps = VariantProps<typeof buttonVariants>;

interface ButtonBaseProps extends ButtonVariantProps {
  children: ReactNode;
  className?: string;
}

interface ButtonAsButton
  extends ButtonBaseProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  /** When provided, renders as a react-router Link instead of a button. */
  to?: undefined;
}

interface ButtonAsLink extends ButtonBaseProps {
  to: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

/**
 * Versatile button component that renders as a `<button>` or a react-router
 * `<Link>` depending on whether the `to` prop is provided.
 *
 * Uses class-variance-authority for consistent variant/size management
 * and `cn` (tailwind-merge) for safe class merging.
 *
 * @example
 * ```tsx
 * <Button variant="primary" to="/donate">Donate Now</Button>
 * <Button variant="outline" onClick={handleClick}>Learn More</Button>
 * <Button variant="ghost" size="sm">Cancel</Button>
 * ```
 */
export function Button({ variant, size, className, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("to" in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { to: _, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

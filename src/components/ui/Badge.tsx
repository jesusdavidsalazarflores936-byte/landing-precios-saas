import type { ReactNode } from "react";

type BadgeVariant =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "required";

type BadgeSize = "sm" | "md";

interface BadgeProps {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: "bg-muted text-muted-foreground",
  primary: "bg-accent text-accent-foreground",
  success: "bg-accent text-accent-foreground",
  warning: "bg-accent text-accent-foreground",
  danger: "bg-accent text-accent-foreground",
  info: "bg-secondary text-secondary-foreground",
  required: "bg-accent text-accent-foreground font-semibold",
};

const dotColors: Record<BadgeVariant, string> = {
  default: "bg-muted-foreground",
  primary: "bg-primary",
  success: "bg-primary",
  warning: "bg-primary",
  danger: "bg-primary",
  info: "bg-secondary-foreground",
  required: "bg-primary",
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  variant = "default",
  size = "sm",
  dot = false,
  className = "",
  children,
}: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 rounded-full font-medium",
        variantClasses[variant],
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {dot && (
        <span
          aria-hidden="true"
          className={["w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant]].join(" ")}
        />
      )}
      {children}
    </span>
  );
}

import type { ElementType, ReactNode } from "react";

type CardVariant = "default" | "outlined" | "elevated" | "highlighted";

interface CardProps {
  variant?: CardVariant;
  padding?: "none" | "sm" | "md" | "lg";
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

interface CardSectionProps {
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<CardVariant, string> = {
  default: "bg-white border border-gray-200",
  outlined: "bg-transparent border-2 border-gray-300",
  elevated: "bg-white shadow-lg border border-gray-100",
  highlighted: "bg-white border-2 border-indigo-500 shadow-md shadow-indigo-100",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export function Card({
  variant = "default",
  padding = "md",
  className = "",
  children,
  as: Tag = "div",
}: CardProps) {
  return (
    <Tag
      className={[
        "rounded-2xl transition-all duration-300 ease-out",
        variantClasses[variant],
        paddingClasses[padding],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

export function CardHeader({ className = "", children }: CardSectionProps) {
  return (
    <div className={["mb-4", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

export function CardBody({ className = "", children }: CardSectionProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children }: CardSectionProps) {
  return (
    <div className={["mt-6 pt-4 border-t border-gray-100", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

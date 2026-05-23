import type { ElementType, ReactNode } from "react";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ContainerProps {
  size?: ContainerSize;
  padded?: boolean;
  centered?: boolean;
  className?: string;
  children: ReactNode;
  as?: ElementType;
}

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-xl",
  md: "max-w-3xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  "2xl": "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  size = "xl",
  padded = true,
  centered = true,
  className = "",
  children,
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={[
        "w-full",
        sizeClasses[size],
        centered ? "mx-auto" : "",
        padded ? "px-4 sm:px-6 lg:px-8" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </Tag>
  );
}

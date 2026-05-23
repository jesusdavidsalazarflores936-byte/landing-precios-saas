import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
  children: ReactNode;
};

type NativeButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
    openInNewTab?: never;
  };

type AnchorButtonProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
    openInNewTab?: boolean;
  };

type ButtonProps = NativeButtonProps | AnchorButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[#ff5f57] text-white shadow-sm shadow-[#ff5f57]/20 hover:bg-[#f04f48] active:bg-[#d94840] focus-visible:ring-[#ff5f57]",
  secondary:
    "bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 focus-visible:ring-[#ff5f57]",
  ghost:
    "bg-transparent text-gray-700 hover:bg-[#fff0ee] active:bg-[#ffe3df] focus-visible:ring-[#ff5f57]",
  outline:
    "bg-transparent border border-[#ff5f57] text-[#d94840] hover:bg-[#fff0ee] active:bg-[#ffe3df] focus-visible:ring-[#ff5f57]",
  danger:
    "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm gap-1.5 rounded-md",
  md: "px-4 py-2 text-base gap-2 rounded-lg",
  lg: "px-6 py-3 text-lg gap-2.5 rounded-xl",
};

export function Button({
  variant = "primary",
  size = "md",
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const classes = [
    "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out active:translate-y-px",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading ? (
        <svg
          className="animate-spin h-4 w-4 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      <span>{children}</span>
      {!loading && rightIcon && (
        <span className="shrink-0">{rightIcon}</span>
      )}
    </>
  );

  const href = (props as AnchorButtonProps).href;

  if (href) {
    const { openInNewTab, ...anchorProps } = props as AnchorButtonProps;

    return (
      <a
        {...anchorProps}
        href={href}
        target={openInNewTab ? "_blank" : anchorProps.target}
        rel={openInNewTab ? "noreferrer" : anchorProps.rel}
        aria-disabled={isDisabled || undefined}
        className={classes}
      >
        {content}
      </a>
    );
  }

  const buttonProps = props as NativeButtonProps;

  return (
    <button
      {...buttonProps}
      disabled={isDisabled}
      aria-busy={loading}
      className={classes}
    >
      {content}
    </button>
  );
}

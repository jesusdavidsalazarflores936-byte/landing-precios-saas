"use client";

interface ToggleOption<T extends string> {
  value: T;
  label: string;
  badge?: string;
}

interface ToggleProps<T extends string> {
  options: [ToggleOption<T>, ToggleOption<T>];
  value: T;
  onChange: (value: T) => void;
  ariaLabel?: string;
  className?: string;
}

export function Toggle<T extends string>({
  options,
  value,
  onChange,
  ariaLabel = "Seleccionar período",
  className = "",
}: ToggleProps<T>) {
  const activeIndex = options.findIndex((option) => option.value === value);
  const translateClass = activeIndex === 1 ? "translate-x-full" : "translate-x-0";

  return (
    <div
      role="radiogroup"
      aria-label={ariaLabel}
      className={[
        "relative inline-grid min-h-11 w-full max-w-[22rem] grid-cols-2 items-center overflow-hidden rounded-full border border-slate-200 bg-white p-1 shadow-sm sm:w-auto sm:min-w-[20rem]",
        className,
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-[#ff5f57] shadow-sm transition-all duration-300 ease-out",
          translateClass,
        ].join(" ")}
      />

      {options.map((option) => {
        const isActive = value === option.value;

        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={isActive}
            onClick={() => onChange(option.value)}
            className={[
              "relative z-10 inline-flex min-h-9 items-center justify-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-all duration-300 ease-out",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2",
              isActive
                ? "text-white"
                : "text-slate-500 hover:text-slate-900",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span>{option.label}</span>
            {option.badge && (
              <span
                className={[
                  "hidden items-center rounded-full px-2 py-0.5 text-xs font-semibold transition-all duration-300 ease-out sm:inline-flex",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-[#fff0ee] text-[#d94840]",
                ].join(" ")}
              >
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

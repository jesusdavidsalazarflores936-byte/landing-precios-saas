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
  className?: string;
}

export function Toggle<T extends string>({
  options,
  value,
  onChange,
  className = "",
}: ToggleProps<T>) {
  return (
    <div
      role="radiogroup"
      aria-label="Seleccionar período"
      className={[
        "inline-flex items-center bg-gray-100 rounded-full p-1 gap-1",
        className,
      ].join(" ")}
    >
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
              "relative inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1",
              isActive
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-700",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <span>{option.label}</span>
            {option.badge && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-700">
                {option.badge}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

"use client";

import type {
  BillingCycle,
  BillingToggle as BillingToggleConfig,
} from "@/types/pricing.types";

interface BillingToggleProps {
  config: BillingToggleConfig;
  value: BillingCycle;
  onChange: (period: BillingCycle) => void;
  className?: string;
}

export function BillingToggle({
  config,
  value,
  onChange,
  className = "",
}: BillingToggleProps) {
  const options: Array<{ value: BillingCycle; label: string; badge?: string }> = [
    {
      value: "monthly",
      label: config.monthlyLabel ?? "Mensual",
    },
    {
      value: "annual",
      label: config.annualLabel ?? "Anual",
      badge: config.annualDiscountLabel,
    },
  ];

  return (
    <div className={`flex justify-center ${className}`}>
      <div
        role="radiogroup"
        aria-label="Seleccionar periodo de facturación"
        className="inline-flex max-w-full items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm"
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
                "min-h-9 rounded-full px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2",
                isActive
                  ? "bg-[#ff5f57] text-white shadow-sm"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span>{option.label}</span>
              {option.badge && option.value === "annual" && (
                <span
                  className={[
                    "ml-2 hidden rounded-full px-2 py-0.5 text-xs font-semibold sm:inline-flex",
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
    </div>
  );
}

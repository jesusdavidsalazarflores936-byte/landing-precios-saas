"use client";

import { Toggle } from "@/components/ui/Toggle";
import type { BillingPeriod } from "@/types/pricing.types";
import type { BillingToggle as BillingToggleConfig } from "@/types/pricing.types";

interface BillingToggleProps {
  config: BillingToggleConfig;
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
  className?: string;
}

export function BillingToggle({
  config,
  value,
  onChange,
  className = "",
}: BillingToggleProps) {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <Toggle<BillingPeriod>
        value={value}
        onChange={onChange}
        options={[
          {
            value: "monthly",
            label: config.monthlyLabel ?? "Mensual",
          },
          {
            value: "annual",
            label: config.annualLabel ?? "Anual",
            badge: config.annualDiscountLabel,
          },
        ]}
      />
    </div>
  );
}
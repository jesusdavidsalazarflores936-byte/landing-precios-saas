"use client";

import { Toggle } from "@/components/ui/Toggle";
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
  return (
    <div className={`flex justify-center ${className}`}>
      <Toggle<BillingCycle>
        value={value}
        onChange={onChange}
        ariaLabel="Seleccionar periodo de facturación"
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

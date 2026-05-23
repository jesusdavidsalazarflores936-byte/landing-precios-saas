"use client";

import { useState, useCallback } from "react";

export type BillingPeriod = "monthly" | "annual";

export interface UseBillingPeriodReturn {
  period: BillingPeriod;
  isAnnual: boolean;
  isMonthly: boolean;
  setPeriod: (period: BillingPeriod) => void;
  togglePeriod: () => void;
}

export function useBillingPeriod(
  initialPeriod: BillingPeriod = "monthly"
): UseBillingPeriodReturn {
  const [period, setPeriodState] = useState<BillingPeriod>(initialPeriod);

  const setPeriod = useCallback((next: BillingPeriod) => {
    setPeriodState(next);
  }, []);

  const togglePeriod = useCallback(() => {
    setPeriodState((prev) => (prev === "monthly" ? "annual" : "monthly"));
  }, []);

  return {
    period,
    isAnnual: period === "annual",
    isMonthly: period === "monthly",
    setPeriod,
    togglePeriod,
  };
}
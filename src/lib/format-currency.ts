import type {
  AddonPrice,
  BillingCycle,
  BillingPeriod,
  PlanPrice,
} from "@/types/pricing.types";

type Price = PlanPrice | AddonPrice;

export function formatPrice(price: Price, period: BillingPeriod): string {
  const amount = period === "monthly" ? price.amountMonthly : price.amountAnnual;

  const formatted = Number.isInteger(amount)
    ? amount.toLocaleString("es-PE")
    : amount.toLocaleString("es-PE", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

  const symbolIsCode = price.currencySymbol === price.currency;

  return symbolIsCode
    ? `${formatted} ${price.currencySymbol}`
    : `${price.currencySymbol}${formatted}`;
}

export function getEffectiveMonthlyPrice(
  price: PlanPrice,
  cycle: BillingCycle
): number {
  return cycle === "annual" ? price.amountAnnual : price.amountMonthly;
}

export function getAnnualTotal(price: PlanPrice): number {
  return price.amountAnnual * 12;
}

export function getPeriodLabel(period: BillingPeriod): string {
  return period === "monthly" ? "/mes" : "/año";
}
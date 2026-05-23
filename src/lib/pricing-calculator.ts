import type { BillingToggle, PlanPrice, AddonPrice } from "@/types/pricing.types";
import type { BillingCycle } from "@/types/pricing.types";
import { getAnnualTotal } from "./format-currency";

// tipo de retorno

export interface SavingsResult {
  /** Ahorro absoluto en la moneda del precio */
  amount: number;
  /** Porcentaje de descuento redondeado al entero más cercano */
  percent: number;
  /** Etiqueta lista para mostrar en la UI, e.g. "Ahorra S/240/año" */
  label: string;
  /** true si hay ahorro real (amount > 0) */
  hasSavings: boolean;
}

export interface PriceBreakdown {
  /** Precio mensual efectivo según el ciclo */
  monthlyEffective: number;
  /** Total a pagar en el período (mensual × 1 | anual × 12) */
  periodTotal: number;
  cycle: BillingCycle;
}

// fx

/**
 * Calcula el ahorro anual comparando facturación mensual vs anual.
 * Retorna un objeto con el monto, porcentaje y etiqueta formateada.
 */
export function calcAnnualSavings(
  price: PlanPrice,
  toggle: BillingToggle
): SavingsResult {
  const monthlyTotal = price.amountMonthly * 12;
  const annualTotal = getAnnualTotal(price);
  const amount = monthlyTotal - annualTotal;
  const percent = Math.round((amount / monthlyTotal) * 100);
  const hasSavings = amount > 0;

  const label = hasSavings
    ? `${toggle.annualDiscountLabel} · Ahorra ${price.currencySymbol}${amount}/año`
    : "Sin descuento adicional";

  return { amount, percent, label, hasSavings };
}

/**
 * Devuelve el desglose de precio para un plan según el ciclo activo.
 */
export function getPriceBreakdown(
  price: PlanPrice,
  cycle: BillingCycle
): PriceBreakdown {
  const monthlyEffective =
    cycle === "annual" ? price.amountAnnual : price.amountMonthly;
  const periodTotal =
    cycle === "annual" ? monthlyEffective * 12 : monthlyEffective;

  return { monthlyEffective, periodTotal, cycle };
}

/**
 * Igual que getPriceBreakdown pero para precios de add-ons (AddonPrice).
 * AddonPrice tiene la misma forma que PlanPrice para los campos de cálculo.
 */
export function getAddonPriceBreakdown(
  price: AddonPrice,
  cycle: BillingCycle
): PriceBreakdown {
  // AddonPrice comparte los campos de cálculo con PlanPrice
  return getPriceBreakdown(price as unknown as PlanPrice, cycle);
}

/**
 * Suma el costo mensual efectivo de un plan base + add-ons seleccionados.
 * Útil para mostrar un total estimado en la UI.
 */
export function calcTotalMonthlyCost(
  basePlanPrice: PlanPrice,
  selectedAddonPrices: AddonPrice[],
  cycle: BillingCycle
): number {
  const base =
    cycle === "annual"
      ? basePlanPrice.amountAnnual
      : basePlanPrice.amountMonthly;

  const addonsTotal = selectedAddonPrices.reduce((sum, p) => {
    const effective = cycle === "annual" ? p.amountAnnual : p.amountMonthly;
    return sum + effective;
  }, 0);

  return base + addonsTotal;
}


export function getEffectiveDiscountPercent(
  price: PlanPrice,
  toggle: BillingToggle
): number {
  const real = Math.round(
    ((price.amountMonthly - price.amountAnnual) / price.amountMonthly) * 100
  );
  return real > 0 ? real : toggle.annualDiscountPercent;
}
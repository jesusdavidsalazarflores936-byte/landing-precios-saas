import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { BillingCycle, PricingPlan } from "@/types/pricing.types";

interface PricingPlanCardProps {
  plan: PricingPlan;
  period: BillingCycle;
}

export function PricingPlanCard({ plan, period }: PricingPlanCardProps) {
  return (
    <Card
      variant="default"
      padding="none"
      className="overflow-hidden rounded-2xl border-[#fecaca] bg-white shadow-xl shadow-rose-100/60 hover:-translate-y-1 hover:border-[#ffb4ad] hover:shadow-2xl hover:shadow-[#ff5f57]/15"
    >
      <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:items-stretch lg:gap-8">
        <div className="flex flex-col">
          <CardHeader className="mb-0">
            {plan.badge && (
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge
                  variant="default"
                  size="md"
                  className="bg-[#fff0ee] text-[#d94840]"
                >
                  {plan.badge}
                </Badge>
              </div>
            )}

            <h3 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
              {plan.name}
            </h3>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              {plan.description}
            </p>

            <div className="mt-7 flex items-end gap-1">
              <span className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
                {formatPrice(plan.price, period)}
              </span>

              <span className="mb-1.5 text-sm font-medium text-slate-500">
                {getPeriodLabel(period)}
              </span>
            </div>
          </CardHeader>

          <CardFooter className="mt-auto border-t-0 px-0 pb-0 pt-7">
            <a
              href={plan.cta.href}
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#ff5f57] px-6 py-3 text-center text-sm font-semibold text-white shadow-sm shadow-[#ff5f57]/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f04f48] hover:shadow-md hover:shadow-[#ff5f57]/25 active:translate-y-px active:bg-[#d94840] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2 sm:w-auto"
            >
              {plan.cta.label}
            </a>
          </CardFooter>
        </div>

        <CardBody className="rounded-2xl bg-slate-50 p-5 sm:p-6">
          <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
            Incluye
          </p>

          <ul className="space-y-3" aria-label={`Características de ${plan.name}`}>
            {plan.features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-start gap-3 text-sm leading-6 text-slate-700"
              >
                <span
                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-xs font-bold text-[#ff5f57]"
                  aria-hidden="true"
                >
                  ✓
                </span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </div>
    </Card>
  );
}

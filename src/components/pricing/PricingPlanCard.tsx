import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/Card";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { BasePlan, BillingPeriod } from "@/types/pricing.types";

interface PricingPlanCardProps {
  plan: BasePlan;
  period: BillingPeriod;
}

export function PricingPlanCard({ plan, period }: PricingPlanCardProps) {
  return (
    <Card variant="highlighted" padding="none" className="overflow-hidden">
      <div className="h-1.5 w-full bg-gradient-to-r from-indigo-500 to-violet-500" />

      <div className="p-6 sm:p-8 lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
        <CardHeader className="mb-0">
          {plan.badge && (
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Badge variant="required" size="md">
                {plan.badge}
              </Badge>
            </div>
          )}

          <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {plan.name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-gray-600">
            {plan.description}
          </p>

          <div className="mt-6 flex items-end gap-1">
            <span className="text-4xl font-extrabold tracking-tight text-gray-900">
              {formatPrice(plan.price, period)}
            </span>

            <span className="mb-1 text-sm text-gray-500">
              {getPeriodLabel(period)}
            </span>
          </div>
        </CardHeader>

        <CardBody>
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Incluye
          </p>

          <ul className="space-y-2.5" aria-label={`Características de ${plan.name}`}>
            {plan.features.map((feature) => (
              <li
                key={feature.id}
                className="flex items-start gap-2.5 text-sm text-gray-700"
              >
                <span className="mt-0.5 shrink-0 text-indigo-500">✓</span>
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </div>

      <CardFooter className="mt-0 border-t border-indigo-100 px-6 pb-6 sm:px-8 sm:pb-8">
        <a
          href={plan.cta.href}
          className="block w-full rounded-lg bg-indigo-600 px-6 py-3 text-center text-sm font-medium text-white transition hover:bg-indigo-700"
        >
          {plan.cta.label}
        </a>
      </CardFooter>
    </Card>
  );
}
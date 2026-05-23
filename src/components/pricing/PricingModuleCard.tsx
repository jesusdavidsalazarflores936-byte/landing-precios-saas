import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { Addon, BillingCycle } from "@/types/pricing.types";

interface PricingModuleCardProps {
  module: Addon;
  period: BillingCycle;
  onDetails?: (module: Addon) => void;
}

export function PricingModuleCard({
  module,
  period,
  onDetails,
}: PricingModuleCardProps) {
  return (
    <Card
      variant="elevated"
      padding="none"
      className="flex h-full flex-col overflow-hidden transition-shadow duration-200 hover:shadow-xl"
    >
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <CardHeader>
          <div className="mb-3 flex items-start justify-between gap-2">
            <h3 className="text-base font-bold text-gray-900 sm:text-lg">
              {module.name}
            </h3>

            {module.badge && (
              <Badge variant="primary" size="sm">
                {module.badge}
              </Badge>
            )}
          </div>

          <p className="text-sm leading-relaxed text-gray-500">
            {module.description}
          </p>
        </CardHeader>

        <CardBody>
          <div className="mt-4 flex items-end gap-1">
            <span className="text-2xl font-extrabold text-gray-900">
              {module.price.isContactSales
                ? "Contactar ventas"
                : formatPrice(module.price, period)}
            </span>
            {!module.price.isContactSales && (
              <span className="mb-0.5 text-xs text-gray-500">
                {getPeriodLabel(period)}
              </span>
            )}
          </div>

          {module.features && module.features.length > 0 && (
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {module.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <span className="text-green-500" aria-hidden="true">
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardBody>

        {onDetails && (
          <CardFooter className="mt-auto flex flex-col gap-2 pt-4">
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              onClick={() => onDetails(module)}
            >
              Ver detalles
            </Button>
          </CardFooter>
        )}
      </div>
    </Card>
  );
}

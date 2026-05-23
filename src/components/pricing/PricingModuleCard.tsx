import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { Addon, BillingCycle } from "@/types/pricing.types";

interface PricingModuleCardProps {
  module: Addon;
  period: BillingCycle;
  featured?: boolean;
  onDetails?: (module: Addon) => void;
}

export function PricingModuleCard({
  module,
  period,
  featured = false,
  onDetails,
}: PricingModuleCardProps) {
  return (
    <Card
      variant="default"
      padding="none"
      className={[
        "flex h-full w-full flex-col overflow-hidden rounded-2xl border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
        featured ? "border-[#fecaca] shadow-rose-100/70" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="flex flex-1 flex-col p-6">
        <CardHeader className="mb-0">
          <div className="mb-4 flex items-start justify-between gap-3">
            <span
              aria-hidden="true"
              className={[
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-semibold",
                featured
                  ? "bg-[#fff0ee] text-[#ff5f57]"
                  : "bg-slate-100 text-slate-600",
              ].join(" ")}
            >
              +
            </span>

            {module.badge && (
              <Badge
                variant="default"
                size="sm"
                className="bg-[#fff0ee] text-[#d94840]"
              >
                {module.badge}
              </Badge>
            )}
          </div>

          <h3 className="text-lg font-bold tracking-tight text-slate-950">
            {module.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            {module.description}
          </p>
        </CardHeader>

        <CardBody className="flex-1">
          <div className="mt-5 flex items-end gap-1">
            <span className="text-3xl font-extrabold tracking-tight text-slate-950">
              {module.price.isContactSales
                ? "Contactar ventas"
                : formatPrice(module.price, period)}
            </span>
            {!module.price.isContactSales && (
              <span className="mb-1 text-sm font-medium text-slate-500">
                {getPeriodLabel(period)}
              </span>
            )}
          </div>

          {module.features && module.features.length > 0 && (
            <ul className="mt-5 space-y-2.5 text-sm text-slate-700">
              {module.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-[10px] font-bold text-[#ff5f57]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardBody>

        {onDetails && (
          <CardFooter className="mt-auto border-t border-slate-100 px-0 pb-0 pt-5">
            <Button
              variant="ghost"
              size="sm"
              fullWidth
              className="text-[#d94840] hover:bg-[#fff0ee] hover:text-[#c43f37] focus-visible:ring-[#ff5f57]"
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

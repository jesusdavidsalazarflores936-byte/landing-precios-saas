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
  const isPopular = featured;
  const cardDescription = module.tagline ?? module.description;

  return (
    <Card
      variant="default"
      padding="none"
      className={[
        "relative flex h-full w-full flex-col overflow-visible rounded-2xl bg-card text-card-foreground shadow-sm hover:-translate-y-1 hover:shadow-lg",
        isPopular ? "border-primary border-2 shadow-sm" : "border-border border",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {isPopular && module.badge && (
        <Badge
          variant="default"
          size="sm"
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground"
        >
          {module.badge}
        </Badge>
      )}

      <div className="flex flex-1 flex-col p-6">
        <CardHeader className="mb-0">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xl font-semibold text-primary"
            >
              +
            </span>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-card-foreground">
                {module.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {cardDescription}
              </p>
            </div>
          </div>
        </CardHeader>

        <CardBody className="flex-1">
          <div className="mt-5 flex items-end gap-1">
            {module.price.isContactSales ? (
              <span className="font-bold text-3xl">Contactar ventas</span>
            ) : (
              <>
                <span className="text-muted-foreground">+</span>
                <span className="font-bold text-3xl">
                  {formatPrice(module.price, period)}
                </span>
                <span className="text-muted-foreground text-sm">
                  {getPeriodLabel(period)}
                </span>
              </>
            )}
          </div>

          {module.features && module.features.length > 0 && (
            <div className="mt-5">
              <p className="mb-3 text-xs font-bold uppercase tracking-wider text-card-foreground">
                CARACTER&Iacute;STICAS PRINCIPALES
              </p>
              <ul className="space-y-2.5 text-sm text-card-foreground">
                {module.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <span
                      className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-transparent text-[10px] font-bold text-primary"
                      aria-hidden="true"
                    >
                      &#10003;
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>

        {onDetails && (
          <CardFooter className="mt-auto px-0 pb-0 pt-5">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              fullWidth
              className="text-primary hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground active:translate-y-px focus-visible:ring-primary"
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

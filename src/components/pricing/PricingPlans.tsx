import { PricingPlanCard } from "@/components/pricing/PricingPlanCard";
import type { BillingCycle, PricingPlan } from "@/types/pricing.types";

interface PricingPlansProps {
  plans: PricingPlan[];
  period: BillingCycle;
}

export function PricingPlans({ plans, period }: PricingPlansProps) {
  return (
    <section
      id="precios"
      className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Plan base
        </h2>
        <p className="mt-2 text-gray-600">
          Empieza con el núcleo obligatorio y agrega módulos según necesites.
        </p>
      </div>

      <div className="grid gap-6">
        {plans.map((plan) => (
          <PricingPlanCard key={plan.id} plan={plan} period={period} />
        ))}
      </div>
    </section>
  );
}

import { PricingPlanCard } from "@/components/pricing/PricingPlanCard";
import type { BillingCycle, PricingPlan } from "@/types/pricing.types";

interface PricingPlansProps {
  plans: PricingPlan[];
  period: BillingCycle;
}

export function PricingPlans({ plans, period }: PricingPlansProps) {
  return (
    <section id="precios" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
          Plan base
        </h2>
        <p className="mt-3 text-base leading-7 text-slate-500">
          Empieza con el núcleo obligatorio y agrega módulos según necesites.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-5xl gap-6">
        {plans.map((plan) => (
          <PricingPlanCard key={plan.id} plan={plan} period={period} />
        ))}
      </div>
    </section>
  );
}

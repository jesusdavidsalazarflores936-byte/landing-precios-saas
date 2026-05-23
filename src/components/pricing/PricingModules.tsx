import { Container } from "@/components/ui/Container";
import { PricingModuleCard } from "@/components/pricing/PricingModuleCard";
import type { BillingPeriod } from "@/hooks/useBillingPeriod";
import type { PricingModule } from "@/types/pricing.types";

interface PricingModulesProps {
  modules: PricingModule[];
  period: BillingPeriod;
  onModuleDetails?: (module: PricingModule) => void;
}

export function PricingModules({
  modules,
  period,
  onModuleDetails,
}: PricingModulesProps) {
  if (modules.length === 0) return null;

  return (
    <section
      id="modulos"
      aria-labelledby="modules-heading"
      className="py-16 sm:py-20 bg-gray-50"
    >
      <Container size="lg">
        <div className="text-center mb-10">
          <h2
            id="modules-heading"
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Módulos adicionales
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Potencia tu plan base con los módulos que necesita tu operación. Actívalos cuando quieras.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Módulos disponibles"
        >
          {modules.map((module) => (
            <li key={module.id} className="flex">
              <PricingModuleCard
                module={module}
                period={period}
                onDetails={onModuleDetails}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
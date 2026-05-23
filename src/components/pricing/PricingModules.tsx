import { Container } from "@/components/ui/Container";
import { PricingModuleCard } from "@/components/pricing/PricingModuleCard";
import type { Addon, BillingCycle } from "@/types/pricing.types";

interface PricingModulesProps {
  modules: Addon[];
  period: BillingCycle;
  onModuleDetails?: (module: Addon) => void;
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
      className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <Container size="xl" padded={false}>
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2
            id="modules-heading"
            className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl"
          >
            Personaliza tu plan con Módulos Adicionales
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-slate-500">
            Potencia tu plan base con los módulos que necesita tu operación. Actívalos cuando quieras.
          </p>
        </div>

        <ul
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Módulos disponibles"
        >
          {modules.map((module, index) => (
            <li key={module.id} className="flex">
              <PricingModuleCard
                module={module}
                period={period}
                featured={index === 0}
                onDetails={onModuleDetails}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

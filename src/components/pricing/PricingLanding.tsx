"use client";

import { BillingToggle } from "@/components/pricing/BillingToggle";
import { ModuleDetailModal } from "@/components/pricing/ModuleDetailModal";
import { PricingCTA } from "@/components/pricing/PricingCTA";
import { PricingFAQ } from "@/components/pricing/PricingFAQ";
import { PricingModules } from "@/components/pricing/PricingModules";
import { PricingPlans } from "@/components/pricing/PricingPlans";
import { useBillingPeriod } from "@/hooks/useBillingPeriod";
import { useModuleModal } from "@/hooks/useModuleModal";
import type { Addon, PricingPageConfig } from "@/types/pricing.types";
import type { ProductFullConfig } from "@/types/product.types";

interface PricingLandingProps {
  config: PricingPageConfig | ProductFullConfig;
}

export function PricingLanding({ config }: PricingLandingProps) {
  const pricing = "pricing" in config ? config.pricing : config;
  const { period, setPeriod } = useBillingPeriod(
    pricing.billingToggle.defaultCycle
  );
  const { selectedModule, isOpen, openModule, closeModule } =
    useModuleModal<Addon>();

  return (
    <main>
      <div className="sticky top-0 z-20 border-b border-gray-100 bg-white/90 py-3 backdrop-blur-sm">
        <div className="flex justify-center">
          <BillingToggle
            config={pricing.billingToggle}
            value={period}
            onChange={setPeriod}
          />
        </div>
      </div>

      <PricingPlans plans={pricing.plans} period={period} />

      {pricing.addons && pricing.addons.length > 0 && (
        <PricingModules
          modules={pricing.addons}
          period={period}
          onModuleDetails={openModule}
        />
      )}

      {pricing.faq && pricing.faq.items.length > 0 && (
        <PricingFAQ items={pricing.faq.items} />
      )}

      <PricingCTA config={pricing.finalCta.ctaPrimary} />

      <ModuleDetailModal
        module={selectedModule}
        period={period}
        isOpen={isOpen}
        onClose={closeModule}
      />
    </main>
  );
}

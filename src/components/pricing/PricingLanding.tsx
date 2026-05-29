"use client";

import { LandingFooter } from "@/components/layout/LandingFooter";
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
  const fullConfig = "pricing" in config ? config : null;
  const pricing = "pricing" in config ? config.pricing : config;
  const productName = fullConfig?.brand.name ?? "Precios";
  const finalCta = pricing.finalCta;
  const { period, setPeriod } = useBillingPeriod(
    pricing.billingToggle.defaultCycle
  );
  const { selectedModule, isOpen, openModule, closeModule } =
    useModuleModal<Addon>();

  return (
    <>
      

      <main>
        <div className="border-b border-border bg-background py-3">
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

        <PricingCTA
          config={finalCta.ctaPrimary}
          headline={finalCta.headline}
          subheadline={finalCta.subheadline}
        />

        <ModuleDetailModal
          module={selectedModule}
          period={period}
          isOpen={isOpen}
          onClose={closeModule}
        />
      </main>

      <LandingFooter productName={productName} />
    </>
  );
}

import { notFound } from "next/navigation";

import { PricingHero } from "@/components/pricing/PricingHero";
import { PricingLanding } from "@/components/pricing/PricingLanding";
import { getProductConfig } from "@/lib/get-product-config";

interface PageProps {
  params: Promise<{
    product: string;
  }>;
}

export default async function ProductPage({ params }: PageProps) {
  const { product } = await params;
  const config = getProductConfig(product);

  if (!config) {
    notFound();
  }

  const colors = config.brand.colors as typeof config.brand.colors & {
    accent?: string;
    accentForeground?: string;
  };
  const brandVariables = `
    :root {
      --primary: ${colors.primary};
      --primary-foreground: ${colors.primaryForeground};
      --secondary: ${colors.secondary};
      --secondary-foreground: ${colors.secondaryForeground};
      --background: ${colors.background ?? "var(--background)"};
      --foreground: ${colors.foreground ?? "var(--foreground)"};
      --card: ${colors.card ?? colors.background ?? "var(--card)"};
      --card-foreground: ${colors.cardForeground ?? colors.foreground ?? "var(--card-foreground)"};
      --muted: ${colors.muted ?? "var(--muted)"};
      --muted-foreground: ${colors.mutedForeground ?? "var(--muted-foreground)"};
      --accent: ${colors.accent ?? "var(--accent)"};
      --accent-foreground: ${colors.accentForeground ?? "var(--accent-foreground)"};
      --border: ${colors.border ?? "var(--border)"};
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: brandVariables }} />
      <div>
        <PricingHero config={config.hero} />
        <PricingLanding config={config.pricing} />
      </div>
    </>
  );
}

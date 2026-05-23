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

  return (
    <>
      <PricingHero config={config.hero} />
      <PricingLanding config={config.pricing} />
    </>
  );
}
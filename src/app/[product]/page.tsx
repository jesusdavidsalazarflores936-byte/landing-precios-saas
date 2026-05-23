import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PricingLanding } from "@/components/pricing/PricingLanding";
import { getAllProductSlugs, getProductConfig } from "@/lib/get-product-config";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getAllProductSlugs().map((product) => ({ product }));
}

type ProductPageProps = {
  params: Promise<{
    product: string;
  }>;
};

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { product } = await params;
  const config = await getProductConfig(product);

  if (!config) return {};

  return buildMetadata(config.seo);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { product } = await params;
  const config = await getProductConfig(product);

  if (!config) notFound();

  return <PricingLanding config={config} />;
}

import gesrest from "./products/gesrest";
import hotelhub from "./products/hotelhub";
import sys360 from "./products/360sys";
import pulsoPlus from "./products/pulso-plus";
import comprobanteE from "./products/comprobante-e";

import type { ProductFullConfig } from "@/types/product.types";

export const productConfigs = {
  gesrest,
  hotelhub,
  "360sys": sys360,
  "pulso-plus": pulsoPlus,
  "comprobante-e": comprobanteE,
} satisfies Record<string, ProductFullConfig>;

export type ProductSlug = keyof typeof productConfigs;

export const ALL_PRODUCT_SLUGS = Object.keys(productConfigs) as ProductSlug[];

export function isProductSlug(slug: string): slug is ProductSlug {
  return slug in productConfigs;
}

export function getProductConfig(slug: string): ProductFullConfig | null {
  if (!isProductSlug(slug)) return null;
  return productConfigs[slug];
}
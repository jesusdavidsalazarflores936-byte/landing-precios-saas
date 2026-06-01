import sys360 from "@/config/products/360sys";
import comprobanteE from "@/config/products/comprobante-e";
import gesrest from "@/config/products/gesrest";
import hotelhub from "@/config/products/hotelhub";
import pulsoPlus from "@/config/products/pulso-plus";

import type { ProductFullConfig } from "@/types/product.types";


export const productConfigs = {
  "360sys": sys360,
  gesrest,
  "hotelhub": hotelhub,
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

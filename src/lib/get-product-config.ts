import {
  ALL_PRODUCT_SLUGS,
  getProductConfig as getConfig,
  isProductSlug,
  type ProductSlug,
} from "@/config/products.config";

import type { ProductFullConfig } from "@/types/product.types";

export function getProductConfig(slug: string): ProductFullConfig | null {
  return getConfig(slug);
}

export function getAllProductSlugs(): ProductSlug[] {
  return ALL_PRODUCT_SLUGS;
}

export { isProductSlug };
import {
  getProductConfig as loadConfig,
  isProductSlug,
  ALL_PRODUCT_SLUGS,
  type ProductSlug,
} from "@/config/products.config";

import type { ProductFullConfig } from "@/types/product.types";

export async function getProductConfig(
  slug: string
): Promise<ProductFullConfig | null> {
  return loadConfig(slug);
}

export function getAllProductSlugs(): ProductSlug[] {
  return ALL_PRODUCT_SLUGS;
}

export { isProductSlug };
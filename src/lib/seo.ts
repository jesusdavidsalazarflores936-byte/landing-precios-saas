import type { Metadata } from "next";
import type { SeoMetadata } from "@/types/product.types";

/**
 * Convierte un SeoMetadata de producto a un objeto Metadata de Next.js.
 * Solo usa los campos definidos en el tipo — sin añadir campos enterprise.
 */
export function buildMetadata(seo: SeoMetadata): Metadata {
  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    applicationName: seo.structuredDataType ?? undefined,
    alternates: {
      canonical: seo.canonicalUrl,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonicalUrl,
      locale: seo.locale ?? "es-PE",
      type: "website",
      ...(seo.ogImageUrl ? { images: [{ url: seo.ogImageUrl }] } : {}),
    },
  };

  if (seo.keywords && seo.keywords.length > 0) {
    metadata.keywords = seo.keywords;
  }

  if (seo.ogImageUrl) {
    metadata.twitter = {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImageUrl],
      ...(seo.twitterHandle ? { site: seo.twitterHandle } : {}),
    };
  }

  return metadata;
}

/**
 * Metadata de fallback para la raíz / cuando no hay producto.
 */
export const rootMetadata: Metadata = {
  title: "SaaS Pricing — Soluciones para tu negocio",
  description:
    "Explora los planes y precios de nuestras soluciones SaaS: GesRest, HotelHUB, 360Sys, Pulso+ y Comprobante-e.",
  alternates: { canonical: "https://tusaas.pe" },
};

import type { PricingPageConfig } from "./pricing.types";
// Brand & Theme


export interface BrandColors {
  primary: string;       // e.g. "#6366F1"
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  background: string;
  foreground: string;
  muted: string;
  mutedForeground: string;
  border: string;
  destructive: string;
}

export interface BrandConfig {
  name: string;
  logoUrl: string;
  faviconUrl: string;
  colors: BrandColors;
}

// ─── SEO Metadata 

export interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImageUrl?: string;
  twitterHandle?: string;
  keywords?: string[];
  locale?: string;             // e.g. "es-PE", "en-US"
  structuredDataType?: "Product" | "SoftwareApplication" | "WebPage";
}

// Hero section

export interface HeroBadge {
  label: string;
  variant: "default" | "success" | "warning" | "info";
}

export interface HeroConfig {
  badge?: HeroBadge;
  headline: string;            
  subheadline: string;
  ctaPrimary: CtaButton;
  ctaSecondary?: CtaButton;
  socialProof?: SocialProofItem[];
}

export interface SocialProofItem {
  label: string;                // e.g. "+2,000 empresas confían en nosotros"
  iconUrl?: string;
}

// CTA Button (shared)

export interface CtaButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  openInNewTab?: boolean;
  trackingId?: string;         
}

// Product

export type ProductCategory = "core" | "addon" | "enterprise";

export interface ProductFeatureHighlight {
  icon?: string;                // Icon name or URL
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: ProductCategory;
  logoUrl?: string;
  highlights?: ProductFeatureHighlight[];
  isActive: boolean;
  launchDate?: string;          // ISO 8601
}


export interface ProductFullConfig {
  brand: BrandConfig;
  seo: SeoMetadata;
  hero: HeroConfig;
  product: Product;
  pricing: PricingPageConfig;
}
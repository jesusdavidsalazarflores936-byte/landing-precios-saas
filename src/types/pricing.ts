import type { CtaButton } from "./product";

// ─── Billing ─────────────────────────────────────────────────────────────────

export type BillingCycle = "monthly" | "annual";

export interface BillingToggle {
  defaultCycle: BillingCycle;
  annualDiscountPercent: number;   // e.g. 20 → "Ahorra 20%"
  annualDiscountLabel: string;     // e.g. "2 meses gratis"
}

// ─── Feature (shared across plans & comparison table) ────────────────────────

export type FeatureValueType =
  | boolean
  | string
  | number
  | "unlimited"
  | "coming_soon"
  | "contact_sales";

export interface PlanFeature {
  id: string;                      // Stable key for comparison table lookup
  label: string;
  description?: string;            // Tooltip / popover content
  category?: string;               // Groups features in comparison table
  value: FeatureValueType;
  highlighted?: boolean;           // Visually emphasize this feature
}

// ─── Pricing Plan ────────────────────────────────────────────────────────────

export type PlanTier = "free" | "starter" | "pro" | "business" | "enterprise";

export interface PlanPrice {
  amountMonthly: number;           // Price per month when billed monthly
  amountAnnual: number;            // Price per month when billed annually
  currency: string;                // ISO 4217, e.g. "USD"
  currencySymbol: string;          // e.g. "$"
  priceLabel?: string;             // Override for custom text, e.g. "Desde $X"
  isFree?: boolean;
  isContactSales?: boolean;        // Hides price, shows CTA
}

export interface PricingPlan {
  id: string;
  slug: string;
  tier: PlanTier;
  name: string;
  description: string;
  price: PlanPrice;
  features: PlanFeature[];
  cta: CtaButton;
  badge?: string;                  // e.g. "Más popular", "Nuevo"
  isHighlighted?: boolean;         // Visually featured card
  isRequired?: boolean;            // ← Marks the mandatory base plan
  requiredPlanNote?: string;       // e.g. "Incluido en todos los planes"
  maxUsers?: number | "unlimited";
  maxProjects?: number | "unlimited";
  trialDays?: number;
  sortOrder: number;
}

// ─── Add-on Modules ──────────────────────────────────────────────────────────

export type AddonCategory =
  | "analytics"
  | "integrations"
  | "security"
  | "support"
  | "storage"
  | "customization"
  | "other";

export interface AddonPrice {
  amountMonthly: number;
  amountAnnual: number;
  currency: string;
  currencySymbol: string;
  billingUnit?: string;            // e.g. "por usuario", "por GB"
  isContactSales?: boolean;
}

export interface Addon {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: AddonCategory;
  iconUrl?: string;
  price: AddonPrice;
  compatiblePlanIds: string[];     // Which plans can purchase this addon
  requiredPlanIds?: string[];      // Plans that REQUIRE this addon to be shown
  features?: string[];             // Short bullet list of what's included
  isAvailable: boolean;
  badge?: string;                  // e.g. "Beta", "Nuevo"
}

// ─── Comparison Table ────────────────────────────────────────────────────────

export interface ComparisonCategory {
  id: string;
  label: string;
  sortOrder: number;
}

export interface ComparisonRow {
  featureId: string;               // Matches PlanFeature.id
  categoryId: string;
  label: string;
  description?: string;
  planValues: Record<string, FeatureValueType>;  // planId → value
}

export interface ComparisonTableConfig {
  title?: string;
  subtitle?: string;
  categories: ComparisonCategory[];
  rows: ComparisonRow[];
  highlightedPlanId?: string;
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

export interface FaqItem {
  id: string;
  question: string;
  answer: string;                  // Supports markdown
  category?: string;               // For grouped FAQ views
  sortOrder: number;
}

export interface FaqSection {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}

// ─── Final CTA Section ───────────────────────────────────────────────────────

export interface FinalCtaSection {
  headline: string;
  subheadline?: string;
  ctaPrimary: CtaButton;
  ctaSecondary?: CtaButton;
  backgroundVariant?: "brand" | "dark" | "light" | "gradient";
  trustSignals?: string[];         // e.g. ["Sin tarjeta de crédito", "Cancela cuando quieras"]
}

// ─── Full Pricing Page Config ─────────────────────────────────────────────────

export interface PricingPageConfig {
  billingToggle: BillingToggle;
  plans: PricingPlan[];
  requiredPlanId: string;          // ID of the mandatory base plan
  addons?: Addon[];
  comparisonTable?: ComparisonTableConfig;
  faq?: FaqSection;
  finalCta: FinalCtaSection;
}
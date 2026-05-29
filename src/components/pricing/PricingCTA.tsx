import { Container } from "@/components/ui/Container";
import type { CtaButton } from "@/types/product.types";

interface PricingCTAProps {
  config: CtaButton;
  headline?: string;
  subheadline?: string;
}

export function PricingCTA({ config, headline, subheadline }: PricingCTAProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="bg-primary px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <Container size="md" padded={false} className="text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl"
        >
          {headline ?? config.label}
        </h2>

        {subheadline && (
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-foreground/85">
            {subheadline}
          </p>
        )}

        <div className="mt-8 flex justify-center">
          <a
            href={config.href}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary-foreground px-7 py-3 text-sm font-semibold text-primary shadow-sm transition hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
          >
            {config.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

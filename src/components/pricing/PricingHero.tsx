import { Container } from "@/components/ui/Container";
import type { HeroConfig } from "@/types/product.types";

interface PricingHeroProps {
  config: HeroConfig;
}

export function PricingHero({ config }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent via-background to-background px-4 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Container size="lg" className="relative text-center">
        <div className="mb-7 flex justify-center">
          <span className="rounded-full border border-border bg-card px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-primary shadow-sm">
            Planes y precios
          </span>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {config.headline}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
          {config.subheadline}
        </p>

        <div className="mt-9">
          <a
            href={config.ctaPrimary.href}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {config.ctaPrimary.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

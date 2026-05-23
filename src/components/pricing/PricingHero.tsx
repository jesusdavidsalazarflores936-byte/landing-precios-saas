import { Container } from "@/components/ui/Container";
import type { HeroConfig } from "@/types/product.types";

interface PricingHeroProps {
  config: HeroConfig;
}

export function PricingHero({ config }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff7f5] via-white to-white px-4 pt-20 pb-16 sm:pt-28 sm:pb-20">
      <Container size="lg" className="relative text-center">
        <div className="mb-7 flex justify-center">
          <span className="rounded-full border border-[#fee2e2] bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-[0.28em] text-[#ff5f57] shadow-sm">
            Planes y precios
          </span>
        </div>
        <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
          {config.headline}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
          {config.subheadline}
        </p>

        <div className="mt-9">
          <a
            href={config.ctaPrimary.href}
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#ff5f57] px-7 py-3 text-sm font-semibold text-white shadow-sm shadow-[#ff5f57]/20 transition hover:bg-[#f04f48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2"
          >
            {config.ctaPrimary.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

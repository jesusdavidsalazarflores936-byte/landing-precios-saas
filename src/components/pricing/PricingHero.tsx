import { Container } from "@/components/ui/Container";
import type { HeroConfig } from "@/types/product.types";

interface PricingHeroProps {
  config: HeroConfig;
}

export function PricingHero({ config }: PricingHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pt-20 pb-16 sm:pt-28 sm:pb-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-20 flex justify-center"
      >
        <div className="h-72 w-72 rounded-full bg-indigo-100 opacity-50 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <Container size="md" className="relative text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
          {config.headline}
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
          {config.subheadline}
        </p>

        <div className="mt-8">
          <a
            href={config.ctaPrimary.href}
            className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
          >
            {config.ctaPrimary.label}
          </a>
        </div>
      </Container>
    </section>
  );
}
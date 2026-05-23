import { Container } from "@/components/ui/Container";
import type { CtaButton } from "@/types/product.types";

interface PricingCTAProps {
  config: CtaButton;
}

export function PricingCTA({ config }: PricingCTAProps) {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-600 py-20 sm:py-24"
    >
      <Container size="md" className="relative text-center">
        <h2
          id="cta-heading"
          className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl"
        >
          {config.label}
        </h2>

        <div className="mt-8 flex justify-center">
          <a
            href={config.href}
            className="inline-block rounded-lg bg-white px-6 py-3 text-sm font-medium text-indigo-600 hover:bg-gray-100 transition"
          >
            {config.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

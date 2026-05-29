import { Accordion } from "@/components/ui/Accordion";
import { Container } from "@/components/ui/Container";
import type { FaqItem } from "@/types/pricing.types";

interface PricingFAQProps {
  items: FaqItem[];
}

export function PricingFAQ({ items }: PricingFAQProps) {
  if (items.length === 0) return null;

  const accordionItems = items.map((item) => ({
    id: item.id,
    question: item.question,
    answer: item.answer,
  }));

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="bg-secondary text-secondary-foreground px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <Container size="md" padded={false}>
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl"
          >
            Preguntas Frecuentes
          </h2>
          <p className="mt-3 text-base leading-7 text-secondary-foreground/70">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-2xl">
          <Accordion items={accordionItems} allowMultiple={false} />
        </div>
      </Container>
    </section>
  );
}

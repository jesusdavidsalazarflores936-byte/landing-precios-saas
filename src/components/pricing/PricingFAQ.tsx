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
      className="py-16 sm:py-20"
    >
      <Container size="md">
        <div className="text-center mb-10">
          <h2
            id="faq-heading"
            className="text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-2 text-gray-500 text-sm sm:text-base">
            Todo lo que necesitas saber antes de empezar.
          </p>
        </div>

        <Accordion items={accordionItems} allowMultiple={false} />
      </Container>
    </section>
  );
}
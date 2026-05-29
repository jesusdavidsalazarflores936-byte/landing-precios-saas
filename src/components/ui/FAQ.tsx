"use client";

import { useId, useState } from "react";

import type { FAQItem } from "@/types/product.types";

interface FAQProps {
  items: FAQItem[];
  className?: string;
}

export function FAQ({ items, className = "" }: FAQProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <section
      className={[
        "bg-background px-4 py-16 text-foreground sm:px-6 lg:px-8",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-labelledby={`${baseId}-heading`}
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id={`${baseId}-heading`}
          className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          Preguntas Frecuentes
        </h2>

        <div className="mt-10 space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const buttonId = `${baseId}-trigger-${index}`;
            const panelId = `${baseId}-panel-${index}`;

            return (
              <div
                key={`${item.question}-${index}`}
                className={[
                  "overflow-hidden rounded-2xl border bg-card shadow-sm transition-colors duration-300",
                  isOpen ? "border-primary" : "border-border",
                ].join(" ")}
              >
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className={[
                    "flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-slate-900 transition-colors duration-300 sm:text-base",
                    isOpen ? "text-primary" : "",
                  ].join(" ")}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <svg
                    aria-hidden="true"
                    className={[
                      "h-5 w-5 shrink-0 text-primary transition-transform duration-300 ease-out",
                      isOpen ? "rotate-180" : "",
                    ].join(" ")}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={[
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

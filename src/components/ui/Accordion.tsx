"use client";

import { useId, useState, type ReactNode } from "react";

interface AccordionItem {
  id?: string;
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

interface AccordionItemProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  headingId: string;
  panelId: string;
}

function AccordionItemComponent({
  item,
  isOpen,
  onToggle,
  headingId,
  panelId,
}: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <h3>
        <button
          type="button"
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={[
            "w-full flex items-center justify-between gap-4 px-5 py-4 text-left",
            "text-gray-900 font-medium text-sm sm:text-base",
            "bg-white hover:bg-gray-50 transition-colors duration-150",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500",
          ].join(" ")}
        >
          <span>{item.question}</span>
          <span
            aria-hidden="true"
            className={[
              "shrink-0 w-5 h-5 flex items-center justify-center text-gray-400 transition-transform duration-200",
              isOpen ? "rotate-180" : "",
            ].join(" ")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        hidden={!isOpen}
        className="px-5 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed bg-white"
      >
        {item.answer}
      </div>
    </div>
  );
}

export function Accordion({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={["flex flex-col gap-3", className].join(" ")}>
      {items.map((item, index) => (
        <AccordionItemComponent
          key={item.id ?? index}
          item={item}
          isOpen={openIds.has(index)}
          onToggle={() => toggle(index)}
          headingId={`${baseId}-heading-${index}`}
          panelId={`${baseId}-panel-${index}`}
        />
      ))}
    </div>
  );
}

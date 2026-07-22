"use client";

import { Modal, ModalFooter } from "@/components/ui/Modal";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { Addon, BillingCycle } from "@/types/pricing.types";

interface ModuleDetailModalProps {
  module: Addon | null;
  period: BillingCycle;
  isOpen: boolean;
  onClose: () => void;
}

export function ModuleDetailModal({
  module,
  period,
  isOpen,
  onClose,
}: ModuleDetailModalProps) {
  if (!module) return null;

  const detailedFeatures = module.detailedFeatures ?? [];
  const hasDetailedFeatures = detailedFeatures.length > 0;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={module.name}
      size="xl"
      className="mx-4 max-w-[calc(100%-2rem)] rounded-2xl sm:mx-0 sm:max-w-2xl"
    >
      <div className="max-h-[65vh] space-y-6 overflow-y-auto pr-1">
        <p className="text-sm leading-6 text-slate-600 sm:text-base">
          {module.description}
        </p>

        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-5">
          <p className="text-sm font-semibold text-muted-foreground">Precio</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-3xl font-bold tracking-tight text-foreground">
              {module.price.isContactSales
                ? "Contactar ventas"
                : formatPrice(module.price, period)}
            </span>
            {!module.price.isContactSales && (
              <span className="mb-1 text-sm font-medium text-muted-foreground">
                {getPeriodLabel(period)}
              </span>
            )}
          </div>
        </div>

        {hasDetailedFeatures ? (
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Características detalladas
            </h3>
            <div className="mt-4 space-y-5">
              {detailedFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <span
                    className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-primary"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 12.75 11.25 15 15.5 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-semibold text-slate-900">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : module.features && module.features.length > 0 ? (
          <div>
            <h3 className="text-sm font-semibold text-foreground">Beneficios</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {module.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-sm text-card-foreground"
                >
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-transparent text-[10px] font-bold text-primary"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <ModalFooter className="gap-3">
        <a
          href={`/contacto?modulo=${module.slug}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
        >
          Agregar este módulo
        </a>
        <button
          type="button"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground ring-1 ring-inset ring-border transition hover:bg-secondary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  );
}

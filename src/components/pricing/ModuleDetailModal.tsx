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

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={module.name}
      size="xl"
      className="mx-4 max-w-[calc(100%-2rem)] rounded-2xl sm:mx-0 sm:max-w-2xl"
    >
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-2xl font-semibold text-[#ff5f57]"
          >
            +
          </span>
          <p className="text-sm leading-6 text-slate-600 sm:text-base">
            {module.description}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-5">
          <p className="text-sm font-semibold text-slate-500">Precio</p>
          <div className="mt-2 flex items-end gap-1">
            <span className="text-3xl font-bold tracking-tight text-slate-950">
              {module.price.isContactSales
                ? "Contactar ventas"
                : formatPrice(module.price, period)}
            </span>
            {!module.price.isContactSales && (
              <span className="mb-1 text-sm font-medium text-slate-500">
                {getPeriodLabel(period)}
              </span>
            )}
          </div>
        </div>

        {module.features && module.features.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-950">Beneficios</h3>
            <ul className="mt-3 grid gap-3 sm:grid-cols-2">
              {module.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm text-slate-700">
                  <span
                    className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#fff0ee] text-[10px] font-bold text-[#ff5f57]"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ModalFooter className="gap-3">
        <a
          href={`/contacto?modulo=${module.slug}`}
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-[#ff5f57] px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#ff5f57]/20 transition hover:bg-[#f04f48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2"
        >
          Agregar este módulo
        </a>
        <button
          type="button"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 ring-1 ring-inset ring-slate-200 transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  );
}

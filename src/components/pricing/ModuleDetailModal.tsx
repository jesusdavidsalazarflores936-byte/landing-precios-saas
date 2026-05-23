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
    <Modal isOpen={isOpen} onClose={onClose} title={module.name} size="xl">
      <div className="space-y-5">
        <p className="text-sm leading-6 text-gray-600 sm:text-base">
          {module.description}
        </p>

        <div className="rounded-lg bg-gray-50 p-4">
          <p className="text-sm font-medium text-gray-500">Precio</p>
          <div className="mt-1 flex items-end gap-1">
            <span className="text-3xl font-bold text-gray-950">
              {module.price.isContactSales
                ? "Contactar ventas"
                : formatPrice(module.price, period)}
            </span>
            {!module.price.isContactSales && (
              <span className="mb-1 text-sm text-gray-500">
                {getPeriodLabel(period)}
              </span>
            )}
          </div>
        </div>

        {module.features && module.features.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-gray-950">Beneficios</h3>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {module.features.map((feature) => (
                <li key={feature} className="flex gap-2 text-sm text-gray-700">
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <ModalFooter>
        <a
          href={`/contacto?modulo=${module.slug}`}
          className="inline-flex w-full items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-base font-medium text-white transition-colors duration-150 hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          Agregar este módulo
        </a>
        <button
          type="button"
          className="inline-flex w-full items-center justify-center rounded-lg bg-transparent px-4 py-2 text-base font-medium text-gray-700 transition-colors duration-150 hover:bg-gray-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 focus-visible:ring-offset-2"
          onClick={onClose}
        >
          Cerrar
        </button>
      </ModalFooter>
    </Modal>
  );
}

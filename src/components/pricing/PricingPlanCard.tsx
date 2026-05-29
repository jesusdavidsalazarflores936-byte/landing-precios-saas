"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/Badge";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/ui/Card";
import { Modal } from "@/components/ui/Modal";
import { formatPrice, getPeriodLabel } from "@/lib/format-currency";
import type { BillingCycle, PricingPlan } from "@/types/pricing.types";

interface PricingPlanCardProps {
  plan: PricingPlan;
  period: BillingCycle;
}

export function PricingPlanCard({ plan, period }: PricingPlanCardProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const detailedFeatures = plan.detailedFeatures ?? [];
  const hasDetailedFeatures = detailedFeatures.length > 0;

  return (
    <>
      <Card
        variant="default"
        padding="none"
        className="overflow-hidden rounded-2xl border border-border bg-card text-card-foreground shadow-xl hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl"
      >
        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1fr_0.95fr] lg:items-stretch lg:gap-8">
          <div className="flex flex-col">
            <CardHeader className="mb-0">
              {plan.badge && (
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <Badge
                    variant="default"
                    size="md"
                    className="bg-accent text-accent-foreground"
                  >
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <h3 className="text-2xl font-bold tracking-tight text-card-foreground sm:text-3xl">
                {plan.name}
              </h3>

              <p className="mt-3 max-w-xl text-sm leading-6 text-card-foreground/70 sm:text-base">
                {plan.description}
              </p>

              <div className="mt-7 flex items-end gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-card-foreground sm:text-5xl">
                  {formatPrice(plan.price, period)}
                </span>

                <span className="mb-1.5 text-sm font-medium text-card-foreground/70">
                  {getPeriodLabel(period)}
                </span>
              </div>
            </CardHeader>

            <CardFooter className="mt-auto border-t-0 px-0 pb-0 pt-7">
              <a
                href={plan.cta.href}
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-center text-sm font-semibold text-primary-foreground shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md active:translate-y-px active:bg-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:w-auto"
              >
                Comenzar con el Plan Base
              </a>
            </CardFooter>
          </div>

          <CardBody className="rounded-2xl bg-muted p-5 sm:p-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              &iquest;Qu&eacute; incluye la base?
            </p>

            <ul className="space-y-3" aria-label={`Caracteristicas de ${plan.name}`}>
              {plan.features.map((feature) => (
                <li
                  key={feature.id}
                  className="flex items-start gap-3 text-sm leading-6 text-card-foreground"
                >
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-transparent text-xs font-bold text-primary"
                    aria-hidden="true"
                  >
                    &#10003;
                  </span>
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>

            {hasDetailedFeatures && (
              <button
                type="button"
                className="mt-5 inline-flex cursor-pointer items-center gap-2 bg-transparent p-0 text-sm font-semibold text-primary transition-colors hover:text-primary/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-haspopup="dialog"
                onClick={() => setIsDetailsOpen(true)}
              >
                <span aria-hidden="true">&#9432;</span>
                <span>Ver todas las caracter&iacute;sticas detalladas</span>
              </button>
            )}
          </CardBody>
        </div>
      </Card>

      {hasDetailedFeatures && (
        <Modal
          isOpen={isDetailsOpen}
          onClose={() => setIsDetailsOpen(false)}
          title={plan.name}
          size="xl"
          className="mx-4 max-w-[calc(100%-2rem)] rounded-2xl sm:mx-0 sm:max-w-3xl"
        >
          <div className="space-y-6">
            <p className="text-sm leading-6 text-muted-foreground sm:text-base">
              {plan.description}
            </p>

            <div className="space-y-5">
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
                    <h3 className="font-semibold text-card-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
}

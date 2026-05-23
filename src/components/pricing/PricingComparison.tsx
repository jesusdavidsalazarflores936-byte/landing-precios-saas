import { Container } from "@/components/ui/Container";
import type {
  ComparisonTableConfig,
  FeatureValueType,
  PricingPlan,
} from "@/types/pricing.types";

interface PricingComparisonProps {
  config?: ComparisonTableConfig;
  plans: PricingPlan[];
}

function renderValue(value: FeatureValueType | undefined) {
  if (value === true) return "Sí";
  if (value === false || value === undefined) return "No";
  if (value === "unlimited") return "Ilimitado";
  if (value === "coming_soon") return "Pronto";
  if (value === "contact_sales") return "Ventas";
  return String(value);
}

export function PricingComparison({ config, plans }: PricingComparisonProps) {
  if (!config || config.rows.length === 0) return null;

  const sortedPlans = [...plans].sort((a, b) => a.sortOrder - b.sortOrder);
  const categories = [...config.categories].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <section className="bg-gray-50 py-14 sm:py-16">
      <Container size="2xl">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-950">
            {config.title ?? "Comparación de planes"}
          </h2>
          {config.subtitle && (
            <p className="mt-3 text-gray-600">{config.subtitle}</p>
          )}
        </div>

        <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
          <table className="min-w-[720px] w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="w-64 px-5 py-4 font-semibold">Característica</th>
                {sortedPlans.map((plan) => (
                  <th key={plan.id} className="px-5 py-4 font-semibold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {categories.map((category) => {
                const rows = config.rows.filter(
                  (row) => row.categoryId === category.id
                );

                if (rows.length === 0) return null;

                return rows.map((row, index) => (
                  <tr key={row.featureId}>
                    <td className="px-5 py-4 align-top">
                      {index === 0 && (
                        <p className="mb-2 text-xs font-semibold uppercase text-indigo-600">
                          {category.label}
                        </p>
                      )}
                      <p className="font-medium text-gray-950">{row.label}</p>
                      {row.description && (
                        <p className="mt-1 text-xs text-gray-500">
                          {row.description}
                        </p>
                      )}
                    </td>
                    {sortedPlans.map((plan) => (
                      <td key={plan.id} className="px-5 py-4 text-gray-700">
                        {renderValue(row.planValues[plan.id])}
                      </td>
                    ))}
                  </tr>
                ));
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

interface LandingHeaderProps {
  productName: string;
  ctaLabel: string;
  ctaHref: string;
}

export function LandingHeader({
  productName,
  ctaLabel,
  ctaHref,
}: LandingHeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="text-base font-bold text-gray-950 sm:text-lg">
          {productName}
        </a>

        <a
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

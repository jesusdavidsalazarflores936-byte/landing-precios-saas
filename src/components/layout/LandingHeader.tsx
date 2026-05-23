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
    <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="#" className="text-base font-bold text-slate-950 sm:text-lg">
          {productName}
        </a>

        <a
          href={ctaHref}
          className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#ff5f57] px-5 py-2 text-sm font-semibold text-white shadow-sm shadow-[#ff5f57]/15 transition hover:bg-[#f04f48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5f57] focus-visible:ring-offset-2"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  );
}

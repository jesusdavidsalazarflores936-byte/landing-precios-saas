interface FooterLink {
  label: string;
  href: string;
}

interface LandingFooterProps {
  productName: string;
  links?: FooterLink[];
}

const defaultLinks: FooterLink[] = [
  { label: "Contacto", href: "/contacto" },
  { label: "Privacidad", href: "/privacidad" },
  { label: "Términos", href: "/terminos" },
];

export function LandingFooter({
  productName,
  links = defaultLinks,
}: LandingFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>
          © {year} {productName}. Todos los derechos reservados.
        </p>

        <nav aria-label="Links de pie de página" className="flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

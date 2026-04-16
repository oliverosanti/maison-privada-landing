import { useState, useEffect } from "react";

const navLinks = [
  { label: "Proyecto", href: "#proyecto" },
  { label: "Unidades", href: "#unidades" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-4 md:px-16 lg:px-24">
        <a href="#" className={`font-display text-lg tracking-wide transition-colors duration-300 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
          Piedras 1891
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-xs uppercase tracking-[0.15em] transition-colors duration-300 hover:opacity-70 ${
                scrolled ? "text-foreground" : "text-primary-foreground/80"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            className={`ml-2 border px-5 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
              scrolled
                ? "border-foreground bg-foreground text-primary-foreground hover:bg-foreground/90"
                : "border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
            }`}
          >
            Consultar
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`flex flex-col gap-1.5 md:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Menu"
        >
          <span className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-current transition-transform duration-300 ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border/20 bg-background/95 backdrop-blur-md px-6 pb-6 pt-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-xs uppercase tracking-[0.15em] text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block border border-foreground bg-foreground px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-primary-foreground"
          >
            Consultar
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;

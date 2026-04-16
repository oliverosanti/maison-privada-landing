import AnimatedSection from "@/components/AnimatedSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Navbar from "@/components/Navbar";
import { Home, Shield, TreePine, MapPin, Check } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/exterior-hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-warm-overlay/60" />
        <div className="relative z-10 w-full px-6 pb-16 md:px-16 lg:px-24 lg:pb-24">
          <AnimatedSection>
            <p className="mb-3 text-xs font-body uppercase tracking-[0.3em] text-warm-sand">
              Piedras 1891 · Barracas
            </p>
            <h1 className="font-display text-5xl font-light leading-tight text-primary-foreground md:text-7xl lg:text-8xl">
              Tu casa en<br />la ciudad
            </h1>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-warm-sand md:text-lg">
              Solo 4 residencias exclusivas con espacios de casa, expansión privada y parrilla propia
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-warm-sand/80">
              <span>145 m² + balcón corrido</span>
              <span className="hidden sm:inline">·</span>
              <span>5 ambientes flexibles</span>
              <span className="hidden sm:inline">·</span>
              <span>Parrilla propia + expansión exterior</span>
            </div>
            <a
              href="#contacto"
              className="mt-10 inline-block border border-primary-foreground/40 bg-primary-foreground/10 px-8 py-4 text-xs font-body uppercase tracking-[0.2em] text-primary-foreground backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              Consultar unidades disponibles
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* VALUE PROPOSITION */}
      <section className="px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
            Un proyecto pensado para vivir distinto
          </h2>
        </AnimatedSection>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Home, title: "Sensación de casa", text: "Ambientes amplios, expansión exterior y parrilla propia en cada unidad." },
            { icon: Shield, title: "Privacidad total", text: "Solo 4 unidades con acceso independiente y palier privado." },
            { icon: TreePine, title: "Espacios verdes reales", text: "Terraza verde y conexión con el exterior en cada residencia." },
            { icon: MapPin, title: "Ubicación estratégica", text: "En Barracas, a pasos de Parque Lezama y Av. Martín García." },
          ].map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.1}>
              <div className="group">
                <item.icon className="mb-4 h-6 w-6 text-warm-stone" strokeWidth={1.5} />
                <h3 className="font-display text-xl font-medium text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* PROJECT */}
      <section id="proyecto" className="grid lg:grid-cols-2">
        <div className="flex items-center px-6 py-20 md:px-16 lg:px-24 lg:py-32">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
              Una nueva forma de vivir la ciudad
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Un edificio diseñado para quienes buscan dejar atrás el departamento tradicional y recuperar la experiencia de una casa.
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Cada unidad combina amplitud, privacidad y calidad constructiva, con espacios pensados para vivir, trabajar y disfrutar.
            </p>
          </AnimatedSection>
        </div>
        <div className="relative min-h-[500px] overflow-hidden">
          <img
            src="/images/interior-living.jpg"
            alt="Interior living Piedras 1891"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            loading="lazy"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
            Espacios que se viven
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {[
            { src: "/images/exterior-2.jpg", alt: "Exterior nocturno", className: "md:row-span-2" },
            { src: "/images/exterior-3.jpg", alt: "Ingreso Piedras 1891", className: "" },
            { src: "/images/interior-general.jpg", alt: "Planta interior", className: "" },
          ].map((img, i) => (
            <AnimatedSection key={img.src} delay={i * 0.1} className={img.className}>
              <div className="group relative h-full min-h-[300px] overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-warm-overlay/0 transition-colors duration-500 group-hover:bg-warm-overlay/10" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* UNITS */}
      <section id="unidades" className="bg-card px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
              Residencias exclusivas
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Solo 4 unidades diseñadas para ofrecer confort, funcionalidad y privacidad en cada detalle.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "145 m² cubiertos + 20 m² de balcón",
                "5 ambientes flexibles",
                "3 baños completos + toilette",
                "Parrilla propia en expansión",
                "Palier privado con acceso exclusivo",
                "Ingreso con sistema keyless",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-warm-stone" strokeWidth={2} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contacto"
              className="mt-10 inline-block border border-foreground bg-foreground px-8 py-4 text-xs font-body uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-foreground/90"
            >
              Consultar esta unidad
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <img
              src="/images/planta-general.jpg"
              alt="Planta general Piedras 1891"
              className="w-full"
              loading="lazy"
            />
          </AnimatedSection>
        </div>
      </section>

      {/* FLEXIBLE LAYOUT */}
      <section className="px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2">
          <AnimatedSection>
            <img
              src="/images/planta-flexible.jpg"
              alt="Planta flexible Piedras 1891"
              className="w-full"
              loading="lazy"
            />
          </AnimatedSection>
          <AnimatedSection delay={0.15} className="flex items-center">
            <div>
              <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
                Espacios que se adaptan a tu vida
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                La planta permite múltiples configuraciones según tus necesidades:
              </p>
              <ul className="mt-8 space-y-3">
                {["4 dormitorios", "Escritorio o home office", "Espacios integrados o sectorizados"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <span className="h-px w-6 bg-warm-stone" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CONSTRUCTION QUALITY */}
      <section className="bg-card px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
            Calidad en cada detalle
          </h2>
        </AnimatedSection>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Calefacción por piso radiante",
            "Caldera dual individual",
            "Aberturas de aluminio de alta prestación",
            "Preinstalación para domótica",
            "Wifi integral del edificio",
            "Preparado para paneles solares",
            "Bajo consumo energético y bajo costo de mantenimiento",
          ].map((item, i) => (
            <AnimatedSection key={item} delay={i * 0.05}>
              <div className="border border-border bg-background p-6">
                <Check className="mb-3 h-4 w-4 text-warm-stone" strokeWidth={2} />
                <p className="text-sm text-foreground">{item}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* AMENITIES */}
      <section className="relative">
        <div className="relative min-h-[600px] overflow-hidden">
          <img
            src="/images/amenities-terraza.jpg"
            alt="Terraza amenities Piedras 1891"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-warm-overlay/50" />
          <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
            <AnimatedSection>
              <h2 className="font-display text-3xl font-light text-primary-foreground md:text-5xl">
                Espacios comunes pensados para disfrutar
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {["SUM", "Terraza verde", "Cocheras individuales", "Bauleras"].map((item) => (
                  <div key={item} className="border border-primary-foreground/20 bg-primary-foreground/5 px-6 py-5 backdrop-blur-sm">
                    <p className="text-sm font-light tracking-wide text-primary-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section id="ubicacion" className="px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
              Conectado con todo
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Ubicado en Barracas, a metros de Av. Martín García y a pasos de Parque Lezama, combinando tranquilidad y acceso inmediato a la ciudad.
            </p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2}>
          <div className="mt-12 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.5!2d-58.3784!3d-34.6383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1a!2sPiedras+1891%2C+Buenos+Aires!5e0!3m2!1ses!2sar!4v1"
              width="100%"
              height="400"
              style={{ border: 0, filter: "grayscale(0.3) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Piedras 1891"
            />
          </div>
        </AnimatedSection>
      </section>

      {/* TRUST */}
      <section className="bg-card px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-light text-foreground md:text-5xl">
              Un proyecto sólido
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Proyecto y dirección", value: "L-urbano" },
                { label: "Arquitecta", value: "Lila Luca" },
                { label: "Constructora", value: "Canari Constructora SRL" },
                { label: "Comercialización", value: "REYRAN SRL" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 font-display text-lg text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FINAL CTA */}
      <section id="contacto" className="bg-foreground px-6 py-24 md:px-16 lg:px-24 lg:py-32">
        <AnimatedSection>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-light text-primary-foreground md:text-5xl">
              Últimas unidades disponibles
            </h2>
            <p className="mt-6 text-base font-light text-warm-sand">
              Coordiná una visita o recibí toda la información del proyecto.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:info@piedras1891.com"
                className="inline-block border border-primary-foreground/40 px-8 py-4 text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                Consultar ahora
              </a>
              <a
                href="https://wa.me/5491100000000?text=Hola%2C%20quiero%20información%20sobre%20Piedras%201891"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#25D366] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition-all hover:bg-[#20bd5a]"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* FOOTER */}
      <footer className="bg-foreground border-t border-primary-foreground/10 px-6 py-8 text-center">
        <p className="text-xs text-warm-sand/60">
          © 2026 Piedras 1891 · Barracas, Buenos Aires · Comercializa REYRAN SRL
        </p>
      </footer>
    </div>
  );
};

export default Index;

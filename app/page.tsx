"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { Outfit } from "next/font/google";

const chosenFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

type Category =
  | "Todos"
  | "Comercios & Tiendas"
  | "Servicios Profesionales"
  | "Moda & Indumentaria"
  | "Inmobiliaria";

type Project = {
  title: string;
  category: Exclude<Category, "Todos">;
  image: string;
  href: string;
};

const categories: Category[] = [
  "Todos",
  "Comercios & Tiendas",
  "Servicios Profesionales",
  "Moda & Indumentaria",
  "Inmobiliaria",
];

const projects: Project[] = [
  {
    title: "MarelliSports",
    category: "Comercios & Tiendas",
    image: "/portfolio/mini-marelli.png",
    href: "https://marellisports.com.ar/",
  },
  {
    title: "Iriarte Inmobiliaria",
    category: "Inmobiliaria",
    image: "/portfolio/mini-iriarte.png",
    href: "https://www.iriartepropiedades.com.ar/",
  },
  {
    title: "Asenzo Reta",
    category: "Servicios Profesionales",
    image: "/portfolio/mini-asenzo.png",
    href: "https://asenzoreta.com.ar/",
  },
  {
    title: "AL indumentaria",
    category: "Moda & Indumentaria",
    image: "/portfolio/mini-al.png",
    href: "https://alindumentaria.com.ar/",
  },
  {
    title: "Lofgren Press Kit",
    category: "Servicios Profesionales",
    image: "/portfolio/mini-lofgren.png",
    href: "https://lofgren.vercel.app/",
  },
];

function NavPill({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="whitespace-nowrap rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white/90 transition hover:bg-white/10"
    >
      {children}
    </a>
  );
}

function CTAButton({
  href,
  children,
  ghost = false,
}: {
  href: string;
  children: React.ReactNode;
  ghost?: boolean;
}) {
  return (
    <a
      href={href}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm md:text-base font-semibold transition",
        ghost
          ? "border border-white/30 text-white hover:bg-white/10"
          : "bg-fuchsia-500 text-white hover:bg-fuchsia-400 shadow-lg shadow-fuchsia-500/30",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

// WhatsApp Flotante
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5491176671054"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg shadow-green-500/50 hover:bg-green-400 transition hover:scale-110"
      aria-label="Contactar por WhatsApp"
      title="¿Preguntas? ¡Hablemos!"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp"
        width={24}
        height={24}
        className="w-6 h-6"
      />
    </a>
  );
}

export default function HomePage() {
  const [active, setActive] = useState<Category>("Todos");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    if (active === "Todos") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <main
      id="top"
      className={`${chosenFont.className} text-white`}
      style={{
        backgroundColor: "#06060a",
        backgroundImage:
          "linear-gradient(rgba(6,6,10,0.55), rgba(6,6,10,0.55)), url('/bg-network.jpg')",
        backgroundRepeat: "repeat",
        backgroundSize: "700px auto",
        backgroundPosition: "top center",
      }}
    >
      {/* FLOATING WHATSAPP */}
      <FloatingWhatsApp />

      {/* HERO */}
      <section className="relative min-h-[86vh]">
        {/* NAVBAR */}
        <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#06060a]/70 backdrop-blur-md">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 md:px-8">
            {/* Logo -> inicio */}
            <a
              href="#top"
              className="shrink-0 text-xl font-extrabold tracking-wide text-white"
              aria-label="Ir al inicio"
              onClick={() => setMenuOpen(false)}
            >
              MGL
            </a>

            {/* Desktop */}
            <nav className="hidden items-center gap-3 md:flex">
              <NavPill href="#somos">Quiénes Somos</NavPill>
              <NavPill href="#servicios">Servicios</NavPill>
              <NavPill href="#portfolio">Portfolio</NavPill>
              <NavPill href="#proceso">Proceso</NavPill>
              <a
                href="#contacto"
                className="whitespace-nowrap rounded-full border border-fuchsia-400/40 bg-fuchsia-500/25 px-4 py-2 text-sm font-semibold text-white transition hover:bg-fuchsia-500/35"
              >
                Contacto
              </a>
            </nav>

            {/* Botón mobile */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg border border-white/20 px-3 py-2 text-sm text-white/90 md:hidden"
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              Menú
            </button>
          </div>

          {/* Panel mobile */}
          {menuOpen && (
            <div className="border-t border-white/10 bg-[#0b0a12] md:hidden">
              <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-2">
                <a
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                  href="#somos"
                  onClick={() => setMenuOpen(false)}
                >
                  Quiénes Somos
                </a>
                <a
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                  href="#servicios"
                  onClick={() => setMenuOpen(false)}
                >
                  Servicios
                </a>
                <a
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                  href="#portfolio"
                  onClick={() => setMenuOpen(false)}
                >
                  Portfolio
                </a>
                <a
                  className="rounded-lg px-3 py-2 text-sm hover:bg-white/10"
                  href="#proceso"
                  onClick={() => setMenuOpen(false)}
                >
                  Proceso
                </a>
                <a
                  className="mb-1 rounded-lg bg-fuchsia-500/25 px-3 py-2 text-sm font-semibold hover:bg-fuchsia-500/35"
                  href="#contacto"
                  onClick={() => setMenuOpen(false)}
                >
                  Contacto
                </a>
              </nav>
            </div>
          )}
        </header>

        {/* HERO CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-[72vh] w-full max-w-6xl items-center px-6 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-4">
              <Image
                src="/logo-horizontal.png"
                alt="MGL"
                width={1400}
                height={420}
                priority
                className="h-auto w-[230px] md:w-[360px] lg:w-[500px] drop-shadow-[0_0_30px_rgba(217,70,239,0.25)]"
              />
            </div>

            <p className="mb-3 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
              Diseño + Desarrollo Web
            </p>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">
              Creamos sitios web que{" "}
              <span className="text-fuchsia-400">
                venden, escalan y enamoran
              </span>
              .
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
              Landing pages, sitios corporativos y e-commerce con estrategia personalizada, diseño moderno y rendimiento excepcional.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CTAButton href="#contacto">Agendar llamada</CTAButton>
              <CTAButton href="#portfolio" ghost>
                Ver portfolio
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section
        id="somos"
        className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
            Quiénes Somos
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Expertos en transformación digital
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* About text */}
          <div className="space-y-5">
            <p className="text-white/80 text-lg leading-relaxed">
              Somos un equipo especializado en crear soluciones web de alto impacto para startups y PyMEs que buscan crecer en el mundo digital.
            </p>
            
            <p className="text-white/80 text-lg leading-relaxed">
              Combinamos <span className="text-fuchsia-300 font-semibold">diseño moderno, desarrollo robusto y estrategia comercial</span> para transformar tu visión en realidad.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <span className="text-fuchsia-400 font-bold text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Asesoramiento Exclusivo</h4>
                  <p className="text-white/70 text-sm">Soluciones orientadas a las necesidades específicas de tu empresa o negocio.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-fuchsia-400 font-bold text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Calidad + Velocidad</h4>
                  <p className="text-white/70 text-sm">Entregamos tu web en 48hs sin comprometer profesionalismo.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-fuchsia-400 font-bold text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Tecnología de Punta</h4>
                  <p className="text-white/70 text-sm">Next.js, React y Node.js para webs rápidas, seguras y escalables.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-fuchsia-400 font-bold text-xl mt-1">✓</span>
                <div>
                  <h4 className="font-semibold text-white">Enfoque en Resultados</h4>
                  <p className="text-white/70 text-sm">Diseño que convierte, estrategia que vende.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-14 md:py-16">
        <div className="mx-auto w-full max-w-6xl px-6 md:px-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[3px] w-9 rounded-full bg-fuchsia-400" />
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-fuchsia-300">
              Portfolio
            </p>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#F2ECFF] md:text-5xl">
            Webs que transforman negocios.
          </h2>

          <div className="mt-7 flex flex-wrap gap-2.5">
            {categories.map((cat) => {
              const selected = active === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={[
                    "rounded-full border px-5 py-2.5 text-sm md:text-base transition whitespace-nowrap",
                    selected
                      ? "border-fuchsia-400 bg-fuchsia-500/90 text-white shadow-[0_0_0_3px_rgba(217,70,239,0.22)]"
                      : "border-[#312446] bg-black/30 text-[#C4B9DA] hover:border-fuchsia-400/60 hover:text-white",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="mt-7 grid gap-5 md:grid-cols-2">
            {filteredProjects.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-2xl border border-[#2B1F3D] bg-[#0B0A12]/88 backdrop-blur-[1px]"
              >
                <div className="relative aspect-[16/10] w-full bg-[#0D0A16]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex items-end justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold leading-none text-[#F4EEFF]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base md:text-xl text-[#B7A9D6]">
                      {item.category}
                    </p>
                  </div>

                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 text-lg md:text-2xl font-semibold text-fuchsia-300 transition hover:text-fuchsia-200"
                  >
                    Ver sitio <span aria-hidden>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section
        id="servicios"
        className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
            Servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Soluciones personalizadas
          </h2>
          <p className="mt-3 text-white/70">
            Cada proyecto es único. Adaptamos tecnología y diseño a tus objetivos específicos.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {[
            {
              title: "Landing Pages",
              desc: "Páginas enfocadas en conversión y captación de leads con estrategia comercial clara.",
            },
            {
              title: "Sitios Corporativos",
              desc: "Presencia profesional que transmite confianza, seriedad y modernidad de marca.",
            },
            {
              title: "E-commerce",
              desc: "Tiendas online optimizadas para ventas con UX intuitiva y rendimiento excepcional.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-black/35 p-5 backdrop-blur"
            >
              <div className="mb-3 h-1 w-12 rounded-full bg-fuchsia-400" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PROCESO */}
      <section
        id="proceso"
        className="mx-auto w-full max-w-6xl px-6 py-16 md:px-8 md:py-20"
      >
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <p className="mb-2 text-xs uppercase tracking-[0.22em] text-fuchsia-300">
            Proceso
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Metodología probada y eficiente
          </h2>
          <p className="mt-3 text-white/70">
            Transformamos tu idea en realidad en 3 pasos claros y medibles.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 md:gap-5">
          {[
            [
              "1. Descubrimiento",
              "Analizamos tu negocio, objetivos, público ideal y propuesta de valor única.",
            ],
            [
              "2. Diseño & Desarrollo",
              "Creamos experiencia visual impactante y arquitectura técnica robusta.",
            ],
            [
              "3. Lanzamiento & Optimización",
              "Publicamos, medimos resultados y optimizamos para mejorar continuamente.",
            ],
          ].map(([title, desc]) => (
            <article
              key={title}
              className="rounded-2xl border border-white/10 bg-black/35 p-5"
            >
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-white/70">{desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="pb-14 md:pb-16">
        <div className="mx-auto w-full max-w-4xl px-6 md:px-8">
          <div className="rounded-3xl border border-fuchsia-400/30 bg-fuchsia-500/10 p-7 text-center md:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-fuchsia-200">
              Contacto
            </p>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">
              ¿List@ para transformar tu negocio?
            </h2>
            <p className="mt-3 text-white/75">
              Hablemos de tu proyecto. Te ayudamos a crear una web que venda, que escale y que enamora a tu público.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <CTAButton href="https://wa.me/5491176671054">
                Escribime por WhatsApp
              </CTAButton>
              <CTAButton href="mailto:mgl.design.web@gmail.com" ghost>
                O envía un email
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
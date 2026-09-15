import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { useLang, useT } from "@/lib/i18n";
import { restaurantInfo } from "@/data/restaurant";
import { PhoneIcon } from "./primitives";

const sections = [
  { id: "inicio", key: "navHome" },
  { id: "menu", key: "navMenu" },
  { id: "nosotros", key: "navAbout" },
  { id: "galeria", key: "navGallery" },
  { id: "resenas", key: "navReviews" },
  { id: "ubicacion", key: "navLocation" },
] as const;

export function AnnouncementBar() {
  const tr = useT();
  return (
    <div className="bg-chile text-cream">
      <p className="mx-auto flex max-w-7xl items-center justify-center gap-2.5 px-4 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.2em] sm:text-[0.68rem]">
        <span className="dot-pulse size-1.5 rounded-full bg-corn" aria-hidden="true" />
        {tr("announcement")}
      </p>
    </div>
  );
}

export function Header() {
  const tr = useT();
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-cream/92 shadow-[0_1px_14px_-10px_oklch(0.279_0.041_48/0.5)] backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3.5 sm:px-6 lg:px-10">
        <a href="#inicio" className="flex flex-col leading-none">
          <span
            className={cn(
              "font-[family-name:var(--font-display)] text-xl tracking-[0.02em] transition-colors duration-500 sm:text-2xl",
              scrolled ? "text-cacao" : "text-cream",
            )}
          >
            LA FONDITA
          </span>
          <span
            className={cn(
              "mt-1 hidden text-[0.58rem] uppercase tracking-[0.24em] transition-colors duration-500 sm:block",
              scrolled ? "text-terracotta" : "text-corn",
            )}
          >
            {tr("insideGrandFood")}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {sections.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "link-underline text-[0.8rem] font-medium tracking-wide transition-colors",
                    scrolled
                      ? "text-cacao/85 hover:text-chile"
                      : "text-cream/90 hover:text-corn",
                  )}
                >
                  {tr(s.key)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div
            role="group"
            aria-label={tr("langLabel")}
            className={cn(
              "hidden items-center gap-1 border px-1 py-1 transition-colors duration-500 sm:flex",
              scrolled ? "border-cacao/20" : "border-cream/35",
            )}
          >
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.16em] transition-colors",
                  lang === l
                    ? scrolled
                      ? "bg-cacao text-cream"
                      : "bg-cream text-cacao"
                    : scrolled
                      ? "text-cacao/60 hover:text-cacao"
                      : "text-cream/70 hover:text-cream",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href={restaurantInfo.phoneHref}
            className="group inline-flex items-center gap-2 bg-chile px-4 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream transition-colors hover:bg-chile-dark sm:px-5"
          >
            <PhoneIcon className="group-hover:-translate-y-[2px]" />
            <span className="hidden sm:inline">{tr("callNow")}</span>
            <span className="sm:hidden">{tr("call")}</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={tr("openMenuLabel")}
            aria-expanded={open}
            className={cn(
              "inline-flex size-11 items-center justify-center border transition-colors duration-500 lg:hidden",
              scrolled
                ? "border-cacao/25 text-cacao"
                : "border-cream/40 text-cream",
            )}
          >

            <span className="sr-only">{tr("openMenuLabel")}</span>
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const tr = useT();
  const { lang, setLang } = useLang();

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 lg:hidden",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/50 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={tr("navMenu")}
        className={cn(
          "paper absolute inset-y-0 right-0 flex w-[86%] max-w-sm flex-col transition-transform duration-500 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)]",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-cacao/12 px-6 py-4">
          <span className="font-[family-name:var(--font-display)] text-lg text-cacao">
            LA FONDITA
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label={tr("closeMenuLabel")}
            className="inline-flex size-10 items-center justify-center border border-cacao/25 text-cacao"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" stroke="currentColor" strokeWidth="1.7" fill="none" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Móvil" className="flex-1 overflow-y-auto px-6 py-6">
          <ul className="space-y-1">
            {[...sections, { id: "horarios", key: "navHours" as const }, { id: "contacto", key: "navContact" as const }].map(
              (s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    onClick={onClose}
                    className="block border-b border-cacao/10 py-4 font-[family-name:var(--font-display)] text-2xl text-cacao"
                  >
                    {tr(s.key)}
                  </a>
                </li>
              ),
            )}
          </ul>

          <div className="mt-8 flex items-center gap-2">
            {(["es", "en"] as const).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={cn(
                  "border px-3 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.16em]",
                  lang === l
                    ? "border-cacao bg-cacao text-cream"
                    : "border-cacao/25 text-cacao/70",
                )}
              >
                {l}
              </button>
            ))}
          </div>

          <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
            {restaurantInfo.street}
            <br />
            {restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}
            <br />
            {tr("insideGrandFood")}
          </p>
        </nav>
      </div>
    </div>
  );
}

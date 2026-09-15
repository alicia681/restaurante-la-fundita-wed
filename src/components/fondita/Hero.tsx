import { useEffect, useState } from "react";
import { heroImage, restaurantInfo } from "@/data/restaurant";
import { useT } from "@/lib/i18n";
import { GhostAction, PhoneIcon, PinIcon, PrimaryAction } from "./primitives";

export function Hero() {
  const tr = useT();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(window.scrollY));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      id="inicio"
      aria-label="Restaurante La Fondita"
      className="relative -mt-[4.5rem] flex min-h-[92svh] items-end overflow-hidden bg-ink pt-[4.5rem]"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Bandeja de tacos recién preparados con cebolla, cilantro, limones y salsas en Restaurante La Fondita, Chicago"
          width={1170}
          height={1560}
          decoding="async"
          className="soft-in size-full object-cover object-center"
          style={{ transform: `translate3d(0,${offset * 0.12}px,0)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/72 to-ink/35" />
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_80%_10%,transparent,oklch(0.19_0.014_55/0.55))]" />
      </div>

      <div
        className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 lg:px-10 lg:pb-28"
        style={{ transform: `translate3d(0,${offset * -0.04}px,0)` }}
      >
        <p
          className="rise eyebrow text-corn"
          style={{ animationDelay: "120ms" }}
        >
          {tr("heroEyebrow")}
        </p>

        <h1 className="mt-5 max-w-4xl font-[family-name:var(--font-display)] text-[clamp(2.5rem,7.6vw,5.6rem)] leading-[0.98] tracking-[-0.02em] text-cream">
          <span className="rise block" style={{ animationDelay: "260ms" }}>
            {tr("heroTitle1")}
          </span>
          <span className="rise block" style={{ animationDelay: "380ms" }}>
            {tr("heroTitle2")}
          </span>
          <span
            className="rise block text-corn"
            style={{ animationDelay: "500ms" }}
          >
            {tr("heroTitle3")}
          </span>
        </h1>

        <p
          className="rise mt-6 max-w-xl text-[1.02rem] leading-relaxed text-cream/85"
          style={{ animationDelay: "640ms" }}
        >
          {tr("heroSub")}
        </p>

        <div
          className="rise mt-9 flex flex-wrap gap-3"
          style={{ animationDelay: "780ms" }}
        >
          <PrimaryAction href={restaurantInfo.phoneHref}>
            <PhoneIcon className="group-hover:-translate-y-[3px]" />
            {tr("heroCta")}
          </PrimaryAction>
          <GhostAction
            href={restaurantInfo.mapsUrl}
            external
            className="border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-cacao"
          >
            <PinIcon className="group-hover:-translate-y-[3px]" />
            {tr("directions")}
          </GhostAction>
        </div>

        <div
          className="rise mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-cream/80"
          style={{ animationDelay: "900ms" }}
        >
          <span>
            {restaurantInfo.street} · {restaurantInfo.city},{" "}
            {restaurantInfo.state} {restaurantInfo.zip}
          </span>
          <span className="hidden h-3 w-px bg-cream/30 sm:block" aria-hidden="true" />
          <span className="border border-corn/50 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-corn">
            {tr("insideGrandFood")}
          </span>
        </div>
      </div>
    </section>
  );
}

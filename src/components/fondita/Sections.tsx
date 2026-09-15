import { useState } from "react";
import { cn } from "@/lib/utils";
import { useLang, useT } from "@/lib/i18n";
import {
  galleryImages,
  locationImages,
  menuCategories,
  openingHours,
  restaurantInfo,
  reviews,
  showcaseImages,
  storyImage,
} from "@/data/restaurant";
import {
  GhostAction,
  PhoneIcon,
  PinIcon,
  PrimaryAction,
  Reveal,
  SectionHeader,
  StarRow,
  useInView,
} from "./primitives";

/* ---------- 4. Rating strip ---------- */

export function RatingStrip() {
  const tr = useT();
  return (
    <section aria-label={tr("navReviews")} className="border-y border-border bg-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-7 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <StarRow />
          <p className="text-sm text-cacao">
            <span className="font-[family-name:var(--font-display)] text-xl">
              {reviews.rating} / 5
            </span>{" "}
            <span className="text-muted-foreground">{tr("ratingLabel")}</span>
          </p>
          <span className="hidden h-4 w-px bg-border sm:block" aria-hidden="true" />
          <p className="text-sm text-muted-foreground">
            {reviews.count} {tr("ratingReviews")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            {tr("ratingPending")}
          </p>
          <a
            href="#resenas"
            className="link-underline text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-chile"
          >
            {tr("seeReviews")}
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5/6. Historia + identidad ---------- */

export function StorySection() {
  const tr = useT();
  const { lang } = useLang();
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="nosotros" className="paper py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-5 lg:gap-16 lg:px-10">
        <div className="lg:col-span-2 lg:order-2 lg:pt-6">
          <SectionHeader
            number="01"
            eyebrow={tr("flavorEyebrow")}
            title={tr("flavorTitle")}
          />
          <p className="mt-6 text-[1.02rem] leading-[1.75] text-cacao/80">
            {tr("flavorText")}
          </p>
          <div className="hairline my-8" />
          <ul className="space-y-2 text-sm text-cacao/75">
            {restaurantInfo.services[lang].map((s) => (
              <li key={s} className="flex items-center gap-3">
                <span className="size-1.5 bg-terracotta" aria-hidden="true" />
                {s}
              </li>
            ))}
            <li className="flex items-center gap-3">
              <span className="size-1.5 bg-terracotta" aria-hidden="true" />
              {restaurantInfo.neighborhood}, {restaurantInfo.city}
            </li>
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryAction href={restaurantInfo.phoneHref}>
              <PhoneIcon className="group-hover:-translate-y-[3px]" />
              {tr("callNow")}
            </PrimaryAction>
            <GhostAction href="#menu">{tr("menuLink")}</GhostAction>
          </div>
        </div>

        <div ref={ref} className="lg:col-span-3 lg:order-1">
          <div
            data-visible={visible}
            className="image-reveal relative overflow-hidden"
          >
            <img
              src={storyImage}
              alt="Filete empanizado con arroz, papas fritas y ensalada servido en Restaurante La Fondita"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {showcaseImages.map((src, i) => (
              <Reveal key={i} delay={i * 90}>
                <img
                  src={src}
                  alt={
                    lang === "es"
                      ? "Platillo mexicano preparado en Restaurante La Fondita, Chicago"
                      : "Mexican dish prepared at Restaurante La Fondita, Chicago"
                  }
                  loading="lazy"
                  decoding="async"
                  className="aspect-square w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 7. Menú ---------- */

export function MenuSection() {
  const tr = useT();
  const { lang } = useLang();
  const [active, setActive] = useState(menuCategories[0]?.id ?? "tacos");
  const current = menuCategories.find((c) => c.id === active) ?? menuCategories[0]!;


  return (
    <section id="menu" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          number="02"
          eyebrow={tr("menuEyebrow")}
          title={tr("menuTitle")}
        />
        <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          {tr("menuCategoriesNote")}
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
          <div role="tablist" aria-label={tr("menuTitle")} className="flex flex-wrap gap-2 lg:flex-col lg:gap-0">
            {menuCategories.map((c) => (
              <button
                key={c.id}
                role="tab"
                type="button"
                aria-selected={active === c.id}
                onClick={() => setActive(c.id)}
                className={cn(
                  "border px-4 py-3 text-left text-[0.78rem] font-semibold uppercase tracking-[0.14em] transition-colors lg:border-0 lg:border-b lg:border-border lg:px-0",
                  active === c.id
                    ? "border-chile bg-chile text-cream lg:bg-transparent lg:text-chile"
                    : "border-cacao/20 text-cacao/70 hover:text-cacao lg:border-border",
                )}
              >
                {c.label[lang]}
              </button>
            ))}
          </div>

          <div
            role="tabpanel"
            aria-label={current.label[lang]}
            className="paper border border-border p-8 sm:p-12"
          >
            {current.items.length === 0 ? (
              <div className="max-w-md">
                <span className="eyebrow">{tr("menuPending")}</span>
                <h3 className="mt-4 text-[clamp(1.6rem,3vw,2.4rem)] leading-tight text-cacao">
                  {tr("menuSoon")}
                </h3>
                <p className="mt-4 text-[0.98rem] leading-relaxed text-cacao/75">
                  {tr("menuSoonText")}
                </p>
                <div className="hairline my-8" />
                <p className="text-sm text-muted-foreground">
                  {current.label[lang]} — {tr("menuPending")}
                </p>
                <div className="mt-8">
                  <PrimaryAction href={restaurantInfo.phoneHref}>
                    <PhoneIcon className="group-hover:-translate-y-[3px]" />
                    {tr("menuCta")}
                  </PrimaryAction>
                </div>
              </div>
            ) : (
              <ul className="divide-y divide-border">
                {current.items.map((item) => (
                  <li key={item.name} className="flex gap-6 py-5">
                    <div className="flex-1">
                      <p className="font-[family-name:var(--font-display)] text-xl text-cacao">
                        {item.name}
                      </p>
                      {item.description ? (
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                    {item.price ? (
                      <p className="text-sm font-semibold text-chile">{item.price}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 8. Hidden gem / ubicación dentro de Grand Food ---------- */

export function LocationGuide() {
  const tr = useT();
  const steps = [tr("gemStep1"), tr("gemStep2"), tr("gemStep3")];
  const { ref, visible } = useInView<HTMLDivElement>();

  return (
    <section id="ubicacion" className="bg-cacao py-20 text-cream sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionHeader
            number="03"
            eyebrow={tr("gemEyebrow")}
            title={tr("gemTitle")}
            tone="light"
          />
          <p className="mt-6 max-w-lg text-[1.02rem] leading-[1.75] text-cream/80">
            {tr("gemText")}
          </p>

          <ol className="mt-10 space-y-0 border-t border-cream/15">
            {steps.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-5 border-b border-cream/15 py-5"
              >
                <span className="font-[family-name:var(--font-display)] text-lg text-corn">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg text-cream/95">{s}</span>
              </li>
            ))}
          </ol>

          <div className="mt-9 flex flex-wrap gap-3">
            <PrimaryAction href={restaurantInfo.mapsUrl} external>
              <PinIcon className="group-hover:-translate-y-[3px]" />
              {tr("directions")}
            </PrimaryAction>
            <GhostAction
              href={restaurantInfo.phoneHref}
              className="border-cream/35 text-cream hover:border-cream hover:bg-cream hover:text-cacao"
            >
              <PhoneIcon className="group-hover:-translate-y-[3px]" />
              {tr("callNow")}
            </GhostAction>
          </div>
        </div>

        <div ref={ref} className="grid grid-cols-2 gap-4 self-start">
          <div data-visible={visible} className="image-reveal col-span-2">
            <img
              src={locationImages[0]}
              alt="Platillo mexicano con nopales en salsa roja, arroz, frijoles y tortillas de Restaurante La Fondita"
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div
            data-visible={visible}
            className="image-reveal [transition-delay:160ms]"
          >
            <img
              src={locationImages[1]}
              alt="Postre de churros con helado servido en el mostrador de La Fondita dentro de Grand Food"
              loading="lazy"
              decoding="async"
              className="aspect-[3/4] w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-between border border-cream/20 p-6">
            <p className="eyebrow text-corn">{tr("insideGrandFood")}</p>
            <div>
              <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-cream">
                {restaurantInfo.street}
              </p>
              <p className="mt-2 text-sm text-cream/70">
                {restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}
                <br />
                {restaurantInfo.neighborhood}
              </p>
            </div>
            <p className="mt-6 text-[0.68rem] uppercase tracking-[0.16em] text-cream/45">
              [ FOTO REAL DE GRAND FOOD — AÑADIR ]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 9. Galería ---------- */

export function Gallery() {
  const tr = useT();
  const { lang } = useLang();

  return (
    <section id="galeria" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeader
          number="04"
          eyebrow={tr("galleryEyebrow")}
          title={tr("galleryTitle")}
        />
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((img, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="mb-4 break-inside-avoid">
              <figure className="group relative overflow-hidden bg-cream">
                <img
                  src={img.src}
                  alt={img.alt[lang]}
                  loading="lazy"
                  decoding="async"
                  className={cn(
                    "w-full object-cover transition-transform duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-[1.04]",
                    img.ratio,
                  )}
                />
                <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 md:group-hover:bg-ink/10" />
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- 10. Reseñas ---------- */

export function Reviews() {
  const tr = useT();
  const themes = [
    { title: tr("themeFoodTitle"), text: tr("themeFoodText") },
    { title: tr("themeServiceTitle"), text: tr("themeServiceText") },
    { title: tr("themeAmbianceTitle"), text: tr("themeAmbianceText") },
  ];

  return (
    <section id="resenas" className="paper py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeader
              number="05"
              eyebrow={tr("reviewsEyebrow")}
              title={tr("reviewsTitle")}
            />
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
              <StarRow className="text-terracotta" />
              <p className="font-[family-name:var(--font-display)] text-3xl text-cacao">
                {reviews.rating} / 5
              </p>
              <p className="text-sm text-muted-foreground">
                {reviews.source} · {reviews.count} {tr("ratingReviews")}
              </p>
            </div>
            <p className="mt-3 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
              {tr("ratingPending")}
            </p>

            {reviews.featured.map((r) => (
              <figure key={r.author} className="mt-10 border-l-2 border-chile pl-6">
                <blockquote className="text-[clamp(1.2rem,2.2vw,1.6rem)] leading-snug text-cacao">
                  “{r.quote}”
                </blockquote>
                <figcaption className="mt-3 text-sm text-muted-foreground">
                  — {r.author}
                </figcaption>
              </figure>
            ))}
          </div>

          <ul className="grid gap-4 self-center sm:grid-cols-3 lg:grid-cols-1">
            {themes.map((th, i) => (
              <Reveal as="li" key={th.title} delay={i * 110}>
                <div className="h-full border border-border bg-warm-white p-6">
                  <p className="eyebrow">{th.title}</p>
                  <p className="mt-3 font-[family-name:var(--font-display)] text-xl leading-snug text-cacao">
                    {th.text}
                  </p>
                </div>
              </Reveal>
            ))}
            <li className="text-[0.68rem] leading-relaxed text-muted-foreground">
              {tr("marketingNote")}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------- 11. Horarios + contacto ---------- */

export function HoursAndContact() {
  const tr = useT();
  const dayLabels = {
    mon: tr("mon"),
    tue: tr("tue"),
    wed: tr("wed"),
    thu: tr("thu"),
    fri: tr("fri"),
    sat: tr("sat"),
    sun: tr("sun"),
  } as const;

  return (
    <section id="horarios" className="bg-warm-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <SectionHeader
            number="06"
            eyebrow={tr("hoursEyebrow")}
            title={tr("hoursTitle")}
          />
          <ul className="mt-10 border-t border-border">
            {openingHours.map((d) => (
              <li
                key={d.key}
                className="flex items-baseline justify-between gap-4 border-b border-border py-3.5"
              >
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-terracotta">
                  {dayLabels[d.key]}
                </span>
                <span className="text-sm tabular-nums text-cacao">
                  {d.open} — {d.close}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            {tr("hoursNote")}
          </p>
          <p className="mt-2 text-[0.68rem] uppercase tracking-[0.16em] text-muted-foreground">
            {tr("hoursPending")}
          </p>
        </div>

        <ContactBlock />
      </div>
    </section>
  );
}

function ContactBlock() {
  const tr = useT();
  const [sent, setSent] = useState(false);

  return (
    <div id="contacto">
      <SectionHeader
        number="07"
        eyebrow={tr("contactEyebrow")}
        title={tr("contactTitle")}
      />

      <address className="mt-8 not-italic text-[1.02rem] leading-[1.9] text-cacao/85">
        {restaurantInfo.name}
        <br />
        {restaurantInfo.street}
        <br />
        {restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}
        <br />
        {tr("insideGrandFood")}
        <br />
        <a href={restaurantInfo.phoneHref} className="link-underline text-chile">
          {restaurantInfo.phoneDisplay}
        </a>
      </address>

      <div className="mt-7 flex flex-wrap gap-3">
        <PrimaryAction href={restaurantInfo.phoneHref}>
          <PhoneIcon className="group-hover:-translate-y-[3px]" />
          {tr("callNow")}
        </PrimaryAction>
        <GhostAction href={restaurantInfo.mapsUrl} external>
          <PinIcon className="group-hover:-translate-y-[3px]" />
          {tr("directions")}
        </GhostAction>
      </div>

      <form
        className="mt-12 space-y-5 border border-border bg-cream p-6 sm:p-8"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label={tr("formName")} />
          <Field id="contact" label={tr("formContact")} />
        </div>

        <div>
          <label
            htmlFor="reason"
            className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cacao/70"
          >
            {tr("formReason")}
          </label>
          <select
            id="reason"
            name="reason"
            className="mt-2 w-full border border-cacao/25 bg-warm-white px-3 py-3 text-sm text-cacao"
          >
            <option>{tr("reasonGeneral")}</option>
            <option>{tr("reasonOrder")}</option>
            <option>{tr("reasonBigOrder")}</option>
            <option>{tr("reasonEvent")}</option>
            <option>{tr("reasonOther")}</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cacao/70"
          >
            {tr("formMessage")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="mt-2 w-full border border-cacao/25 bg-warm-white px-3 py-3 text-sm text-cacao"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            required
            className="mt-1 size-4 accent-[oklch(0.446_0.152_27.5)]"
          />
          <label htmlFor="privacy" className="text-sm leading-relaxed text-cacao/80">
            {tr("formPrivacy")}
          </label>
        </div>

        <PrimaryAction type="submit" className="w-full sm:w-auto">
          {tr("formSend")}
        </PrimaryAction>

        <p aria-live="polite" className="text-[0.72rem] leading-relaxed text-muted-foreground">
          {sent ? `${tr("formNote")}` : tr("formNote")}
        </p>
      </form>
    </div>
  );
}

function Field({ id, label }: { id: string; label: string }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-cacao/70"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className="mt-2 w-full border border-cacao/25 bg-warm-white px-3 py-3 text-sm text-cacao"
      />
    </div>
  );
}

/* ---------- 12. Mapa ---------- */

export function MapSection() {
  const tr = useT();
  return (
    <section aria-labelledby="map-title" className="bg-cream pb-20 pt-16 sm:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="eyebrow">{tr("mapEyebrow")}</span>
            <h2
              id="map-title"
              className="mt-3 text-[clamp(1.6rem,3vw,2.4rem)] text-cacao"
            >
              {tr("mapTitle")}
            </h2>
          </div>
          <GhostAction href={restaurantInfo.mapsUrl} external>
            <PinIcon className="group-hover:-translate-y-[3px]" />
            {tr("openInMaps")}
          </GhostAction>
        </div>

        <div className="mt-8 border border-border">
          <iframe
            title={tr("mapLabel")}
            src={restaurantInfo.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full sm:h-[460px]"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- 13. CTA final ---------- */

export function CTASection() {
  const tr = useT();
  return (
    <section className="bg-chile py-20 text-cream sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-10">
        <span className="eyebrow text-corn">{tr("insideGrandFood")}</span>
        <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(2rem,5vw,3.6rem)] leading-[1.04] text-cream">
          {tr("finalTitle")}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-cream/85">
          {restaurantInfo.street} · {restaurantInfo.city}, {restaurantInfo.state}{" "}
          {restaurantInfo.zip}
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PrimaryAction
            href={restaurantInfo.phoneHref}
            className="bg-cream text-chile shadow-none hover:bg-corn hover:text-cacao"
          >
            <PhoneIcon className="group-hover:-translate-y-[3px]" />
            {tr("callNow")}
          </PrimaryAction>
          <GhostAction
            href={restaurantInfo.mapsUrl}
            external
            className="border-cream/45 text-cream hover:border-cream hover:bg-cream hover:text-chile"
          >
            <PinIcon className="group-hover:-translate-y-[3px]" />
            {tr("directions")}
          </GhostAction>
        </div>
      </div>
    </section>
  );
}

/* ---------- 14. Footer ---------- */

export function Footer() {
  const tr = useT();
  const links = [
    { id: "inicio", label: tr("navHome") },
    { id: "menu", label: tr("navMenu") },
    { id: "nosotros", label: tr("navAbout") },
    { id: "galeria", label: tr("navGallery") },
    { id: "resenas", label: tr("navReviews") },
    { id: "ubicacion", label: tr("navLocation") },
    { id: "horarios", label: tr("navHours") },
    { id: "contacto", label: tr("navContact") },
  ];

  return (
    <footer className="bg-ink pb-28 pt-16 text-cream/80 sm:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-[family-name:var(--font-display)] text-2xl text-cream">
            LA FONDITA
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed">
            {tr("footerTagline")}
          </p>
        </div>

        <div>
          <p className="eyebrow text-corn">{tr("navLocation")}</p>
          <address className="mt-4 not-italic text-sm leading-[1.9]">
            {restaurantInfo.street}
            <br />
            {restaurantInfo.city}, {restaurantInfo.state} {restaurantInfo.zip}
            <br />
            {tr("insideGrandFood")}
            <br />
            <a
              href={restaurantInfo.phoneHref}
              className="link-underline text-cream"
            >
              {restaurantInfo.phoneDisplay}
            </a>
          </address>
        </div>

        <div>
          <p className="eyebrow text-corn">{tr("footerLinks")}</p>
          <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
            {links.map((l) => (
              <li key={l.id}>
                <a href={`#${l.id}`} className="link-underline hover:text-cream">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="border-t border-cream/12 pt-6 text-[0.72rem] text-cream/55">
          © {new Date().getFullYear()} {restaurantInfo.name}. {tr("rights")}
        </div>
      </div>
    </footer>
  );
}

/* ---------- Mobile action bar ---------- */

export function MobileActionBar() {
  const tr = useT();
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-cacao/15 bg-cream/95 backdrop-blur-md sm:hidden">
      <a
        href={restaurantInfo.phoneHref}
        className="flex min-h-16 items-center justify-center gap-2 bg-chile text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-cream"
      >
        <PhoneIcon />
        {tr("call")}
      </a>
      <a
        href={restaurantInfo.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-16 items-center justify-center gap-2 text-[0.75rem] font-semibold uppercase tracking-[0.16em] text-cacao"
      >
        <PinIcon />
        {tr("directions")}
      </a>
    </div>
  );
}

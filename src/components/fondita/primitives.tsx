import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------- Scroll reveal ---------- */

export function useInView<T extends HTMLElement>(threshold = 0.18) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "span" | "p";
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <Tag
      // @ts-expect-error polymorphic ref
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

/* ---------- Buttons ---------- */

const base =
  "group inline-flex items-center justify-center gap-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 disabled:pointer-events-none disabled:opacity-45";

export function PrimaryAction({
  href,
  children,
  className,
  external,
  type,
  onClick,
  ariaLabel,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "submit" | "button";
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const cls = cn(
    base,
    "bg-chile px-7 py-4 text-cream shadow-[0_1px_0_0_oklch(0.372_0.132_27.5)] hover:bg-chile-dark hover:shadow-[0_8px_22px_-14px_oklch(0.372_0.132_27.5/0.9)] active:translate-y-px",
    className,
  );
  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}

export function GhostAction({
  href,
  children,
  className,
  external,
  ariaLabel,
  onClick,
}: {
  href?: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
  onClick?: () => void;
}) {
  const cls = cn(
    base,
    "border border-cacao/30 px-7 py-4 text-cacao hover:border-cacao hover:bg-cacao hover:text-cream active:translate-y-px",
    className,
  );
  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        onClick={onClick}
        className={cls}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className={cls}>
      {children}
    </button>
  );
}

/* ---------- Icons (inline, sin librería) ---------- */

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      className={cn("size-4 transition-transform duration-300", className)}
    >
      <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a15.5 15.5 0 0 1-16-16Z" />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      className={cn("size-4 transition-transform duration-300", className)}
    >
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function StarRow({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex gap-1 text-corn", className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="size-4">
          <path d="m12 2.6 2.9 6.1 6.6.8-4.8 4.6 1.2 6.6L12 17.5 6.1 20.7l1.2-6.6L2.5 9.5l6.6-.8Z" />
        </svg>
      ))}
    </span>
  );
}

/* ---------- Section header ---------- */

export function SectionHeader({
  number,
  eyebrow,
  title,
  align = "left",
  tone = "dark",
  className,
}: {
  number?: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        {number ? (
          <span
            className={cn(
              "section-number",
              tone === "light" && "text-cream/50",
            )}
          >
            {number}
          </span>
        ) : null}
        <span className={cn("eyebrow", tone === "light" && "text-corn")}>
          {eyebrow}
        </span>
      </div>
      <h2
        className={cn(
          "mt-4 text-balance text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.06] tracking-[-0.015em]",
          tone === "light" ? "text-cream" : "text-cacao",
        )}
      >
        {title}
      </h2>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";
import { HeartPulse, Phone } from "lucide-react";

import capitalLogo from "../assets/capital-paymenttech-logo.png.asset.json";

// Distance (px) from the top edge of the screen that brings the header back.
const REVEAL_ZONE = 70;
// Extra padding so the header doesn't flicker when the pointer leaves the top.
const HIDE_BUFFER = 28;

function BrandLockup() {
  return (
    <div className="flex min-w-0 items-center gap-3 sm:gap-5" aria-label="Capital PaymentTech and Clover PracticePay">
      <a href="#top" className="flex min-w-0 items-center" aria-label="Capital PaymentTech home">
        <img
          src={capitalLogo.url}
          alt="Capital PaymentTech"
          className="h-9 w-auto max-w-[180px] object-contain sm:h-11 lg:h-20 lg:max-w-[320px]"
        />
      </a>
      <span className="hidden h-10 w-px shrink-0 bg-border sm:block" />
      <a href="#solutions" className="hidden min-w-0 items-center gap-2 sm:flex" aria-label="Clover PracticePay solutions">
        <span className="grid size-9 shrink-0 grid-cols-2 gap-0.5" aria-hidden="true">
          <span className="rounded-full rounded-br-sm bg-accent" />
          <span className="rounded-full rounded-bl-sm bg-accent" />
          <span className="rounded-full rounded-tr-sm bg-accent" />
          <span className="rounded-full rounded-tl-sm bg-accent" />
        </span>
        <span className="min-w-0 leading-none">
          <strong className="block truncate text-lg font-extrabold text-foreground sm:text-2xl">clover</strong>
          <span className="block truncate text-[9px] font-bold text-accent sm:text-xs">PracticePay</span>
        </span>
      </a>
    </div>
  );
}

export function SiteHeader() {
  const headerRef = useRef<HTMLElement | null>(null);
  const [height, setHeight] = useState(0);
  const [revealed, setRevealed] = useState(true);
  const pinnedByHover = useRef(false);
  const pointerInside = useRef(false);
  const focusInside = useRef(false);

  // Reserve the header's space so the page never jumps when it slides away.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const measure = () => setHeight(el.offsetHeight);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Hide on scroll down, bring back on scroll up (and always at the very top).
  useEffect(() => {
    let lastY = window.scrollY;
    let queued = false;

    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const y = window.scrollY;
        const delta = y - lastY;
        lastY = y;
        if (y <= 12) {
          pinnedByHover.current = false;
          setRevealed(true);
        } else if (delta > 4) {
          pinnedByHover.current = false;
          setRevealed(false);
        } else if (delta < -4) {
          setRevealed(true);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hovering the top of the screen reveals the header without scrolling.
  useEffect(() => {
    const onPointerMove = (event: MouseEvent) => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      if (event.clientY <= REVEAL_ZONE) {
        pinnedByHover.current = true;
        setRevealed(true);
        return;
      }
      if (event.clientY > Math.max(headerHeight, REVEAL_ZONE) + HIDE_BUFFER) {
        if (pinnedByHover.current && !pointerInside.current && !focusInside.current) {
          pinnedByHover.current = false;
          setRevealed(false);
        }
      }
    };

    window.addEventListener("mousemove", onPointerMove);
    return () => window.removeEventListener("mousemove", onPointerMove);
  }, []);

  const revealFromStrip = () => {
    pinnedByHover.current = true;
    setRevealed(true);
  };

  return (
    <>
      {/* Invisible strip so the pointer can re-enter the header from the top edge. */}
      <div
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-40 h-3"
        onMouseEnter={revealFromStrip}
        onTouchStart={revealFromStrip}
      />
      <header
        ref={headerRef}
        inert={!revealed}
        onMouseEnter={() => {
          pointerInside.current = true;
        }}
        onMouseLeave={() => {
          pointerInside.current = false;
        }}
        onFocusCapture={() => {
          focusInside.current = true;
          setRevealed(true);
        }}
        onBlurCapture={() => {
          focusInside.current = false;
        }}
        className={`fixed inset-x-0 top-0 z-50 border-b border-border bg-card transition-transform duration-300 ease-out will-change-transform motion-reduce:transition-none ${
          revealed ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <BrandLockup />
          <div className="hidden max-w-xs items-center gap-3 text-right lg:flex">
            <HeartPulse className="size-8 shrink-0 text-accent" strokeWidth={1.8} />
            <p className="text-xs font-semibold leading-relaxed text-muted-foreground">
              Healthier Practices, Brighter Tomorrows
              <span className="block font-medium text-primary">Patients · People · Healthier Communities</span>
            </p>
          </div>
          <a
            href="tel:+15614549475"
            className="grid size-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 lg:hidden"
            aria-label="Call Sales"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </header>
      <div aria-hidden="true" style={{ height }} />
    </>
  );
}

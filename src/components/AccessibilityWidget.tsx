import { useEffect, useState, type ReactNode } from "react";
import {
  Accessibility,
  BookOpen,
  Contrast,
  Droplet,
  Link2,
  Minus,
  Moon,
  Plus,
  RotateCcw,
  Sun,
  Type,
  X,
} from "lucide-react";

const STYLE_ID = "a11y-widget-styles";

type Options = {
  grayscale: boolean;
  highContrast: boolean;
  negativeContrast: boolean;
  lightBackground: boolean;
  underline: boolean;
  readableFont: boolean;
};

function getStyleElement() {
  const existing = document.getElementById(STYLE_ID);
  if (existing instanceof HTMLStyleElement) return existing;
  const element = document.createElement("style");
  element.id = STYLE_ID;
  document.head.appendChild(element);
  return element;
}

function applyAccessibilityStyles(options: Options) {
  const rules: string[] = [];
  const filters: string[] = [];

  if (options.grayscale) filters.push("grayscale(100%)");
  if (options.negativeContrast) filters.push("invert(100%) hue-rotate(180deg)");
  if (filters.length) {
    rules.push(`html { filter: ${filters.join(" ")} !important; }`);
    if (options.negativeContrast) {
      rules.push("html img, html video, html picture, html iframe { filter: invert(100%) hue-rotate(180deg) !important; }");
    }
  }
  if (options.highContrast) {
    rules.push(`
      html.a11y-high-contrast, html.a11y-high-contrast body { background: #000 !important; color: #ffff00 !important; }
      html.a11y-high-contrast *:not(svg):not(path):not(.a11y-widget-ui):not(.a11y-widget-ui *) { background-color: #000 !important; color: #ffff00 !important; border-color: #ffff00 !important; }
      html.a11y-high-contrast a:not(.a11y-widget-ui):not(.a11y-widget-ui *) { color: #fff !important; }
    `);
  }
  if (options.lightBackground) {
    rules.push(`
      html.a11y-light-bg, html.a11y-light-bg body { background: #fff !important; color: #111 !important; }
      html.a11y-light-bg *:not(svg):not(path):not(img):not(video):not(.a11y-widget-ui):not(.a11y-widget-ui *) { background-color: #fff !important; background-image: none !important; color: #111 !important; border-color: #d1d5db !important; }
      html.a11y-light-bg a:not(.a11y-widget-ui):not(.a11y-widget-ui *) { color: #1d4ed8 !important; }
    `);
  }
  if (options.underline) rules.push("a { text-decoration: underline !important; }");
  if (options.readableFont) {
    rules.push("html.a11y-readable-font, html.a11y-readable-font *:not(.a11y-widget-ui):not(.a11y-widget-ui *) { font-family: Arial, Helvetica, sans-serif !important; line-height: 1.6 !important; }");
  }

  getStyleElement().textContent = rules.join("\n");
  document.documentElement.classList.toggle("a11y-high-contrast", options.highContrast);
  document.documentElement.classList.toggle("a11y-light-bg", options.lightBackground);
  document.documentElement.classList.toggle("a11y-readable-font", options.readableFont);
}

function ToggleRow({ icon, label, active, onClick }: { icon: ReactNode; label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-11 w-full items-center justify-between rounded-md border p-2 text-sm transition-colors ${active ? "border-ring bg-success-soft text-primary" : "border-border bg-card text-foreground hover:bg-muted"}`}
      aria-pressed={active}
    >
      <span className="flex items-center gap-2">{icon}{label}</span>
      <span className={`relative h-5 w-8 rounded-full ${active ? "bg-accent" : "bg-muted-foreground"}`} aria-hidden="true">
        <span className={`absolute top-1 size-3 rounded-full bg-card transition-all ${active ? "left-4" : "left-1"}`} />
      </span>
    </button>
  );
}

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [negativeContrast, setNegativeContrast] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);
  const [underline, setUnderline] = useState(false);
  const [readableFont, setReadableFont] = useState(false);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  useEffect(() => {
    applyAccessibilityStyles({ grayscale, highContrast, negativeContrast, lightBackground, underline, readableFont });
  }, [grayscale, highContrast, negativeContrast, lightBackground, underline, readableFont]);

  const reset = () => {
    setFontScale(100);
    setGrayscale(false);
    setHighContrast(false);
    setNegativeContrast(false);
    setLightBackground(false);
    setUnderline(false);
    setReadableFont(false);
  };

  return (
    <div className="a11y-widget-ui fixed right-4 top-1/2 z-[9999] flex -translate-y-1/2 flex-col items-end gap-3">
      {open && (
        <div className="max-h-[80dvh] w-72 overflow-y-auto rounded-lg border border-border bg-card p-4 text-foreground shadow-hero" role="dialog" aria-label="Accessibility settings">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-primary">Accessibility</h2>
            <button type="button" onClick={() => setOpen(false)} className="grid min-h-11 min-w-11 place-items-center rounded-md hover:bg-muted" aria-label="Close accessibility menu">
              <X className="size-4" />
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex min-h-11 items-center justify-between rounded-md border border-border p-2">
              <span className="flex items-center gap-2 text-sm"><Type className="size-4" /> Text size</span>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setFontScale((size) => Math.max(80, size - 10))} className="grid min-h-11 min-w-11 place-items-center rounded-md bg-muted" aria-label="Decrease text size"><Minus className="size-3" /></button>
                <span className="w-10 text-center text-xs" aria-live="polite">{fontScale}%</span>
                <button type="button" onClick={() => setFontScale((size) => Math.min(160, size + 10))} className="grid min-h-11 min-w-11 place-items-center rounded-md bg-muted" aria-label="Increase text size"><Plus className="size-3" /></button>
              </div>
            </div>
            <ToggleRow icon={<Droplet className="size-4" />} label="Grayscale" active={grayscale} onClick={() => setGrayscale((value) => !value)} />
            <ToggleRow icon={<Contrast className="size-4" />} label="High contrast" active={highContrast} onClick={() => { setHighContrast((value) => !value); setNegativeContrast(false); setLightBackground(false); }} />
            <ToggleRow icon={<Moon className="size-4" />} label="Negative contrast" active={negativeContrast} onClick={() => { setNegativeContrast((value) => !value); setHighContrast(false); setLightBackground(false); }} />
            <ToggleRow icon={<Sun className="size-4" />} label="Light background" active={lightBackground} onClick={() => { setLightBackground((value) => !value); setHighContrast(false); setNegativeContrast(false); }} />
            <ToggleRow icon={<Link2 className="size-4" />} label="Underline links" active={underline} onClick={() => setUnderline((value) => !value)} />
            <ToggleRow icon={<BookOpen className="size-4" />} label="Readable font" active={readableFont} onClick={() => setReadableFont((value) => !value)} />
            <button type="button" onClick={reset} className="mt-2 flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary text-sm font-bold text-primary-foreground hover:bg-primary/90">
              <RotateCcw className="size-4" /> Reset
            </button>
          </div>
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-hero outline-hidden focus-visible:ring-3 focus-visible:ring-ring"
        aria-label={open ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={open}
      >
        <Accessibility className="size-6" />
      </button>
    </div>
  );
}
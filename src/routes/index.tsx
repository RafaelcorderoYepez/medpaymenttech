import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  BarChart3,
  CalendarClock,
  CircleDollarSign,
  CreditCard,
  FileChartColumnIncreasing,
  Headset,
  HeartPulse,
  Clock,
  Mail,
  MapPin,
  Presentation,
  Phone,
  Settings,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
  UsersRound,
  WalletCards,
  Zap,
} from "lucide-react";

import { SiteHeader } from "../components/SiteHeader";

import doctorHero from "../assets/doctor-hero.jpg";
import paymentTerminal from "../assets/clover-flex-device.png";
import surchargeProgramImage from "../assets/medical-surcharge-payment.jpg";
import lowDebitRatesImage from "../assets/medical-debit-payment.jpg";
import nextDayFundingImage from "../assets/medical-next-day-funding.jpg";
import hsaFsaReadyImage from "../assets/medical-hsa-fsa.jpg";
import paymentLinksImage from "../assets/medical-payment-link.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Medical Payment Processing | Capital PaymentTech" },
      {
        name: "description",
        content:
          "Lower processing costs and give patients flexible payment options with Capital PaymentTech and Clover PracticePay.",
      },
      { property: "og:title", content: "A Healthier Way to Get Paid" },
      {
        property: "og:description",
        content: "Complete payment solutions built for modern medical practices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://medpaymenttech.com/" }],
  }),
  component: Index,
});

const features = [
  {
    title: "Surcharge Program",
    description: "Pass credit card fees legally and easily.",
    icon: CircleDollarSign,
    image: surchargeProgramImage,
    imageAlt: "Patient making a contactless payment at a medical clinic",
  },
  {
    title: "Low Debit Rates",
    description: "Keep costs low on debit transactions.",
    icon: CreditCard,
    image: lowDebitRatesImage,
    imageAlt: "Patient using a debit card at a medical clinic terminal",
  },
  {
    title: "Next-Day Funding",
    description: "Improve your cash flow.",
    icon: Zap,
    image: nextDayFundingImage,
    imageAlt: "Medical practice manager and physician reviewing cash flow",
  },
  {
    title: "HSA/FSA Ready",
    description: "Accept HSA/FSA payments with ease.",
    icon: HeartPulse,
    image: hsaFsaReadyImage,
    imageAlt: "Patient presenting a health benefits card at a medical clinic",
  },
  {
    title: "Payment Links",
    description: "Collect balances anytime, anywhere.",
    icon: Smartphone,
    image: paymentLinksImage,
    imageAlt: "Patient completing a medical payment securely by phone",
  },
];

const benefits = [
  {
    title: "Recurring Payments",
    description: "Ideal for treatment plans and orthodontics",
    icon: CalendarClock,
  },
  {
    title: "Chargeback Assistance",
    description: "We help you when disputes happen",
    icon: Headset,
  },
  {
    title: "Card-on-File",
    description: "Secure, easy, and convenient",
    icon: WalletCards,
  },
  {
    title: "Staff Training Included",
    description: "For a smooth implementation",
    icon: Presentation,
  },
  {
    title: "Patient Balance Recovery Tools",
    description: "Help collect outstanding balances",
    icon: Mail,
  },
  {
    title: "Quarterly Statement Review",
    description: "Ensure you're always getting the best rates",
    icon: FileChartColumnIncreasing,
  },
  {
    title: "Dedicated Account Manager",
    description: "Personal support, not a call center",
    icon: UsersRound,
  },
  {
    title: "Annual Savings Report",
    description: "See exactly how much you've saved",
    icon: BarChart3,
  },
];

const impacts = [
  { title: "More Revenue", description: "Keep more of what you earn.", icon: BarChart3 },
  { title: "Happier Patients", description: "Flexible, modern payment options.", icon: Users },
  { title: "A More Efficient Practice", description: "Simple, integrated solutions.", icon: Settings },
  { title: "A Stronger Practice", description: "Built for growth.", icon: TrendingUp },
];

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <SiteHeader />

      <section className="relative bg-surface-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-success-soft px-3 py-1.5 text-xs font-bold text-accent">
              <ShieldCheck className="size-4" /> Built for modern medical practices
            </div>
            <h1 className="text-4xl font-extrabold uppercase leading-[1.02] text-primary sm:text-6xl lg:text-7xl">
              A Healthier Way
              <span className="block text-accent">to Get Paid</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-foreground/80 sm:text-xl">
              Complete payment solutions for modern medical practices.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Lower processing costs. More patient payment options. A stronger, more profitable practice.
            </p>
            <a
              href="tel:+15614549475"
              className="mt-8 inline-flex items-center gap-3 rounded-md bg-accent px-6 py-3.5 text-sm font-extrabold text-accent-foreground shadow-accent transition-transform hover:-translate-y-0.5"
            >
              Request a free savings analysis <ArrowUpRight className="size-4" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mx-0">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-hero">
              <img
                src={doctorHero}
                alt="Medical professional holding a tablet in a modern clinic"
                width={1280}
                height={960}
                fetchPriority="high"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 rounded-md border border-border/70 bg-card/95 p-4 shadow-card backdrop-blur-sm sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-sm sm:p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-md bg-accent text-accent-foreground">
                  <ShieldCheck className="size-7" />
                </span>
                <span>
                  <strong className="block text-sm font-extrabold uppercase leading-tight text-accent sm:text-base">
                    Medical Practice Savings Guarantee
                  </strong>
                  <span className="mt-1 block text-xs text-muted-foreground">See how much your practice could save.</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" aria-labelledby="features-heading" className="scroll-mt-28 bg-card py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="features-heading" className="sr-only">Payment features</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
            {features.map(({ title, description, icon: Icon, image, imageAlt }) => (
              <article key={title} className="group min-w-0 overflow-hidden rounded-lg border border-border bg-card text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float last:col-span-2 last:mx-auto last:w-full last:max-w-[280px] lg:last:col-span-1 lg:last:max-w-none">
                <div className="relative aspect-[4/3] overflow-hidden bg-mint">
                  <img src={image} alt={imageAlt} width={1024} height={768} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute bottom-3 left-3 grid size-11 place-items-center rounded-full border-2 border-card bg-accent text-accent-foreground shadow-card sm:size-12">
                    <Icon size={23} strokeWidth={2.2} />
                  </span>
                </div>
                <div className="p-4 sm:p-5 lg:px-3">
                  <h3 className="text-base font-extrabold leading-tight text-primary sm:text-lg">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-soft py-16 font-outfit sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.35fr_.65fr] lg:px-8">
          <div>
            <div className="mb-9 flex items-center gap-4"><h2 className="text-2xl font-black uppercase text-accent sm:text-3xl">Additional benefits for your practice</h2><span className="hidden h-0.5 flex-1 bg-accent/60 sm:block" /></div>
            <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, description }) => (
                <article key={title} className="group grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-md border border-border bg-card text-primary shadow-card transition-colors group-hover:border-accent group-hover:text-accent"><Icon size={26} /></span>
                  <div><h3 className="font-extrabold text-primary">{title}</h3><p className="mt-1 leading-snug text-muted-foreground">{description}</p></div>
                </article>
              ))}
            </div>
          </div>
          <aside className="relative min-h-[520px] overflow-hidden rounded-lg bg-card shadow-card">
            <img src={paymentTerminal} alt="Clover Flex payment terminal in a modern medical office" width={928} height={1152} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--card)_0%,color-mix(in_oklab,var(--card)_88%,transparent)_24%,transparent_58%)]" />
            <div className="relative p-7 sm:p-8"><h2 className="max-w-xs text-4xl font-black leading-none text-primary">Complimentary Equipment</h2><p className="mt-4 max-w-[240px] text-xl text-muted-foreground">Clover devices at no upfront cost</p></div>
            <p className="absolute bottom-6 right-6 max-w-[220px] rotate-[-4deg] text-right font-script text-3xl leading-none text-accent">Payments Made Simple for a Healthier Tomorrow</p>
          </aside>
        </div>
      </section>

      <section aria-labelledby="values-heading" className="bg-mint py-10">
        <h2 id="values-heading" className="sr-only">The value for your practice</h2>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
          {impacts.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className={`grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 ${index ? "lg:border-l lg:border-accent/20 lg:pl-8" : ""}`}>
              <Icon className="shrink-0 text-accent" size={42} strokeWidth={2.3} />
              <div>
                <h3 className="text-sm font-black uppercase text-primary sm:text-base">{title}</h3>
                <p className="mt-1 text-sm leading-snug text-navy-soft">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-28 bg-surface-soft py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-script text-3xl text-accent">We'd love to hear from you</p>
            <h2 id="contact-heading" className="mt-2 text-3xl font-black uppercase text-primary sm:text-4xl">Contact Us</h2>
            <p className="mt-3 text-navy-soft">Questions about payments for your medical practice? Reach out — we're here to help.</p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: MapPin, title: "Address", lines: ["8185 Via Ancho Rd #880396", "Boca Raton, FL 33488"], href: "https://www.google.com/maps/search/?api=1&query=8185+Via+Ancho+Rd+%23880396+Boca+Raton+FL+33488" },
                { icon: Clock, title: "Hours", lines: ["Monday – Friday", "9:00am – 6:00pm (EST)"] },
                { icon: Phone, title: "Phone", lines: ["Sales", "(954) 451-6808"], href: "tel:+15614549475" },
                { icon: Mail, title: "Email", lines: ["contact@medpaymenttech.com"], href: "mailto:contact@medpaymenttech.com" },
              ].map(({ icon: Icon, title, lines, href }) => (
                <article key={title} className="rounded-lg bg-card p-6 shadow-card transition-shadow hover:shadow-float">
                  <span className="grid size-12 place-items-center rounded-full bg-accent/10 text-accent"><Icon size={22} /></span>
                  <h3 className="mt-4 text-sm font-black uppercase text-primary">{title}</h3>
                  {href ? (
                    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="mt-2 block break-words text-sm leading-relaxed text-navy-soft transition-colors hover:text-accent">
                      {lines.map((line) => <span key={line} className="block">{line}</span>)}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm leading-relaxed text-navy-soft">{lines.map((line) => <span key={line} className="block">{line}</span>)}</p>
                  )}
                </article>
              ))}
            </div>
            <div className="overflow-hidden rounded-lg shadow-card">
              <iframe
                title="Map: Capital PaymentTech, 8185 Via Ancho Rd, Boca Raton, FL"
                src="https://www.google.com/maps?q=8185%20Via%20Ancho%20Rd%20Boca%20Raton%20FL%2033488&output=embed"
                className="h-full min-h-[320px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto_auto]">
            <a
              href="tel:+15614549475"
              className="group flex items-center gap-4 text-base font-extrabold uppercase sm:text-lg"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-primary-foreground text-primary transition-transform group-hover:rotate-6">
                <Phone className="size-5" />
              </span>
              <span>Request Your Free Savings Analysis</span>
            </a>
            <div className="border-primary-foreground/20 lg:border-l lg:pl-8">
              <p className="text-sm font-bold text-footer-accent">Sales</p>
              <a href="tel:+15614549475" className="mt-1 block text-xl font-extrabold hover:text-footer-accent">
                (954) 451-6808
              </a>
            </div>
            <p className="max-w-48 font-script text-2xl leading-tight text-footer-accent">Partners in a Healthier Tomorrow</p>
          </div>
          <div className="mt-9 flex flex-col gap-4 border-t border-primary-foreground/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-primary-foreground/60">© 2026 Capital PaymentTech</p>
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary-foreground/70">
              <a href="#solutions" className="hover:text-footer-accent">Payments</a>
              <a href="#top" className="hover:text-footer-accent">People</a>
              <a href="#top" className="hover:text-footer-accent">Practices</a>
              <a href="#top" className="hover:text-footer-accent">Brighter Tomorrows</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
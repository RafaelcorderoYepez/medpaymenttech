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

import doctorHero from "../assets/doctor-hero.jpg";
import paymentTerminal from "../assets/clover-flex-device.png";
import capitalLogo from "../assets/capital-paymenttech-logo.png.asset.json";

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
  },
  {
    title: "Low Debit Rates",
    description: "Keep costs low on debit transactions.",
    icon: CreditCard,
  },
  {
    title: "Next-Day Funding",
    description: "Improve your cash flow.",
    icon: Zap,
  },
  {
    title: "HSA/FSA Ready",
    description: "Accept HSA/FSA payments with ease.",
    icon: HeartPulse,
  },
  {
    title: "Payment Links",
    description: "Collect balances anytime, anywhere.",
    icon: Smartphone,
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

function Index() {
  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background text-foreground">
      <header className="border-b border-border bg-card">
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
            aria-label="Call Patrick Diaz"
          >
            <Phone className="size-4" />
          </a>
        </div>
      </header>

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

      <section id="solutions" className="border-y border-border bg-card py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
            {features.map(({ title, description, icon: Icon }) => (
              <article key={title} className="group bg-card p-6 text-center transition-colors hover:bg-success-soft sm:p-7">
                <span className="mx-auto grid size-14 place-items-center rounded-full bg-success-soft text-accent transition-transform group-hover:scale-105">
                  <Icon className="size-7" strokeWidth={1.8} />
                </span>
                <h2 className="mt-4 text-base font-extrabold text-primary">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
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

      <section className="border-y border-accent/15 bg-success-soft">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map(({ title, description, icon: Icon }, index) => (
            <article key={title} className="flex items-center gap-4 border-b border-accent/15 px-5 py-6 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0">
              <Icon className="size-9 shrink-0 text-accent" strokeWidth={1.8} />
              <div>
                <h2 className="text-xs font-extrabold uppercase text-primary">{title}</h2>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-card py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="mb-9 max-w-2xl">
            <p className="text-xs font-extrabold uppercase text-accent">Get in touch</p>
            <h2 className="mt-3 text-3xl font-extrabold text-primary sm:text-4xl">Let’s talk about your practice.</h2>
          </div>
          <div className="grid overflow-hidden rounded-lg border border-border bg-background shadow-card lg:grid-cols-[0.82fr_1.18fr]">
            <div className="p-6 sm:p-8 lg:p-10">
              <ul className="space-y-7">
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-success-soft text-accent"><MapPin className="size-5" /></span>
                  <div><h3 className="text-sm font-extrabold text-primary">Address</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">8185 Via Ancho Rd #880396<br />Boca Raton, FL 33488</p></div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-success-soft text-accent"><Clock className="size-5" /></span>
                  <div><h3 className="text-sm font-extrabold text-primary">Hours</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Monday – Friday<br />9:00am – 6:00pm (EST)</p></div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-success-soft text-accent"><Phone className="size-5" /></span>
                  <div><h3 className="text-sm font-extrabold text-primary">Phone</h3><a href="tel:+15614549475" className="mt-1 inline-block min-h-11 py-2 text-sm font-bold text-accent hover:text-primary">(954) 451-6808</a></div>
                </li>
                <li className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-success-soft text-accent"><Mail className="size-5" /></span>
                  <div className="min-w-0"><h3 className="text-sm font-extrabold text-primary">Email</h3><a href="mailto:contact@medpaymenttech.com" className="mt-1 inline-block min-h-11 break-all py-2 text-sm font-bold text-accent hover:text-primary">contact@medpaymenttech.com</a></div>
                </li>
              </ul>
            </div>
            <div className="border-t border-border lg:border-l lg:border-t-0">
              <div className="aspect-[4/3] min-h-80 w-full lg:h-full lg:aspect-auto">
                <iframe
                  title="Capital PaymentTech location in Boca Raton"
                  src="https://www.google.com/maps?q=8185%20Via%20Ancho%20Rd%20Boca%20Raton%20FL%2033488&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>
              <a href="https://www.google.com/maps/search/?api=1&query=8185+Via+Ancho+Rd+%23880396+Boca+Raton+FL+33488" target="_blank" rel="noopener noreferrer" className="flex min-h-11 items-center justify-between bg-primary px-5 py-3 text-sm font-bold text-primary-foreground hover:text-footer-accent">
                Open in Google Maps <ArrowUpRight className="size-4" />
              </a>
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
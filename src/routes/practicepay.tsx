import { useState, type FormEvent } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  Check,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileCheck2,
  HeartHandshake,
  Landmark,
  MessageSquareText,
  MonitorSmartphone,
  Phone,
  ReceiptText,
  RefreshCcw,
  Send,
  ShieldCheck,
  Smartphone,
  Stethoscope,
  WalletCards,
} from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import contactlessImage from "@/assets/practicepay-medical-contactless-flex.jpg";
import optionsImage from "@/assets/practicepay-medical-options.jpg";
import syncImage from "@/assets/practicepay-medical-sync.jpg";
import examRoomImage from "@/assets/practicepay-medical-exam-room-flex.jpg";
import financingImage from "@/assets/practicepay-medical-financing.jpg";
import textPayImage from "@/assets/practicepay-medical-text-pay.jpg";
import ledgerImage from "@/assets/practicepay-medical-ledger.jpg";
import cloverFlex from "@/assets/clover-flex-medical-office.png";
import cloverMini from "@/assets/clover-mini-medical-office.png";

export const Route = createFileRoute("/practicepay")({
  head: () => ({
    meta: [
      { title: "Clover PracticePay for Medical Practices | Capital PaymentTech" },
      { name: "description", content: "Simplify patient payments, HSA/FSA acceptance, payment plans and medical practice reconciliation with Clover PracticePay." },
      { property: "og:title", content: "Clover PracticePay for Medical Practices | Capital PaymentTech" },
      { property: "og:description", content: "A complete patient payment experience designed for modern medical practices." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PracticePayPage,
});

const highlights = [
  { image: contactlessImage, alt: "Patient making a contactless payment at a medical reception desk", icon: WalletCards, title: "Easy ways to pay", text: "Accept contactless cards, debit, credit, HSA and FSA payments wherever your patients check out." },
  { image: optionsImage, alt: "Physician discussing payment options with a patient", icon: HeartHandshake, title: "Patient-friendly options", text: "Offer clear estimates, card-on-file convenience and flexible payment choices for planned care." },
  { image: syncImage, alt: "Medical practice manager reviewing a patient billing dashboard", icon: RefreshCcw, title: "Connected workflows", text: "Keep payment activity aligned with your EHR or practice management workflow and reduce manual reconciliation." },
];

const advantages = [
  { image: examRoomImage, alt: "Medical assistant accepting payment in a private exam room", icon: Smartphone, title: "Checkout anywhere", text: "Collect securely at reception, in a consultation room or during curbside service with portable equipment." },
  { image: financingImage, alt: "Medical financial coordinator discussing a payment plan", icon: CalendarCheck, title: "Flexible payment plans", text: "Help patients manage larger balances while your practice keeps a predictable collection process." },
  { image: textPayImage, alt: "Patient paying a medical bill securely by phone", icon: MessageSquareText, title: "Text-to-pay", text: "Send a secure payment link so patients can settle balances from their own device, wherever they are." },
  { image: ledgerImage, alt: "Medical billing administrator reconciling patient payments", icon: ClipboardCheck, title: "Simpler reconciliation", text: "Reduce duplicate entry and keep completed payments organized against the patient account." },
];

const faqs = [
  ["Can Clover PracticePay accept HSA and FSA cards?", "Yes. Eligible medical practices can accept HSA and FSA cards along with major credit, debit and contactless payment methods."],
  ["Can patients pay from their phones?", "Yes. Your team can send a secure payment link by text so patients can complete payment on their own device."],
  ["Does it work with medical practice software?", "Integration options depend on your EHR and practice management platform. Our team reviews your current workflow and recommends the best setup."],
  ["Can we collect payments outside the front desk?", "Yes. Portable Clover equipment makes it possible to accept payment in exam rooms, consultation spaces and other appropriate areas of your practice."],
  ["Can it support recurring or planned payments?", "Available payment features can support card-on-file and scheduled payment workflows, subject to your practice setup and applicable requirements."],
];

const fieldClass = "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground focus:ring-2 focus:ring-ring";

function PracticePayPage() {
  const [submitted, setSubmitted] = useState(false);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <SiteHeader />
      <main id="top">
        <section className="relative isolate overflow-hidden bg-primary text-primary-foreground">
          <img src={contactlessImage} alt="Patient completing a contactless payment at a modern medical practice" width={1200} height={912} className="absolute inset-0 h-full w-full object-cover object-center opacity-25" />
          <div className="absolute inset-0 bg-primary/75" aria-hidden="true" />
          <div className="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[680px] lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-4 py-2 text-sm font-bold">
                <ShieldCheck className="size-4 text-accent" />
                Built for modern medical payment workflows
              </div>
              <p className="font-script text-3xl text-accent sm:text-4xl">Give every patient a better way to pay</p>
              <h1 className="mt-3 max-w-3xl font-outfit text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
                Streamline patient payments and collections for your medical practice
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85 sm:text-xl">
                Bring secure payments, flexible options and everyday reconciliation into one connected experience for your staff and patients.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-12 bg-accent px-6 font-extrabold text-accent-foreground hover:bg-accent/90">
                  <a href="#quote">Request a consultation <ArrowRight /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-12 border-primary-foreground/40 bg-primary-foreground/10 px-6 font-bold text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <a href="tel:+19544516808"><Phone /> Call Sales</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-20" aria-labelledby="highlights-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="font-script text-3xl text-accent">Designed around the patient journey</p>
              <h2 id="highlights-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">Payments that fit your practice</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {highlights.map(({ image, alt, icon: Icon, title, text }) => (
                <article key={title} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-float">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img src={image} alt={alt} loading="lazy" width={1200} height={912} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute bottom-4 left-4 grid size-12 place-items-center rounded-full border-2 border-card bg-accent text-accent-foreground shadow-card"><Icon size={23} /></span>
                  </div>
                  <div className="p-6"><h3 className="text-xl font-extrabold text-primary">{title}</h3><p className="mt-3 leading-relaxed text-navy-soft">{text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-surface-soft py-16 sm:py-20" aria-labelledby="advantages-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="max-w-3xl"><p className="font-script text-3xl text-accent">Less friction. More focus on care.</p><h2 id="advantages-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">Everyday advantages for your team</h2></div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {advantages.map(({ image, alt, icon: Icon, title, text }) => (
                <article key={title} className="grid overflow-hidden rounded-lg bg-card shadow-card md:grid-cols-[0.9fr_1.1fr]">
                  <div className="relative min-h-52 overflow-hidden bg-mint">
                    <img src={image} alt={alt} loading="lazy" width={1200} height={800} className="absolute inset-0 h-full w-full object-cover" />
                  </div>
                  <div className="relative z-10 flex min-h-52 flex-col justify-center bg-card p-6">
                    <Icon className="size-9 shrink-0 text-accent" strokeWidth={2.1} />
                    <h3 className="mt-4 text-xl font-extrabold text-primary">{title}</h3>
                    <p className="mt-2 leading-relaxed text-navy-soft">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-mint py-16 sm:py-20" aria-labelledby="transparency-heading">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:px-10">
            <div>
              <p className="font-script text-3xl text-accent">Clear costs build confidence</p>
              <h2 id="transparency-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">Create a more transparent patient experience</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-navy-soft">Walk patients through estimated responsibility, insurance adjustments and payment choices before they leave your practice.</p>
              <ul className="mt-7 grid gap-3 text-primary">
                {["Present estimated patient responsibility clearly", "Offer payment choices at the right moment", "Provide digital receipts and secure payment confirmation"].map((item) => <li key={item} className="flex items-start gap-3 font-semibold"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" />{item}</li>)}
              </ul>
            </div>
            <article className="rounded-lg bg-card p-7 shadow-float sm:p-8" aria-label="Example patient estimate">
              <div className="flex items-center justify-between border-b border-border pb-5"><div><p className="text-sm font-bold uppercase text-accent">Patient estimate</p><h3 className="mt-1 text-xl font-black text-primary">Outpatient procedure</h3></div><FileCheck2 className="size-10 text-accent" /></div>
              <dl className="mt-6 space-y-4 text-sm sm:text-base">
                <div className="flex justify-between gap-4"><dt className="text-navy-soft">Estimated care total</dt><dd className="font-bold text-primary">$1,250.00</dd></div>
                <div className="flex justify-between gap-4"><dt className="text-navy-soft">Estimated insurance coverage</dt><dd className="font-bold text-accent">− $850.00</dd></div>
                <div className="flex justify-between gap-4 border-t border-border pt-4"><dt className="font-extrabold text-primary">Estimated patient responsibility</dt><dd className="text-xl font-black text-primary">$400.00</dd></div>
              </dl>
              <div className="mt-6 rounded-md bg-mint p-4 text-sm font-semibold text-navy-soft">Pay today or review available payment options with the practice.</div>
            </article>
          </div>
        </section>

        <section className="bg-card py-16 sm:py-20" aria-labelledby="hardware-heading">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
            <div className="mx-auto max-w-3xl text-center"><p className="font-script text-3xl text-accent">Purpose-built equipment</p><h2 id="hardware-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">The right device for every point of care</h2><p className="mt-4 text-lg text-navy-soft">Reliable, familiar hardware for the front desk and wherever your team serves patients.</p></div>
            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <article className="grid items-center gap-4 rounded-lg bg-surface-soft p-6 shadow-card sm:grid-cols-2 sm:p-8"><img src={cloverFlex} alt="Clover Flex portable payment terminal" loading="lazy" width={928} height={1152} className="mx-auto h-72 w-full object-contain" /><div><p className="text-sm font-black uppercase text-accent">Portable</p><h3 className="mt-2 text-2xl font-black text-primary">Clover Flex</h3><p className="mt-3 leading-relaxed text-navy-soft">Take payments from reception to consultation rooms with a compact handheld device.</p><ul className="mt-5 space-y-2 text-sm font-semibold text-primary"><li className="flex gap-2"><Check className="size-4 text-accent" />Built-in receipt printer</li><li className="flex gap-2"><Check className="size-4 text-accent" />Contactless and chip payments</li></ul></div></article>
              <article className="grid items-center gap-4 rounded-lg bg-surface-soft p-6 shadow-card sm:grid-cols-2 sm:p-8"><img src={cloverMini} alt="Clover Mini countertop payment terminal" loading="lazy" width={1024} height={1024} className="mx-auto h-72 w-full object-contain" /><div><p className="text-sm font-black uppercase text-accent">Countertop</p><h3 className="mt-2 text-2xl font-black text-primary">Clover Mini</h3><p className="mt-3 leading-relaxed text-navy-soft">A compact countertop solution for efficient front-desk checkout and payment management.</p><ul className="mt-5 space-y-2 text-sm font-semibold text-primary"><li className="flex gap-2"><Check className="size-4 text-accent" />Large intuitive touchscreen</li><li className="flex gap-2"><Check className="size-4 text-accent" />Designed for busy reception areas</li></ul></div></article>
            </div>
          </div>
        </section>

        <section className="bg-primary py-14 text-primary-foreground">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 md:grid-cols-3 lg:px-10">
            {[{ icon: MonitorSmartphone, title: "Connected", text: "Bring payment activity into your existing medical workflow." }, { icon: BadgeCheck, title: "Secure", text: "Support responsible handling of patient payment information." }, { icon: Landmark, title: "Efficient", text: "Improve collections while reducing repetitive administrative work." }].map(({ icon: Icon, title, text }) => <div key={title} className="flex gap-4"><Icon className="size-10 shrink-0 text-accent" /><div><h3 className="text-lg font-black uppercase">{title}</h3><p className="mt-1 text-primary-foreground/75">{text}</p></div></div>)}
          </div>
        </section>

        <section className="bg-surface-soft py-16 sm:py-20" aria-labelledby="faq-heading">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
            <div><p className="font-script text-3xl text-accent">Questions, answered</p><h2 id="faq-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">Clover PracticePay FAQ</h2><p className="mt-4 leading-relaxed text-navy-soft">We will tailor the final setup to your specialty, patient flow and current systems.</p></div>
            <Accordion type="single" collapsible className="rounded-lg bg-card px-6 shadow-card">
              {faqs.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`}><AccordionTrigger className="py-5 text-base font-extrabold text-primary hover:no-underline">{question}</AccordionTrigger><AccordionContent className="pr-8 leading-relaxed text-navy-soft">{answer}</AccordionContent></AccordionItem>)}
            </Accordion>
          </div>
        </section>

        <section id="quote" className="scroll-mt-28 bg-card py-16 sm:py-20" aria-labelledby="quote-heading">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div><p className="font-script text-3xl text-accent">Let's improve your payment experience</p><h2 id="quote-heading" className="mt-2 font-outfit text-3xl font-black uppercase text-primary sm:text-4xl">Request your practice consultation</h2><p className="mt-5 text-lg leading-relaxed text-navy-soft">Tell us how your practice works. Sales will contact you to review equipment, software compatibility and payment options.</p><div className="mt-8 space-y-4 text-primary"><a href="tel:+19544516808" className="flex items-center gap-3 font-bold hover:text-accent"><Phone className="size-5 text-accent" />(954) 451-6808</a><a href="mailto:contact@medpaymenttech.com" className="flex items-center gap-3 break-all font-bold hover:text-accent"><Send className="size-5 shrink-0 text-accent" />contact@medpaymenttech.com</a></div></div>
            <form onSubmit={submitQuote} className="rounded-lg bg-surface-soft p-6 shadow-card sm:p-8">
              {submitted ? <div role="status" className="flex min-h-80 flex-col items-center justify-center text-center"><CheckCircle2 className="size-14 text-accent" /><h3 className="mt-5 text-2xl font-black text-primary">Thank you</h3><p className="mt-2 max-w-md text-navy-soft">Your request is ready. Please call or email Sales so we can begin your consultation.</p><div className="mt-6 flex flex-wrap justify-center gap-3"><Button asChild><a href="tel:+19544516808"><Phone />Call Sales</a></Button><Button type="button" variant="outline" onClick={() => setSubmitted(false)}>Send another request</Button></div></div> : <><div className="grid gap-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-primary">Practice name<input required name="practice" className={fieldClass} /></label><label className="grid gap-2 text-sm font-bold text-primary">Your name<input required name="name" autoComplete="name" className={fieldClass} /></label><label className="grid gap-2 text-sm font-bold text-primary">Email<input required type="email" name="email" autoComplete="email" className={fieldClass} /></label><label className="grid gap-2 text-sm font-bold text-primary">Phone<input required type="tel" name="phone" autoComplete="tel" className={fieldClass} /></label><label className="grid gap-2 text-sm font-bold text-primary">Medical specialty<select required name="specialty" defaultValue="" className={fieldClass}><option value="" disabled>Select a specialty</option><option>Primary care</option><option>Specialty practice</option><option>Urgent care</option><option>Outpatient center</option><option>Other</option></select></label><label className="grid gap-2 text-sm font-bold text-primary">EHR / practice software<input name="software" placeholder="Current platform" className={fieldClass} /></label></div><label className="mt-5 grid gap-2 text-sm font-bold text-primary">What would you like to improve?<textarea name="needs" rows={4} className="w-full rounded-md border border-input bg-background p-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-ring" /></label><Button type="submit" size="lg" className="mt-6 h-12 w-full bg-accent font-extrabold text-accent-foreground hover:bg-accent/90"><ReceiptText />Request consultation</Button><p className="mt-4 text-center text-xs text-muted-foreground">By submitting, you agree to be contacted about payment solutions for your practice.</p></>}
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><p>© 2026 Capital PaymentTech. Medical payment solutions.</p><div className="flex flex-wrap gap-5"><Link to="/" className="font-bold hover:text-accent">Home</Link><a href="tel:+19544516808" className="font-bold hover:text-accent">(954) 451-6808</a><a href="mailto:contact@medpaymenttech.com" className="font-bold hover:text-accent">Email Sales</a></div></div>
      </footer>
    </div>
  );
}

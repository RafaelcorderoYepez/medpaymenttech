import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import capitalLogo from "../assets/capital-paymenttech-logo.png.asset.json";
import { Button } from "./ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-9 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <Link to="/" aria-label="Capital PaymentTech home" className="inline-flex">
              <img
                src={capitalLogo.url}
                alt="Capital PaymentTech"
                width={1200}
                height={328}
                className="h-9 w-auto max-w-[180px] object-contain brightness-0 invert sm:h-11 lg:h-20 lg:max-w-[320px]"
              />
            </Link>
            <p className="mt-5 max-w-md leading-relaxed text-primary-foreground/75">
              Complete payment solutions for modern medical practices, backed by personal local support.
            </p>
            <p className="mt-5 font-script text-3xl text-accent">Partners in a Healthier Tomorrow</p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-accent">Explore</h2>
            <div className="mt-4 grid gap-3">
              <Link to="/" className="hover:text-accent">Payment solutions</Link>
              <Link to="/practicepay" className="hover:text-accent">Clover PracticePay</Link>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase text-accent">Direct contact</h2>
            <p className="mt-4 font-bold">Sales</p>
            <a className="mt-1 block text-xl font-extrabold hover:text-accent" href="tel:+19544516808">
              (954) 451-6808
            </a>
            <Button asChild className="mt-5 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              <a href="/practicepay#quote">Request an analysis <ArrowRight /></a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-primary-foreground/15 pt-6 text-xs font-semibold uppercase text-primary-foreground/60 sm:flex-row sm:justify-between">
          <span>© 2026 Capital PaymentTech</span>
          <span>Patients &nbsp;|&nbsp; People &nbsp;|&nbsp; Practices &nbsp;|&nbsp; Brighter Tomorrows</span>
        </div>
        <p className="mt-6 text-[11px] leading-relaxed text-primary-foreground/55">
          * Subject to dual pricing program evaluation. The Clover name and logo are owned by Clover Network, Inc., a wholly-owned subsidiary of First Data Corporation, and are registered or used in the U.S. and many foreign countries. All other trademarks, service marks, and trade names referenced in this material are the property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
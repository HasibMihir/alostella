import { Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { media } from "@/lib/portfolio";
const navigation = [
  { to: "/" as const, label: "Home" },
  { to: "/photography" as const, label: "Photography" },
  { to: "/films" as const, label: "Films" },
  { to: "/about" as const, label: "About" },
  { to: "/contact" as const, label: "Contact" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header">
        <Link to="/" className="wordmark" aria-label="ALOSTELLA home">
          ALOSTELLA
        </Link>
        <nav className="nav" aria-label="Main navigation">
          {navigation.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" className="enquire-link">
            Enquire <ArrowUpRight size={12} className="inline ml-2" />
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="mobile-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </header>
      {open && (
        <nav id="mobile-nav" className="mobile-menu" aria-label="Mobile navigation">
          {navigation.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="enquire-link">
            Start an Enquiry <ArrowUpRight size={14} className="inline" />
          </Link>
        </nav>
      )}
    </>
  );
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <Link to="/" aria-label="ALOSTELLA home">
            <img
              className="footer-logo"
              src={media.logo.url}
              alt="ALOSTELLA photography and film"
              loading="lazy"
            />
          </Link>
          <p>
            Photography & film.
            <br />
            For moments that matter.
          </p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {navigation.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="footer-nav">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram <ArrowUpRight size={12} className="inline" />
          </a>
          <a href="mailto:hello@example.com">hello@example.com</a>
          <span className="placeholder-note">Email & Instagram placeholders</span>
          <span>Based in the United Kingdom</span>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} ALOSTELLA</span>
        <span>Thoughtfully captured. Carefully crafted.</span>
      </div>
    </footer>
  );
}
export function EnquiryCTA() {
  return (
    <section className="cta-band">
      <span className="eyebrow text-primary-foreground">Your story, our next chapter</span>
      <h2>
        Let's create something
        <br />
        <em>worth remembering.</em>
      </h2>
      <p>Have an event, project or idea in mind? Tell us about it.</p>
      <Button asChild variant="editorialLight">
        <Link to="/contact">
          Start an Enquiry <ArrowUpRight />
        </Link>
      </Button>
    </section>
  );
}
export function Process() {
  return (
    <div className="process">
      {[
        {
          number: "01",
          title: "Discover",
          text: "Understand the project, goals, location and creative direction.",
        },
        { number: "02", title: "Create", text: "Plan and capture the photography or film." },
        { number: "03", title: "Deliver", text: "Edit and deliver the finished work." },
      ].map((s) => (
        <div className="process-item" key={s.number}>
          <span className="small-label">{s.number}</span>
          <h3>{s.title}</h3>
          <p>{s.text}</p>
        </div>
      ))}
    </div>
  );
}
export function AboutBlock() {
  return (
    <div className="service-row">
      <img
        src={media.behind.url}
        alt="Behind the scenes: composing a photograph in Westminster"
        className="about-image"
        loading="lazy"
      />
      <div className="about-copy">
        <span className="eyebrow">Behind the lens</span>
        <h2>
          Thoughtful visuals.
          <br />
          <em>Stories that stay.</em>
        </h2>
        <p>
          Every story starts with listening. Understanding your brief, observing the meaningful
          moments and composing with care — that’s the ALOSTELLA approach.
        </p>
        <p>
          From the first conversation to the final edit, the focus is the same: honest, considered
          photography and film that feels like you.
        </p>
        <Button asChild variant="editorialText">
          <Link to="/about">
            More about ALOSTELLA <ArrowRight />
          </Link>
        </Button>
      </div>
    </div>
  );
}

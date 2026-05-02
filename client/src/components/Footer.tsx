import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      return;
    }
    // If on a sub-page (e.g. /gbp), navigate home first then jump to anchor
    if (window.location.pathname !== "/") {
      window.location.href = "/" + href;
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div>
            <button
              onClick={() => scrollToSection("#hero")}
              className="text-left mb-3 block"
              data-testid="footer-logo"
            >
              <span className="font-serif text-2xl font-bold text-background">
                Dr. Sanjay Sethi
              </span>
              <span className="block text-sm font-medium text-primary tracking-widest uppercase mt-0.5">
                Advisory
              </span>
            </button>
            <p className="text-background/55 text-sm">
              Senior Hospitality Advisory | Mumbai, India
            </p>
            <div className="flex items-center gap-4 mt-4">
              <a
                href="mailto:ss@sanjaysethi.co"
                className="text-background/55 hover:text-background transition-colors"
                data-testid="footer-email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjaysethi08/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/55 hover:text-background transition-colors"
                data-testid="footer-linkedin"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              { label: "About", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
              { label: "Give Back Project", href: "/gbp" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-background/60 hover:text-background transition-colors"
                data-testid={`footer-link-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8 space-y-4">
          <p className="text-xs text-background/45 text-center max-w-3xl mx-auto leading-relaxed">
            The opinions and views expressed are given in a personal capacity and do not reflect
            the opinions or views of any current or former employer. Advisory suggestions are
            purely recommendatory in nature and are not binding on the recipient.
          </p>
          <p className="text-xs text-background/35 text-center">
            &copy; {currentYear} Dr. Sanjay Sethi Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

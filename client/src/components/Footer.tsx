import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <button
              onClick={() => scrollToSection("#hero")}
              className="font-serif text-2xl font-semibold mb-2 block"
              data-testid="footer-logo"
            >
              Dr. Sanjay Sethi <span className="text-primary">Advisory</span>
            </button>
            <p className="text-background/60 text-sm">
              Senior Hospitality Advisory | Mumbai, India
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
            {["About", "Services", "Experience", "GBP", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                className="text-sm text-background/70 hover:text-background transition-colors"
                data-testid={`footer-link-${item.toLowerCase()}`}
              >
                {item}
              </button>
            ))}
            <a
              href="https://www.linkedin.com/in/sanjaysethi08/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background transition-colors"
              data-testid="footer-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-background/10 mt-10 pt-8">
          <p className="text-xs text-background/50 text-center max-w-3xl mx-auto leading-relaxed">
            The opinions and views expressed are given in a personal capacity and do not reflect 
            the opinions or views of any current or former employer. Advisory suggestions are 
            purely recommendatory in nature and are not binding on the recipient.
          </p>
          <p className="text-xs text-background/40 text-center mt-4">
            &copy; {currentYear} Dr. Sanjay Sethi Advisory. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

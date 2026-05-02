import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "GBP", href: "/gbp" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const go = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      setIsMobileMenuOpen(false);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Scrolled state: solid bar */}
      {isScrolled && (
        <div className="absolute inset-0 bg-background/96 backdrop-blur-md border-b border-border" />
      )}

      <div className="relative max-w-full px-6 lg:px-10">
        <nav className="flex items-center justify-between h-14 lg:h-16 gap-4">

          {/* Left: nav pills (transparent hero state) OR logo (scrolled state) */}
          {isScrolled ? (
            <button
              onClick={() => go("#hero")}
              className="text-left leading-none"
              data-testid="link-logo"
            >
              <span className="block font-serif text-base lg:text-lg font-bold tracking-tight text-foreground">
                Dr. Sanjay Sethi
              </span>
              <span className="block text-[10px] font-semibold tracking-[0.32em] uppercase text-primary mt-0.5">
                Advisory
              </span>
            </button>
          ) : (
            <div className="hidden lg:flex items-center gap-2" data-testid="link-logo">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="text-xs font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-full px-4 py-2 transition-all backdrop-blur-sm"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}

          {/* Right: Contact pill (hero) OR nav + cta (scrolled) */}
          {isScrolled ? (
            <div className="hidden lg:flex items-center gap-5">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
                  data-testid={`link-nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => go("#contact")}
                className="text-xs font-medium border border-border rounded-full px-4 py-2 hover:border-foreground/40 transition-colors text-foreground"
                data-testid="button-schedule-consultation"
              >
                Contact
              </button>
            </div>
          ) : (
            <button
              onClick={() => go("#contact")}
              className="hidden lg:block text-xs font-medium text-white/80 hover:text-white border border-white/20 hover:border-white/50 rounded-full px-4 py-2 transition-all backdrop-blur-sm"
              data-testid="button-schedule-consultation"
            >
              Contact
            </button>
          )}

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/96 backdrop-blur-md border-t border-border">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 text-left border-b border-border/40 last:border-0"
                  data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 py-4">
                <Button onClick={() => go("#contact")} className="w-full" data-testid="button-mobile-schedule">
                  Contact
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

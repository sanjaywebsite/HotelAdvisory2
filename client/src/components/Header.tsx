import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "GBP", href: "/gbp" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href.startsWith("/")) {
      window.location.href = href;
      setIsMobileMenuOpen(false);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/96 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-left leading-none flex-shrink-0"
            data-testid="link-logo"
          >
            <span className={`block font-serif text-lg lg:text-2xl font-bold tracking-tight ${isScrolled ? "text-foreground" : "text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"}`}>
              Dr. Sanjay Sethi
            </span>
            <span className={`block text-xs lg:text-sm font-medium tracking-widest uppercase mt-0.5 ${isScrolled ? "text-primary" : "text-primary drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"}`}>
              Advisory
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("#contact")}
              size="sm"
              variant={isScrolled ? "default" : "outline"}
              className={!isScrolled ? "border-white/30 text-white bg-white/10 backdrop-blur-sm" : ""}
              data-testid="button-schedule-consultation"
            >
              Get In Touch
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className={`lg:hidden ${isScrolled ? "" : "text-white"}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </nav>

        {isMobileMenuOpen && (
          <div className="lg:hidden pb-6 bg-background/96 backdrop-blur-md border-t border-border">
            <div className="flex flex-col pt-4">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground px-4 py-3 text-left border-b border-border/50 last:border-0"
                  data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <div className="px-4 pt-4">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full"
                  data-testid="button-mobile-schedule"
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

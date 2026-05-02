import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "GBP", href: "/gbp" },
  { label: "CONTACT", href: "#contact" },
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

  const headerBg = isScrolled
    ? "bg-background/97 backdrop-blur-md border-b border-border"
    : "bg-transparent";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-full px-6 lg:px-10">
        <nav className="flex items-center justify-between h-14 lg:h-16 gap-6">

          {/* Logo — bold boxed name like LMM reference */}
          <button
            onClick={() => go("#hero")}
            className={`font-sans font-black text-sm lg:text-base tracking-tight uppercase border-2 px-3 py-1.5 transition-colors flex-shrink-0 ${
              isScrolled
                ? "border-foreground text-foreground"
                : "border-white text-white"
            }`}
            data-testid="link-logo"
          >
            DR. SANJAY SETHI
          </button>

          {/* Desktop nav — uppercase spaced links like LMM */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.href)}
                className={`text-xs font-semibold tracking-widest transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/70 hover:text-white"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
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
          <div className="lg:hidden bg-background/97 backdrop-blur-md border-t border-border">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => go(item.href)}
                  className="text-xs font-semibold tracking-widest text-muted-foreground hover:text-foreground px-4 py-3 text-left border-b border-border/40 last:border-0 uppercase"
                  data-testid={`link-nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

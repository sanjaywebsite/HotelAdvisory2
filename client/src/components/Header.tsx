import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "ADVISORY AREAS", href: "#advisory" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "ENGAGEMENTS", href: "#engagements" },
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

  const linkClass = isScrolled
    ? "text-muted-foreground hover:text-foreground"
    : "text-white/70 hover:text-white";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="max-w-full px-6 lg:px-10">
        <nav className="flex items-center justify-between h-14 lg:h-16">

          {/* Left: nav items */}
          <div className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => go(item.href)}
                className={`text-xs font-semibold tracking-widest transition-colors ${linkClass}`}
                data-testid={`link-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Right: Contact */}
          <button
            onClick={() => go("#contact")}
            className={`hidden lg:block text-xs font-semibold tracking-widest transition-colors ${linkClass}`}
            data-testid="button-schedule-consultation"
          >
            CONTACT
          </button>

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
          {/* Mobile: spacer so hamburger is on right */}
          <div className="lg:hidden" />
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background/97 backdrop-blur-md border-t border-border">
            <div className="flex flex-col py-2">
              {[...navItems, { label: "CONTACT", href: "#contact" }].map((item) => (
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

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/urunler", label: "Ürünler" },
  { href: "/sertifikalar", label: "Sertifikalar" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center shadow-soft">
            <span className="text-primary-foreground font-display font-bold text-xl">B</span>
          </div>
          <div>
            <h1 className="font-display font-bold text-xl text-foreground leading-none">
              BERRA
            </h1>
            <span className="text-xs text-muted-foreground">d.o.o.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-2 text-sm font-medium transition-colors rounded-lg",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <a href="tel:+38762610206" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="w-4 h-4" />
            062 610 206
          </a>
          <Button className="hidden sm:inline-flex" size="sm" asChild>
            <Link to="/iletisim">Teklif Al</Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-card shadow-card overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="container-wide py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                isActive(link.href)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/80 hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-border mt-2">
            <a href="tel:+38762610206" className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-primary">
              <Phone className="w-4 h-4" />
              062 610 206
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

import { Link } from "react-router-dom";
import { Phone, Mail, Instagram, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-xl">B</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl leading-none">BERRA</h3>
                <span className="text-sm text-primary-foreground/60">d.o.o.</span>
              </div>
            </Link>
            <p className="text-primary-foreground/80 max-w-md mb-6">
              Temiz, güvenli, profesyonel. FOMY temizlik köpüğü ile hızlı ve pratik hijyen çözümleri sunuyoruz.
              20 yılı aşkın deneyimimizle güvenilir ortağınız.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/BERRA.DOO"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:berradoosarajevo@gmail.com"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {[
                { label: "Ana Sayfa", href: "/" },
                { label: "Hakkımızda", href: "/hakkimizda" },
                { label: "Ürünler", href: "/urunler" },
                { label: "Sertifikalar", href: "/sertifikalar" },
                { label: "İletişim", href: "/iletisim" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5" />
                <div>
                  <a href="tel:+38762610206" className="block text-primary-foreground/70 hover:text-primary-foreground">
                    062 610 206
                  </a>
                  <a href="tel:+38762620162" className="block text-primary-foreground/70 hover:text-primary-foreground">
                    062 620 162
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5" />
                <a
                  href="mailto:berradoosarajevo@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground break-all"
                >
                  berradoosarajevo@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5" />
                <span className="text-primary-foreground/70">
                  Mula Mustafe Bašeskije 2,<br />
                  Sarajevo, Bosna Hersek
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {currentYear} Berra d.o.o. Tüm hakları saklıdır.</p>
          <p>
            FOMY Ürünleri -{" "}
            <a href="https://www.fomy.com.tr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground">
              www.fomy.com.tr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

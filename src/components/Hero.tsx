import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Shield, Clock } from "lucide-react";
import heroImage from "@/assets/hero-cleaning.jpg";

export function Hero() {
  return (
    <section
      id="anasayfa"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Profesyonel temizlik hizmetleri"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay" />
      </div>

      {/* Decorative Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bubble w-32 h-32 bg-primary-foreground top-1/4 left-10" style={{ animationDelay: "0s" }} />
        <div className="bubble w-20 h-20 bg-accent top-1/3 right-20" style={{ animationDelay: "2s" }} />
        <div className="bubble w-16 h-16 bg-primary-foreground bottom-1/4 left-1/4" style={{ animationDelay: "4s" }} />
        <div className="bubble w-24 h-24 bg-accent bottom-1/3 right-1/3" style={{ animationDelay: "1s" }} />
      </div>

      {/* Content */}
      <div className="container-wide relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm font-medium text-primary-foreground">
              20+ Yıllık Deneyim
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up delay-100">
            Temiz, Güvenli,
            <br />
            <span className="text-primary-foreground/90 italic">Profesyonel.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-8 animate-fade-up delay-200">
            FOMY temizlik köpüğü ile hızlı ve pratik hijyen çözümleri. 
            ISO sertifikalı, TSE onaylı ürünlerle güvenli temizlik.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-up delay-300">
            <Button variant="hero" size="lg">
              Ürünleri Keşfet
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="heroOutline" size="lg">
              Bizimle İletişime Geçin
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-up delay-400">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Shield className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">ISO</div>
              <div className="text-xs text-primary-foreground/70">Sertifikalı</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Sparkles className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">%99.9</div>
              <div className="text-xs text-primary-foreground/70">Antibakteriyel</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-2 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
                <Clock className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="text-2xl font-bold text-primary-foreground">7/24</div>
              <div className="text-xs text-primary-foreground/70">Destek</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/40 flex justify-center pt-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
}

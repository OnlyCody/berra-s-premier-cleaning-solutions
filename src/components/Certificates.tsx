import { Shield, Award, FileCheck, Building2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Certificates() {
  const { t } = useLanguage();

  const certificates = [
    {
      icon: Shield,
      title: "ISO 9001:2015",
      description: "Kalite Yönetim Sistemi Sertifikası",
      issuer: "Uluslararası Standartlar",
    },
    {
      icon: Award,
      title: "ISO 14001:2015",
      description: "Çevre Yönetim Sistemi Sertifikası",
      issuer: "Uluslararası Standartlar",
    },
    {
      icon: FileCheck,
      title: "TSE Belgesi",
      description: "Türk Standardlarına Uygunluk Belgesi",
      issuer: "Türk Standardları Enstitüsü",
    },
    {
      icon: Building2,
      title: "Sanayi Kapasite Raporu",
      description: "İstanbul Sanayi Odası Onaylı",
      issuer: "TOBB - İstanbul",
    },
    {
      icon: Shield,
      title: "T.C. Sağlık Bakanlığı",
      description: "Kozmetik Ürün Ruhsatı",
      issuer: "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
    },
    {
      icon: Award,
      title: "Yerli Malı Belgesi",
      description: "Yerli Üretim Onay Belgesi",
      issuer: "TSE İstanbul",
    },
  ];

  return (
    <section id="sertifikalar" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-semibold mb-4">
            {t("certificates.subtitle")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("certificates.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("certificates.description")}
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card shadow-card hover-lift border border-border/50 overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full" />

              {/* Icon */}
              <div className="relative w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <cert.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {cert.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">
                {cert.description}
              </p>
              <span className="text-xs text-primary font-medium">
                {cert.issuer}
              </span>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-16 p-8 rounded-3xl gradient-hero relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative z-10 text-center">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Güvenilir Üretici - SEBAT KİMYA
            </h3>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6">
              Ürünlerimiz, ISO 9001 ve ISO 14001 sertifikalı, TSE onaylı, T.C. Sağlık Bakanlığı ruhsatlı
              SEBAT Kimya Sanayi A.Ş. tarafından İstanbul/Beylikdüzü'nde üretilmektedir.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                Dermatololik Test
              </span>
              <span className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                Paraben İçermez
              </span>
              <span className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                pH 5.5
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Shield, Award, FileCheck, Building2, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    icon: Shield,
    title: "ISO 9001:2015",
    description: "Kalite Yönetim Sistemi Sertifikası",
    issuer: "Uluslararası Standartlar Organizasyonu",
    details: "Bu sertifika, kuruluşumuzun müşteri odaklı bir yaklaşımla tutarlı ürün ve hizmet sunduğunu, yasal gereklilikleri karşıladığını ve sürekli iyileştirme taahhüdünde bulunduğunu doğrular.",
    validUntil: "2025",
  },
  {
    icon: Award,
    title: "ISO 14001:2015",
    description: "Çevre Yönetim Sistemi Sertifikası",
    issuer: "Uluslararası Standartlar Organizasyonu",
    details: "Çevresel performansımızı iyileştirmek, yasal yükümlülüklerimizi yerine getirmek ve çevresel hedeflerimize ulaşmak için sistematik bir çerçeve uyguladığımızı belgelemektedir.",
    validUntil: "2025",
  },
  {
    icon: FileCheck,
    title: "TSE Belgesi",
    description: "Türk Standardlarına Uygunluk Belgesi",
    issuer: "Türk Standardları Enstitüsü",
    details: "Ürünlerimizin TS 10.1990 Sentetik Deterjanlar standardına uygun olduğunu ve Türk kalite standartlarını karşıladığını onaylamaktadır.",
    validUntil: "2025",
  },
  {
    icon: Building2,
    title: "Sanayi Kapasite Raporu",
    description: "İstanbul Sanayi Odası Onaylı",
    issuer: "TOBB - İstanbul Sanayi Odası",
    details: "Üretim tesisimizin kapasitesi, kullanılan teknolojiler ve üretim yetkinliklerimizi belgelemektedir. Rapor No: 2020456",
    validUntil: "2025",
  },
  {
    icon: Shield,
    title: "T.C. Sağlık Bakanlığı Ruhsatı",
    description: "Kozmetik Ürün Ruhsatı",
    issuer: "Türkiye İlaç ve Tıbbi Cihaz Kurumu",
    details: "Antibakteriyel ürünlerimizin T.C. Sağlık Bakanlığı tarafından onaylandığını ve güvenli kullanım için gerekli tüm testlerden geçtiğini belgelemektedir.",
    validUntil: "2025",
  },
  {
    icon: Award,
    title: "Yerli Malı Belgesi",
    description: "Yerli Üretim Onay Belgesi",
    issuer: "TSE İstanbul Belgelendirme Müdürlüğü",
    details: "Ürünlerimizin Türkiye'de üretildiğini ve yerli üretim kriterlerini karşıladığını onaylamaktadır.",
    validUntil: "2025",
  },
];

const qualityPoints = [
  "Dermatololik olarak test edilmiş formüller",
  "Paraben, SLES ve triklosan içermez",
  "pH 5.5 dengeli ürünler",
  "Hipoalerjenik seçenekler",
  "Çevre dostu üretim süreçleri",
  "Düzenli kalite kontrol testleri",
];

export default function CertificatesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Güvenilirlik
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Sertifikalarımız
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Uluslararası standartlarda üretim, güvenilir ve kaliteli ürünler
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 shadow-card hover-lift border border-border/50 relative overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-bl-full" />

                {/* Icon */}
                <div className="relative w-16 h-16 rounded-2xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {cert.title}
                </h3>
                <p className="text-primary font-medium text-sm mb-3">
                  {cert.description}
                </p>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {cert.details}
                </p>

                {/* Footer */}
                <div className="pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {cert.issuer}
                  </span>
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent">
                    Geçerli: {cert.validUntil}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Kalite Standartları
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Kalite Taahhüdümüz
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                FOMY ürünleri, SEBAT Kimya Sanayi A.Ş. tarafından İstanbul/Beylikdüzü'nde en yüksek 
                kalite standartlarında üretilmektedir. Her ürünümüz titiz kalite kontrol süreçlerinden 
                geçerek size ulaşmaktadır.
              </p>

              <div className="grid gap-4">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="p-8 rounded-3xl gradient-hero relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
                <div className="relative z-10 text-center">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                    Güvenilir Üretici
                  </h3>
                  <p className="text-xl font-semibold text-primary-foreground/90 mb-4">
                    SEBAT KİMYA SANAYİ A.Ş.
                  </p>
                  <p className="text-primary-foreground/80 mb-6">
                    Yakuplu Mah. Dereboyu Cad. No: 17<br />
                    Beylikdüzü, İstanbul
                  </p>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                      Vergi No: 7570398350
                    </span>
                    <span className="px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium">
                      Sicil No: 442847
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sertifikalarımız Hakkında Bilgi Almak İster Misiniz?
            </h2>
            <p className="text-muted-foreground mb-8">
              Sertifikalarımızın kopyalarını talep etmek veya daha fazla bilgi almak için bizimle iletişime geçin.
            </p>
            <Button size="lg" asChild>
              <a href="/iletisim">
                <ExternalLink className="w-5 h-5" />
                İletişime Geçin
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

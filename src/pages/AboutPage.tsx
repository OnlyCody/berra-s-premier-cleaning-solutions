import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CheckCircle, Droplets, Leaf, Award, Users, Clock, Globe } from "lucide-react";

const features = [
  {
    icon: Droplets,
    title: "Özel Köpük Formülü",
    description: "Sihirli pompa sayesinde 20 kat hava ile birleşen 0.7g sıvı, ipeksi köpüğe dönüşür.",
  },
  {
    icon: Leaf,
    title: "Doğal İçerikler",
    description: "pH 5.5 değeri ve paraben içermeyen formül ile cildinize zarar vermez.",
  },
  {
    icon: Award,
    title: "Sertifikalı Üretim",
    description: "ISO 9001, ISO 14001 ve TSE belgeli, uluslararası standartlarda üretim.",
  },
];

const stats = [
  { icon: Clock, value: "20+", label: "Yıllık Deneyim" },
  { icon: Users, value: "1M+", label: "Mutlu Müşteri" },
  { icon: Globe, value: "10+", label: "Ülkede Satış" },
  { icon: Award, value: "6+", label: "Sertifika" },
];

const advantages = [
  "İdeal temizlik sağlayan yüksek kaliteli köpük",
  "Kremsi ve uzun süreli hoş koku",
  "Ekonomik kullanım - sıvı sabunlardan daha tasarruflu",
  "Dermatololik olarak test edilmiş formül",
  "Kolay durulanan, iz bırakmayan yapı",
  "Klasik, hassas cilt, doğal ve antibakteriyel çeşitleri",
];

const timeline = [
  { year: "2000", title: "Kuruluş", description: "FOMY markası temizlik köpüğü sektöründe faaliyet göstermeye başladı." },
  { year: "2005", title: "ISO Sertifikasyonu", description: "ISO 9001 ve ISO 14001 kalite yönetim sertifikalarını aldık." },
  { year: "2010", title: "Uluslararası Genişleme", description: "Balkan ülkelerine ihracata başladık." },
  { year: "2015", title: "Ürün Yelpazesi", description: "Antibakteriyel ve hassas cilt ürünlerini portföyümüze ekledik." },
  { year: "2020", title: "Berra d.o.o.", description: "Bosna Hersek'te Berra d.o.o. ile bölgesel distribütörlük başladı." },
  { year: "2024", title: "Büyüme", description: "Yeni ürünler ve daha geniş dağıtım ağı ile büyümeye devam ediyoruz." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Hakkımızda
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Temiz, Güvenli, Profesyonel.
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              2000 yılından bu yana FOMY temizlik köpüğü ile hızlı ve pratik hijyen çözümleri sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background relative -mt-8">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center hover-lift"
              >
                <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Hikayemiz
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                FOMY ile Fark Yaratın
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                FOMY, 2000 yılından bu yana "hızlı ve pratik temizlik" sloganıyla milyonlarca kullanıcıya ulaşmıştır. 
                Özel köpük formülümüz sayesinde, her pompada sadece 0.7g sıvı 20 kat hava ile birleşerek ipeksi bir köpüğe dönüşür.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Berra d.o.o. olarak, FOMY ürünlerinin Bosna Hersek ve Balkan bölgesindeki resmi distribütörüyüz. 
                ISO sertifikalı, TSE onaylı ürünlerimizle güvenli ve sağlıklı hijyen çözümleri sunmaktayız.
              </p>
              <div className="grid gap-4">
                {advantages.slice(0, 4).map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl gradient-hero p-1">
                <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
                      <span className="text-5xl font-display font-bold text-primary-foreground">B</span>
                    </div>
                    <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                      Berra d.o.o.
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      Temiz, Güvenli, Profesyonel
                    </p>
                    <div className="flex justify-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">ISO 9001</span>
                      <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">TSE</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/20 blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Neden FOMY?
            </h2>
            <p className="text-muted-foreground text-lg">
              Kalite, güvenlik ve ekonomi bir arada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-card shadow-card hover-lift border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Yolculuğumuz
            </h2>
            <p className="text-muted-foreground text-lg">
              2000'den bugüne FOMY'nin gelişimi
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {item.year}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

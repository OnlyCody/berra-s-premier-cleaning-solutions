import { CheckCircle, Droplets, Leaf, Award } from "lucide-react";

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

const advantages = [
  "İdeal temizlik sağlayan yüksek kaliteli köpük",
  "Kremsi ve uzun süreli hoş koku",
  "Ekonomik kullanım - sıvı sabunlardan daha tasarruflu",
  "Dermatololik olarak test edilmiş formül",
  "Kolay durulanan, iz bırakmayan yapı",
  "Klasik, hassas cilt, doğal ve antibakteriyel çeşitleri",
];

export function About() {
  return (
    <section id="hakkimizda" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Neden Biz?
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            FOMY ile Fark Yaratın
          </h2>
          <p className="text-muted-foreground text-lg">
            2000 yılından bu yana hızlı ve pratik temizlik sloganıyla milyonlarca kullanıcıya ulaştık.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        {/* Advantages Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              FOMY Köpük Sabunun Avantajları
            </h3>
            <div className="grid gap-4">
              {advantages.map((advantage, index) => (
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
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full gradient-hero flex items-center justify-center">
                    <span className="text-4xl font-display font-bold text-primary-foreground">B</span>
                  </div>
                  <h4 className="font-display text-2xl font-bold text-foreground mb-2">
                    Berra d.o.o.
                  </h4>
                  <p className="text-muted-foreground">
                    Temiz, Güvenli, Profesyonel
                  </p>
                  <div className="mt-6 flex justify-center gap-4 text-sm">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary">ISO 9001</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent">TSE</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-accent/20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-primary/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

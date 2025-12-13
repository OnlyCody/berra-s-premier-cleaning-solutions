import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "FOMY Classic",
    description: "pH 5.5 değerinde, cilde nazik klasik köpük sabun. Citrus ve biberiye notalarıyla ferahlatıcı temizlik.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-primary to-primary-light",
  },
  {
    name: "FOMY Antibakteriyel",
    description: "Bakterilerin %99.9'unu yok eden antibakteriyel formül. Dermatololik olarak test edilmiş, güvenli kullanım.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-accent to-primary",
  },
  {
    name: "FOMY Hassas Cilt",
    description: "Hassas, kuru ve tahrişli ciltler için özel formül. Hipoalerjenik, tropik ve çiçeksi notalar.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-pink-400 to-primary",
  },
  {
    name: "FOMY Şampuan",
    description: "Saç ve vücut için köpük şampuan. Saçlarınızı ipeksi ve parlak bırakır, günlük kullanıma uygun.",
    sizes: ["900ml"],
    color: "from-purple-400 to-primary",
  },
  {
    name: "FOMY Cam Temizleyici",
    description: "Profesyonel cam temizlik çözümü. Hızlı kurur, iz bırakmaz, kristal netliğinde temizlik.",
    sizes: ["1000ml"],
    color: "from-cyan-400 to-primary",
  },
  {
    name: "FOMY Çok Amaçlı",
    description: "Mutfak, banyo, kapı ve pencereler için çok yönlü temizleyici. Yağ ve kiri etkili şekilde temizler.",
    sizes: ["1000ml"],
    color: "from-orange-400 to-accent",
  },
];

export function Products() {
  return (
    <section id="urunler" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            Ürün Kataloğu
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Ürünlerimizi Keşfedin
          </h2>
          <p className="text-muted-foreground text-lg">
            Tüm cilt tiplerine uygun, kaliteli ve ekonomik temizlik çözümleri
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50"
            >
              {/* Product Image Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-32 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <span className="text-white font-display font-bold text-xl">F</span>
                  </div>
                </div>
                {/* Decorative bubbles */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20" />
                <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/15" />
                <div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-white/10" />
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Sizes */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                    >
                      {size}
                    </span>
                  ))}
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <ShoppingBag className="w-4 h-4" />
                  Detayları Gör
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

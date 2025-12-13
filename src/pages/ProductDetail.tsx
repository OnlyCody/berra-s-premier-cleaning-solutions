import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Shield, Droplets, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { getProductById, products } from "@/data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = getProductById(id || "");

  if (!product) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 pb-16 container-wide text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">
            Ürün Bulunamadı
          </h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız ürün mevcut değil veya kaldırılmış olabilir.
          </p>
          <Button asChild>
            <Link to="/#urunler">
              <ArrowLeft className="w-4 h-4" />
              Ürünlere Dön
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  // Get related products (excluding current)
  const relatedProducts = products.filter(p => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-24 bg-muted/30">
        <div className="container-wide py-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/#urunler" className="hover:text-primary transition-colors">Ürünler</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-12 bg-muted/30">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <div className="relative">
              <div className={`aspect-square rounded-3xl bg-gradient-to-br ${product.color} p-1`}>
                <div className="w-full h-full rounded-[calc(1.5rem-4px)] bg-card flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-8"
                  />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-primary/10 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
            </div>

            {/* Product Info */}
            <div>
              <Link
                to="/#urunler"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Tüm Ürünler
              </Link>

              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {product.name}
              </h1>

              <p className="text-lg text-muted-foreground mb-6">
                {product.description}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
                  <Droplets className="w-4 h-4" />
                  <span className="text-sm font-medium">pH {product.phValue}</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent">
                  <Shield className="w-4 h-4" />
                  <span className="text-sm font-medium">Sertifikalı</span>
                </div>
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-primary" />
                  Mevcut Boyutlar
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="px-4 py-2 rounded-lg bg-card border border-border text-foreground font-medium shadow-soft"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-4">
                <Button size="lg">
                  Teklif Al
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="/#iletisim">
                    İletişime Geç
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Features */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                Özellikler
              </h3>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Usage */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Droplets className="w-5 h-5 text-primary" />
                Kullanım
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {product.usage}
              </p>
              <div className="p-4 rounded-xl bg-muted/50 border border-border">
                <h4 className="font-medium text-foreground mb-2">İçerikler</h4>
                <p className="text-sm text-muted-foreground">
                  {product.ingredients.join(", ")}
                </p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Sertifikalar
              </h3>
              <div className="space-y-4">
                {product.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Diğer Ürünlerimiz
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relProduct) => (
              <Link
                key={relProduct.id}
                to={`/urun/${relProduct.id}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50"
              >
                <div className={`h-48 bg-gradient-to-br ${relProduct.color} relative overflow-hidden`}>
                  <img
                    src={relProduct.image}
                    alt={relProduct.name}
                    className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {relProduct.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {relProduct.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

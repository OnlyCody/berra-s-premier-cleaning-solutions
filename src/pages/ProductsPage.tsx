import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ShoppingBag, ArrowRight, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/products";
import { useState } from "react";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "soap", label: "Köpük Sabun" },
  { id: "cleaner", label: "Temizleyici" },
  { id: "shampoo", label: "Şampuan" },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === "all") return matchesSearch;
    if (activeCategory === "soap") return matchesSearch && product.name.includes("Classic") || product.name.includes("Antibakteriyel") || product.name.includes("Hassas");
    if (activeCategory === "cleaner") return matchesSearch && (product.name.includes("Cam") || product.name.includes("Amaçlı"));
    if (activeCategory === "shampoo") return matchesSearch && product.name.includes("Şampuan");
    return matchesSearch;
  });

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Ürün Kataloğu
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Ürünlerimizi Keşfedin
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Tüm cilt tiplerine uygun, kaliteli ve ekonomik temizlik çözümleri
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 flex-wrap justify-center">
              <Filter className="w-5 h-5 text-muted-foreground mr-2" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">Aradığınız kriterlere uygun ürün bulunamadı.</p>
              <Button variant="outline" onClick={() => { setSearchTerm(""); setActiveCategory("all"); }}>
                Filtreleri Temizle
              </Button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-card hover-lift border border-border/50"
                >
                  {/* Product Image */}
                  <Link to={`/urun/${product.id}`} className="block">
                    <div className={`h-56 bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20" />
                      <div className="absolute bottom-4 left-4 w-6 h-6 rounded-full bg-white/15" />
                    </div>
                  </Link>

                  {/* Product Info */}
                  <div className="p-6">
                    <Link to={`/urun/${product.id}`}>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.shortDescription}
                    </p>

                    {/* Sizes */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.sizes.slice(0, 4).map((size) => (
                        <span
                          key={size}
                          className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground"
                        >
                          {size}
                        </span>
                      ))}
                      {product.sizes.length > 4 && (
                        <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                          +{product.sizes.length - 4}
                        </span>
                      )}
                    </div>

                    <Button variant="outline" size="sm" className="w-full group/btn" asChild>
                      <Link to={`/urun/${product.id}`}>
                        <ShoppingBag className="w-4 h-4" />
                        Detayları Gör
                        <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Link } from "react-router-dom";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { products } from "@/data/products";

export function Products() {
  const { t } = useLanguage();

  return (
    <section id="urunler" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("products.subtitle")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("products.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("products.description")}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
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
                  {/* Decorative bubbles */}
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
                    {t("products.details")}
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-4 group-hover/btn:opacity-100 group-hover/btn:ml-0 transition-all" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

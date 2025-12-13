import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      value: "062 610 206",
      href: "tel:+38762610206",
    },
    {
      icon: Phone,
      label: t("contact.phoneLabel"),
      value: "062 620 162",
      href: "tel:+38762620162",
    },
    {
      icon: Mail,
      label: t("contact.emailLabel"),
      value: "berradoosarajevo@gmail.com",
      href: "mailto:berradoosarajevo@gmail.com",
    },
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "Mula Mustafe Bašeskije 2, Sarajevo",
      href: "https://maps.google.com/?q=Mula+Mustafe+Bašeskije+2+Sarajevo",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@BERRA.DOO",
      href: "https://www.instagram.com/BERRA.DOO",
    },
    {
      icon: Globe,
      label: "Web",
      value: "berrabalkan.com",
      href: "https://berrabalkan.com",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="iletisim" className="section-padding bg-muted/30">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
            {t("contact.subtitle")}
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-muted-foreground text-lg">
            {t("contact.description")}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              {t("contact.send")}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.name")}
                  </label>
                  <Input
                    placeholder={t("contact.name")}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {t("contact.phone")}
                  </label>
                  <Input
                    placeholder={t("contact.phone")}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.email")}
                </label>
                <Input
                  type="email"
                  placeholder={t("contact.email")}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  {t("contact.message")}
                </label>
                <Textarea
                  placeholder={t("contact.message")}
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                {t("contact.send")}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">
              {t("footer.contactTitle")}
            </h3>
            <div className="grid gap-4">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-xl bg-card shadow-soft border border-border/50 hover:border-primary/30 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                      {item.label}
                    </span>
                    <span className="text-foreground font-medium">
                      {item.value}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-muted relative">
              <div className="absolute inset-0 gradient-hero opacity-20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-foreground font-medium">Sarajevo, Bosna Hersek</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

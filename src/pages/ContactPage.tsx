import { useState } from "react";
import { Phone, Mail, MapPin, Instagram, Globe, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const contactInfo = [
  {
    icon: Phone,
    label: "Telefon",
    value: "062 610 206",
    href: "tel:+38762610206",
  },
  {
    icon: Phone,
    label: "Alternatif",
    value: "062 620 162",
    href: "tel:+38762620162",
  },
  {
    icon: Mail,
    label: "E-posta",
    value: "berradoosarajevo@gmail.com",
    href: "mailto:berradoosarajevo@gmail.com",
  },
  {
    icon: MapPin,
    label: "Adres",
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

const workingHours = [
  { day: "Pazartesi - Cuma", hours: "09:00 - 18:00" },
  { day: "Cumartesi", hours: "09:00 - 14:00" },
  { day: "Pazar", hours: "Kapalı" },
];

const faqs = [
  {
    question: "Toptan satış yapıyor musunuz?",
    answer: "Evet, toptan satış ve distribütörlük fırsatları sunuyoruz. Detaylı bilgi için bizimle iletişime geçin.",
  },
  {
    question: "Minimum sipariş miktarı nedir?",
    answer: "Minimum sipariş miktarı ürüne ve sipariş türüne göre değişmektedir. Detaylar için teklif talep edin.",
  },
  {
    question: "Teslimat süresi ne kadar?",
    answer: "Stokta olan ürünler için teslimat süresi genellikle 2-5 iş günüdür. Büyük siparişler için özel planlama yapılmaktadır.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.");
    setFormData({ name: "", email: "", phone: "", company: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="container-wide relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-semibold mb-6">
              Bize Ulaşın
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              İletişime Geçin
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90">
              Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-3xl p-8 shadow-card border border-border/50">
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Mesaj Gönderin
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Adınız Soyadınız *
                      </label>
                      <Input
                        placeholder="Adınızı giriniz"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        E-posta *
                      </label>
                      <Input
                        type="email"
                        placeholder="E-posta adresiniz"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Telefon
                      </label>
                      <Input
                        placeholder="Telefon numaranız"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Firma Adı
                      </label>
                      <Input
                        placeholder="Firma adınız (opsiyonel)"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Konu *
                    </label>
                    <Input
                      placeholder="Mesaj konusu"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mesajınız *
                    </label>
                    <Textarea
                      placeholder="Mesajınızı yazın..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-6">
                  İletişim Bilgileri
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                          {item.label}
                        </span>
                        <span className="text-foreground font-medium text-sm">
                          {item.value}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Working Hours */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <h3 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Çalışma Saatleri
                </h3>
                <div className="space-y-3">
                  {workingHours.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{item.day}</span>
                      <span className="text-foreground font-medium">{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted/30">
        <div className="container-wide">
          <div className="aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden bg-muted relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.234!2d18.4131!3d43.8563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUxJzIyLjYiTiAxOMKwMjQnNDcuMiJF!5e0!3m2!1sen!2sba!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Berra d.o.o. Konum"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sıkça Sorulan Sorular
            </h2>
          </div>

          <div className="max-w-3xl mx-auto grid gap-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-soft border border-border/50"
              >
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

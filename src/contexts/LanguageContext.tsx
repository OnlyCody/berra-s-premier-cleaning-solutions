import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "tr" | "bs" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  tr: {
    // Navbar
    "nav.home": "Ana Sayfa",
    "nav.about": "Hakkımızda",
    "nav.products": "Ürünler",
    "nav.certificates": "Sertifikalar",
    "nav.contact": "İletişim",
    "nav.getQuote": "Teklif Al",
    
    // Hero
    "hero.badge": "20+ Yıllık Deneyim",
    "hero.title1": "Temiz, Güvenli,",
    "hero.title2": "Profesyonel.",
    "hero.description": "FOMY temizlik köpüğü ile hızlı ve pratik hijyen çözümleri. ISO sertifikalı, TSE onaylı ürünlerle güvenli temizlik.",
    "hero.exploreProducts": "Ürünleri Keşfet",
    "hero.contactUs": "Bizimle İletişime Geçin",
    "hero.certified": "Sertifikalı",
    "hero.antibacterial": "Antibakteriyel",
    "hero.support": "Destek",
    
    // About
    "about.subtitle": "Hakkımızda",
    "about.title": "20 Yılı Aşkın Temizlik Deneyimi",
    "about.description": "BERRA olarak, FOMY temizlik köpüğü distribütörü olarak hijyen sektöründe güvenilir bir isim olduk. Kaliteli ürünler ve profesyonel hizmet anlayışımızla müşterilerimize en iyi çözümleri sunuyoruz.",
    "about.feature1.title": "Kolay Kullanım",
    "about.feature1.desc": "Pompalama gerektirmez, tek dokunuşla köpük",
    "about.feature2.title": "Ekonomik",
    "about.feature2.desc": "Küçük miktarda köpük, maksimum temizlik",
    "about.feature3.title": "Hijyenik",
    "about.feature3.desc": "Dokunmatik dağıtım, çapraz kontaminasyonu önler",
    "about.feature4.title": "Çevre Dostu",
    "about.feature4.desc": "Daha az su ve kimyasal kullanımı",
    
    // Products
    "products.subtitle": "Ürünlerimiz",
    "products.title": "FOMY Temizlik Köpüğü Serisi",
    "products.description": "Her ihtiyaca uygun, ISO sertifikalı temizlik ürünleri",
    "products.details": "Detayları Gör",
    "products.viewAll": "Tüm Ürünleri Görüntüle",
    
    // Certificates
    "certificates.subtitle": "Sertifikalarımız",
    "certificates.title": "Güvenilirliğimizin Kanıtı",
    "certificates.description": "Uluslararası kalite standartlarına uygun, sertifikalı ürünler",
    
    // Contact
    "contact.subtitle": "İletişim",
    "contact.title": "Bizimle İletişime Geçin",
    "contact.description": "Sorularınız veya teklif talepleriniz için bize ulaşın",
    "contact.name": "Adınız Soyadınız",
    "contact.email": "E-posta Adresiniz",
    "contact.phone": "Telefon Numaranız",
    "contact.subject": "Konu",
    "contact.message": "Mesajınız",
    "contact.send": "Mesaj Gönder",
    "contact.address": "Adres",
    "contact.phoneLabel": "Telefon",
    "contact.emailLabel": "E-posta",
    
    // Footer
    "footer.description": "Temiz, güvenli, profesyonel. FOMY temizlik köpüğü ile hızlı ve pratik hijyen çözümleri sunuyoruz. 20 yılı aşkın deneyimimizle güvenilir ortağınız.",
    "footer.quickLinks": "Hızlı Bağlantılar",
    "footer.contactTitle": "İletişim",
    "footer.rights": "Tüm hakları saklıdır.",
    "footer.fomyProducts": "FOMY Ürünleri",
  },
  
  bs: {
    // Navbar
    "nav.home": "Početna",
    "nav.about": "O nama",
    "nav.products": "Proizvodi",
    "nav.certificates": "Certifikati",
    "nav.contact": "Kontakt",
    "nav.getQuote": "Zatražite ponudu",
    
    // Hero
    "hero.badge": "20+ godina iskustva",
    "hero.title1": "Čisto, Sigurno,",
    "hero.title2": "Profesionalno.",
    "hero.description": "Brza i praktična higijensko rješenje sa FOMY pjenom za čišćenje. Sigurno čišćenje sa ISO certificiranim, TSE odobrenim proizvodima.",
    "hero.exploreProducts": "Istražite proizvode",
    "hero.contactUs": "Kontaktirajte nas",
    "hero.certified": "Certificirano",
    "hero.antibacterial": "Antibakterijsko",
    "hero.support": "Podrška",
    
    // About
    "about.subtitle": "O nama",
    "about.title": "Preko 20 godina iskustva u čišćenju",
    "about.description": "Kao BERRA, postali smo pouzdano ime u sektoru higijene kao distributer FOMY pjene za čišćenje. Našim kupcima nudimo najbolja rješenja sa kvalitetnim proizvodima i profesionalnim pristupom uslugama.",
    "about.feature1.title": "Jednostavna upotreba",
    "about.feature1.desc": "Nije potrebno pumpanje, pjena jednim dodirom",
    "about.feature2.title": "Ekonomično",
    "about.feature2.desc": "Mala količina pjene, maksimalna čistoća",
    "about.feature3.title": "Higijenski",
    "about.feature3.desc": "Beskontaktno doziranje, sprečava unakrsnu kontaminaciju",
    "about.feature4.title": "Ekološki prihvatljivo",
    "about.feature4.desc": "Manja potrošnja vode i hemikalija",
    
    // Products
    "products.subtitle": "Naši proizvodi",
    "products.title": "FOMY serija pjena za čišćenje",
    "products.description": "ISO certificirani proizvodi za čišćenje za svaku potrebu",
    "products.details": "Pogledajte detalje",
    "products.viewAll": "Pogledajte sve proizvode",
    
    // Certificates
    "certificates.subtitle": "Naši certifikati",
    "certificates.title": "Dokaz naše pouzdanosti",
    "certificates.description": "Certificirani proizvodi u skladu sa međunarodnim standardima kvaliteta",
    
    // Contact
    "contact.subtitle": "Kontakt",
    "contact.title": "Kontaktirajte nas",
    "contact.description": "Obratite nam se za pitanja ili zahtjeve za ponudu",
    "contact.name": "Vaše ime i prezime",
    "contact.email": "Vaša email adresa",
    "contact.phone": "Vaš broj telefona",
    "contact.subject": "Tema",
    "contact.message": "Vaša poruka",
    "contact.send": "Pošaljite poruku",
    "contact.address": "Adresa",
    "contact.phoneLabel": "Telefon",
    "contact.emailLabel": "Email",
    
    // Footer
    "footer.description": "Čisto, sigurno, profesionalno. Nudimo brza i praktična higijenska rješenja sa FOMY pjenom za čišćenje. Vaš pouzdani partner sa preko 20 godina iskustva.",
    "footer.quickLinks": "Brze veze",
    "footer.contactTitle": "Kontakt",
    "footer.rights": "Sva prava zadržana.",
    "footer.fomyProducts": "FOMY proizvodi",
  },
  
  en: {
    // Navbar
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.products": "Products",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.getQuote": "Get Quote",
    
    // Hero
    "hero.badge": "20+ Years of Experience",
    "hero.title1": "Clean, Safe,",
    "hero.title2": "Professional.",
    "hero.description": "Fast and practical hygiene solutions with FOMY cleaning foam. Safe cleaning with ISO certified, TSE approved products.",
    "hero.exploreProducts": "Explore Products",
    "hero.contactUs": "Contact Us",
    "hero.certified": "Certified",
    "hero.antibacterial": "Antibacterial",
    "hero.support": "Support",
    
    // About
    "about.subtitle": "About Us",
    "about.title": "Over 20 Years of Cleaning Experience",
    "about.description": "As BERRA, we have become a trusted name in the hygiene sector as a FOMY cleaning foam distributor. We offer the best solutions to our customers with quality products and professional service approach.",
    "about.feature1.title": "Easy to Use",
    "about.feature1.desc": "No pumping required, foam with one touch",
    "about.feature2.title": "Economical",
    "about.feature2.desc": "Small amount of foam, maximum cleaning",
    "about.feature3.title": "Hygienic",
    "about.feature3.desc": "Touchless dispensing, prevents cross-contamination",
    "about.feature4.title": "Eco-Friendly",
    "about.feature4.desc": "Less water and chemical usage",
    
    // Products
    "products.subtitle": "Our Products",
    "products.title": "FOMY Cleaning Foam Series",
    "products.description": "ISO certified cleaning products for every need",
    "products.details": "View Details",
    "products.viewAll": "View All Products",
    
    // Certificates
    "certificates.subtitle": "Our Certificates",
    "certificates.title": "Proof of Our Reliability",
    "certificates.description": "Certified products in accordance with international quality standards",
    
    // Contact
    "contact.subtitle": "Contact",
    "contact.title": "Get in Touch",
    "contact.description": "Reach out to us for questions or quote requests",
    "contact.name": "Your Full Name",
    "contact.email": "Your Email Address",
    "contact.phone": "Your Phone Number",
    "contact.subject": "Subject",
    "contact.message": "Your Message",
    "contact.send": "Send Message",
    "contact.address": "Address",
    "contact.phoneLabel": "Phone",
    "contact.emailLabel": "Email",
    
    // Footer
    "footer.description": "Clean, safe, professional. We offer fast and practical hygiene solutions with FOMY cleaning foam. Your trusted partner with over 20 years of experience.",
    "footer.quickLinks": "Quick Links",
    "footer.contactTitle": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.fomyProducts": "FOMY Products",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem("berra-language");
    return (saved as Language) || "tr";
  });

  useEffect(() => {
    localStorage.setItem("berra-language", language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

import fomyClassic from "@/assets/products/fomy-classic.jpg";
import fomyAntibacterial from "@/assets/products/fomy-antibacterial.jpg";
import fomySensitive from "@/assets/products/fomy-sensitive.jpg";
import fomyShampoo from "@/assets/products/fomy-shampoo.jpg";
import fomyGlass from "@/assets/products/fomy-glass.jpg";
import fomyMultipurpose from "@/assets/products/fomy-multipurpose.jpg";

export interface Product {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  sizes: string[];
  color: string;
  image: string;
  features: string[];
  ingredients: string[];
  usage: string;
  phValue: string;
  certifications: string[];
}

export const products: Product[] = [
  {
    id: "fomy-classic",
    name: "FOMY Classic",
    shortDescription: "pH 5.5 değerinde, cilde nazik klasik köpük sabun. Citrus ve biberiye notalarıyla ferahlatıcı temizlik.",
    description: "FOMY Classic, özel formülü sayesinde yüksek kaliteli köpüğü ile ideal bir temizlik sağlar. Güvenli ve sağlıklı temizlik, yoğun kullanım için idealdir. pH 5.5 değeri sayesinde tüm cilt tipleri için uygundur.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-primary to-primary-light",
    image: fomyClassic,
    features: [
      "pH 5.5 dengeli formül",
      "Paraben içermez",
      "Dermatololik test edilmiş",
      "Ekonomik kullanım",
      "Citrus ve biberiye kokusu",
      "Kremsi köpük yapısı"
    ],
    ingredients: [
      "Su", "Sodyum Laureth Sülfat", "Kokomidopropil Betain", 
      "Gliserin", "Parfüm", "Sitrik Asit"
    ],
    usage: "Ellerinizi ıslattıktan sonra bir kez pompa basarak köpük alın. İyice ovuşturarak köpürtün, ardından su ile durulayın.",
    phValue: "5.5",
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "TSE"]
  },
  {
    id: "fomy-antibakteriyel",
    name: "FOMY Antibakteriyel",
    shortDescription: "Bakterilerin %99.9'unu yok eden antibakteriyel formül. Dermatololik olarak test edilmiş, güvenli kullanım.",
    description: "FOMY Antibakteriyel, el yıkama sırasında %99.9 oranında bakterileri yok eden etkili antibakteriyel köpük sabundur. Kremsi formülü cildi kurutmadan koruma sağlar. Taze bitkisel ve çiçeksi notalar hoş bir koku bırakır.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-accent to-primary",
    image: fomyAntibacterial,
    features: [
      "%99.9 antibakteriyel etki",
      "pH 5.5 dengeli",
      "SLES, triklosan ve paraben içermez",
      "Dermatololik test edilmiş",
      "Bitkisel ve çiçeksi koku",
      "Yoğun kullanım için ideal"
    ],
    ingredients: [
      "Su", "Sodyum Laureth Sülfat", "Kokomidopropil Betain",
      "Antibakteriyel Ajan", "Gliserin", "Parfüm"
    ],
    usage: "Ellerinizi ıslattıktan sonra bir kez pompa basarak köpük alın. En az 20 saniye ovuşturun, ardından su ile durulayın.",
    phValue: "5.5",
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "TSE", "T.C. Sağlık Bakanlığı"]
  },
  {
    id: "fomy-hassas-cilt",
    name: "FOMY Hassas Cilt",
    shortDescription: "Hassas, kuru ve tahrişli ciltler için özel formül. Hipoalerjenik, tropik ve çiçeksi notalar.",
    description: "FOMY Hassas Cilt, özel kremsi formülü hassas, kuru ve pürüzlü cildin ihtiyaçlarını karşılamak için geliştirilmiştir. Kontrollü kullanım güvenli ve sağlıklı temizlik sağlar. Yoğun kullanım için idealdir.",
    sizes: ["300ml", "500ml", "900ml", "1000ml", "1800ml"],
    color: "from-pink-400 to-primary",
    image: fomySensitive,
    features: [
      "Hipoalerjenik formül",
      "Hassas ciltler için özel",
      "pH 5.5 dengeli",
      "Paraben ve agresif madde içermez",
      "Tropik ve çiçeksi koku",
      "Çocuklar için uygun"
    ],
    ingredients: [
      "Su", "Kokomidopropil Betain", "Sodyum Cocoyl Glutamat",
      "Gliserin", "Aloe Vera Özü", "Parfüm"
    ],
    usage: "Ellerinizi ıslattıktan sonra bir kez pompa basarak köpük alın. Nazikçe ovuşturun, ardından su ile durulayın.",
    phValue: "5.5",
    certifications: ["ISO 9001:2015", "ISO 14001:2015", "TSE"]
  },
  {
    id: "fomy-sampuan",
    name: "FOMY Şampuan",
    shortDescription: "Saç ve vücut için köpük şampuan. Saçlarınızı ipeksi ve parlak bırakır, günlük kullanıma uygun.",
    description: "FOMY Köpük Şampuan, saç ve vücut için geliştirilmiş çok amaçlı köpük formülüdür. Saçlarınızı ipeksi ve parlak bırakır. pH 5.5 değeri günlük kullanım için uygundur.",
    sizes: ["900ml"],
    color: "from-purple-400 to-primary",
    image: fomyShampoo,
    features: [
      "Saç ve vücut için",
      "İpeksi ve parlak saçlar",
      "pH 5.5 dengeli",
      "Günlük kullanıma uygun",
      "Çiçeksi ve taze koku",
      "Pratik ve ekonomik"
    ],
    ingredients: [
      "Su", "Sodyum Laureth Sülfat", "Kokomidopropil Betain",
      "Gliserin", "Panthenol", "Parfüm"
    ],
    usage: "Islak saç ve vücuda uygulayın. İyice köpürtün, ardından su ile durulayın.",
    phValue: "5.5",
    certifications: ["ISO 9001:2015", "TSE"]
  },
  {
    id: "fomy-cam-temizleyici",
    name: "FOMY Cam Temizleyici",
    shortDescription: "Profesyonel cam temizlik çözümü. Hızlı kurur, iz bırakmaz, kristal netliğinde temizlik.",
    description: "FOMY Cam Temizleyici, profesyonel cam temizlik çözümüdür. Hızlı buharlaşır, iz bırakmaz ve kristal netliğinde temizlik sağlar. Pencereler, aynalar, vitrinler ve araba camları için uygundur.",
    sizes: ["1000ml"],
    color: "from-cyan-400 to-primary",
    image: fomyGlass,
    features: [
      "Hızlı kuruma",
      "İz bırakmaz",
      "Kristal netliğinde temizlik",
      "Citrus kokusu",
      "Tüm cam yüzeyler için",
      "LCD ve plazma ekranlar için uygun değildir"
    ],
    ingredients: [
      "Su", "İzopropil Alkol", "Surfaktan",
      "Parfüm", "Renklendirici"
    ],
    usage: "Yüzeye püskürtün, temiz bir bez ile silin. Gerekirse işlemi tekrarlayın.",
    phValue: "7.0",
    certifications: ["ISO 9001:2015", "TSE"]
  },
  {
    id: "fomy-cok-amacli",
    name: "FOMY Çok Amaçlı",
    shortDescription: "Mutfak, banyo, kapı ve pencereler için çok yönlü temizleyici. Yağ ve kiri etkili şekilde temizler.",
    description: "FOMY Çok Amaçlı Temizleyici, mutfak, banyo, kapı, pencere ve araç içi için sversatil temizlik çözümüdür. Yağ, kir ve derin lekeleri temizler. Yüzeylere zarar vermez çünkü güçlü çözücüler içermez.",
    sizes: ["1000ml"],
    color: "from-orange-400 to-accent",
    image: fomyMultipurpose,
    features: [
      "Çok yönlü kullanım",
      "Yağ ve kir temizliği",
      "Yüzeylere zarar vermez",
      "Bitkisel ve çiçeksi koku",
      "Ev ve iş yerleri için",
      "Pratik sprey başlık"
    ],
    ingredients: [
      "Su", "Non-iyonik Surfaktan", "Sitrik Asit",
      "Parfüm", "Koruyucu"
    ],
    usage: "Temizlenecek yüzeye püskürtün. Bir bez veya sünger ile silin. Gerekirse su ile durulayın.",
    phValue: "7.5",
    certifications: ["ISO 9001:2015", "TSE"]
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

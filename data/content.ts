// Metinler, hizmetler, anlaşmalı kurumlar ve iletişim bilgileri bu dosyadan yönetilir.

export const siteConfig = {
  name: "HAKAN SAYLAM DİŞ KLİNİĞİ",
  tagline: "Sağlıklı Gülüşler, Mutlu Yarınlar",
  description:
    "Ankara YDA Center'da ileri teknoloji, uzman kadromuz ve sterilizasyon standartlarımızla ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz.",
  url: "https://dthakansaylam.com",
  locale: "tr_TR",
  contact: {
    phone: "0 (312) 502 02 30",
    phone2: "0 (544) 691 18 77",
    email: "dthakansaylam@gmail.com",
    address: "YDA Center A2 Blok Kat:12 No:507, Kızılırmak, 06510 Çankaya / Ankara",
    hours: "Pazartesi – Cumartesi: 09:00 – 19:00",
  },
  social: {
    instagram: "https://instagram.com/dthakansaylam",
    facebook: "https://facebook.com/dthakansaylam",
    twitter: "https://twitter.com/dthakansaylam",
  },
};

export const navLinks = [
  { label: "Ana Sayfa", href: "#top" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetlerimiz", href: "#hizmetler" },
  { label: "Kliniğimiz", href: "#galeri" },
  { label: "Kurumsal Anlaşmalar", href: "#anlasmalar" },
  { label: "İletişim", href: "#iletisim" },
];

export const heroContent = {
  eyebrow: "Hakan Saylam Diş Kliniği",
  title: "Sağlıklı Gülüşler, Mutlu Yarınlar",
  description:
    "Modern teknoloji ve deneyimli kadromuzla ağız ve diş sağlığınız için buradayız. Kişiye özel tedavilerle sağlıklı gülüşler tasarlıyoruz.",
  ctaPrimary: "Randevu Al",
  ctaSecondary: "Bize Ulaşın",
};

export const features = [
  {
    title: "Uzman Kadro",
    desc: "Deneyimli ve güler yüzlü ekibimizle yanınızdayız.",
  },
  {
    title: "Modern Teknoloji",
    desc: "Son teknoloji cihazlarla kesin ve konforlu tedavi.",
  },
  {
    title: "Hijyenik Ortam",
    desc: "Sağlığınız için en yüksek hijyen standartları.",
  },
  {
    title: "Hasta Memnuniyeti",
    desc: "Önceliğimiz sizin memnuniyetiniz ve güvenliğiniz.",
  },
  {
    title: "Kolay Randevu",
    desc: "Hızlı ve kolay randevu planlama sistemi.",
  },
];

// 2. ve 3. Fotoğraftaki Sigortalar ve Anlaşmalı Kuruluşlar listesi
export const benefitInsurances = [
  "Ak Sigorta",
  "Allianz",
  "Anadolu Sigorta",
  "QNB Sigorta",
  "Liberty Sigorta",
  "Türkiye Sigorta",
  "Neova Sigorta",
  "HDI Sigorta",
  "Ana Sigorta",
  "TEB Sigorta",
  "Türk Nippon Sigorta",
  "Zurich Sigorta",
  "Doğa Sigorta",
  "Eureko Sigorta",
  "Türkiye Katılım Sigorta",
  "Ankara Sigorta",
];

export const benefitCompanies = [
  "Anadolu Hayat Emeklilik",
  "Demir Hayat",
  "NN Hayat ve Emeklilik",
  "HSBC",
  "Yapı Kredi",
  "Magdeburger",
  "MediSA",
  "Garanti BBVA Emeklilik",
  "Türkiye Hayat Emeklilik",
  "Hepiyi",
  "Viennalife Emeklilik ve Hayat A.Ş.",
];

// Carousel logoları için metinsel isimler (SVG logoları bu isimlerle çizilecek)
export const corporateCarouselLogos = [
  "Türkiye İş Bankası",
  "Türk Hava Yolları",
  "Aselsan",
  "TCDD Taşımacılık",
  "Halkbank",
  "Vakıfbank",
];

export const insuranceCarouselLogos = [
  "Allianz",
  "Axa Sigorta",
  "Mapfre",
  "HDI Sigorta",
  "Anadolu Sigorta",
  "Zurich Sigorta",
];

export const services = [
  {
    id: "beyazlatma",
    title: "Diş Beyazlatma",
    desc: "Daha beyaz ve ışıltılı bir gülüş.",
  },
  {
    id: "implant",
    title: "İmplant Tedavisi",
    desc: "Kalıcı, doğal ve sağlam çözümler.",
  },
  {
    id: "estetik",
    title: "Estetik Diş Hekimliği",
    desc: "Gülüş tasarımı ile estetik dokunuşlar.",
  },
];

export const galleryItems = [
  {
    id: "entrance",
    title: "Muayenehane Girişi",
    category: "Hakan Saylam",
    desc: "YDA Center'daki prestijli ve modern muayenehane girişimiz ile hastalarımızı karşılıyoruz.",
    src: "/images/projects/entrance.jpg",
  },
  {
    id: "device",
    title: "Rayscan Görüntüleme Cihazı",
    category: "Teknoloji",
    desc: "3D tomografi ve dijital tarama teknolojisi ile milimetrik teşhis imkanı sunuyoruz.",
    src: "/images/projects/device.jpg",
  },
  {
    id: "reception",
    title: "Karşılama Bankosu",
    category: "Sekretarya",
    desc: "Kayıt ve danışma işlemlerinizin steril koşullarda, hızlıca yapıldığı karşılama bankomuz.",
    src: "/images/projects/reception.jpg",
  },
  {
    id: "sterilization",
    title: "Sterilizasyon Laboratuvarı",
    category: "Hijyen",
    desc: "Avrupa standartlarında tam otomatik otoklav ve sterilizasyon cihazlarımızın yer aldığı hijyen odamız.",
    src: "/images/projects/sterilization.jpg",
  },
  {
    id: "chair",
    title: "Klinik Tedavi Odası",
    category: "Tedavi",
    desc: "En son teknoloji ünitlerimiz ile konforlu ve acısız tedavilerin gerçekleştirildiği odamız.",
    src: "/images/projects/chair.jpg",
  },
  {
    id: "corridor",
    title: "Klinik Geçiş Koridoru",
    category: "Mimari",
    desc: "Hastalarımızın konforu ve gizliliği düşünülerek modern akustik cam bölmelerle tasarlanmış ferah klinik koridorumuz.",
    src: "/images/projects/corridor.jpg",
  },
];

export const stats = [
  { value: "20+", label: "Yıllık Deneyim" },
  { value: "5000+", label: "Mutlu Hasta" },
  { value: "15+", label: "Uzman Kadro" },
  { value: "7/24", label: "Destek & İletişim" },
];

export const testimonials = [
  {
    id: 1,
    name: "Murat Özkan",
    title: "Yönetici",
    quote: "YDA Center'daki muayenehane son derece şık ve steril. Hakan Bey'in tecrübesi sayesinde tedavilerim çok rahat geçti.",
    rating: 5,
    treatment: "Estetik Diş Hekimliği",
  },
  {
    id: 2,
    name: "Selin Yılmaz",
    title: "Mimar",
    quote: "İmplant tedavisi için doğru yer olduğunu ilk girdiğiniz an hissettiriyor. Ekip güler yüzlü ve sterilizasyon mükemmel.",
    rating: 5,
    treatment: "İmplant Tedavisi",
  },
];

export const trustStats = [
  { value: 20, suffix: "+", label: "Yıllık Deneyim" },
  { value: 5000, suffix: "+", label: "Mutlu Hasta" },
  { value: 15, suffix: "+", label: "Uzman Kadro" },
  { value: 98, suffix: "%", label: "Memnuniyet" },
];


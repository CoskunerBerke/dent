// ── Tüm site içeriği bu dosyadan yönetilir ──────────────────────────────────
// Metinleri, hizmetleri, projeleri, iletişim bilgilerini buradan düzenleyin.

export const siteConfig = {
  name: "DİŞ HEKİMİ HAKAN SAYLAM",
  tagline: "Diş Muayenehanesi",
  description:
    "Ankara'nın öncü diş muayenehanesi. Uzman kadromuz, ileri teknolojik altyapımız ve kişiye özel tedavi yaklaşımımızla sağlıklı ve estetik gülüşler tasarlıyoruz.",
  url: "https://hakansaylam.com",
  locale: "tr_TR",
  contact: {
    phone: "0 (312) 502 02 30",
    email: "info@hakansaylam.com",
    address: "YDA Center, Dumlupınar Blv. Kat:12 No:507, 06530 Çankaya/Ankara",
    hours: "Pazartesi – Cumartesi: 09:00 – 19:00",
  },
  social: {
    instagram: "https://instagram.com/dentahakansaylam",
    facebook: "https://facebook.com/dentahakansaylam",
    twitter: "https://twitter.com/dentahakansaylam",
  },
};

export const heroContent = {
  eyebrow: "Ankara YDA Center",
  headline: ["Kusursuz", "Gülüşler", "Tasarlıyoruz"],
  subtext:
    "İleri teknoloji, sterilizasyon standartları ve kişiselleştirilmiş tedavi yaklaşımıyla Çankaya'daki modern muayenehanemizde diş hekimliğinde yeni bir standart belirliyoruz.",
  cta: "Randevu Al",
  ctaSecondary: "Hizmetlerimizi Keşfet",
  scrollLabel: "Keşfet",
};

export const introContent = {
  eyebrow: "Hakkımızda",
  lines: [
    "Güzel gülüşler",
    "tesadüfen oluşmaz —",
    "onlar özenle",
    "tasarlanır.",
  ],
  body: "Diş Hekimi Hakan Saylam liderliğindeki kliniğimizde, her hastamızı biricik görüyor, tedavi planını onun hayaline özel şekillendiriyoruz. Estetik diş hekimliğini bir bilim ve sanat olarak benimsiyoruz.",
  stats: [
    { value: 25, suffix: "+", label: "Yıllık Deneyim" },
    { value: 12000, suffix: "+", label: "Mutlu Hasta" },
    { value: 15, suffix: "+", label: "Teknolojik Cihaz" },
    { value: 98, suffix: "%", label: "Hasta Memnuniyeti" },
  ],
};

export const services = [
  {
    id: "muayene",
    number: "01",
    category: "Teşhis",
    title: "Muayene ve Teşhis",
    description:
      "Ağız ve diş sağlığınızı detaylı bir şekilde inceleyerek her sorununuz için en doğru ve kişiye özel tedavi planını sunuyoruz.",
    image: "/images/projects/device.jpg",
    tag: "Doğru Planlama",
  },
  {
    id: "estetik",
    number: "02",
    category: "Estetik",
    title: "Estetik Diş Hekimliği",
    description:
      "Gülümsemenizi yeniden keşfedin! Diş beyazlatma ve porselen kaplama ile dişlerinizin mükemmel görünmesini sağlıyoruz.",
    image: "/images/projects/entrance.jpg",
    tag: "Hollywood Gülüşü",
  },
  {
    id: "kanal",
    number: "03",
    category: "Endodonti",
    title: "Kanal Tedavisi",
    description:
      "İçsel enfeksiyonları kökünden temizleyerek ağrıdan ve iltihaplardan kalıcı olarak kurtulmanızı sağlıyoruz.",
    image: "/images/projects/chair.jpg",
    tag: "Diş Tasarrufu",
  },
  {
    id: "hijyen",
    number: "04",
    category: "Koruyucu",
    title: "Profesyonel Diş Hijyeni",
    description:
      "Diş temizliği ile ağız hijyeninizi korumak, diş eti problemlerini önlemek ve dişlerinizin sağlığını uzun süre korumak için gereklidir.",
    image: "/images/projects/sterilization.jpg",
    tag: "Sağlıklı Diş Etleri",
  },
  {
    id: "implant",
    number: "05",
    category: "Cerrahi",
    title: "İmplant Tedavisi",
    description:
      "En son teknolojiyi kullanarak implant tedavisi uyguluyoruz. Uzman ekibimiz, size özel bir tedavi planı oluşturur ve işlemi rahatça tamamlamanızı sağlar.",
    image: "/images/projects/reception.jpg",
    tag: "Kalıcı Çözüm",
  },
  {
    id: "ortodonti",
    number: "06",
    category: "Ortodonti",
    title: "Ortodonti",
    description:
      "Diş teli ve benzeri tedavilerle, dişlerin düzeltilmesi ve çene yapısının geliştirilmesi için en iyi uzmanlarımız hizmetinizdedir.",
    image: "/images/projects/lounge.jpg",
    tag: "Düzgün Hizalama",
  },
];

export const galleryItems = [
  {
    id: 1,
    title: "Görüntüleme Cihazı",
    category: "Görüntüleme",
    description: "3D Tomografi ve Rayscan ağız yapısı tarama teknolojisi.",
    image: "/images/projects/device.jpg",
  },
  {
    id: 2,
    title: "Klinik Giriş",
    category: "Muayenehane",
    description: "Diş Hekimi Hakan Saylam YDA Center modern giriş alanı.",
    image: "/images/projects/entrance.jpg",
  },
  {
    id: 3,
    title: "Hasta Bekleme Alanı",
    category: "Karşılama",
    description: "Konforlu oturma köşesi ve şık bekleme salonu.",
    image: "/images/projects/lounge.jpg",
  },
  {
    id: 4,
    title: "Sekretarya & Banko",
    category: "Kayıt",
    description: "Karşılama bankosu ve sterilizasyon standartları danışması.",
    image: "/images/projects/reception.jpg",
  },
  {
    id: 5,
    title: "Sterilizasyon Laboratuvarı",
    category: "Hijyen",
    description: "Cihazların ve aletlerin tam otomatik otoklav sterilizasyon odası.",
    image: "/images/projects/sterilization.jpg",
  },
  {
    id: 6,
    title: "Tedavi Odası & Ünit",
    category: "Klinik",
    description: "En son teknoloji tedavi koltuğu ve aydınlık klinik ünitimiz.",
    image: "/images/projects/chair.jpg",
  },
];

export const storySteps = [
  {
    step: "01",
    title: "Teknolojik Analiz",
    description:
      "Modern ağız tarayıcılarımızla ağız yapınızı eksiksiz analiz edip tedavi planı hazırlıyoruz.",
    image: "/images/projects/device.jpg",
    color: "#04090d",
    stat: { value: 100, suffix: "%", label: "Dijital Tarama" },
  },
  {
    step: "02",
    title: "Tam Sterilizasyon",
    description:
      "Aletlerimiz her hastadan sonra otoklav cihazlarımızda Avrupa standartlarında sterilize edilir.",
    image: "/images/projects/sterilization.jpg",
    color: "#070e12",
    stat: { value: 100, suffix: "%", label: "Steril Standart" },
  },
  {
    step: "03",
    title: "Tedavi Süreci",
    description:
      "Lüks ve konforlu klinik odalarımızda hekimimiz eşliğinde acısız tedavileri tamamlıyoruz.",
    image: "/images/projects/chair.jpg",
    color: "#020507",
    stat: { value: 25, suffix: "+", label: "Deneyim Yılı" },
  },
  {
    step: "04",
    title: "Hasta Konforu",
    description:
      "Tedavi öncesi ve sonrasında kahve ikram köşemizde bekleme sürenizi keyfe dönüştürüyoruz.",
    image: "/images/projects/coffee.jpg",
    color: "#04090d",
    stat: { value: 98, suffix: "%", label: "Hasta Memnuniyeti" },
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Murat Özkan",
    title: "Yönetici",
    quote:
      "YDA Center'daki muayenehane son derece şık ve steril. Hakan Bey'in tecrübesi sayesinde tedavilerim çok rahat geçti.",
    rating: 5,
    treatment: "Estetik Diş Hekimliği",
  },
  {
    id: 2,
    name: "Selin Yılmaz",
    title: "Mimar",
    quote:
      "İmplant tedavisi için doğru yer olduğunu ilk girdiğiniz an hissettiriyor. Ekip güler yüzlü ve sterilizasyon mükemmel.",
    rating: 5,
    treatment: "İmplant Tedavisi",
  },
];

export const trustStats = [
  { value: 25, suffix: "+", label: "Yıllık Deneyim" },
  { value: 12000, suffix: "+", label: "Mutlu Hasta" },
  { value: 15, suffix: "+", label: "Teknolojik Cihaz" },
  { value: 98, suffix: "%", label: "Memnuniyet" },
];

export const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Klinik", href: "#galeri" },
  { label: "Süreç", href: "#hikayemiz" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

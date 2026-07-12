// ── Tüm site içeriği bu dosyadan yönetilir ──────────────────────────────────
// Metinleri, hizmetleri, projeleri, iletişim bilgilerini buradan düzenleyin.

export const siteConfig = {
  name: "DENTA",
  tagline: "Premium Diş Kliniği",
  description:
    "İstanbul'un en seçkin diş kliniği. Uzman kadromuz ve ileri teknolojimizle sağlıklı ve estetik gülüşler tasarlıyoruz.",
  url: "https://denta.com.tr",
  locale: "tr_TR",
  contact: {
    phone: "+90 212 555 00 00",
    email: "info@denta.com.tr",
    address: "Nişantaşı Mahallesi, Abdi İpekçi Cad. No:42, Şişli / İstanbul",
    hours: "Pazartesi – Cumartesi: 09:00 – 19:00",
  },
  social: {
    instagram: "https://instagram.com/dentaklinik",
    facebook: "https://facebook.com/dentaklinik",
    twitter: "https://twitter.com/dentaklinik",
  },
};

export const heroContent = {
  eyebrow: "İstanbul'un Lider Kliniği",
  headline: ["Kusursuz", "Gülüşler", "Tasarlıyoruz"],
  subtext:
    "25 yılı aşkın deneyim, ileri teknoloji ve kişiselleştirilmiş tedavi yaklaşımıyla estetik diş hekimliğinde yeni bir standart belirliyoruz.",
  cta: "Randevu Al",
  ctaSecondary: "Hizmetlerimizi Keşfet",
  scrollLabel: "Keşfet",
};

export const introContent = {
  eyebrow: "Biz Kimiz",
  lines: [
    "Güzel gülüşler",
    "tesadüfen oluşmaz —",
    "onlar özenle",
    "tasarlanır.",
  ],
  body: "Denta olarak her hastamızı biricik görüyor, tedavi planını onun hayaline özel şekillendiriyoruz. Estetik diş hekimliğini bir bilim ve sanat olarak benimsiyoruz.",
  stats: [
    { value: 25, suffix: "+", label: "Yıllık Deneyim" },
    { value: 12000, suffix: "+", label: "Mutlu Hasta" },
    { value: 8, suffix: "", label: "Uzman Hekim" },
    { value: 98, suffix: "%", label: "Hasta Memnuniyeti" },
  ],
};

export const services = [
  {
    id: "implant",
    number: "01",
    category: "Cerrahi",
    title: "Dental İmplant",
    description:
      "Eksik dişlerinizi doğal görünümlü, ömür boyu süren implantlarla tamamlıyoruz. Dijital planlama ile milimetrik hassasiyet sağlıyoruz.",
    image: "/images/projects/implant.png",
    tag: "Kalıcı Çözüm",
  },
  {
    id: "estetik",
    number: "02",
    category: "Estetik",
    title: "Porselen Laminat Veneer",
    description:
      "İnce porselen yapraklarla dişlerinizin şeklini, rengini ve boyutunu mükemmelleştiriyoruz. Minimum madde kaybıyla maksimum estetik.",
    image: "/images/projects/veneer.png",
    tag: "Hollywood Gülüşü",
  },
  {
    id: "ortodonti",
    number: "03",
    category: "Ortodonti",
    title: "Şeffaf Plak Tedavisi",
    description:
      "Invisalign ve ClearCorrect sistemleriyle görünmez, konforlu ve hızlı ortodontik tedavi. Sosyal hayatınızı kısıtlamadan düzgün dişlere kavuşun.",
    image: "/images/projects/invisalign.png",
    tag: "Görünmez Tedavi",
  },
  {
    id: "beyazlatma",
    number: "04",
    category: "Kozmetik",
    title: "Profesyonel Diş Beyazlatma",
    description:
      "Klinik ortamında uygulanan Zoom ve Opalescence sistemleriyle dişlerinizi 8 tona kadar beyazlatıyoruz. Tek seansta fark yaratın.",
    image: "/images/projects/whitening.png",
    tag: "Anında Sonuç",
  },
];

export const galleryItems = [
  {
    id: 1,
    title: "Tam Ağız Rehabilitasyonu",
    category: "Restoratif",
    description: "20 adet porselen kron ile gerçekleştirilen kapsamlı estetik rehabilitasyon.",
    image: "/images/projects/gallery-1.png",
  },
  {
    id: 2,
    title: "Dijital Gülüş Tasarımı",
    category: "Estetik",
    description: "DSD protokolüyle tasarlanmış kişiselleştirilmiş gülüş planlaması.",
    image: "/images/projects/gallery-2.png",
  },
  {
    id: 3,
    title: "İmplant Destekli Köprü",
    category: "Cerrahi",
    description: "Çoklu diş eksikliğinde implant üstü sabit köprü uygulaması.",
    image: "/images/projects/gallery-3.png",
  },
  {
    id: 4,
    title: "Kompozit Bonding",
    category: "Kozmetik",
    description: "Tek seanslık kompozit bonding ile diş form ve renk düzeltmesi.",
    image: "/images/projects/gallery-4.png",
  },
  {
    id: 5,
    title: "Gece Plağı Tedavisi",
    category: "Fonksiyonel",
    description: "Bruksizm kaynaklı diş aşınmalarının önlenmesi ve estetik restorasyon.",
    image: "/images/projects/gallery-5.png",
  },
];

export const storySteps = [
  {
    step: "01",
    title: "Dijital Analiz",
    description:
      "3D tomografi ve dijital ölçü sistemleriyle ağız yapınızı eksiksiz değerlendiriyoruz.",
    image: "/images/projects/story-1.png",
    color: "#0a0a0a",
    stat: { value: 100, suffix: "%", label: "Dijital Planlama" },
  },
  {
    step: "02",
    title: "Gülüş Tasarımı",
    description:
      "DSD (Dijital Gülüş Tasarımı) ile tedavi öncesi sonucunuzu görsel olarak sunuyoruz.",
    image: "/images/projects/story-2.png",
    color: "#0f0f0d",
    stat: { value: 200, suffix: "+", label: "Tasarım Simülasyonu" },
  },
  {
    step: "03",
    title: "Hassas Uygulama",
    description:
      "Deneyimli uzman ekibimiz, son teknoloji ekipmanlarla en hassas uygulamayı gerçekleştirir.",
    image: "/images/projects/story-3.png",
    color: "#0d0c0a",
    stat: { value: 15, suffix: "+", label: "Teknolojik Cihaz" },
  },
  {
    step: "04",
    title: "Yaşam Boyu Takip",
    description:
      "Tedavi sonrası düzenli kontrol ve bakım programıyla sağlığınızı sürekli koruyoruz.",
    image: "/images/projects/story-4.png",
    color: "#0a0a0a",
    stat: { value: 98, suffix: "%", label: "Hasta Memnuniyeti" },
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Ayşe Kaya",
    title: "Yazılım Girişimcisi",
    quote:
      "Yıllardır gülümsemekten çekiniyordum. Denta'nın veneer tedavisiyle hayatım değişti. Artık her fotoğrafta gülümseyebiliyorum.",
    rating: 5,
    treatment: "Porselen Veneer",
  },
  {
    id: 2,
    name: "Mehmet Yılmaz",
    title: "İş İnsanı",
    quote:
      "İmplant sürecinden çok korkuyordum. Ama Denta'nın ekibi her adımda yanımdaydı. Sonuç harika, hiç acısız geçti.",
    rating: 5,
    treatment: "Dental İmplant",
  },
  {
    id: 3,
    name: "Zeynep Arslan",
    title: "Moda Fotoğrafçısı",
    quote:
      "Profesyonel görünüm her şeydir. Zoom beyazlatma ile dişlerim hem sağlıklı hem de parlak. Tek seansta inanılmaz fark.",
    rating: 5,
    treatment: "Zoom Beyazlatma",
  },
  {
    id: 4,
    name: "Can Demir",
    title: "Televizyon Sunucusu",
    quote:
      "Ekranın karşısındayım, gülüşüm işimin bir parçası. Denta'nın dijital gülüş tasarımıyla tam istediğim görünüme kavuştum.",
    rating: 5,
    treatment: "Dijital Gülüş Tasarımı",
  },
];

export const trustStats = [
  { value: 25, suffix: "+", label: "Yıllık Deneyim" },
  { value: 12000, suffix: "+", label: "Mutlu Hasta" },
  { value: 8, suffix: "", label: "Uzman Hekim" },
  { value: 98, suffix: "%", label: "Memnuniyet" },
];

export const navLinks = [
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Projeler", href: "#projeler" },
  { label: "Ekibimiz", href: "#hikayemiz" },
  { label: "Referanslar", href: "#referanslar" },
  { label: "İletişim", href: "#iletisim" },
];

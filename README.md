# DENTA — Premium Diş Kliniği Web Sitesi

Sinematik, scroll-controlled, tam etkileşimli diş kliniği web sitesi.

## Hızlı Başlangıç

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Production Build

```bash
npm run build
npm start
```

---

## 📁 Proje Yapısı

```
deneme/
├── app/
│   ├── layout.tsx          ← Font, metadata, HTML iskelet
│   ├── page.tsx            ← Ana sayfa — tüm section'lar burada birleşir
│   └── globals.css         ← Design tokens (renk, font, spacing)
│
├── components/
│   ├── animations/
│   │   └── SmoothScrollProvider.tsx  ← Lenis + GSAP entegrasyonu
│   ├── layout/
│   │   ├── Navigation.tsx            ← Sticky nav, mobile menü
│   │   ├── Footer.tsx                ← Alt bilgi
│   │   └── LoadingScreen.tsx         ← Yükleme ekranı (0→100)
│   ├── sections/
│   │   ├── HeroSection.tsx           ← Full-screen scroll hero
│   │   ├── IntroductionSection.tsx   ← Satır satır metin reveal
│   │   ├── ServicesSection.tsx       ← Hizmet listesi
│   │   ├── HorizontalGallery.tsx     ← Yatay kaydırma galerisi
│   │   ├── ImageComparison.tsx       ← Önce/Sonra sürükleyici
│   │   ├── StorytellingSection.tsx   ← 4 adımlı pinned hikaye
│   │   ├── TypographySection.tsx     ← Dev marquee tipografi
│   │   ├── TestimonialsSection.tsx   ← Hasta yorumları
│   │   └── CTASection.tsx            ← İletişim formu + CTA
│   └── ui/
│       ├── CustomCursor.tsx          ← Özel imleç (masaüstü)
│       ├── MagneticButton.tsx        ← Manyetik buton efekti
│       ├── AnimatedCounter.tsx       ← Sayı sayma animasyonu
│       ├── ScrollProgress.tsx        ← Üst çubuk ilerleme göstergesi
│       └── TextReveal.tsx            ← Metin reveal bileşeni
│
├── data/
│   └── content.ts          ← ⭐ TÜM TÜRKÇE İÇERİK BURADAN YÖNETİLİR
│
├── hooks/
│   ├── useReducedMotion.ts
│   ├── useMediaQuery.ts
│   └── useScrollProgress.ts
│
├── lib/
│   └── utils.ts
│
└── public/
    ├── videos/
    │   ├── hero.mp4              ← ⭐ Hero videonuzu buraya koyun
    │   └── hero-mobile.mp4       ← Mobil için optimize video
    ├── images/
    │   ├── hero-poster.webp      ← Video yüklenene kadar gösterilen görsel
    │   ├── og-image.jpg          ← Sosyal medya paylaşım görseli
    │   └── projects/             ← Proje/hizmet görselleri
    └── sitemap.xml
```

---

## 🎨 Renk Sistemi Değiştirme

`app/globals.css` dosyasındaki `:root` bloğunu düzenleyin:

```css
:root {
  --color-bg: #0a0a0a;          /* Ana arka plan */
  --color-surface: #111111;     /* Kart/section arka planı */
  --color-text: #f0ebe3;        /* Ana metin rengi */
  --color-muted: #8a8278;       /* İkincil metin */
  --color-accent: #c9a96e;      /* ⭐ Vurgu rengi (altın) */
  --color-accent-light: #dfc08e;
  --color-border: rgba(201, 169, 110, 0.15);
}
```

---

## 📝 İçerik Değiştirme

`data/content.ts` dosyasını açın — tüm metinler, hizmetler, projeler, iletişim bilgileri tek yerde:

```ts
export const siteConfig = {
  name: "DENTA",                    // Site adı
  contact: { phone: "..." },        // Telefon
  ...
};

export const services = [           // Hizmetler listesi
  { title: "...", description: "..." },
];
```

---

## 🖼️ Görsel ve Video Ekleme

| Dosya yolu | Açıklama |
|---|---|
| `public/videos/hero.mp4` | Hero bölümü scroll video'su |
| `public/videos/hero-mobile.mp4` | Mobil için optimize video |
| `public/images/hero-poster.webp` | Video yüklenene kadar görünen poster |
| `public/images/projects/implant.jpg` | İmplant hizmet görseli |
| `public/images/projects/veneer.jpg` | Veneer hizmet görseli |
| `public/images/projects/gallery-1.jpg` → `gallery-5.jpg` | Galeri görselleri |
| `public/images/projects/before.jpg` | Önce karşılaştırma |
| `public/images/projects/after.jpg` | Sonra karşılaştırma |
| `public/images/og-image.jpg` | 1200×630 sosyal medya görseli |

**Önerilen görsel formatları:** WebP veya AVIF (kalite: 80-90)

---

## 🎬 Scroll Video Sistemi

Hero bölümünde `video.currentTime` GSAP ScrollTrigger ile senkronize edilir:

- Scroll %0 → video başlangıcı
- Scroll %100 → video sonu
- Geri kaydırma → video geri sarılır
- `poster` özelliği video yüklenene kadar görüntülenir
- Video yoksa gradient arka plan gösterilir

**Daha smooth için:** `public/videos/hero.mp4` yerine kısa (5-15 saniyelik), optimize edilmiş H.264 video kullanın.

---

## 🌐 Vercel'e Deploy

1. [vercel.com](https://vercel.com) → "New Project" → GitHub repo bağla
2. Framework: **Next.js** (otomatik algılar)
3. Root Directory: `./` (otomatik)
4. Deploy!

Veya CLI ile:
```bash
npm i -g vercel
vercel
```

---

## ⚙️ Performans İpuçları

- Hero videosunu **5-15 saniye** ile sınırlayın
- Görselleri WebP formatına dönüştürün (`cwebp` aracı)
- `public/images/` içindeki SVG placeholder'ları gerçek görsellerle değiştirin
- Vercel'de **Edge Network** ile CDN otomatik aktif olur

---

## 🛠️ Teknoloji Stack

| Katman | Teknoloji |
|---|---|
| Framework | Next.js 16 (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS + CSS Variables |
| Animasyon | GSAP ScrollTrigger + Framer Motion |
| Smooth Scroll | Lenis |
| İkonlar | Lucide React |
| Font | Inter + Cormorant Garamond |

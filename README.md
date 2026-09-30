# Dt. Hakan Saylam — Dental Clinic Website

Single-page website for the dental clinic of **Dentist Hakan Saylam** (*Diş Hekimi Hakan Saylam*) at YDA Center, Çankaya, Ankara — built with plain HTML, CSS and JavaScript plus a small PHP mail relay.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![PHP](https://img.shields.io/badge/PHP-777BB4?logo=php&logoColor=white)

> Client project — designed and developed by Berke Coşkuner for Diş Hekimi Hakan Saylam.

![YDA Center, Ankara — hero background](images/yda_center.jpg)

## Overview

A lightweight, framework-free clinic site in Turkish. Patients can learn about the clinic and its treatments, browse photos of the clinic, see which insurance providers are accepted, and send an appointment request. The request opens WhatsApp with a pre-filled message and is also emailed to the clinic in the background.

## Features

- **Sticky navbar** with scroll effect, mobile hamburger menu, smooth scrolling and active-section highlighting
- **Hero** with the YDA Center backdrop and "book an appointment" / "services" buttons
- **Animated statistics bar** (counters start when scrolled into view)
- **About** section and **six treatment cards** — examination & diagnosis, aesthetic dentistry, root canal treatment, professional dental hygiene, implant treatment, orthodontics
- **Clinic gallery** of 12 photos with a click-to-zoom lightbox
- **Contracted institutions** — tabbed panels for Smart Assist, Benefit and Sencard
- **Contact** — address, phone numbers, working hours and Instagram link
- **Appointment form** — validates name and phone, opens WhatsApp with the details pre-filled, and POSTs the same data to `send_mail.php`, which sends an HTML email to the clinic's mailbox
- Scroll-reveal animations via `IntersectionObserver`

## Tech stack

| Area | Technology |
| --- | --- |
| Markup / styling | HTML5, CSS3 (custom properties, no framework) |
| Behaviour | Vanilla JavaScript |
| Form email | PHP `mail()` (`send_mail.php`) |
| Fonts | Google Fonts — Cormorant Garamond, Outfit |

## Project structure

```text
.
├── index.html       # All sections: hero, stats, about, services, clinic, insurance, contact
├── style.css        # Layout, theme and animations
├── script.js        # Navbar, counters, reveal, insurance tabs, form, lightbox
├── send_mail.php    # Emails appointment requests to the clinic
└── images/          # Hero, clinic and gallery photos
```

## Getting started

No build step or dependencies.

```bash
# Static preview: open index.html in a browser (the email relay will not run)

# Full preview including send_mail.php (requires PHP; mail() must be configured to actually send)
php -S localhost:8000   # then visit http://localhost:8000
```

### Configuration

- **Sender / recipient email** — `$gonderen_mail` and `$alici_mail` at the top of `send_mail.php`
- **WhatsApp number** for the appointment form — the `wa.me` URL in `script.js`
- **Phone, address, hours, Instagram** — the contact section of `index.html`

Hosting must support PHP for the email relay; the rest of the site works on any static host.

---

## Türkçe

YDA Center, Çankaya / Ankara'da hizmet veren **Diş Hekimi Hakan Saylam** kliniği için tek sayfalık web sitesi. Saf HTML, CSS ve JavaScript ile yazıldı; randevu e-postaları için küçük bir PHP betiği içerir.

> Müşteri projesi — Diş Hekimi Hakan Saylam için Berke Coşkuner tarafından tasarlanıp geliştirilmiştir.

### Özellikler

- Kaydırmaya duyarlı sabit menü, mobil hamburger menü, yumuşak kaydırma ve aktif bölüm vurgusu
- YDA Center arka planlı hero bölümü ve görünür olunca çalışan animasyonlu sayaçlar
- Hakkımızda ve altı tedavi kartı: muayene ve teşhis, estetik diş hekimliği, kanal tedavisi, profesyonel diş hijyeni, implant, ortodonti
- 12 fotoğraflık klinik galerisi (tıklayınca büyüyen lightbox)
- Anlaşmalı kurumlar: Smart Assist, Benefit ve Sencard sekmeleri
- İletişim: adres, telefonlar, çalışma saatleri, Instagram
- Randevu formu: ad ve telefonu doğrular, bilgileri hazır bir WhatsApp mesajıyla açar ve aynı verileri `send_mail.php` ile kliniğe e-posta olarak gönderir

### Teknolojiler

HTML5, CSS3, Vanilla JavaScript, PHP `mail()`, Google Fonts (Cormorant Garamond, Outfit).

### Çalıştırma

Kurulum veya derleme gerekmez. `index.html` dosyasını tarayıcıda açın; e-posta gönderimini de test etmek için PHP ile `php -S localhost:8000` komutunu kullanın (sunucuda `mail()` yapılandırılmış olmalıdır).

### Yapılandırma

- Gönderen / alıcı e-posta: `send_mail.php` içindeki `$gonderen_mail` ve `$alici_mail`
- Randevu formunun WhatsApp numarası: `script.js` içindeki `wa.me` adresi
- Telefon, adres, saatler, Instagram: `index.html` içindeki iletişim bölümü

---

Built by [Berke Coşkuner](https://github.com/CoskunerBerke)

/* ---- NAVBAR SCROLL ---- */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ---- HAMBURGER ---- */
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('mobile-open');
});

/* close mobile menu on link click */
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('mobile-open');
  });
});

/* ---- SMOOTH SCROLL FOR ALL ANCHOR LINKS ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = navbar.offsetHeight + 16;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ---- COUNTER ANIMATION ---- */
function animateCounter(el) {
  const target = +el.dataset.target;
  const duration = 1800;
  const step = target / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current).toLocaleString('tr-TR');
  }, 16);
}

const counters = document.querySelectorAll('.stat-number');
let countersStarted = false;

/* ---- INTERSECTION OBSERVER (REVEAL + COUNTERS) ---- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .about-grid, .gallery-item, .ins-col, .contact-card, .tzh-callout').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersStarted) {
      countersStarted = true;
      counters.forEach(animateCounter);
    }
  });
}, { threshold: 0.5 });

const statsBar = document.querySelector('.stats-bar');
if (statsBar) statsObserver.observe(statsBar);

/* ---- INSURANCE TABS ---- */
const tabs = document.querySelectorAll('.ins-tab');
const panels = document.querySelectorAll('.ins-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    const panelId = 'panel' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1);
    const panel = document.getElementById(panelId);
    if (panel) panel.classList.add('active');
  });
});

/* ---- CONTACT FORM ---- */
const form = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
const submitBtn = document.getElementById('submitBtn');

if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    if (!name || !phone) {
      formNote.textContent = 'Lütfen ad soyad ve telefon numaranızı girin.';
      formNote.className = 'form-note error';
      return;
    }

    submitBtn.textContent = 'Gönderiliyor...';
    submitBtn.disabled = true;

    // Prepare form data
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    // Send using Fetch API to PHP backend
    fetch('send_mail.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      if (data.status === 'success') {
        formNote.textContent = '✓ Randevu talebiniz başarıyla iletildi. En kısa sürede size dönüş yapılacaktır.';
        formNote.className = 'form-note success';
        form.reset();
      } else {
        formNote.textContent = 'Hata: ' + data.message;
        formNote.className = 'form-note error';
      }
      submitBtn.textContent = 'Randevu Talebi Gönder';
      submitBtn.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error);
      formNote.textContent = 'E-posta gönderilirken bir hata oluştu. Lütfen doğrudan arayarak randevu alınız.';
      formNote.className = 'form-note error';
      submitBtn.textContent = 'Randevu Talebi Gönder';
      submitBtn.disabled = false;
    });
  });
}

/* ---- ACTIVE NAV LINK ON SCROLL ---- */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - navbar.offsetHeight - 60;
    if (window.scrollY >= top) current = sec.getAttribute('id');
  });
  navLinkEls.forEach(link => {
    link.classList.remove('active-link');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active-link');
    }
  });
}, { passive: true });

/* ---- GALLERY LIGHTBOX (simple) ---- */
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position:fixed;inset:0;background:rgba(0,0,0,0.95);
      z-index:9999;display:flex;align-items:center;justify-content:center;
      cursor:zoom-out;animation:fadeIn 0.25s ease;
    `;
    const imgEl = document.createElement('img');
    imgEl.src = img.src;
    imgEl.style.cssText = 'max-width:90vw;max-height:90vh;object-fit:contain;border-radius:8px;';
    overlay.appendChild(imgEl);
    overlay.addEventListener('click', () => overlay.remove());
    document.body.appendChild(overlay);
  });
});

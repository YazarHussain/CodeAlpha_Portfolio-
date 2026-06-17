/* ===========================
   NAVBAR SCROLL
=========================== */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ===========================
   HAMBURGER MENU
=========================== */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

/* ===========================
   ACTIVE NAV LINK ON SCROLL
=========================== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-link').forEach(l => l.style.color = '');
        link.style.color = 'var(--accent)';
      }
    }
  });
});

/* ===========================
   TYPING ANIMATION
=========================== */
const roles = [
  'Frontend Developer',
  'Passionate Technologist',
  'Web Developer',
  'Computer Networking Enthusiast',
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.getElementById('typedText');

function typeRole() {
  if (!typedEl) return;
  const current = roles[roleIndex];

  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => { isDeleting = true; typeRole(); }, 1800);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
  }

  const speed = isDeleting ? 55 : 95;
  setTimeout(typeRole, speed);
}

typeRole();

/* ===========================
   SCROLL REVEAL
=========================== */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => el.classList.add('revealed'), parseInt(delay));
      revealObserver.unobserve(el);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* ===========================
   SKILL BAR ANIMATION
=========================== */
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-item').forEach((item, i) => {
        const level = item.dataset.level;
        setTimeout(() => {
          item.querySelector('.skill-fill').style.width = level + '%';
        }, i * 120);
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

const skillBars = document.querySelector('.skill-bars');
if (skillBars) skillObserver.observe(skillBars);

/* ===========================
   CONTACT FORM
=========================== */
function handleForm(e) {
  e.preventDefault();
  const note = document.getElementById('formNote');
  const btn = e.target.querySelector('button[type="submit"]');

  btn.textContent = 'Sending...';
  btn.disabled = true;

  // Simulated send (replace with EmailJS or Formspree for real email)
  setTimeout(() => {
    note.textContent = '✓ Message sent! I\'ll get back to you soon.';
    note.style.color = 'var(--green)';
    btn.textContent = 'Send Message →';
    btn.disabled = false;
    e.target.reset();

    setTimeout(() => { note.textContent = ''; }, 5000);
  }, 1400);
}

/* ===========================
   SMOOTH SCROLL OFFSET (for fixed navbar)
=========================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ===========================
   TAG HOVER RIPPLE EFFECT
=========================== */
document.querySelectorAll('.tag').forEach(tag => {
  tag.addEventListener('mouseenter', function (e) {
    this.style.transition = 'all 0.2s ease';
  });
});

/* ===========================
   PROJECT CARD TILT (subtle)
=========================== */
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotX = ((y - midY) / midY) * -3;
    const rotY = ((x - midX) / midX) * 3;
    card.style.transform = `perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', function () {
    card.style.transform = '';
  });
});

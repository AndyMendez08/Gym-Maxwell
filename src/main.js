import './index.css';

// Inicializar iconos de Lucide
lucide.createIcons();

// Efecto de scroll en Navbar
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('bg-neutral-950/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-neutral-950/20', 'py-4');
    navbar.classList.remove('bg-transparent', 'py-6');
  } else {
    navbar.classList.add('bg-transparent', 'py-6');
    navbar.classList.remove('bg-neutral-950/95', 'backdrop-blur-md', 'shadow-lg', 'shadow-neutral-950/20', 'py-4');
  }
});

// Toggle de menú móvil
const menuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const iconOpen = document.getElementById('menu-icon-open');
const iconClose = document.getElementById('menu-icon-close');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
  iconOpen.classList.toggle('hidden');
  iconClose.classList.toggle('hidden');
});

// Cerrar menú móvil al hacer clic en un enlace
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    iconOpen.classList.remove('hidden');
    iconClose.classList.add('hidden');
  });
});

// Animaciones al hacer scroll usando Intersection Observer
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Remover las clases que ocultan el elemento para activar la transición
      entry.target.classList.remove('opacity-0', 'translate-y-10', '-translate-x-10', 'translate-x-10', 'scale-95');
      // Añadir las clases para el estado final visible
      entry.target.classList.add('opacity-100', 'translate-y-0', 'translate-x-0', 'scale-100');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach(element => {
  observer.observe(element);
});

// script.js
// Smooth scroll
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const section = document.querySelector(link.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
  });
});

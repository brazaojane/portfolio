// Menu mobile
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.nav__links a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Filtro de projetos
const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.card');

filtros.forEach(botao => {
  botao.addEventListener('click', () => {
    filtros.forEach(b => b.classList.remove('is-active'));
    botao.classList.add('is-active');

    const filtro = botao.dataset.filter;
    cards.forEach(card => {
      const mostrar = filtro === 'all' || card.dataset.cat === filtro;
      card.classList.toggle('is-hidden', !mostrar);
    });
  });
});

// Formulário de contato (front-end apenas — conecte a um backend ou serviço de e-mail)
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  status.textContent = 'Mensagem pronta para envio — conecte este formulário a um backend ou serviço como Formspree/EmailJS.';
  form.reset();
});
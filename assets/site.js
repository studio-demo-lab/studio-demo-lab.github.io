// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
}

// Formulaire de contact : site de démonstration, aucune donnée n'est transmise.
const form = document.querySelector('#contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!form.reportValidity()) return;
    const msg = form.querySelector('.form-msg');
    msg.classList.add('show');
    form.reset();
  });
}

// Année du pied de page
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });

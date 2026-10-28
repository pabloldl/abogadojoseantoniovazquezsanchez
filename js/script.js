'use strict';
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navegacion');
const mobile = window.matchMedia('(max-width: 700px)');
function setMenu(open) {
  toggle.setAttribute('aria-expanded', String(open));
  nav.dataset.collapsed = String(mobile.matches && !open);
}
function adaptMenu() {
  toggle.hidden = !mobile.matches;
  setMenu(false);
}
toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link) return;
  setMenu(false);
  const section = document.querySelector(link.hash);
  if (section) {
    section.setAttribute('tabindex', '-1');
    section.focus({ preventScroll: true });
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    setMenu(false);
    toggle.focus();
  }
});
mobile.addEventListener('change', adaptMenu);
adaptMenu();
document.querySelector('#year').textContent = new Date().getFullYear();

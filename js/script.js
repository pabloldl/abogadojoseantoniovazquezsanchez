'use strict';
document.documentElement.classList.add('js');
const index = document.querySelector('#indice');
const links = [...index.querySelectorAll('a')];
const sections = links.map(link => document.querySelector(link.hash));
let scheduled = false;
function updateIndex() {
  const readingLine = index.getBoundingClientRect().height + 45;
  let active = sections[0];
  sections.forEach(section => { if (section.getBoundingClientRect().top <= readingLine) active = section; });
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 6) active = sections.at(-1);
  links.forEach(link => {
    if (link.hash === '#' + active.id) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  scheduled = false;
}
links.forEach(link => link.addEventListener('click', () => {
  const destination = document.querySelector(link.hash);
  destination.setAttribute('tabindex', '-1');
  destination.focus({ preventScroll: true });
}));
addEventListener('scroll', () => { if (!scheduled) { scheduled = true; requestAnimationFrame(updateIndex); } }, { passive: true });
addEventListener('resize', updateIndex);
addEventListener('hashchange', updateIndex);
updateIndex();
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); } });
  }, { threshold: .15 });
  document.querySelectorAll('.band-heading, .principle').forEach(element => { element.classList.add('is-pending'); observer.observe(element); });
  document.documentElement.classList.add('motion-ready');
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { document.querySelectorAll('.is-pending').forEach(element => element.classList.remove('is-pending')); observer.disconnect(); }
  });
}
const copyButton = document.querySelector('#copy-phone');
const status = document.querySelector('#copy-status');
const manual = document.querySelector('#manual-phone');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  let copied = false;
  try { await navigator.clipboard.writeText('647280789'); copied = true; } catch {
    const focused = document.activeElement;
    manual.hidden = false; manual.focus(); manual.select();
    try { copied = document.execCommand('copy'); } catch { /* La selección manual permanece disponible. */ }
    if (copied) { manual.hidden = true; focused.focus(); }
  }
  copyButton.dataset.copied = String(copied);
  status.textContent = copied ? 'Teléfono copiado: 647280789.' : 'Selecciona el número y cópialo con el menú de tu dispositivo o con Ctrl/Cmd + C.';
});
document.querySelector('#year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
menu.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  menu.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
  menu.textContent = open ? 'Cerrar −' : 'Menú +';
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.setAttribute('aria-expanded', 'false'); nav.classList.remove('open'); menu.textContent = 'Menú +';
}));
document.querySelectorAll('[data-interest]').forEach(link => link.addEventListener('click', () => {document.querySelector('#service').value = link.dataset.interest;}));
const concepts = {
  cafe: {title:'Casa Botánica',copy:'Una propuesta visual de sitio para una cafetería guatemalteca: presentar su identidad, facilitar la consulta del menú y orientar las visitas.',items:['Página de inicio adaptable a celulares.','Menú con categorías y productos de ejemplo.','Sección de ubicación y canal de contacto por definir.']},
  panel: {title:'Un negocio más organizado',copy:'Una propuesta de panel para reunir solicitudes, organizar prioridades y dar seguimiento. Los datos de la pantalla son ilustrativos.',items:['Lista de solicitudes con estados y responsables.','Vista general de pendientes y solicitudes resueltas.','Organización de solicitudes y revisión por el responsable.']}
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => button.addEventListener('click', () => {
  const project = concepts[button.dataset.project];
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-copy').textContent = project.copy;
  document.querySelector('#dialog-list').replaceChildren(...project.items.map(text => {const li = document.createElement('li');li.textContent=text;return li;}));
  dialog.showModal();
}));
document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
document.querySelector('#dialog-contact').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#brief').addEventListener('submit', event => {
  event.preventDefault();
  const business=document.querySelector('#business').value.trim();
  const need=document.querySelector('#need').value.trim();
  if(!business||!need)return;
  document.querySelector('#summary').value=`RESUMEN DEL PROYECTO\n\nNegocio: ${business}\nServicio: ${document.querySelector('#service').value}\n\nNecesidad:\n${need}\n\nPróximo paso: acordar un diagnóstico y definir el alcance.\nEste resumen se generó localmente; no fue enviado.`;
  document.querySelector('#brief-result').hidden=false;
  document.querySelector('#summary').focus();
});
document.querySelector('#download').addEventListener('click', () => {
  const url=URL.createObjectURL(new Blob([document.querySelector('#summary').value],{type:'text/plain;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download='resumen-proyecto.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
});

// Keep the full page readable without JavaScript or when motion is reduced.
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll('.section-head, .services article, .ia-grid > div, .projects article, .steps article, .faq details, .contact-grid > div');
let flowTimer;
let flowIndex = 0;
const flowSteps = [...document.querySelectorAll('.flow li')];
function stopFlow() { clearInterval(flowTimer); flowTimer = undefined; }
function startFlow() {
  stopFlow();
  if (motionPreference.matches || document.hidden) return;
  flowTimer = setInterval(() => {
    flowSteps.forEach((step, index) => step.classList.toggle('active', index === flowIndex));
    flowIndex = (flowIndex + 1) % flowSteps.length;
  }, 2400);
}
function configureMotion() {
  document.documentElement.classList.toggle('motion-enabled', !motionPreference.matches);
  if (motionPreference.matches) revealTargets.forEach(element => element.classList.add('visible'));
  startFlow();
}
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    });
  }, {threshold: 0.08});
  revealTargets.forEach(element => {element.classList.add('reveal'); observer.observe(element);});
  configureMotion();
}
motionPreference.addEventListener('change', configureMotion);
document.addEventListener('visibilitychange', () => document.hidden ? stopFlow() : startFlow());
const progress = document.querySelector('.scroll-progress');
let scrollFrame;
function updateScroll() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.transform = `scaleX(${total > 0 ? Math.min(1,Math.max(0,window.scrollY/total)) : 0})`;
  document.querySelector('header').classList.toggle('scrolled', window.scrollY > 20);
  scrollFrame = undefined;
}
window.addEventListener('scroll', () => {if(!scrollFrame)scrollFrame=requestAnimationFrame(updateScroll);}, {passive:true});
window.addEventListener('resize', updateScroll);
updateScroll();
document.querySelectorAll('.services article, .hero-art').forEach(surface => {
  surface.addEventListener('pointermove', event => {
    if(motionPreference.matches || event.pointerType !== 'mouse') return;
    const bounds = surface.getBoundingClientRect();
    surface.style.setProperty('--pointer-x', `${event.clientX-bounds.left}px`);
    surface.style.setProperty('--pointer-y', `${event.clientY-bounds.top}px`);
  }, {passive:true});
});


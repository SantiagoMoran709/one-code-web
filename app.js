const contactConfig = {
  whatsappNumber: '50253061697',
};

const whatsappMessages = {
  general: 'Hola, Santiago. Vi ONE CODE y quisiera información para crear una página para mi negocio',
  pagina: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar una página informativa para mi negocio.',
  menu: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar un menú o catálogo digital para mi negocio.',
  rediseno: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar un rediseño web para mi negocio.',
};

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = 'https://wa.me/' + contactConfig.whatsappNumber + '?text='
    + encodeURIComponent(whatsappMessages[link.dataset.whatsapp]);
  link.hidden = false;
});

const motionPreference = matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !motionPreference.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.service, .demo-card, .contact-grid').forEach(element => {
    element.classList.add('reveal');
    observer.observe(element);
  });
  motionPreference.addEventListener('change', () => {
    if (motionPreference.matches) {
      document.querySelectorAll('.reveal').forEach(element => element.classList.add('visible'));
      observer.disconnect();
    }
  });
}

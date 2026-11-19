const contactConfig = {
  whatsappNumber: '50253061697',
};

const quoteRequests = {
  general: 'desarrollar una página web',
  pagina: 'desarrollar una página informativa',
  menu: 'desarrollar un menú o catálogo digital',
  rediseno: 'rediseñar el sitio web',
};

document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const request = quoteRequests[link.dataset.whatsapp];
  const message = `Hola, Santiago. Conocí ONE CODE y me gustaría solicitar una cotización para ${request} para mi negocio. ¿Podrías indicarme qué información necesitas para preparar una propuesta?`;
  link.href = 'https://wa.me/' + contactConfig.whatsappNumber + '?text=' + encodeURIComponent(message);
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

// Agregá los ocho dígitos del WhatsApp de ONE CODE cuando Santiago confirme el número.
const whatsappNumber = '';

const whatsappMessages = {
  general: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar una página web para mi negocio.',
  pagina: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar una página informativa para mi negocio.',
  menu: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar un menú digital para mi negocio',
  rediseno: 'Hola, Santiago. Vi ONE CODE y quisiera cotizar un rediseño del sitio web de mi negocio.',
};

const brief = document.querySelector('#brief');

if (/^\d{8}$/.test(whatsappNumber)) {
  document.querySelectorAll('[data-whatsapp]').forEach(link => {
    const message = whatsappMessages[link.dataset.whatsapp];
    link.href = 'https://wa.me/502' + whatsappNumber + '?text=' + encodeURIComponent(message);
    link.hidden = false;
  });

  document.querySelector('#demo-action').classList.add('button-outline');
  document.querySelector('[data-whatsapp-contact]').hidden = false;
  document.querySelector('[data-download-copy]').hidden = true;
  brief.hidden = true;
}

brief.querySelector('button').disabled = false;
brief.addEventListener('input', event => {
  if (event.target.matches('input, textarea')) {
    event.target.setCustomValidity('');
  }
});

brief.addEventListener('submit', event => {
  event.preventDefault();

  const business = brief.elements.business;
  const need = brief.elements.need;
  [business, need].forEach(field => {
    field.setCustomValidity(field.value.trim() ? '' : 'Escribí algo en este campo.');
  });

  if (!brief.reportValidity()) return;

  const summary = [
    'ONE CODE — Resumen del proyecto',
    '',
    'Nombre o negocio: ' + business.value.trim(),
    'Servicio: ' + brief.elements.service.value,
    '',
    'La idea:',
    need.value.trim(),
  ].join('\r\n');

  const url = URL.createObjectURL(new Blob([summary], { type: 'text/plain;charset=utf-8' }));
  const download = document.createElement('a');
  download.href = url;
  download.download = 'ONE-CODE-mi-proyecto.txt';
  download.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
});

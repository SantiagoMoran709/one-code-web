const menu = document.querySelector('.menu');
const nav = document.querySelector('#nav');
function closeMenu() { menu.setAttribute('aria-expanded','false'); nav.classList.remove('open'); menu.textContent='Menú +'; }
menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);menu.textContent=open?'Cerrar −':'Menú +';});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
document.querySelectorAll('[data-interest]').forEach(link=>link.addEventListener('click',()=>{document.querySelector('#service').value=link.dataset.interest;}));
const concepts={cafe:{title:'Una marca que se siente.',copy:'Casa Botánica es un concepto de sitio para una cafetería: una dirección cálida y editorial que invita a conocer el lugar antes de visitarlo.',items:['Identidad visual aplicada a una web adaptable.','Presentación del menú, la historia y el espacio.','Ubicación y canal de contacto por definir.']},panel:{title:'Tu operación, en orden.',copy:'Un concepto de panel para reunir la información de tu negocio y facilitar el seguimiento diario. Los datos de la pantalla son ilustrativos.',items:['Vista general de solicitudes y estados.','Organización y seguimiento de pendientes.','Reportes e integraciones según tus procesos.']}};
const dialog=document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button=>button.addEventListener('click',()=>{const project=concepts[button.dataset.project];document.querySelector('#dialog-title').textContent=project.title;document.querySelector('#dialog-copy').textContent=project.copy;document.querySelector('#dialog-list').replaceChildren(...project.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));dialog.showModal();}));
document.querySelector('#close-dialog').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-contact').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
document.querySelector('#brief').addEventListener('submit',event=>{event.preventDefault();const business=document.querySelector('#business').value.trim(),need=document.querySelector('#need').value.trim();if(!business||!need)return;document.querySelector('#summary').value=`ONE CODE — RESUMEN DEL PROYECTO\n\nNombre o negocio: ${business}\nServicio: ${document.querySelector('#service').value}\n\nLa idea:\n${need}\n\nSiguiente paso: conversar sobre objetivos, alcance y tiempos.\n\nEste resumen se preparó en tu dispositivo. No se ha enviado.`;document.querySelector('#brief-result').hidden=false;document.querySelector('#summary').focus();});
document.querySelector('#download').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([document.querySelector('#summary').value],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='ONE-CODE-mi-proyecto.txt';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);});
document.querySelector('#year').textContent=new Date().getFullYear();
const motionPreference=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver' in window&&!motionPreference.matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});},{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));document.documentElement.classList.add('motion-enabled');motionPreference.addEventListener('change',()=>{if(motionPreference.matches)document.documentElement.classList.remove('motion-enabled');});}

// Help visitors connect a concrete need with the appropriate service.
const scenarios = {
  presencia: {title:'Que te encuentren.\nQue te recuerden.',copy:'Una web clara para explicar lo que haces, mostrar tus servicios y facilitar el siguiente contacto.',items:['Una imagen coherente con tu marca','Contenido pensado para tus clientes','Navegación sencilla desde el celular'],service:'Página web',symbol:'↗'},
  orden: {title:'Tu información.\nEn un solo lugar.',copy:'Un sistema a medida para dar seguimiento a lo que pasa en tu negocio y trabajar con información organizada.',items:['Solicitudes y estados visibles','Accesos según las funciones del equipo','Paneles y reportes según tu operación'],service:'Sistema a medida',symbol:'▦'},
  tiempo: {title:'Menos pasos.\nMás tiempo para avanzar.',copy:'Un flujo que conecta tus herramientas y evita copiar la misma información de un lugar a otro.',items:['Detectar una tarea repetitiva','Probar un flujo antes de ampliarlo','Mantener revisión donde hace falta'],service:'Automatización de procesos',symbol:'⌁'}
};
document.querySelectorAll('[data-scenario]').forEach(button=>button.addEventListener('click',()=>{
  const selected=scenarios[button.dataset.scenario];
  document.querySelectorAll('[data-scenario]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  const title=document.querySelector('#scenario-title');title.replaceChildren(...selected.title.split('\n').flatMap((line,index)=>index?[document.createElement('br'),document.createTextNode(line)]:[document.createTextNode(line)]));
  document.querySelector('#scenario-copy').textContent=selected.copy;
  document.querySelector('.scenario-symbol').textContent=selected.symbol;
  document.querySelector('#scenario-list').replaceChildren(...selected.items.map(text=>{const li=document.createElement('li');li.textContent=text;return li;}));
  document.querySelector('#scenario-link').dataset.interest=selected.service;
}));

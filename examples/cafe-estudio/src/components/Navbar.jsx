import { useEffect, useState } from 'react';
import { Coffee, Menu, X, Heart, MessageCircle } from 'lucide-react';

const links=[['Inicio','inicio'],['Nosotros','nosotros'],['Menú','menu'],['Galería','galeria'],['Visítanos','visitanos']];
export default function Navbar({favoriteCount,onFavorites,onContact}) {
  const [open,setOpen]=useState(false);
  useEffect(()=>{function close(event){if(event.key==='Escape')setOpen(false);}document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[]);
  return <header className="navbar"><div className="container nav-inner">
    <a className="brand" href="#inicio" aria-label="Café Estudio, inicio"><Coffee aria-hidden="true"/><span>Café<br/>Estudio<span className="brand-dot">.</span></span></a>
    <button className="mobile-menu icon-button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="main-nav" aria-label={open?'Cerrar menú':'Abrir menú'}>{open?<X/>:<Menu/>}</button>
    <nav id="main-nav" className={open?'open':''} aria-label="Navegación principal">{links.map(([text,id])=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}>{text}</a>)}</nav>
    <div className="nav-actions"><button className="favorites-nav icon-button" onClick={()=>{setOpen(false);onFavorites();}} aria-label={`Ver favoritos, ${favoriteCount} guardados`}><Heart/>{favoriteCount>0&&<span>{favoriteCount}</span>}</button><button className="button cream nav-whatsapp" onClick={()=>{setOpen(false);onContact();}}><MessageCircle size={17}/>Pedir por WhatsApp</button></div>
  </div></header>;
}

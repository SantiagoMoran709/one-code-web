import { Coffee, ArrowUp } from 'lucide-react';
export default function Footer({onContact}){
  return <footer id="contacto"><div className="container"><div className="footer-main">
    <div><a className="brand" href="#inicio"><Coffee/><span>Café<br/>Estudio<span className="brand-dot">.</span></span></a><p>Una buena taza.<br/>Una buena idea.</p></div>
    <div className="footer-links"><h2>Explora</h2><a href="#nosotros">Nuestra esencia</a><a href="#menu">El menú</a><a href="#galeria">El ambiente</a></div>
    <div className="footer-links"><h2>Nos vemos aquí</h2><a href="#visitanos">Horarios y ubicación</a><button onClick={onContact}>Consulta tu próxima visita ↗</button><span>Ciudad de Guatemala</span></div>
    <a href="#inicio" className="back-top" aria-label="Volver al inicio"><ArrowUp size={20}/></a>
    </div><div className="footer-bottom"><span>© {new Date().getFullYear()} Café Estudio · Concepto de demostración</span><span>Diseñado por <strong>ONE CODE ↗</strong></span></div></div></footer>;
}

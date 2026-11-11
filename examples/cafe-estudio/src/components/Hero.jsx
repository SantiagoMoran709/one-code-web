import { useState } from 'react';
import { ArrowLeft, ArrowRight, Coffee, MapPin } from 'lucide-react';
import { slides } from '../data/cafe.jsx';

export default function Hero(){
  const [index,setIndex]=useState(0);const slide=slides[index];
  const change=direction=>setIndex(current=>(current+direction+slides.length)%slides.length);
  return <section className="hero container" id="inicio" aria-roledescription="carrusel" aria-label="Conoce Café Estudio"><div className="hero-photo" key={slide.image}><img src={`./images/${slide.image}.jpg`} alt={slide.alt} fetchPriority="high"/></div><div className="hero-shade"/><div className="hero-content" key={index}><p className="eyebrow">{slide.eyebrow}</p><h1>{slide.title}</h1><p className="hero-description">{slide.description}</p><div className="hero-buttons"><a className="button cream" href="#menu"><Coffee size={18}/>Ver menú</a><a className="button outline" href="#ubicacion"><MapPin size={18}/>Cómo llegar</a></div><p className="hero-note"><span/> Una buena taza. Una buena idea.</p></div><div className="hero-controls"><div className="carousel-arrows"><button aria-label="Ver imagen anterior" onClick={()=>change(-1)}><ArrowLeft size={18}/></button><button aria-label="Ver imagen siguiente" onClick={()=>change(1)}><ArrowRight size={18}/></button></div><div className="carousel-dots">{slides.map((item,i)=><button key={item.image} onClick={()=>setIndex(i)} aria-label={`Ir a imagen ${i+1}`} aria-current={i===index?'true':undefined} className={i===index?'active':''}/>)}</div><span className="slide-number">0{index+1} / 0{slides.length}</span></div></section>;
}

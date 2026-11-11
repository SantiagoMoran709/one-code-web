import CafeImage from "./CafeImage.jsx";
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section
      className="about-section container"
      id="nosotros"
      aria-labelledby="about-title"
    >
      <div className="about-photo">
        <img
          src="./images/interior.jpg"
          alt="Un rincón de cafetería con mesas y plantas"
          loading="lazy"
        />
        <span>UN BUEN LUGAR PARA UNA BUENA IDEA.</span>
      </div>
      <div className="about-copy">
        <p className="eyebrow">BIENVENIDO A CAFÉ ESTUDIO</p>
        <h2 id="about-title">
          Aquí, el tiempo
          <br />
          sabe <em>distinto.</em>
        </h2>
        <p>
          Hay días para avanzar en un proyecto. Otros, para abrir un libro o
          encontrarse con alguien. Imaginamos un espacio para todos ellos.
        </p>
        <p>
          Una buena taza, algo recién preparado y un ambiente que invita a
          quedarte. Así empieza la experiencia de Café Estudio.
        </p>
        <a className="text-link" href="#menu">
          Encuentra tu próximo favorito <ArrowUpRight size={20} />
        </a>
        <span className="about-signature">Café, calma y buenas ideas.</span>
      </div>
    </section>
  );
}

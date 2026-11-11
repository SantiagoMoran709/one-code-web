import CafeImage from "./components/CafeImage.jsx";
import ContactPanel from "./components/ContactPanel.jsx";
import useScrollReveal from "./hooks/useScrollReveal.js";
import { useEffect, useRef, useState } from "react";
import {
  X,
  Heart,
  ArrowRight,
  MapPin,
  MessageCircle,
  Images,
} from "lucide-react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import Menu from "./components/Menu.jsx";
import About from "./components/About.jsx";
import Hours from "./components/Hours.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import { products, cafe, money } from "./data/cafe.jsx";

function readFavorites() {
  try {
    const saved = JSON.parse(
      localStorage.getItem("cafe-estudio-favorites") || "[]",
    );
    return Array.isArray(saved)
      ? saved.filter((id) => products.some((p) => p.id === id))
      : [];
  } catch {
    return [];
  }
}
export default function App() {
  useScrollReveal();
  const [favorites, setFavorites] = useState(readFavorites);
  const [category, setCategory] = useState("Destacados");
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState("");
  const dialog = useRef(null);
  const toastTimer = useRef(null);
  useEffect(() => {
    try {
      localStorage.setItem("cafe-estudio-favorites", JSON.stringify(favorites));
    } catch {
      /* Browsing without storage still supports session favorites. */
    }
  }, [favorites]);
  useEffect(() => {
    if (modal && !dialog.current.open) dialog.current.showModal();
    else if (!modal && dialog.current.open) dialog.current.close();
  }, [modal]);
  useEffect(() => () => clearTimeout(toastTimer.current), []);
  function toggleFavorite(id) {
    const saved = favorites.includes(id);
    setFavorites((current) =>
      saved ? current.filter((item) => item !== id) : [...current, id],
    );
    setToast(saved ? "Quitado de tus favoritos" : "Guardado en tus favoritos");
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2600);
  }
  function showFavorites() {
    setCategory("Favoritos");
    document.querySelector("#menu").scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  }
  function openContact() {
    setModal({ type: "contact" });
  }
  return (
    <>
      <a className="skip" href="#contenido">
        Saltar al contenido
      </a>
      <Navbar
        favoriteCount={favorites.length}
        onFavorites={showFavorites}
        onContact={openContact}
      />
      <main id="contenido">
        <Hero />
        <Features />
        <About />
        <div className="menu-band">
          <Menu
            category={category}
            setCategory={setCategory}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            onProduct={(product) => setModal({ type: "product", product })}
          />
        </div>
        <section
          className="gallery-section container"
          id="galeria"
          aria-labelledby="gallery-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">EL CAFÉ ES SOLO EL COMIENZO</p>
              <h2 id="gallery-title">
                Tu lugar para
                <br />
                <em>estar a gusto.</em>
              </h2>
            </div>
            <p>
              Una mesa para concentrarte, una conversación sin prisa y el aroma
              de un café recién hecho.
            </p>
          </div>
          <div className="gallery-grid">
            {[
              ["interior", "Un rincón para tus ideas"],
              ["hero", "El ritual de un buen café"],
              ["croissant", "Algo rico para acompañar"],
            ].map(([image, title]) => (
              <button
                key={image}
                onClick={() => setModal({ type: "gallery", image, title })}
                aria-label={`Ampliar ${title}`}
              >
                <CafeImage
                  image={image}
                  alt={title}
                  sizes="(max-width: 700px) 100vw, (max-width: 850px) 50vw, 34vw"
                />
                <span>
                  {title}
                  <Images size={19} />
                </span>
              </button>
            ))}
          </div>
          <p className="gallery-note">
            Fotografías de referencia para este concepto de cafetería.
          </p>
        </section>
        <section
          className="visit-band"
          id="visitanos"
          aria-labelledby="visit-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">TE GUARDAMOS UN LUGAR</p>
                <h2 id="visit-title">
                  La próxima pausa.
                  <br />
                  <em>Que sea aquí.</em>
                </h2>
              </div>
              <div className="visit-intro">
                <p>
                  Consulta el horario y encuentra el camino. Nosotros ponemos el
                  café; tú traes las ideas.
                </p>
                <button className="button dark-button" onClick={openContact}>
                  <MessageCircle size={18} />
                  {cafe.whatsapp
                    ? "Consultar por WhatsApp"
                    : "Preparar mi visita"}
                </button>
              </div>
            </div>
            <div className="visit-grid">
              <Hours />
              <Location onLocation={() => setModal({ type: "location" })} />
            </div>
          </div>
        </section>
      </main>
      <Footer onContact={openContact} />
      <div className={`toast ${toast ? "show" : ""}`} role="status">
        <Heart size={15} />
        {toast}
      </div>
      <dialog
        ref={dialog}
        aria-label={
          modal?.type === "product"
            ? modal.product.name
            : modal?.type === "gallery"
              ? modal.title
              : "Información de Café Estudio"
        }
        className={`modal ${modal?.type === "gallery" ? "gallery-modal" : ""}`}
        onCancel={() => setModal(null)}
        onClose={() => setModal(null)}
        onClick={(event) => {
          if (event.target === dialog.current) {
            const r = dialog.current.getBoundingClientRect();
            if (
              event.clientX < r.left ||
              event.clientX > r.right ||
              event.clientY < r.top ||
              event.clientY > r.bottom
            )
              setModal(null);
          }
        }}
      >
        <button
          className="modal-close icon-button"
          onClick={() => setModal(null)}
          aria-label="Cerrar ventana"
        >
          <X size={20} />
        </button>
        {modal?.type === "product" && (
          <>
            <CafeImage
              className="modal-product-image"
              image={modal.product.image}
              alt={modal.product.name}
              sizes="540px"
            />
            <div className="modal-body">
              <p className="eyebrow">
                {modal.product.category} · {modal.product.details}
              </p>
              <h2>{modal.product.name}</h2>
              <span className="modal-price">{money(modal.product.price)}</span>
              <p>{modal.product.description}</p>
              <small>
                {modal.product.allergens} Receta y disponibilidad de
                demostración.
              </small>
              <button
                className="button cream"
                onClick={() => toggleFavorite(modal.product.id)}
              >
                <Heart
                  size={17}
                  fill={
                    favorites.includes(modal.product.id)
                      ? "currentColor"
                      : "none"
                  }
                />
                {favorites.includes(modal.product.id)
                  ? "Quitar de favoritos"
                  : "Guardar en favoritos"}
              </button>
            </div>
          </>
        )}
        {modal?.type === "location" && (
          <div className="modal-body">
            <MapPin className="modal-symbol" />
            <p className="eyebrow">PLANEA TU VISITA</p>
            <h2>Nos vemos pronto.</h2>
            <p>
              {cafe.address}
              <br />
              {cafe.city}
            </p>
            <p>
              Esta dirección pertenece a la referencia visual. La ubicación real
              de la cafetería está pendiente de confirmar.
            </p>
            <a
              className="button cream"
              target="_blank"
              rel="noreferrer"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(cafe.address + ", " + cafe.city)}`}
            >
              Consultar dirección de ejemplo <ArrowRight size={16} />
            </a>
          </div>
        )}
        {modal?.type === "contact" && <ContactPanel favorites={favorites} />}
        {modal?.type === "gallery" && (
          <>
            <CafeImage image={modal.image} alt={modal.title} sizes="90vw" />
            <div className="gallery-modal-caption">
              {modal.title}
              <span>Fotografía de referencia</span>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

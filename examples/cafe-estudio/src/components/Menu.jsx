import CafeImage from "./CafeImage.jsx";
import {
  Star,
  Coffee,
  CakeSlice,
  Croissant,
  Heart,
  ArrowUpRight,
  SearchX,
  Grid2X2,
} from "lucide-react";
import { products, money } from "../data/cafe.jsx";
const filters = [
  ["Destacados", Star],
  ["Todos", Grid2X2],
  ["Bebidas", Coffee],
  ["Postres", CakeSlice],
  ["Salados", Croissant],
  ["Favoritos", Heart],
];
export default function Menu({
  category,
  setCategory,
  favorites,
  toggleFavorite,
  onProduct,
}) {
  const visible = products.filter(
    (p) =>
      category === "Todos" ||
      (category === "Destacados"
        ? p.featured
        : category === "Favoritos"
          ? favorites.includes(p.id)
          : p.category === category),
  );
  return (
    <section
      id="menu"
      className="menu-section container"
      aria-labelledby="menu-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">PREPARADO PARA TU MOMENTO</p>
          <h2 id="menu-title">
            Un antojo.
            <br />
            <em>Mil buenas excusas.</em>
          </h2>
        </div>
        <div className="menu-intro">
          <p>
            Del primer sorbo al último bocado. Explora nuestras bebidas y algo
            rico para acompañarlas.
          </p>
          <small>Menú y precios ilustrativos en quetzales.</small>
        </div>
      </div>
      <div className="menu-toolbar">
        <div className="menu-filters" role="group" aria-label="Filtrar menú">
          {filters.map(([name, Icon]) => (
            <button
              key={name}
              aria-pressed={category === name}
              className={category === name ? "selected" : ""}
              onClick={() => setCategory(name)}
            >
              <Icon size={16} />
              {name}
              {name === "Favoritos" && favorites.length > 0 && (
                <span>{favorites.length}</span>
              )}
            </button>
          ))}
        </div>
        <span className="menu-count" aria-live="polite">
          {visible.length} {visible.length === 1 ? "opción" : "opciones"}
        </span>
      </div>
      <div className="menu-grid" aria-live="polite">
        {visible.map((product) => (
          <article className="product-card" key={product.id}>
            <div className="product-visual">
              <button
                className="product-image"
                onClick={() => onProduct(product)}
                aria-label={`Ver ${product.name}`}
              >
                <CafeImage
                  image={product.image}
                  alt={product.name}
                  sizes="(max-width: 850px) 50vw, 25vw"
                />
              </button>
              <button
                className={`favorite-button ${favorites.includes(product.id) ? "saved" : ""}`}
                onClick={() => toggleFavorite(product.id)}
                aria-label={`${favorites.includes(product.id) ? "Quitar" : "Guardar"} ${product.name} ${favorites.includes(product.id) ? "de" : "en"} favoritos`}
                aria-pressed={favorites.includes(product.id)}
              >
                <Heart size={20} />
              </button>
              <span className="product-category">{product.category}</span>
            </div>
            <div className="product-info">
              <h3>
                <button
                  className="product-name"
                  onClick={() => onProduct(product)}
                >
                  {product.name}
                  <ArrowUpRight size={19} />
                </button>
              </h3>
              <p>{product.details}</p>
              <strong>{money(product.price)}</strong>
            </div>
          </article>
        ))}
      </div>
      {visible.length === 0 && (
        <div className="empty-favorites">
          <SearchX size={32} />
          <h3>Tu próxima favorita está por aquí.</h3>
          <p>
            Toca el corazón de un producto para guardarlo en este dispositivo.
          </p>
          <button className="text-link" onClick={() => setCategory("Todos")}>
            Explorar el menú <ArrowUpRight size={18} />
          </button>
        </div>
      )}
      <p className="menu-note">
        ¿Ya encontraste tu favorito? Guárdalo con el corazón y vuelve a él
        cuando quieras.
      </p>
    </section>
  );
}

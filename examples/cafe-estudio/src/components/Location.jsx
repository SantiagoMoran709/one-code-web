import { MapPin, ArrowUpRight } from "lucide-react";
import { cafe } from "../data/cafe.jsx";
export default function Location({ onLocation }) {
  return (
    <article className="location-panel visit-card" id="ubicacion">
      <div className="visit-icon">
        <MapPin size={25} />
      </div>
      <h3>Encuentra tu próxima pausa.</h3>
      <p className="location-address">
        {cafe.address}
        <br />
        {cafe.city}
      </p>
      <button className="text-link" onClick={onLocation}>
        Consultar ubicación <ArrowUpRight size={19} />
      </button>
      <p className="panel-note">
        Dirección ilustrativa, pendiente de confirmar.
      </p>
    </article>
  );
}

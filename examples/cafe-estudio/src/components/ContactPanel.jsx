import { useRef, useState } from "react";
import { Copy, MessageCircle, Check, ArrowUpRight } from "lucide-react";
import { cafe, products } from "../data/cafe.jsx";

export default function ContactPanel({ favorites }) {
  const selected = products.filter((product) => favorites.includes(product.id));
  const [message, setMessage] = useState(
    `Hola, Café Estudio. Me gustaría consultar sobre mi próxima visita y la disponibilidad del menú.${selected.length ? "\n\nProductos que me interesan:\n" + selected.map((product) => `• ${product.name}`).join("\n") : ""}\n\n¡Gracias!`,
  );
  const [feedback, setFeedback] = useState("");
  const field = useRef(null);
  const connected = /^[1-9]\d{7,14}$/.test(cafe.whatsapp);
  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(message);
      setFeedback("Mensaje copiado.");
    } catch {
      field.current.focus();
      field.current.select();
      setFeedback("Seleccionamos el mensaje para que puedas copiarlo.");
    }
  }
  return (
    <div className="modal-body contact-panel">
      <MessageCircle className="modal-symbol" aria-hidden="true" />
      <p className="eyebrow">TU PRÓXIMA PAUSA EMPIEZA AQUÍ</p>
      <h2>
        Preparemos
        <br />
        <em>tu visita.</em>
      </h2>
      <p>
        {selected.length
          ? "Incluimos tus favoritos en una consulta que puedes editar antes de compartir."
          : "Prepara una consulta sobre el menú o tu próxima visita."}
      </p>
      <label htmlFor="visit-message">Tu mensaje de consulta</label>
      <textarea
        ref={field}
        id="visit-message"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
          setFeedback("");
        }}
        rows={7}
        maxLength={2000}
      />
      <button
        className="button cream"
        onClick={copyMessage}
        disabled={!message.trim()}
      >
        {feedback === "Mensaje copiado." ? (
          <Check size={18} />
        ) : (
          <Copy size={18} />
        )}
        Copiar consulta
      </button>
      {connected && (
        <a
          className="button outline"
          target="_blank"
          rel="noopener noreferrer"
          href={`https://wa.me/${cafe.whatsapp}?text=${encodeURIComponent(message)}`}
        >
          Continuar en WhatsApp <ArrowUpRight size={18} />
        </a>
      )}
      <p className="copy-feedback" role="status">
        {feedback}
      </p>
      <small>
        {connected
          ? "La consulta se envía solo cuando la confirmes en WhatsApp."
          : "Demo: WhatsApp todavía no está conectado. El mensaje se prepara en tu navegador; no se envía ni se registra un pedido."}
      </small>
    </div>
  );
}

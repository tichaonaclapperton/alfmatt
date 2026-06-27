import "../styles/whatsapp.css";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/27812119738"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
    >
      <MessageCircle size={30} />
    </a>
  );
}
import "../styles/contactInfo.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="info-card">
        <Phone size={40} />
        <h3>Call Us</h3>
        <p>+27 12 345 6789</p>
      </div>

      <div className="info-card">
        <Mail size={40} />
        <h3>Email</h3>
        <p>info@autopro.co.za</p>
      </div>

      <div className="info-card">
        <MapPin size={40} />
        <h3>Location</h3>
        <p>Cape Town, South Africa</p>
      </div>
    </section>
  );
}
import "../styles/contactInfo.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="contact-info">
      <div className="info-card">
        <Phone size={40} />
        <h3>Call Us</h3>
        <p>+27 81 211 9738</p>
      </div>

      <div className="info-card">
        <Mail size={40} />
        <h3>Email</h3>
        <p>alfmattmobileservice@mail.com</p>
      </div>

      <div className="info-card">
        <MapPin size={40} />
        <h3>Location</h3>
        <p>3 puarrow court Delft Cape Town, South Africa</p>
      </div>
    </section>
  );
}
import "../styles/footer.css";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>Alfmatt Mechanics</h3>
          <p>
            Professional automotive repair and maintenance services
            you can trust.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/service">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Services</h3>

          <ul>
            <li>Engine Repairs</li>
            <li>Gearbox Repairs</li>
            <li>Suspension Repairs</li>
            <li>Brake Services</li>
            <li>Oil Changes</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>

          <p>
            <Phone size={16} />
            +27 81 211 9738
          </p>

          <p>
            <Mail size={16} />
            alfmattmobileservice@mail.com
          </p>

          <p>
            <MapPin size={16} />
            3 puarrow court Delft
            Cape Town, South Africa
            7100
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 Alfmatt Mechanics. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
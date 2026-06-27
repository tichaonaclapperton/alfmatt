import "../styles/map.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <h2>Find Us</h2>

      <div className="map-container">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
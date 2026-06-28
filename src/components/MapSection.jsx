import "../styles/map.css";

export default function MapSection() {
  return (
    <section className="map-section">
      <h2>Find Us</h2>

      <div className="map-container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.432994843256!2d18.6384467741811!3d-33.98141037318368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4f98811b0351%3A0x2c567c0f80e934b1!2s3%20Puarrow%20Court%2C%20Delft%2C%20Cape%20Town%2C%207100%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1782645044195!5m2!1sen!2sus"   allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>
    </section>
  );
}
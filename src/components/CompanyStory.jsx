import "../styles/companyStory.css";

export default function CompanyStory() {
  return (
    <section className="company-story">
      <div className="story-container">

        <div className="story-image">
          <img
            src="/images/herobg.jpg"
            alt="Workshop"
          />
        </div>

        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            Since 1995, Alfmatt mobile Mechanics has provided professional
            vehicle repairs and maintenance services.
          </p>

          <p>
            Our mission is simple: honest service, quality repairs,
            and customer satisfaction.
          </p>

          <p>
            Whether it's an oil change, gearbox repair, engine rebuild,
            or suspension service, we treat every vehicle as if it were
            our own.
          </p>
        </div>

      </div>
    </section>
  );
}
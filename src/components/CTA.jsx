import "../styles/cta.css";

export default function CTA() {
	return (
		<section className="cta">
			<div className="cta-container">
				<h2>Need a professional mechanical repairs</h2>
				<p>
					Our experienced mechanics are ready to help keep your vehicle running
					at its best.
				</p>
				<div className="cta-buttons">
					<a href="/contact" className="btn-primary">
						Book Appointment
					</a>

					<a href="tel:+27 81 211 9738" className="btn-secondary">
						Call Now
					</a>
				</div>
			</div>
		</section>
	);
}

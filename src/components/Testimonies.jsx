import "../styles/testimony.css";

export default function Testimonies() {
	const testimonials = [
		{
			name: "Thembisa cele",
			review:
				"Excellent service and fair pricing. My vehicle was repaired quickly and professionally.",
		},
		{
			name: "Sarah Zimunya",
			review:
				"Very reliable mechanics. They explained everything clearly before starting the work.",
		},
		{
			name: "Mike Chabvonga",
			review:
				"I have been using their services for years. Always honest and trustworthy.",
		},
	];

	return (
		<section className="testimonials">
			<div className="section-title">
				<h2>What Our Customers Says</h2>
				<p>Trusted by hundreds of satisfied vehicle owners.</p>
			</div>
			<div className="container">
				<div className="testimonials-grid">
					{testimonials.map((testimonial, index) => (
						<div className="testimonial-card" key={index}>
							<div className="stars">★★★★★</div>
							<p className="review">{testimonial.review}</p>
							<h4>{testimonial.name}</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

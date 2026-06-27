import "../styles/features.css";
import { Clock, Shield, Award, CheckCircle } from "lucide-react";

export default function Features() {
	const features = [
		{
			icon: <Clock size={24} />,
			title: "Fast Service",
			description: "Most repairs completed within 24 hours",
		},
		{
			icon: <Shield size={24} />,
			title: "Warranty Protected",
			description: "All repairs backed by our warranty",
		},
		{
			icon: <Award size={24} />,
			title: "Certified Technicians",
			description: "Experienced mechanics you can trust",
		},
	];

	return (
		<section className="features">
			<div className="features-container">
				<div className="features-image">
					<img src="/images/man.jpg" alt="man at work" />
				</div>

				<div className="features-content">
					<h2>Why Choose Us?</h2>

					<p>
						We provide reliable automotive services with experienced technicians
						and quality workmanship.
					</p>

					<div className="features-list">
						{features.map((feature, index) => (
							<div className="feature-item" key={index}>
								<div className="feature-icon">{feature.icon}</div>

								<div>
									<h3>{feature.title}</h3>
									<p>{feature.description}</p>
								</div>
							</div>
						))}

						<div className="feature-item">
							<CheckCircle size={24} />
							<div>
								<h3>Quality Parts</h3>
								<p>We use trusted OEM and premium parts.</p>
							</div>
						</div>

						<div className="feature-item">
							<CheckCircle size={24} />
							<div>
								<h3>Transparent Pricing</h3>
								<p>No hidden costs or surprise charges.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

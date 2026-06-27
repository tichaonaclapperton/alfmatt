import "../styles/services.css";
import { Settings, Wrench, Gauge, Car } from "lucide-react";

export default function Services() {
	const services = [
		{
			icon: <Settings size={40} />,
			title: "Normal service",
			description: "Changing oil,spark plugs and oil filter",
			price: "R400",
		},
		{
			icon: <Wrench size={40} />,
			title: "Break services",
			description:
				"Brake inspection, repairs and replacement of worn components.",
			price: "R650",
		},
		{
			icon: <Gauge size={40} />,
			title: "Diagnostics",
			description:
				"Computer diagnostics to identify faults quickly and accurately.",
			price: "From R450",
		},
		{
			icon: <Car size={40} />,
			title: "Gear box services",
			description:
				"Manual and automatic gearbox servicing, repairs and rebuilds.",
			price: "Quote required",
		},
		{
			icon: <Settings size={40} />,
			title: "Engine Repairs",
			description: "Engine overhauls, repairs, tuning and performance checks.",
			price: "Quote Required",
		},
		{
			icon: <Wrench size={40} />,
			title: "Suspension Service",
			description:
				"Shock absorbers, control arms, bushes and suspension repairs.",
			price: "Quote Required",
		},
	];

	return (
		<section className="services">
			<div className="services-header">
				<h2>Our Services</h2>
				<p>Comprehensive auto repair solutions for all makes and models.</p>
			</div>
			<div className="container">
				<div className="services-grid">
					{services.map((service, index) => (
						<div className="service-card" key={index}>
							<div className="service-icon">{service.icon}</div>

							<h3>{service.title}</h3>
							<p>{service.description}</p>
							<span className="price">Starting from {service.price}</span>
							{/* <button className="service-btn">Learn more</button> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

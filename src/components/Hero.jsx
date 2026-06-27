import { Link } from "react-router";
import "../styles/hero.css";

export default function Hero() {
	return (
		<section className="hero">
			<div className="overlay"></div>
			<div className="hero-content">
				<span className="badge"> Trusted since 1999</span>
				<h1> Expert Mechanical Services</h1>
				<p>Quality repairs,honest pricing and friendly service you can trust</p>

				<div className="hero-buttons">
					<Link to="/contact" className="btn btn-primary">
						Book Appointment
					</Link>

					<Link to="/service" className="btn btn-secondary">
						View Services
					</Link>
				</div>
			</div>
		</section>
	);
}

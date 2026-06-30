import Hero from "../components/Hero";
import Features from "../components/Features";
import Service from "../components/Services";
import Testimonies from "../components/Testimonies";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
			<Features />
			<Testimonies />
			<Gallery />
			<CTA />
		</>
	);
}

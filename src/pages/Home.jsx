import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Service from "../components/Services";
import Testimonies from "../components/Testimonies";
import Gallery from "../components/Gallery";
import CTA from "../components/CTA";

export default function Home() {
	return (
		<>
			<Helmet>
				<title>AFFMATT Mobile Mechanical | Mobile Mechanic in Cape Town</title>

				<meta
					name="description"
					content="Professional mobile mechanic in Cape Town. Engine repairs, brake repairs, diagnostics, suspension repairs, gearbox repairs and roadside assistance."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="AFFMATT Mobile Mechanical Repairs" />
				<meta
					property="og:description"
					content="Professional mobile mechanic in Cape Town. Reliable vehicle repairs wherever you are."
				/>
				<meta
					property="og:image"
					content="https://affmattmobilemechanical.co.za/og-banner.png"
				/>
				<meta
					property="og:url"
					content="https://affmattmobilemechanical.co.za"
				/>
			</Helmet>
			<Hero />
			<Service />
			<Features />
			<Testimonies />
			<Gallery />
			<CTA />
		</>
	);
}

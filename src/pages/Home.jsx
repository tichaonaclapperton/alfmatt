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
				<title>
					AFFMATT Mobile Mechanical Repairs | Mobile Mechanic Cape Town
				</title>

				<meta
					name="description"
					content="Mobile mechanic in Cape Town offering engine repairs, brake repairs, diagnostics, servicing and roadside assistance."
				/>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="AFFMATT Mobile Mechanical Repairs" />
				<meta
					property="og:description"
					content="Trusted mobile mechanic in Cape Town for vehicle repairs, servicing and roadside assistance."
				/>
				<meta
					property="og:image"
					content="https://affmattmobilemechanical.co.za/og-image.jpg"
				/>
				<meta
					property="og:url"
					content="https://affmattmobilemechanical.co.za"
				/>
				<meta
					name="twitter:description"
					content="Trusted mobile mechanic in Cape Town for vehicle repairs, servicing and roadside assistance."
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

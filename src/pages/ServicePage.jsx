import { Helmet } from "react-helmet-async";
import ServicesHero from "../components/ServicesHero";
import ServiceList from "../components/ServiceList";
import CTA from "../components/CTA";

export default function ServicesPage() {
	return (
		<>
			<Helmet>
				<title>Vehicle Repair Services | AFFMATT Mobile Mechanical</title>

				<meta
					name="description"
					content="We provide oil changes, brake repairs, engine diagnostics, suspension repairs, gearbox repairs and general vehicle servicing in Cape Town."
				/>
			</Helmet>
			<ServicesHero />
			<ServiceList />
			<CTA />
		</>
	);
}

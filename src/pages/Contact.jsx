import { Helmet } from "react-helmet-async";
import ContactHero from "../components/ContactHero";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";
import MapSection from "../components/MapSection";

export default function Contact() {
	return (
		<>
			<Helmet>
				<title>Contact AFFMATT Mobile Mechanical</title>

				<meta
					name="description"
					content="Book your vehicle service with AFFMATT Mobile Mechanical. Contact us by phone, WhatsApp or through our online booking form."
				/>
			</Helmet>
			<ContactHero />
			<ContactInfo />
			<ContactForm />
			<MapSection />
		</>
	);
}

import { Helmet } from "react-helmet-async";
import AboutHero from "../components/AboutHero";
import CompanyStory from "../components/CompanyStory";
import Team from "../components/Team";
import CTA from "../components/CTA";

export default function About() {
	return (
		<>
			<Helmet>
				<title>About AFFMATT Mobile Mechanical Repairs</title>

				<meta
					name="description"
					content="Learn about AFFMATT Mobile Mechanical Repairs, our experienced technicians, quality workmanship and commitment to reliable vehicle repairs in Cape Town."
				/>
			</Helmet>
			<AboutHero />
			<CompanyStory />
			<Team />
			<CTA />
		</>
	);
}

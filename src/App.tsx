import CaseStudies from "./components/CaseStudies";
import Contact from "./components/Contact";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Teams from "./components/Teams";
import Testimonials from "./components/Testimonials";
import WorkingProcess from "./components/WorkingProcess";

function App() {
	return (
		<main>
			<Navbar />
			<Header />
			<Logos />
			<Services />
			<CTA />
			<CaseStudies />
			<WorkingProcess />
			<Teams />
			<Testimonials />
			<Contact />
			<Footer />
		</main>
	);
}

export default App;

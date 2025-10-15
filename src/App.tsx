import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Teams from "./components/Teams";
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
			<Footer />
		</main>
	);
}

export default App;

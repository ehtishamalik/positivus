import CaseStudies from "./components/CaseStudies";
import CTA from "./components/CTA";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
	return (
		<main>
			<Navbar />
			<Header />
			<Logos />
			<Services />
			<CTA />
			<CaseStudies />
		</main>
	);
}

export default App;

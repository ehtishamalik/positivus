import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Logos from "./components/Logos";
import Services from "./components/Services";
import CTA from "./components/CTA";

const CaseStudies = lazy(() => import("./components/CaseStudies"));
const WorkingProcess = lazy(() => import("./components/WorkingProcess"));
const Teams = lazy(() => import("./components/Teams"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Contact = lazy(() => import("./components/Contact"));

import Footer from "./components/Footer";

function App() {
	return (
		<main>
			<Navbar />
			<Header />
			<Logos />
			<Services />
			<CTA />
			<Suspense fallback={<div>Loading case studies...</div>}>
				<CaseStudies />
			</Suspense>
			<Suspense fallback={<div>Loading working process...</div>}>
				<WorkingProcess />
			</Suspense>
			<Suspense fallback={<div>Loading teams...</div>}>
				<Teams />
			</Suspense>
			<Suspense fallback={<div>Loading testimonials...</div>}>
				<Testimonials />
			</Suspense>
			<Suspense fallback={<div>Loading contact...</div>}>
				<Contact />
			</Suspense>
			<Footer />
		</main>
	);
}

export default App;

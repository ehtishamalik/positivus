import Heading from "./Heading";
import Card from "./ui/Card";

const services: {
	heading: string[];
	imageSrc: string;
	href: string;
	variant?: "primary" | "secondary" | "tertiary";
}[] = [
	{
		heading: ["Search engine", "optimization"],
		imageSrc: "/services/search-engine.svg",
		href: "#",
		variant: "secondary",
	},
	{
		heading: ["Pay-per-click", "advertising"],
		imageSrc: "/services/pay-per-click.svg",
		href: "#",
		variant: "primary",
	},
	{
		heading: ["Social Media", "Marketing"],
		imageSrc: "/services/social-media.svg",
		href: "#",
		variant: "tertiary",
	},
	{
		heading: ["Email", "Marketing"],
		imageSrc: "/services/email-marketing.svg",
		href: "#",
		variant: "secondary",
	},
	{
		heading: ["Content", "Creation"],
		imageSrc: "/services/content-creation.svg",
		href: "#",
		variant: "primary",
	},
	{
		heading: ["Analytics and", "Tracking"],
		imageSrc: "/services/analytics-tracking.svg",
		href: "#",
		variant: "tertiary",
	},
];

const Services = () => {
	return (
		<>
			<Heading title="Services">
				At our digital marketing agency, we offer a range of services to help
				businesses grow and succeed online. These services include:
			</Heading>
			<section className="pb-24">
				<div className="mx-container">
					<div className="grid grid-cols-2 gap-10">
						{services.map((service) => (
							<Card key={service.imageSrc} {...service} />
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Services;

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
		href: "https://searchengineland.com/guide/what-is-seo",
		variant: "secondary",
	},
	{
		heading: ["Pay-per-click", "advertising"],
		imageSrc: "/services/pay-per-click.svg",
		href: "https://searchengineland.com/guide/what-is-paid-search",
		variant: "primary",
	},
	{
		heading: ["Social Media", "Marketing"],
		imageSrc: "/services/social-media.svg",
		href: "https://searchengineland.com/what-is-social-media-marketing-389170",
		variant: "tertiary",
	},
	{
		heading: ["Email", "Marketing"],
		imageSrc: "/services/email-marketing.svg",
		href: "https://searchengineland.com/email-marketing",
		variant: "secondary",
	},
	{
		heading: ["Content", "Creation"],
		imageSrc: "/services/content-creation.svg",
		href: "https://searchengineland.com/guide/social-media-content-creation",
		variant: "primary",
	},
	{
		heading: ["Analytics and", "Tracking"],
		imageSrc: "/services/analytics-tracking.svg",
		href: "https://searchengineland.com/rethinking-the-funnel-with-llm-tracking-analytics-462523",
		variant: "tertiary",
	},
];

const Services = () => {
	return (
		<>
			<Heading title="Services" id="services">
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

const logos = [
	{
		name: "Amazon",
		link: "/company/amazon.svg",
	},
	{
		name: "Dribble",
		link: "/company/dribble.svg",
	},
	{
		name: "Hubspot",
		link: "/company/hubspot.svg",
	},
	{
		name: "Netflix",
		link: "/company/netflix.svg",
	},
	{
		name: "Notion",
		link: "/company/notion.svg",
	},
	{
		name: "Zoom",
		link: "/company/zoom.svg",
	},
];

const Logos = () => {
	return (
		<section className="pb-36">
			<div className="mx-container">
				<div className="flex items-center justify-center gap-24">
					{logos.map((logo) => (
						<img
							key={logo.name}
							src={logo.link}
							alt={`${logo.name} logo`}
							className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Logos;

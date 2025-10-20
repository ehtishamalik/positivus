import Heading from "./Heading";
import Button from "./ui/Button";

interface Team {
	name: string;
	role: string;
	image: string;
	description: string;
}

const teams: Team[] = [
	{
		name: "John Smith",
		role: "CEO and Founder",
		image: "/team/picture-1.svg",
		description:
			"10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
	},
	{
		name: "Jane Doe",
		role: "Director of Operations",
		image: "/team/picture-2.svg",
		description:
			"7+ years of experience in project management and team leadership. Strong organizational and communication skills",
	},
	{
		name: "Michael Brown",
		role: "Senior SEO Specialist",
		image: "/team/picture-3.svg",
		description:
			"5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
	},
	{
		name: "Emily Johnson",
		role: "PPC Manager",
		image: "/team/picture-4.svg",
		description:
			"3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
	},
	{
		name: "Brian Williams",
		role: "Social Media Specialist",
		image: "/team/picture-5.svg",
		description:
			"4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
	},
	{
		name: "Sarah Kim",
		role: "Content Creator",
		image: "/team/picture-6.svg",
		description:
			"2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries.",
	},
];

const Card = ({ name, role, image, description }: Team) => {
	return (
		<div className="border border-theme-black shadow-[0_5px_0_0_#191A23] py-10 px-[35px] rounded-[45px]">
			<div className="relative">
				<img
					src="/team/linkedin.svg"
					alt="LinkedIn"
					className="absolute top-0 right-0"
				/>
				<div className="flex items-end gap-5 mb-7">
					<img src={image} alt={name} />
					<div>
						<h3 className="text-lg font-semibold">{name}</h3>
						<p className="text-sm text-gray-500">{role}</p>
					</div>
				</div>
				<p className="text-lg text-black pt-7 border-t border-black">
					{description}
				</p>
			</div>
		</div>
	);
};

const Teams = () => {
	return (
		<>
			<Heading title="Team" className="!max-w-[473px]" id="our-team">
				Meet the skilled and experienced team behind our successful digital
				marketing strategies
			</Heading>
			<section className="mx-padding">
				<div className="mx-container">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
						{teams.map((team) => (
							<Card key={team.name} {...team} />
						))}
					</div>
					<div className="flex justify-end">
						<Button
							variant="secondary"
							size="lg"
							href="https://www.upwork.com/freelancers/~01244186faa3053ffe"
						>
							See all team
						</Button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Teams;

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../components/ui/accordion";
import Heading from "./Heading";

const accordionData = [
	{
		title: "Consultation",
		content:
			"During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
	},
	{
		title: "Research and Strategy Development",
		content:
			"We conduct in-depth market research, competitor analysis, and audience profiling to gain insights. Based on this research, we develop a customized marketing strategy aligned with your goals, budget, and timeline.",
	},
	{
		title: "Implementation",
		content:
			"Once the strategy is approved, we begin executing the plan across selected channels—this may include content creation, SEO, social media management, paid ads, and more—ensuring everything aligns with your brand voice and objectives.",
	},
	{
		title: "Monitoring and Optimization",
		content:
			"We continuously monitor campaign performance using analytics tools and key metrics. Based on real-time data, we make adjustments to improve efficiency and maximize ROI, ensuring your campaigns stay on track.",
	},
	{
		title: "Reporting and Communication",
		content:
			"We provide clear, transparent reporting on performance metrics, campaign insights, and progress. Regular check-ins and reports keep you informed and allow for collaborative decision-making.",
	},
	{
		title: "Continual Improvement",
		content:
			"Our work doesn't stop after launch. We review long-term performance, gather feedback, and refine strategies to adapt to changing market trends—ensuring sustained growth and ongoing success for your business.",
	},
];

const WorkingProcess = () => {
	return (
		<>
			<Heading title="Our Working Process" className="!max-w-[292px]">
				Step-by-Step Guide to Achieving Your Business Goals
			</Heading>
			<section>
				<div className="mx-container">
					<div className="space-y-[30px] mb-[140px]">
						{accordionData.map((item, index) => (
							<Accordion type="multiple" key={item.title}>
								<AccordionItem value={`item-${index}`}>
									<AccordionTrigger>{item.title}</AccordionTrigger>
									<AccordionContent>{item.content}</AccordionContent>
								</AccordionItem>
							</Accordion>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default WorkingProcess;

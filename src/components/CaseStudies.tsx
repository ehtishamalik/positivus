import Heading from "./Heading";

const CaseStudies = () => {
	return (
		<>
			<Heading title="Case Studies" id="case-studies">
				Explore Real-Life Examples of Our Proven Digital Marketing Success
				through Our Case Studies
			</Heading>
			<section className="pb-[140px]">
				<div className="mx-container">
					<div className="bg-theme-black py-[70px] px-[60px] rounded-[45px]">
						<div className="flex justify-between gap-16">
							<div className="space-y-5">
								<p className="text-white text-lg">
									Developed a custom HRM software for a mid-sized company to
									streamline employee onboarding, attendance, and leave
									management, improving operational efficiency significantly.
								</p>
								<a
									href="https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972612790469783552"
									target="_blank"
									rel="noopener noreferrer"
									className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
								>
									Learn More
									<img src="/icons/arrow-green.svg" alt="Icon" />
								</a>
							</div>
							<div className="w-0.5 bg-white"></div>
							<div className="space-y-5">
								<p className="text-white text-lg">
									Built a real-time score management app for sports tournaments,
									allowing event organizers to update and display live scores
									with ease across multiple devices.
								</p>
								<a
									href="https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972614208549572608"
									target="_blank"
									rel="noopener noreferrer"
									className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
								>
									Learn More
									<img src="/icons/arrow-green.svg" alt="Icon" />
								</a>
							</div>
							<div className="w-0.5 bg-white"></div>
							<div className="space-y-5">
								<p className="text-white text-lg">
									Designed and developed a responsive website for a UK-based
									electrician, enabling clients to browse services and receive
									instant quotes through a custom-built form.
								</p>
								<a
									href="https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972602654397296640"
									target="_blank"
									rel="noopener noreferrer"
									className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
								>
									Learn More
									<img src="/icons/arrow-green.svg" alt="Icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default CaseStudies;

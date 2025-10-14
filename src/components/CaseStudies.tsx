import Heading from "./Heading";

const CaseStudies = () => {
	return (
		<>
			<Heading title="Case Studies">
				Explore Real-Life Examples of Our Proven Digital Marketing Success
				through Our Case Studies
			</Heading>
			<section className="pb-[140px]">
				<div className="mx-container">
					<div className="bg-theme-black py-[70px] px-[60px] rounded-[45px]">
						<div className="flex justify-between gap-16">
							<div className="space-y-5">
								<p className="text-white text-lg">
									For a local restaurant, we implemented a targeted PPC campaign
									that resulted in a 50% increase in website traffic and a 25%
									increase in sales.
								</p>
								<a
									href="#case-study-1"
									className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
								>
									Learn More
									<img src="/icons/arrow-green.svg" alt="Icon" />
								</a>
							</div>
							<div className="w-0.5 bg-white"></div>
							<div className="space-y-5">
								<p className="text-white text-lg">
									For a local restaurant, we implemented a targeted PPC campaign
									that resulted in a 50% increase in website traffic and a 25%
									increase in sales.
								</p>
								<a
									href="#case-study-1"
									className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
								>
									Learn More
									<img src="/icons/arrow-green.svg" alt="Icon" />
								</a>
							</div>
							<div className="w-0.5 bg-white"></div>
							<div className="space-y-5">
								<p className="text-white text-lg">
									For a local restaurant, we implemented a targeted PPC campaign
									that resulted in a 50% increase in website traffic and a 25%
									increase in sales.
								</p>
								<a
									href="#case-study-1"
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

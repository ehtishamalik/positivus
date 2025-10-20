import clsx from "clsx";
import Heading from "./Heading";

import { Swiper, SwiperSlide } from "swiper/react";

const CaseStudiesData = [
	{
		description:
			"Developed a custom HRM software for a mid-sized company to streamline employee onboarding, attendance, and leave management, improving operational efficiency significantly.",
		link: "https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972612790469783552",
	},
	{
		description:
			"Built a real-time score management app for sports tournaments, allowing event organizers to update and display live scores with ease across multiple devices.",
		link: "https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972614208549572608",
	},
	{
		description:
			"Designed and developed a responsive website for a UK-based electrician, enabling clients to browse services and receive instant quotes through a custom-built form.",
		link: "https://www.upwork.com/freelancers/~01244186faa3053ffe?p=1972602654397296640",
	},
];

const CaseStudies = () => {
	return (
		<>
			<Heading title="Case Studies" id="case-studies">
				Explore Real-Life Examples of Our Proven Digital Marketing Success
				through Our Case Studies
			</Heading>
			<section className="mx-padding">
				<div className="mx-container">
					<div className="bg-theme-black py-[70px] px-[60px] rounded-[45px] hidden xl:block">
						<div className="flex justify-between gap-16">
							{CaseStudiesData.map((caseStudy, index) => (
								<div
									key={caseStudy.link}
									className="flex justify-between gap-16"
								>
									<div className="flex flex-col items-start gap-5">
										<p className="text-white text-lg">
											{caseStudy.description}
										</p>
										<a
											href={caseStudy.link}
											target="_blank"
											rel="noopener noreferrer"
											className={clsx(
												"text-theme-green text-xl leading-7 flex items-center gap-3.5 mt-auto",
												"relative",
												"after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-theme-green after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-75",
											)}
										>
											Learn More
											<img
												src="/icons/arrow-green.svg"
												alt="Icon"
												className="relative top-1"
											/>
										</a>
									</div>
									{index !== CaseStudiesData.length - 1 && (
										<div className="w-0.5 bg-white"></div>
									)}
								</div>
							))}
						</div>
					</div>
					<div className="block xl:hidden">
						<Swiper
							initialSlide={1}
							spaceBetween={50}
							centeredSlides={true}
							breakpoints={{
								320: { slidesPerView: 1 },
								768: { slidesPerView: 2 },
							}}
						>
							{CaseStudiesData.map((caseStudy) => (
								<SwiperSlide key={caseStudy.link} className="h-full">
									<div className="bg-theme-black p-10 lg:py-[70px] lg:px-[60px] mx-rounded">
										<p className="text-white text-lg mb-5">
											{caseStudy.description}
										</p>
										<a
											href={caseStudy.link}
											target="_blank"
											rel="noopener noreferrer"
											className="text-theme-green text-xl leading-7 flex items-center gap-3.5"
										>
											Learn More
											<img
												src="/icons/arrow-green.svg"
												alt="Icon"
												className="relative top-1"
											/>
										</a>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default CaseStudies;

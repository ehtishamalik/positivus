import Heading from "./Heading";
import clsx from "clsx";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useState } from "react";

const Testimonial = () => {
	return (
		<div>
			<div className="relative border-2 mx-rounded p-6 md:p-8 lg:p-10 xl:py-12 xl:px-[52px] border-theme-green leading-[1.6]">
				<p className="text-white text-lg">
					"We have been working with Positivus for the past year and have seen a
					significant increase in website traffic and leads as a result of their
					efforts. The team is professional, responsive, and truly cares about
					the success of our business. We highly recommend Positivus to any
					company looking to grow their online presence."
				</p>
				<div className="absolute w-16 h-9 -bottom-[26px]">
					<div className="relative size-full flex items-center justify-center">
						<span className="inline-block bg-theme-green w-0.5 h-full absolute origin-bottom rotate-45"></span>
						<span className="inline-block bg-theme-green w-0.5 h-full absolute origin-bottom -rotate-45"></span>
						<span className="inline-block bg-theme-black w-0.5 h-full absolute origin-center rotate-90 -top-[7px] scale-[1.25]"></span>
					</div>
				</div>
			</div>
			<div className="ml-20 mt-12">
				<h4 className="text-theme-green text-lg">John Smith</h4>
				<p className="text-lg text-white">Marketing Director at XYZ Corp</p>
			</div>
		</div>
	);
};

const SlideButton = ({
	type,
	activeIndex,
}: {
	type: "prev" | "next";
	activeIndex: number;
}) => {
	const swiper = useSwiper();
	const isDisabled =
		(type === "prev" && activeIndex === 0) ||
		(type === "next" && activeIndex === 4);

	return (
		<button
			type="button"
			disabled={isDisabled}
			className={clsx({
				"opacity-50 cursor-not-allowed": isDisabled,
				"opacity-100 cursor-pointer": !isDisabled,
			})}
			onClick={() => {
				type === "prev" ? swiper.slidePrev() : swiper.slideNext();
			}}
		>
			{type === "prev" ? (
				<img
					src="/icons/arrow-right.svg"
					alt="Left Arrow to slide left"
					className="rotate-180"
				/>
			) : (
				<img src="/icons/arrow-right.svg" alt="Right Arrow to slide right" />
			)}
		</button>
	);
};

const Testimonials = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);
	const TestimonialsArray = [1, 2, 3, 4, 5];

	return (
		<>
			<Heading title="Testimonials">
				Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
				about Our Digital Marketing Services
			</Heading>

			<section className="mx-padding">
				<div className="mx-container">
					<div className="mx-rounded bg-theme-black px-5 p-8 sm:p-10 md:py-12 lg:py-16 xl:py-[84px]">
						<div>
							<Swiper
								initialSlide={1}
								spaceBetween={50}
								slidesPerView={2}
								modules={[Navigation, Pagination, Scrollbar, A11y]}
								centeredSlides={true}
								onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
								breakpoints={{
									320: {
										slidesPerView: 1,
										spaceBetween: 50,
										centeredSlides: true,
									},
									768: { slidesPerView: 2, spaceBetween: 50 },
								}}
							>
								{TestimonialsArray.map((t) => (
									<SwiperSlide key={t}>
										<Testimonial />
									</SwiperSlide>
								))}
								<div className="mt-12 sm:mt-16 md:mt-24 lg:mt-[124px] flex justify-between max-w-[565px] mx-auto">
									<SlideButton type="prev" activeIndex={activeIndex} />
									<div className="flex gap-5 items-center justify-center">
										{TestimonialsArray.map((t, index) => (
											<img
												key={t}
												src={
													index === activeIndex
														? "/icons/star-green.svg"
														: "/icons/star-white.svg"
												}
												alt="Green Star for pagination"
											/>
										))}
									</div>
									<SlideButton type="next" activeIndex={activeIndex} />
								</div>
							</Swiper>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimonials;

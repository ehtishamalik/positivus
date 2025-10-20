import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

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
		<section className="mx-padding">
			<div className="mx-container">
				<div>
					<Swiper
						spaceBetween={95}
						modules={[Autoplay]}
						loop
						autoplay={{
							delay: 1000,
						}}
						breakpoints={{
							320: { slidesPerView: 2, spaceBetween: 30, centeredSlides: true },
							480: { slidesPerView: 3, spaceBetween: 40 },
							640: { slidesPerView: 4, spaceBetween: 50 },
							768: { slidesPerView: 5, spaceBetween: 60 },
						}}
					>
						{[...logos, ...logos].map((logo, index) => (
							<SwiperSlide
								key={`${logo.name}-${index}`}
								className="!flex justify-center items-center"
							>
								<img
									src={logo.link}
									alt={`${logo.name} logo`}
									className="h-12 grayscale hover:grayscale-0 transition duration-300 ease-in-out"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</section>
	);
};

export default Logos;

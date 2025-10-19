import "swiper/swiper.css";

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
		<section className="pb-36">
			<div className="mx-container">
				<div>
					<Swiper
						spaceBetween={95}
						slidesPerView={logos.length - 1}
						modules={[Autoplay]}
						loop
						autoplay={{
							delay: 1000,
						}}
					>
						{logos.map((logo) => (
							<SwiperSlide key={logo.name}>
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

import BlackDot from "/header/black-dot.svg";
import GreenDot from "/header/green-dot.svg";
import Icons from "/header/icons.svg";
import Orbit from "/header/orbit.svg";
import Speaker from "/header/speaker.svg";
import Star from "/header/star.svg";
import Button from "./ui/Button";
import gsap from "gsap";

import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Header = () => {
	const illustrationRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		if (illustrationRef.current) {
			gsap.fromTo(
				illustrationRef.current.querySelectorAll("img"),
				{ y: -60, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 0.6,
					stagger: 0.2,
					ease: "bounce.out",
					delay: 0.2,
				},
			);
		}
	}, []);

	return (
		<header className="py-[140px]">
			<div className="mx-container">
				<div className="grid grid-cols-2 items-center gap-28 overflow-hidden">
					<div className="space-y-9 max-w-lg">
						<h1 className="font-medium text-6xl">
							Navigating the digital landscape for success
						</h1>
						<p>
							Our digital marketing agency helps businesses grow and succeed
							online through a range of services including SEO, PPC, social
							media marketing, and content creation.
						</p>
						<Button href="https://www.upwork.com/freelancers/~01244186faa3053ffe">
							Book a consultation
						</Button>
					</div>
					<div className="flex items-center justify-center size-full h-[515px]">
						<div ref={illustrationRef} className="relative -top-14 w-full">
							<img
								src={BlackDot}
								alt="black dot illustration"
								className="absolute -top-40 -left-2.5"
								width={47}
								height={47}
							/>
							<img
								src={GreenDot}
								alt="green dot illustration"
								className="absolute -top-28 left-14"
								width={31}
								height={31}
							/>
							<img
								src={GreenDot}
								alt="green dot illustration"
								className="absolute -bottom-64 right-44"
								width={20}
								height={20}
							/>
							<img
								src={Orbit}
								alt="orbit illustration"
								className="absolute -bottom-48"
							/>
							<img
								src={Orbit}
								alt="orbit illustration"
								className="absolute -left-2.5 -bottom-60"
							/>
							<img
								src={Orbit}
								alt="orbit illustration"
								className="absolute -left-3 -bottom-72"
							/>
							<img
								src={Icons}
								alt="icons illustration"
								className="absolute -top-48 right-0"
							/>
							<img
								src={Speaker}
								alt="speaker illustration"
								className="absolute top-1/2 left-1/2 !-translate-x-1/2 !-translate-y-1/2"
							/>
							<img
								src={Star}
								alt="star illustration"
								className="absolute -bottom-56 left-16"
								width={70}
								height={70}
							/>
							<img
								src={Star}
								alt="star illustration"
								className="absolute -bottom-72 left-64 rotate-45"
								width={36}
								height={36}
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;

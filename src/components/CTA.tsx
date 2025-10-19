import gsap from "gsap";
import Button from "./ui/Button";

import { useEffect, useRef } from "react";

const CTA = () => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const eyeLeftRef = useRef<HTMLImageElement | null>(null);
	const eyeRightRef = useRef<HTMLImageElement | null>(null);
	const illustrationRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const container = containerRef.current;
		const leftEye = eyeLeftRef.current;
		const rightEye = eyeRightRef.current;

		if (!container || !leftEye || !rightEye) return;

		const bounds = container.getBoundingClientRect();
		const centerX = (3 * bounds.width) / 4;
		const centerY = (3 * bounds.height) / 4;

		const handleMouseMove = (e: MouseEvent) => {
			const rect = container.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			// Normalize mouse position (-1 to 1)
			const dx = (x - centerX) / centerX;
			const dy = (y - centerY) / centerY;

			// Limit movement range (in px)
			const moveX = dx * 10;
			const moveY = dy * 8;

			// Animate eyes smoothly toward mouse position
			gsap.to([leftEye, rightEye], {
				x: moveX,
				y: moveY,
				duration: 0.6,
				ease: "power2.out",
			});

			if (illustrationRef.current) {
				gsap.to(
					illustrationRef.current.querySelectorAll(":scope > .obj-move"),
					{
						x: moveX,
						y: moveY,
						opacity: 1,
						duration: 0.6,
						stagger: 0.2,
						delay: 0,
						ease: "power2.out",
					},
				);
			}
		};

		const handleMouseLeave = () => {
			// Return eyes to center
			gsap.to([leftEye, rightEye], {
				x: 0,
				y: 0,
				duration: 0.8,
				ease: "power3.out",
			});
		};

		container.addEventListener("mousemove", handleMouseMove);
		container.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			container.removeEventListener("mousemove", handleMouseMove);
			container.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<section className="pb-20">
			<div className="mx-container">
				<div ref={containerRef} className="py-6">
					<div className="rounded-[45px] p-[60px] gap-[275px] bg-theme-gray grid grid-cols-2 items-center">
						<div className="space-y-[26px]">
							<h3 className="text-3xl font-medium">Let’s make things happen</h3>
							<p className="leading-[1.2] text-lg">
								Contact us today to learn more about how our digital marketing
								services can help your business grow and succeed online.
							</p>
							<Button href="https://www.upwork.com/freelancers/~01244186faa3053ffe">
								Get your free proposal
							</Button>
						</div>
						<div className="size-full flex items-center justify-center">
							<div ref={illustrationRef} className="relative w-full">
								<div className="absolute z-10 top-1/2 -translate-y-1/2 left-[90px]">
									<div className="relative">
										<img src="/cta/circle-black.svg" alt="Circle Black" />
										<img
											ref={eyeLeftRef}
											src="/cta/eye.svg"
											alt="Eye"
											className="absolute top-6 left-8"
										/>
										<img
											ref={eyeRightRef}
											src="/cta/eye.svg"
											alt="Eye"
											className="absolute top-6 right-8"
										/>
									</div>
								</div>
								<img
									src="/cta/ellipse-holo.svg"
									alt="Ellipse Holo"
									className="absolute top-6"
								/>
								<img
									src="/cta/ellipse-holo.svg"
									alt="Ellipse Holo"
									className="absolute top-0"
								/>
								<img
									src="/cta/ellipse-holo.svg"
									alt="Ellipse Holo"
									className="absolute -top-6"
								/>
								<img
									src="/cta/star-holo.svg"
									alt="Star Holo"
									className="absolute -bottom-5 right-20 obj-move"
								/>
								<img
									src="/cta/star-gray.svg"
									alt="Star Gray"
									className="absolute right-16 obj-move"
								/>
								<img
									src="/cta/star-green.svg"
									alt="Star Green"
									className="absolute top-20 left-16 obj-move"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CTA;

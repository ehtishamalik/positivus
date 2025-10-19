import clsx from "clsx";
import gsap from "gsap";
import ArrowBlack from "/icons/arrow-icon-black.svg";
import ArrowGreen from "/icons/arrow-icon-green.svg";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";

interface CardProps {
	heading: string[];
	imageSrc: string;
	href: string;
	variant?: "primary" | "secondary" | "tertiary";
}

const Arrow = ({
	isHovered,
	variant,
}: {
	isHovered: boolean;
	variant: "primary" | "secondary" | "tertiary";
}) => {
	const containerRef = useRef<HTMLDivElement | null>(null);
	const arrow1Ref = useRef<HTMLImageElement | null>(null);
	const arrow2Ref = useRef<HTMLImageElement | null>(null);

	const isPrimary = variant === "primary";
	const isSecondary = variant === "secondary";
	const isTertiary = variant === "tertiary";

	useGSAP(() => {
		const tl = gsap.timeline({
			defaults: { duration: 0.4, ease: "power2.inOut" },
		});

		if (isHovered) {
			// Hover in — bring second arrow in, move first arrow out
			tl.to(arrow1Ref.current, { top: "-100%", left: "200%" }, 0).to(
				arrow2Ref.current,
				{ top: "50%", left: "50%", xPercent: -50, yPercent: -50 },
				0,
			);
		} else {
			// Hover out — reset both arrows
			tl.to(arrow1Ref.current, { top: "50%", left: "50%" }, 0).to(
				arrow2Ref.current,
				{ top: "100%", left: "-100%", xPercent: 0, yPercent: 0 },
				0,
			);
		}
	}, [isHovered]);

	return (
		<div
			ref={containerRef}
			className={clsx(
				"relative size-[41px] rounded-full p-2.5 overflow-hidden",
				{
					"bg-theme-black": isPrimary || isSecondary,
					"bg-white": isTertiary,
				},
			)}
		>
			<img
				ref={arrow1Ref}
				src={isPrimary || isSecondary ? ArrowGreen : ArrowBlack}
				alt="Icon"
				width={20}
				height={20}
				className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
			/>
			<img
				ref={arrow2Ref}
				src={isPrimary || isSecondary ? ArrowGreen : ArrowBlack}
				alt="Icon"
				width={20}
				height={20}
				className="absolute top-full -left-full"
			/>
		</div>
	);
};

const Card = ({ heading, imageSrc, href, variant }: CardProps) => {
	const isPrimary = variant === "primary";
	const isSecondary = variant === "secondary";
	const isTertiary = variant === "tertiary";

	const [isHovered, setIsHovered] = useState<boolean>(false);

	return (
		<div
			className={clsx(
				"border border-theme-black h-full text-black shadow-[0px_5px_0px_0px] shadow-theme-black",
				"rounded-[45px] p-[50px]",
				{
					"bg-theme-green": isPrimary,
					"bg-theme-gray": isSecondary,
					"bg-theme-black": isTertiary,
				},
			)}
		>
			<div className="grid grid-cols-2 gap-16 h-full items-center">
				<div className="flex flex-col justify-between h-full">
					<h3 className="flex items-start flex-col gap-0 font-medium text-3xl">
						{heading.map((line) => (
							<span
								key={line}
								className={clsx("p-1 rounded-md", {
									"bg-white": isPrimary || isTertiary,
									"bg-theme-green": isSecondary,
								})}
							>
								{line}
							</span>
						))}
					</h3>
					<div
						className={clsx(
							"inline-flex w-fit gap-4 items-center text-xl font-normal leading-7 cursor-pointer group",
							{
								"text-theme-black": isPrimary || isSecondary,
								"text-white": isTertiary,
							},
						)}
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}
					>
						<Arrow isHovered={isHovered} variant={variant || "primary"} />
						<a
							href={href}
							target="_blank"
							rel="noreferrer noopener"
							className={clsx(
								"relative inline-block transition-transform font-medium",
								"after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300",
								"group-hover:after:origin-bottom-left group-hover:after:scale-x-100",
								{
									"after:bg-theme-black": isPrimary || isSecondary,
									"after:bg-white": isTertiary,
								},
							)}
						>
							Learn More
						</a>
					</div>
				</div>
				<img src={imageSrc} alt={heading[0]} />
			</div>
		</div>
	);
};

export default Card;

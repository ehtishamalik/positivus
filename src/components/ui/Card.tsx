import clsx from "clsx";
import ArrowIconDark from "/icons/arrow-icon-dark.svg";
import ArrowIconLight from "/icons/arrow-icon-light.svg";

interface CardProps {
	heading: string[];
	imageSrc: string;
	href: string;
	variant?: "primary" | "secondary" | "tertiary";
}

const Card = ({ heading, imageSrc, href, variant }: CardProps) => {
	const isPrimary = variant === "primary";
	const isSecondary = variant === "secondary";
	const isTertiary = variant === "tertiary";

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
					<a
						href={href}
						target="_blank"
						rel="noreferrer noopener"
						className={clsx(
							"flex gap-4 items-center text-xl font-normal leading-7",
							{
								"text-black": isPrimary || isSecondary,
								"text-white": isTertiary,
							},
						)}
					>
						{" "}
						<img
							src={isPrimary || isSecondary ? ArrowIconDark : ArrowIconLight}
							alt="Icon"
							width={41}
							height={41}
						/>{" "}
						Learn More
					</a>
				</div>
				<img src={imageSrc} alt={heading[0]} />
			</div>
		</div>
	);
};

export default Card;

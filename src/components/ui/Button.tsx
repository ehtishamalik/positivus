import clsx from "clsx";

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	variant?: "primary" | "secondary";
	size?: "default" | "lg";
	className?: string;
}

const Button = ({
	children,
	href,
	variant = "secondary",
	size = "default",
	className,
}: ButtonProps) => {
	const Slot = href ? "a" : "button";
	return (
		<Slot
			type="button"
			href={href}
			target="_blank"
			rel="noreferrer noopener"
			className={clsx(
				"inline-flex gap-2 items-center text-[20px] leading-7 cursor-pointer rounded-[14px] py-[20px] transition-all hover:opacity-80 active:scale-95 w-full sm:w-fit justify-center sm:justify-start",
				{
					"bg-theme-green text-black": variant === "primary",
					"bg-theme-black text-white": variant === "secondary",
					"px-[35px]": size === "default",
					"px-[76px]": size === "lg",
				},
				className,
			)}
		>
			{children}
		</Slot>
	);
};

export default Button;

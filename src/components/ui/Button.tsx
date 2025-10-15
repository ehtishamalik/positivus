import clsx from "clsx";

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	variant?: "primary" | "secondary";
	size?: "default" | "lg";
}

const Button = ({
	children,
	href,
	variant = "secondary",
	size = "default",
}: ButtonProps) => {
	const Slot = href ? "a" : "button";
	return (
		<Slot
			type="button"
			href={href}
			className={clsx(
				"inline-flex gap-2 items-center justify-start text-[20px] leading-7 cursor-pointer rounded-[14px] py-[20px]",
				{
					"bg-theme-green text-black": variant === "primary",
					"bg-theme-black text-white": variant === "secondary",
					"px-[35px]": size === "default",
					"px-[76px]": size === "lg",
				},
			)}
		>
			{children}
		</Slot>
	);
};

export default Button;

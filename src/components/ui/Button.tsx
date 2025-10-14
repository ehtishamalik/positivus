import clsx from "clsx";

interface ButtonProps {
	children: React.ReactNode;
	href?: string;
	variant?: "primary" | "secondary";
}

const Button = ({ children, href, variant = "secondary" }: ButtonProps) => {
	const Slot = href ? "a" : "button";
	return (
		<Slot
			type="button"
			href={href}
			className={clsx(
				"inline-flex gap-2 items-center justify-start text-[20px] leading-7 cursor-pointer rounded-[14px] px-[35px] py-[20px]",
				{
					"bg-theme-green text-black": variant === "primary",
					"bg-theme-black text-white": variant === "secondary",
				},
			)}
		>
			{children}
		</Slot>
	);
};

export default Button;

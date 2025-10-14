interface ButtonProps {
	children: React.ReactNode;
	href?: string;
}

const Button = ({ children, href }: ButtonProps) => {
	const Slot = href ? "a" : "button";
	return (
		<Slot
			type="button"
			href={href}
			className="inline-flex gap-2 items-center justify-start bg-theme-black text-white text-[20px] leading-7 cursor-pointer rounded-[14px] px-[35px] py-[20px]"
		>
			{children}
		</Slot>
	);
};

export default Button;

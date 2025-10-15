import clsx from "clsx";

interface HeadingProps {
	children: React.ReactNode;
	title: string;
	className?: string;
	id?: string;
}

const Heading = ({ children, title, className, id }: HeadingProps) => {
	return (
		<section className="pb-20" id={id}>
			<div className="mx-container">
				<div className="flex items-center justify-start gap-10">
					<h2 className="bg-theme-green text-black text-[40px] font-medium p-2 rounded-md">
						{title}
					</h2>
					<p
						className={clsx(
							"font-normal text-lg text-black max-w-xl",
							className,
						)}
					>
						{children}
					</p>
				</div>
			</div>
		</section>
	);
};

export default Heading;

interface HeadingProps {
	children: React.ReactNode;
	title: string;
}

const Heading = ({ children, title }: HeadingProps) => {
	return (
		<section className="pb-20">
			<div className="mx-container">
				<div className="flex items-center justify-start gap-10">
					<h2 className="bg-theme-green text-black text-[40px] font-medium p-2 rounded-md">
						{title}
					</h2>
					<p className="font-normal text-lg text-black max-w-xl">{children}</p>
				</div>
			</div>
		</section>
	);
};

export default Heading;

import Button from "./ui/Button";

const CTA = () => {
	return (
		<section className="pb-20">
			<div className="mx-container">
				<div className="py-6">
					<div className="rounded-[45px] p-[60px] gap-[275px] bg-theme-gray grid grid-cols-2 items-center">
						<div className="space-y-[26px]">
							<h3 className="text-3xl font-medium">Let’s make things happen</h3>
							<p className="leading-[1.2] text-lg">
								Contact us today to learn more about how our digital marketing
								services can help your business grow and succeed online.
							</p>
							<Button>Get your free proposal</Button>
						</div>
						<div className="size-full flex items-center justify-center">
							<div className="relative w-full">
								<div className="absolute z-10 top-1/2 -translate-y-1/2 left-[90px]">
									<div className="relative">
										<img src="/cta/circle-black.svg" alt="Circle Black" />
										<img
											src="/cta/eye.svg"
											alt="Eye"
											className="absolute top-6 left-8"
										/>
										<img
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
									className="absolute -bottom-5 right-20"
								/>
								<img
									src="/cta/star-gray.svg"
									alt="Star Gray"
									className="absolute right-16"
								/>
								<img
									src="/cta/star-green.svg"
									alt="Star Green"
									className="absolute top-20 left-16"
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

import { useId } from "react";
import Heading from "./Heading";
import Button from "./ui/Button";

const Contact = () => {
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();
	return (
		<>
			<Heading title="Contact Us" className="!max-w-[323px]" id="contact-us">
				Connect with Us: Let's Discuss Your Digital Marketing Needs
			</Heading>
			<section className="mb-[140px]">
				<div className="mx-container">
					<div className="relative overflow-hidden rounded-[45px] pt-[60px] pb-[80px] px-[100px] bg-theme-gray">
						<img
							src="/contact/star-black.svg"
							alt="Illustration"
							className="absolute z-10 right-16 top-1/2 -translate-y-1/2"
						/>
						<img
							src="/contact/star-green.svg"
							alt="Illustration"
							className="absolute right-44 bottom-10"
						/>
						<img
							src="/contact/star-holo.svg"
							alt="Illustration"
							className="absolute -right-80 top-1/2 -translate-y-1/2 scale-85"
						/>
						<div className="flex justify-start">
							<div className="max-w-xl w-full">
								<div></div>
								<form className="space-y-[25px]">
									<div className="flex flex-col gap-[5px]">
										<label htmlFor={nameId}>Name</label>
										<input
											type="text"
											id={nameId}
											placeholder="Name"
											disabled
											className="py-[18px] px-[30px] rounded-[14px] bg-white border border-theme-black"
										/>
									</div>
									<div className="flex flex-col gap-[5px]">
										<label htmlFor={emailId}>Email*</label>
										<input
											type="email"
											id={emailId}
											placeholder="Email"
											disabled
											className="py-[18px] px-[30px] rounded-[14px] bg-white border border-theme-black"
										/>
									</div>
									<div className="flex flex-col gap-[5px]">
										<label htmlFor={messageId}>Message*</label>
										<textarea
											id={messageId}
											placeholder="Message"
											minLength={1}
											disabled
											className="min-h-[190px] py-[18px] px-[30px] rounded-[14px] bg-white border border-theme-black"
										/>
									</div>
									<Button
										className="w-full !justify-center"
										href="https://www.upwork.com/freelancers/~01244186faa3053ffe"
									>
										Send Message
									</Button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;

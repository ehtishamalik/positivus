import Button from "./ui/Button";

import { NavItems } from "../constants";
import clsx from "clsx";

const Footer = () => {
	return (
		<footer>
			<div className="mx-container">
				<div className="bg-theme-black text-white rounded-tl-[45px] rounded-tr-[45px] py-[55px] px-[60px]">
					<div className="flex items-center justify-between mb-[66px]">
						<img src="/icons/logo-white.svg" alt="Logo" height={29} />
						<ol className="flex items-center gap-10">
							{NavItems.map((link) => (
								<li key={link.name}>
									<a
										href={link.href}
										className={clsx(
											"relative inline-block",
											"after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:bg-white after:transition-transform after:scale-x-0 after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left",
										)}
									>
										{link.name}
									</a>
								</li>
							))}
						</ol>
						<ol className="flex items-center gap-5">
							<li>
								<img src="/icons/linkedin.svg" alt="LinkedIn" />
							</li>
							<li>
								<img src="/icons/facebook.svg" alt="Facebook" />
							</li>
							<li>
								<img src="/icons/twitter.svg" alt="Twitter" />
							</li>
						</ol>
					</div>

					<div className="grid grid-cols-[1fr_2fr] gap-40 mb-[50px]">
						<div className="space-y-5 max-w-xs">
							<h5 className="bg-theme-green text-black inline-block p-1.5 rounded-md">
								Contact us:
							</h5>
							<p>Email: info@demo.com</p>
							<p>Phone: 555-000-0000</p>
							<p>Address: 0000 Main St Moonstone City, Stardust State 00000</p>
						</div>
						<form className="bg-white/5 rounded-[14px] py-14 px-10 flex items-center gap-5">
							<input
								type="email"
								defaultValue="Email"
								className="border border-white py-[22px] px-[35px] rounded-[14px]"
								disabled
							/>
							<Button variant="primary">Subscribe to news</Button>
						</form>
					</div>

					<div className="flex items-center gap-10 pt-[50px] border-t border-t-white">
						<p>
							&copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
						</p>
						<a
							href="#privacy-policy"
							className={clsx(
								"relative inline-block",
								"after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300  hover:after:scale-x-100",
							)}
						>
							Privacy Policy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

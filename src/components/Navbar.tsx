import clsx from "clsx";
import Logo from "/icons/logo.svg";

import { NavItems } from "../constants";

const Navbar = () => {
	return (
		<nav className="pt-[60px]">
			<div className="mx-container">
				<div className="flex items-center justify-between">
					<img src={Logo} alt="logo" height={56} className="h-14" />
					<ol className="flex items-center gap-10">
						{NavItems.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className={clsx(
										"inline-block text-xl font-normal leading-7 text-black underline-offset-4 transition-transform",
										"hover:underline",
										"active:scale-95",
									)}
								>
									{link.name}
								</a>
							</li>
						))}
						<li>
							<a
								href="https://www.upwork.com/freelancers/~01244186faa3053ffe"
								target="_blank"
								rel="noreferrer noopener"
								className={clsx(
									"inline-block text-xl font-normal leading-7 px-[35px] py-5 rounded-[14px] border border-theme-black text-black transition-transform",
									"active:scale-95",
								)}
							>
								Request a Quote
							</a>
						</li>
					</ol>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

import Logo from "/icons/logo.svg";

const links = [
	{ name: "About Us", href: "#about" },
	{ name: "Services", href: "#services" },
	{ name: "Use Cases", href: "#use-cases" },
	{ name: "Pricing", href: "#pricing" },
	{ name: "Blog", href: "#blog" },
];

const Navbar = () => {
	return (
		<nav className="pt-[60px]">
			<div className="mx-container">
				<div className="flex items-center justify-between">
					<img src={Logo} alt="logo" height={56} className="h-14" />
					<ol className="flex items-center gap-10">
						{links.map((link) => (
							<li key={link.name}>
								<a
									href={link.href}
									className="inline-block text-xl font-normal leading-7 text-black hover:underline underline-offset-4"
								>
									{link.name}
								</a>
							</li>
						))}
						<li>
							<a
								href="#quote"
								className="inline-block text-xl font-normal leading-7 px-[35px] py-5 rounded-[14px] border border-theme-black text-black"
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

import clsx from "clsx";
import Logo from "/icons/logo.svg";
import gsap from "gsap";

import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import { NavItems } from "../constants";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);

  const { y: currentScrollY } = useWindowScroll();

  useEffect(() => {
    if (currentScrollY < 100) {
      setIsNavVisible(true);
      navRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navRef.current?.classList.remove("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navRef.current?.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useGSAP(() => {
    gsap.to(navRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      scale: isNavVisible && currentScrollY > 100 ? 0.75 : 1,
      duration: 0.1,
      ease: "power4.inOut",
    });
  }, [isNavVisible, currentScrollY]);

  return (
    <nav
      className="mx-container py-4 fixed top-0 inset-x-0 z-50 bg-white transition-all"
      ref={navRef}
    >
      <div className="flex items-center justify-between">
        <img src={Logo} alt="logo" height={56} className="h-14" />
        <ol className="hidden xl:flex items-center gap-10">
          {NavItems.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={clsx(
                  "relative inline-block text-xl font-normal leading-7 text-black transition-transform",
                  "after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-theme-black after:transition-transform after:duration-300 hover:after:origin-bottom-left hover:after:scale-x-100"
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
                "active:scale-95"
              )}
            >
              Request a Quote
            </a>
          </li>
        </ol>
        <a
          href="https://www.upwork.com/freelancers/~01244186faa3053ffe"
          target="_blank"
          rel="noreferrer noopener"
          className={clsx(
            "text-base font-normal leading-7 px-2.5 py-1.5 rounded-md border border-theme-black text-black transition-transform",
            "active:scale-95",
            "hidden sm:inline-block xl:hidden"
          )}
        >
          Request a Quote
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

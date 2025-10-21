import Button from "./ui/Button";

import { NavItems } from "../constants";
import { cn } from "../lib/utils";

const Footer = () => {
  return (
    <footer>
      <div className="mx-container">
        <div className="bg-theme-black text-white rounded-t-[32px] lg:rounded-t-[45px] p-8 lg:py-[55px] lg:px-[60px]">
          <div className="flex items-center justify-between mb-[66px]">
            <img src="/icons/logo-white.svg" alt="Logo" height={29} />
            <ol className="items-center gap-5 xl:gap-10 hidden lg:flex">
              {NavItems.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={cn(
                      "relative inline-block",
                      "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:bg-white after:transition-transform after:scale-x-0 after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                    )}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ol>
            <ol className="items-center gap-5 hidden sm:flex">
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-4 sm:gap-6 md:gap-8 lg:gap-20 xl:gap-40 mb-[50px]">
            <div className="space-y-5 max-w-xs">
              <h5 className="bg-theme-green text-black inline-block p-1.5 rounded-md">
                Contact us:
              </h5>
              <p>Email: info@demo.com</p>
              <p>Phone: 555-000-0000</p>
              <p>Address: 0000 Main St Moonstone City, Stardust State 00000</p>
            </div>
            <form className="bg-white/5 rounded-[14px] py-10 md:py-14 px-4 sm:px-6 md:p-8 lg:px-10 flex flex-col xl:flex-row gap-3 md:gap-5">
              <input
                type="email"
                name="news-email"
                defaultValue="Email"
                className="border border-white py-[22px] px-[35px] rounded-[14px] flex-1"
                disabled
              />
              <Button
                variant="primary"
                className="!w-full xl:!w-fit !justify-center"
              >
                Subscribe to news
              </Button>
            </form>
          </div>

          <div className="flex gap-5 lg:gap-10 flex-col md:flex-row items-start pt-[50px] border-t border-t-white">
            <p>
              &copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
            </p>
            <a
              href="#privacy-policy"
              className={cn(
                "relative inline-block",
                "after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:origin-bottom-left after:scale-x-0 after:bg-white after:transition-transform after:duration-300  hover:after:scale-x-100"
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

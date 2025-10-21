import gsap from "gsap";
import ArrowBlack from "/icons/arrow-icon-black.svg";
import ArrowGreen from "/icons/arrow-icon-green.svg";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/utils";

interface CardProps {
  heading: string[];
  imageSrc: string;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
}

const Arrow = ({
  isHovered,
  variant,
}: {
  isHovered: boolean;
  variant: "primary" | "secondary" | "tertiary";
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const arrow1Ref = useRef<HTMLImageElement | null>(null);
  const arrow2Ref = useRef<HTMLImageElement | null>(null);

  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "power2.inOut" },
    });

    if (isHovered) {
      // Hover in — bring second arrow in, move first arrow out
      tl.to(arrow1Ref.current, { top: "-100%", left: "200%" }, 0).to(
        arrow2Ref.current,
        { top: "50%", left: "50%", xPercent: -50, yPercent: -50 },
        0
      );
    } else {
      // Hover out — reset both arrows
      tl.to(arrow1Ref.current, { top: "50%", left: "50%" }, 0).to(
        arrow2Ref.current,
        { top: "100%", left: "-100%", xPercent: 0, yPercent: 0 },
        0
      );
    }
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative size-6 md:size-8 lg:size-[41px] rounded-full p-1 md:p-2 lg:p-2.5 overflow-hidden",
        {
          "bg-theme-black": isPrimary || isSecondary,
          "bg-white": isTertiary,
        }
      )}
    >
      <img
        ref={arrow1Ref}
        src={isPrimary || isSecondary ? ArrowGreen : ArrowBlack}
        alt="Icon"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 md:size-4 lg:size-5"
      />
      <img
        ref={arrow2Ref}
        src={isPrimary || isSecondary ? ArrowGreen : ArrowBlack}
        alt="Icon"
        className="absolute top-full -left-full size-3 md:size-4 lg:size-5"
      />
    </div>
  );
};

const Card = ({ heading, imageSrc, href, variant }: CardProps) => {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";
  const isTertiary = variant === "tertiary";

  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "border border-theme-black h-full text-black shadow-[0px_5px_0px_0px] shadow-theme-black",
        "mx-rounded p-6 lg:p-8 xl:p-[50px]",
        {
          "bg-theme-green": isPrimary,
          "bg-theme-gray": isSecondary,
          "bg-theme-black": isTertiary,
        }
      )}
    >
      <div
        className={cn(
          "grid grid-cols-1 justify-items-start items-end",
          "lg:grid-cols-2",
          "gap-4 sm:gap-6 md:gap-10 lg:gap-12 xl:gap-16"
        )}
      >
        <h3 className="flex items-start flex-row lg:flex-col heading-3 gap-2 lg:gap-0 row-span-1 col-span-2 lg:col-span-1">
          {heading.map((line) => (
            <span
              key={line}
              className={cn("p-1 rounded-md", {
                "bg-white": isPrimary || isTertiary,
                "bg-theme-green": isSecondary,
              })}
            >
              {line}
            </span>
          ))}
        </h3>
        <img
          src={imageSrc}
          alt={heading[0]}
          className="object-contain hidden lg:block lg:row-span-2 size-24 sm:size-28 md:size-32 lg:size-36 xl:size-40"
        />
        <div
          className={cn(
            "inline-flex w-fit gap-4 items-center text-xl font-normal leading-7 cursor-pointer group",
            {
              "text-theme-black": isPrimary || isSecondary,
              "text-white": isTertiary,
            }
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Arrow isHovered={isHovered} variant={variant || "primary"} />
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              "relative inline-block transition-transform font-medium text-sm md:text-base lg:text-lg",
              "after:absolute after:-bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300",
              "group-hover:after:origin-bottom-left group-hover:after:scale-x-100",
              {
                "after:bg-theme-black": isPrimary || isSecondary,
                "after:bg-white": isTertiary,
              }
            )}
          >
            Learn More
          </a>
        </div>
        <img
          src={imageSrc}
          alt={heading[0]}
          className="object-contain block lg:hidden size-24 sm:size-28 md:size-32 lg:size-36 xl:size-40"
        />
      </div>
    </div>
  );
};

export default Card;

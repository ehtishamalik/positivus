import { cn } from "../lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  id?: string;
}

const Heading = ({ children, title, className, id }: HeadingProps) => {
  return (
    <section className="pb-10 sm:pb-12 md:pb-14 lg:pb-16 xl:pb-20" id={id}>
      <div className="mx-container">
        <div
          className={cn(
            "flex items-center flex-col text-center",
            "md:flex-row md:text-left",
            "gap-4 sm:gap-6 md:gap-10"
          )}
        >
          <h2 className="heading-2 bg-theme-green text-black p-2 rounded-md">
            {title}
          </h2>
          <p className={cn("paragraph-lg text-black max-w-xl", className)}>
            {children}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heading;

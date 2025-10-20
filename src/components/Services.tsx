import Heading from "./Heading";
import Card from "./ui/Card";
import SearchEngine from "/services/search-engine.svg";
import PayPerClick from "/services/pay-per-click.svg";
import SocialMedia from "/services/social-media.svg";
import EmailMarketing from "/services/email-marketing.svg";
import ContentCreation from "/services/content-creation.svg";
import Analytics from "/services/analytics-tracking.svg";

const services: {
  heading: string[];
  imageSrc: string;
  href: string;
  variant?: "primary" | "secondary" | "tertiary";
}[] = [
  {
    heading: ["Search engine", "optimization"],
    imageSrc: SearchEngine,
    href: "https://searchengineland.com/guide/what-is-seo",
    variant: "secondary",
  },
  {
    heading: ["Pay-per-click", "advertising"],
    imageSrc: PayPerClick,
    href: "https://searchengineland.com/guide/what-is-paid-search",
    variant: "primary",
  },
  {
    heading: ["Social Media", "Marketing"],
    imageSrc: SocialMedia,
    href: "https://searchengineland.com/what-is-social-media-marketing-389170",
    variant: "tertiary",
  },
  {
    heading: ["Email", "Marketing"],
    imageSrc: EmailMarketing,
    href: "https://searchengineland.com/email-marketing",
    variant: "secondary",
  },
  {
    heading: ["Content", "Creation"],
    imageSrc: ContentCreation,
    href: "https://searchengineland.com/guide/social-media-content-creation",
    variant: "primary",
  },
  {
    heading: ["Analytics and", "Tracking"],
    imageSrc: Analytics,
    href: "https://searchengineland.com/rethinking-the-funnel-with-llm-tracking-analytics-462523",
    variant: "tertiary",
  },
];

const Services = () => {
  return (
    <>
      <Heading title="Services" id="services">
        At our digital marketing agency, we offer a range of services to help
        businesses grow and succeed online. These services include:
      </Heading>
      <section className="mx-padding">
        <div className="mx-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
            {services.map((service) => (
              <Card key={service.imageSrc} {...service} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

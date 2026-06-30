import Heading from "./Heading";
import Button from "./ui/Button";

import { useId } from "react";

const Contact = () => {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();

  return (
    <>
      <Heading title="Contact Us" className="max-w-80.75!" id="contact-us">
        Connect with Us: Let's Discuss Your Digital Marketing Needs
      </Heading>
      <section className="mx-padding">
        <div className="mx-container">
          <div className="relative mx-rounded p-8 md:p-10 lg:pt-15 lg:pb-20 lg:px-25 bg-theme-gray">
            <div className="hidden lg:block">
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
            </div>
            <div className="flex justify-start">
              <div className="max-w-xl w-full">
                <div></div>
                <form className="space-y-6.25">
                  <div className="flex flex-col gap-1.25">
                    <label htmlFor={nameId}>Name</label>
                    <input
                      type="text"
                      id={nameId}
                      placeholder="Name"
                      disabled
                      className="py-4.5 px-7.5 rounded-[14px] bg-white border border-theme-black"
                    />
                  </div>
                  <div className="flex flex-col gap-1.25">
                    <label htmlFor={emailId}>Email*</label>
                    <input
                      type="email"
                      id={emailId}
                      placeholder="Email"
                      disabled
                      className="py-4.5 px-7.5 rounded-[14px] bg-white border border-theme-black"
                    />
                  </div>
                  <div className="flex flex-col gap-1.25">
                    <label htmlFor={messageId}>Message*</label>
                    <textarea
                      id={messageId}
                      placeholder="Message"
                      minLength={1}
                      disabled
                      className="min-h-47.5 py-4.5 px-7.5 rounded-[14px] bg-white border border-theme-black"
                    />
                  </div>
                  <Button
                    className="w-full justify-center!"
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

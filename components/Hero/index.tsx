"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   alert(`Thank you for subscribing, ${email}!`);
  // };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              {/* <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                ✨ Elevate Your Web Presence with Gifu
              </h4> */}
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Designing Your Future <span> </span>
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                 Online Presence
                </span>
              </h1>
              <p>
                Gifu LC specializes in innovative web solutions that bring your vision to life. Let’s build something extraordinary together!
              </p>

              <div className="mt-10">
                  {/* <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter your email address"
                    className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                  /> */}
                <Link href="https://cal.com/gifu-dev/30min">
                  <button
                    aria-label="Schedule Meeting button"
                    className="flex rounded-full bg-primary px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-primary-hover dark:bg-primary-dark dark:hover:bg-primary-hover"
                  >
                    Schedule Meeting
                  </button>
                </Link>

                {/* <p className="mt-5 text-black dark:text-white">
                  Stay updated with our latest design trends and tips.
                </p> */}
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <img
                  src="/images/hero/MOCKUP 5 transparent.png"
                  alt="Creative web design illustration"
                  width={700}
                  height={444}
                  className="rounded-lg shadow-lg object-cover object-center h-96px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

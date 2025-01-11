import { FormEvent, useState } from "react";
import Image from "next/image";
import { CompanyLinks, SocialMediaLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);

  const handleSubscribeForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!checked) {
      alert("Please agree to receive other notifications from Forcythe");
      return;
    }

    if (!email) {
      alert("Please enter your email address");
      return;
    }

    alert("You have successfully subscribed to Forcythe");
    console.log({ email, checked });
    setChecked(false);
    setEmail("");
  };

  return (
    <footer className="wrapper bg-secondary_background2 py-10">
      <div className="my-10 lg:grid lg:grid-cols-3">
        <form className="mb-10 max-w-lg lg:mb-0" onSubmit={handleSubscribeForm}>
          <div className="grid w-full grid-cols-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="col-span-3 rounded-s-full border border-white bg-transparent px-4 py-3 text-sm outline-none placeholder:text-[#79767D]"
              placeholder="Your Email Address"
            />
            <button className="custom-animate h-full rounded-e-full border border-l-0 border-white bg-white py-3 text-sm font-medium text-black hover:bg-[#064386] hover:text-white">
              Subscribe
            </button>
          </div>
          <div className="mt-5 flex items-center gap-3">
            <div
              className="flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-transparent"
              onClick={() => setChecked(!checked)}
            >
              {checked && <div className="h-2 w-2 rounded-full bg-white"></div>}
              <input
                type="checkbox"
                name="agreeReceive"
                id="agreeReceive"
                className="hidden"
                // checked={checked}
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
              />
            </div>
            <label htmlFor="agreeReceive" className="cursor-pointer text-sm">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </form>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-0 lg:col-span-2">
          <div className="md:col-span-2 md:pr-10 lg:pl-14">
            <Image
              priority
              src="/images/forcythe_logo.svg"
              alt="Forcythe logo"
              width="130"
              height="9"
              className="mb-5 md:mb-8"
            />
            <p className="text-base text-dark_grey">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden items-center gap-2 md:flex">
              {SocialMediaLinks.map((link) => (
                <Link
                  key={link.src}
                  href={link.href}
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-accent"
                >
                  <Image alt="social" width="20" height="20" src={link.src} />
                </Link>
              ))}
            </div>
          </div>
          <div className="lg:pl-10">
            <h3 className="mb-8 text-2xl font-bold">Company</h3>
            <ul className="flex flex-col gap-2">
              {CompanyLinks.map((link) => (
                <li
                  key={link.text}
                  className="text-base font-medium text-accent2"
                >
                  <a href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mx-auto mt-10 flex w-fit items-center gap-2 md:hidden">
              {SocialMediaLinks.map((link) => (
                <a
                  key={link.src}
                  target="_blank"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border-[1px] border-accent"
                  href={link.href}
                ></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t-[1px] border-accent">
        <p className="mt-5 text-center text-sm text-accent2 md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
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
    <footer className="wrapper py-10 bg-secondary_background2">
      <div className="lg:grid lg:grid-cols-3 my-10">
        <form className="max-w-lg mb-10 lg:mb-0" onSubmit={handleSubscribeForm}>
          <div className="w-full grid grid-cols-4">
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-3 col-span-3 bg-transparent outline-none border border-white rounded-s-full px-4 text-sm placeholder:text-[#79767D]"
              placeholder="Your Email Address"
            />
            <button className="py-3 h-full bg-white text-black hover:bg-[#064386] hover:text-white custom-animate rounded-e-full text-sm font-medium border border-l-0 border-white">
              Subscribe
            </button>
          </div>
          <div className="flex gap-3 mt-5 items-center">
            <div
              className="w-5 h-5 border-2 rounded-full bg-transparent border-white cursor-pointer flex items-center justify-center"
              onClick={() => setChecked(!checked)}>
              {checked && <div className="bg-white rounded-full w-2 h-2"></div>}
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
            <label htmlFor="agreeReceive" className="text-sm cursor-pointer">
              I agree to receive other notifications from Forcythe
            </label>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:col-span-2 gap-10 md:gap-0">
          <div className="lg:pl-14 md:col-span-2 md:pr-10">
            <Image
              priority
              src="/images/forcythe_logo.svg"
              alt="Forcythe logo"
              width="130"
              height="9"
              className="mb-5 md:mb-8"
            />
            <p className="text-base text-darkGrey leadin font-normal">
              We are the growth company for businesses looking to scale. We are
              dedicated to transforming businesses with bespoke digital
              solutions that drive growth.
            </p>
            <div className="mt-10 hidden md:flex items-center gap-2">
              {SocialMediaLinks.map((link) => (
                <Link
                  key={link.src}
                  href={link.href}
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center">
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
                  className="text-base text-accent2 font-medium">
                  <a href={link.href}>
                    <span>{link.text}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex md:hidden items-center gap-2 w-fit mx-auto">
              {SocialMediaLinks.map((link) => (
                <a
                  key={link.src}
                  target="_blank"
                  className="w-9 h-9 cursor-pointer rounded-full border-[1px] border-accent flex justify-center items-center"
                  href={link.href}></a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="copyright border-t-[1px] border-accent">
        <p className="text-accent2 text-sm mt-5 text-center md:text-left">
          Copyright © 2024 Forcythe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

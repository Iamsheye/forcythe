import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CompanyLinks } from "@/constants";
import Button from "../Button";

const NavLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/services#portfolio" },
  { name: "Studio", href: "/studio" },
  { name: "Foundation", href: "/foundation" },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackdrop, setShowBackdrop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 5) {
        setShowBackdrop(true);
      } else {
        setShowBackdrop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`wrapper w-full fixed top-0 left-0 py-[1.8rem] flex justify-between gap-10 items-center z-30 ${
          showBackdrop ? "backdrop-blur-md" : ""
        }`}>
        <div className="flex items-center gap-20">
          <Link href="/">
            <Image
              priority
              src="/images/forcythe_logo.svg"
              alt="Forcythe logo"
              width="150"
              height="10"
              className="w-28 sm:w-32 md:w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-base">
            {NavLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <Button>Book a call</Button>
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="menuBtn bg-white bg-opacity-10 rounded-md p-3 md:hidden cursor-pointer">
          <Image
            priority
            src="/images/menu.svg"
            alt="menu"
            width="18"
            height="18"
          />
        </button>
      </header>

      {showMenu && (
        <div className="flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone z-[999999999] bg-primaryBackground w-60 rounded-[2rem] fixed md:hidden right-5 top-28">
          <div className="text-white z-10 bg-transparent rounded-[inherit] w-full">
            <div className="w-full p-5 py-8 rounded-[2rem] bg-menu">
              <ul className="flex flex-col">
                {CompanyLinks.map((link) => (
                  <li key={link.text} className="w-full py-2.5">
                    <Link href={link.href} className="w-full text-base py-3">
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit] w-full h-full blur-[2px]"
            style={{
              background: `radial-gradient(16.6471% 42.0745% at 95.0091% 53.434%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}></div>
          <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[inherit]"></div>
        </div>
      )}
    </>
  );
};

export default Header;

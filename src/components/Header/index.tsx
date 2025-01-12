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
        className={`wrapper fixed left-0 top-0 z-30 flex w-full items-center justify-between gap-10 py-[1.8rem] ${
          showBackdrop ? "backdrop-blur-md" : ""
        }`}
      >
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

          <nav className="hidden items-center gap-4 text-base md:flex">
            {NavLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:block">
          <Button>Book a Call</Button>
        </div>

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="cursor-pointer rounded-md bg-white bg-opacity-10 p-3 md:hidden"
        >
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
        <div className="fixed right-5 top-28 z-[999999999] flex h-min w-60 flex-col flex-nowrap items-center justify-center gap-10 overflow-visible rounded-[2rem] border-0 bg-primary_background decoration-clone p-px transition duration-500 md:hidden">
          <div className="z-10 w-full rounded-[inherit] bg-transparent text-white">
            <div className="w-full rounded-[2rem] bg-menu p-5 py-8">
              <ul className="flex flex-col">
                {CompanyLinks.map((link) => (
                  <li key={link.text} className="w-full py-2.5">
                    <Link href={link.href} className="w-full py-3 text-base">
                      <span>{link.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="absolute inset-0 z-0 h-full w-full flex-none overflow-hidden rounded-[inherit] blur-[2px]"
            style={{
              background: `radial-gradient(16.6471% 42.0745% at 95.0091% 53.434%, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)`,
            }}
          ></div>
          <div className="z-1 absolute inset-[2px] flex-none rounded-[inherit] bg-black"></div>
        </div>
      )}
    </>
  );
};

export default Header;

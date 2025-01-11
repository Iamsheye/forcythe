import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { WritingCards } from "@/constants";
import Button from "../Button";

const Writings = () => {
  const writingsRef = useRef<HTMLDivElement | null>(null);
  const readTextRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      if (!writingsRef.current) return;
      if (!readTextRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const words = new SplitType(readTextRef.current, {
        types: "words,chars",
      });

      gsap.set(words.words, { autoAlpha: 0 });

      gsap.to(words.words, {
        duration: 0.75,
        stagger: 0.25,
        autoAlpha: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: writingsRef.current,
          start: "top bottom",
        },
      });
    },
    {
      dependencies: [],
      scope: writingsRef.current!,
    },
  );

  return (
    <div className="wrapper my-10 lg:mb-24" ref={writingsRef}>
      <div className="mb-12 flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <p
            ref={readTextRef}
            className="mb-6 text-[2rem] leading-[2.5rem] sm:mb-4 sm:text-[2.2rem] sm:leading-[2.5rem] md:mb-0 lg:text-[2.6rem] lg:leading-[3rem]"
          >
            Read our articles, news and product blog
          </p>
        </div>
        <Button hasArrow>Visit Blog</Button>
      </div>

      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3 lg:gap-12">
        {WritingCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group relative w-full cursor-pointer overflow-hidden rounded-[1.3rem] pb-5 transition-all duration-500 hover:shadow-sm hover:shadow-accent"
          >
            <div className="relative mb-6 h-60 sm:h-56">
              <div className="absolute left-0 top-0 z-0 h-full w-full animate-pulse rounded-[1.3rem] bg-accent bg-opacity-10"></div>
              <Image
                layout="fill"
                className="h-full w-full transform rounded-[1.3rem] object-cover transition-transform duration-300 group-hover:scale-105"
                src={card.src}
                alt={card.title}
              />
            </div>

            <div className="custom-animate relative pl-5 before:absolute before:left-0 before:top-[50%] before:h-[90%] before:w-[1px] before:-translate-y-[50%] before:bg-white group-hover:translate-x-4">
              <p className="mb-1 text-lg font-semibold">{card.type}</p>
              <div className="mb-6 flex items-center text-base text-dark_grey">
                <span>{card.category}</span>
                <div className="mx-[6px] h-2 w-2 rounded-full bg-white"></div>
                <span>{card.date}</span>
              </div>
              <h6 className="line-clamp-2 text-xl font-semibold md:text-2xl">
                {card.title}
              </h6>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Writings;

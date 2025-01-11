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
    }
  );

  return (
    <div className="wrapper my-10 lg:mb-24" ref={writingsRef}>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
        <div>
          <p
            ref={readTextRef}
            className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-6 sm:mb-4 md:mb-0">
            Read our articles, news and product blog
          </p>
        </div>
        <Button hasArrow>Visit Blog</Button>
      </div>

      <div className="blogs grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
        {WritingCards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="w-full pb-5 rounded-[1.3rem] relative overflow-hidden cursor-pointer group hover:shadow-sm hover:shadow-accent transition-all duration-500">
            <div className="h-60 sm:h-56 relative mb-6">
              <div className="bg-accent z-0 w-full h-full absolute top-0 left-0 bg-opacity-10 rounded-[1.3rem] animate-pulse"></div>
              <Image
                layout="fill"
                className="object-cover w-full h-full rounded-[1.3rem] transition-transform duration-300 transform group-hover:scale-105"
                src={card.src}
                alt={card.title}
              />
            </div>

            <div className="pl-5 relative before:absolute before:w-[1px] before:h-[90%] before:bg-white before:left-0 before:top-[50%] before:-translate-y-[50%] group-hover:translate-x-4 custom-animate">
              <p className="text-lg font-semibold mb-1">{card.type}</p>
              <div className="text-base text-dark_grey flex items-center mb-6">
                <span>{card.category}</span>
                <div className="h-2 w-2 rounded-full bg-white mx-[6px] "></div>
                <span>{card.date}</span>
              </div>
              <h6 className="text-xl md:text-2xl font-semibold line-clamp-2">
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

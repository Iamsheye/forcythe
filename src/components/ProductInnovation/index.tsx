import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { ProductInnovationCards } from "@/constants";

const ProductInnovation = () => {
  const bestCallRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (!bestCallRef.current) return;

      const words = new SplitType(bestCallRef.current, {
        types: "words,chars",
      });

      const cardTexts = document.querySelectorAll(".cardText");

      cardTexts.forEach((cardText) => {
        const words = new SplitType(cardText as HTMLElement, {
          types: "words,chars",
        });

        gsap.set(words.words, { autoAlpha: 0 });

        gsap.to(words.words, {
          duration: 0.75,
          stagger: 0.25,
          autoAlpha: 1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: cardText,
            start: "top bottom",
          },
        });
      });

      gsap.set(words.words, { autoAlpha: 0 });
      gsap.to(words.words, {
        duration: 0.75,
        stagger: 0.25,
        autoAlpha: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: bestCallRef.current,
          start: "top bottom",
        },
      });
    },
    {
      dependencies: [],
    },
  );

  return (
    <div className="wrapper bg-productInnovation py-14">
      <div>
        <p
          ref={bestCallRef}
          className="mb-10 text-center text-[2rem] leading-[2.5rem] text-accent2 sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]"
        >
          Your best call for B2B/B2C product innovation
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 md:gap-8">
        {ProductInnovationCards.map((card) => (
          <div
            key={card.title}
            className="relative flex h-min w-fit flex-col flex-nowrap items-center justify-center gap-10 overflow-visible rounded-2xl border-0 decoration-clone p-px text-left transition duration-500"
          >
            <div className="z-10 w-auto rounded-[inherit] bg-transparent text-white">
              <div className="custom-animate w-full rounded-2xl bg-primary_background p-8 hover:shadow-dark_grey sm:p-10">
                <div className="mb-5 w-fit rounded-md bg-accent bg-opacity-60 p-2">
                  <Image
                    alt={card.title}
                    width={30}
                    height={30}
                    src="/images/layers.svg"
                  />
                </div>
                <h4 className="mb-5 text-2xl font-medium">{card.title}</h4>
                <div>
                  <p className="cardText mb-0 text-[17.5px] text-dark_grey">
                    {card.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInnovation;

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
    }
  );

  return (
    <div className="wrapper py-14 bg-productInnovation">
      <div>
        <p
          ref={bestCallRef}
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem] mb-10 text-accent2 text-center">
          Your best call for B2B/B2C product innovation
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 md:gap-8">
        {ProductInnovationCards.map((card) => (
          <div
            key={card.title}
            className="relative flex border-0 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit rounded-2xl text-left">
            <div className="w-auto text-white z-10 bg-transparent rounded-[inherit]">
              <div className="w-full bg-[#030516] rounded-2xl p-8 sm:p-10 hover:shadow-dark_grey custom-animate">
                <div className="w-fit p-2 bg-[#60A6E7] bg-opacity-60 rounded-md mb-5">
                  <Image
                    alt={card.title}
                    width={30}
                    height={30}
                    src="/images/layers.svg"
                  />
                </div>
                <h4 className="text-2xl font-medium mb-5">{card.title}</h4>
                <div>
                  <p className="cardText mb-0 text-dark_grey text-[17.5px]">
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

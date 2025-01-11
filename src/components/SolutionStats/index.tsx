import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import { Stats } from "@/constants";
import TextScramble from "../TextScramble";

const SolutionStats = () => {
  const textRef = useRef<HTMLParagraphElement | null>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const words = new SplitType(textRef.current, {
        types: "words,chars",
      });

      gsap.set(words.words, { autoAlpha: 0 });

      gsap.to(words.words, {
        duration: 0.75,
        stagger: 0.25,
        autoAlpha: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top bottom",
        },
      });
    },
    {
      dependencies: [],
    },
  );

  return (
    <div className="bg-solutionStats py-14 md:py-20 xl:py-28">
      <div className="mx-auto max-w-[52rem] bg-[url('/images/arc.svg')] bg-cover bg-top bg-no-repeat md:bg-contain lg:bg-[url('/images/arc-L.svg')] lg:bg-contain">
        <div className="mx-auto max-w-xl px-5 pb-10 pt-20 text-center sm:pt-40 md:pb-14 lg:pb-20 lg:pt-60">
          <div className="mx-auto mb-14 max-w-[19rem] md:max-w-md lg:mb-20">
            <div>
              <p
                ref={textRef}
                className="text-xl font-medium md:text-2xl lg:text-3xl"
              >
                We build solutions that help{" "}
                <span className="text-accent">businesses</span> of all sizes to{" "}
                <span className="text-accent">scale</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-evenly gap-3 sm:justify-between">
            {Stats.map((stat) => (
              <div
                key={stat.text}
                className="flex w-fit flex-col gap-3 text-left"
              >
                <div className="text-[1.7rem] font-medium text-accent sm:text-[2rem] md:text-[3rem]">
                  <TextScramble text={stat.number} />+
                </div>
                <span className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[15px] sm:text-base md:text-lg">
                  {stat.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionStats;

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
    }
  );

  return (
    <div className="py-14 md:py-20 xl:py-28 bg-solutionStats">
      <div className="max-w-[52rem] mx-auto bg-[url('/images/arc.svg')] lg:bg-[url('/images/arc-L.svg')] bg-cover md:bg-contain lg:bg-contain bg-top bg-no-repeat">
        <div className="pt-20 sm:pt-40 lg:pt-60 pb-10 md:pb-14 lg:pb-20 max-w-xl mx-auto text-center px-5">
          <div className="mb-14 lg:mb-20 max-w-[19rem] md:max-w-md mx-auto">
            <div>
              <p
                ref={textRef}
                className="text-xl md:text-2xl lg:text-3xl font-medium">
                We build solutions that help{" "}
                <span className="text-accent">businesses</span> of all sizes to{" "}
                <span className="text-accent">scale</span>
              </p>
            </div>
          </div>

          <div className="flex justify-evenly sm:justify-between items-center gap-3">
            {Stats.map((stat) => (
              <div
                key={stat.text}
                className="flex flex-col gap-3 text-left w-fit">
                <div className="text-[1.7rem] sm:text-[2rem] md:text-[3rem] text-accent font-medium">
                  <TextScramble text={stat.number} />+
                </div>
                <span className="text-[15px] sm:text-base md:text-lg whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
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

import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import Button from "../Button";
import { Steps } from "@/constants";

const ProductSteps = () => {
  const productStepsRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);

  const [activeStep, setActiveStep] = useState(0);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const titleText = new SplitType("#title-text", {
        types: "words,chars",
      });

      gsap.from(titleText.chars, {
        duration: 1,
        autoAlpha: 0,
        stagger: 0.0375,
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#title-text",
          start: "top 90%",
        },
      });
    },
    {
      dependencies: [],
      scope: productStepsRef.current!,
    },
  );

  useGSAP(
    () => {
      if (!textRef.current || !descRef.current) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#img-wrapper", {
        duration: 1.5,
        autoAlpha: 0.2,
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#img-wrapper",
          start: "top 75%",
        },
      });

      const textTitle = new SplitType(textRef.current, {
        types: "words,chars",
      });

      const textDesc = new SplitType(descRef.current, {
        types: "words,chars",
      });

      gsap.from([textTitle.words, textDesc.words], {
        duration: 0.75,
        autoAlpha: 0,
        stagger: 0.25,
        ease: "power4.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 95%",
        },
      });
    },
    {
      dependencies: [activeStep],
      scope: productStepsRef.current!,
    },
  );

  return (
    <div ref={productStepsRef} className="wrapper py-20">
      <div className="mb-12 max-w-[45rem] xl:mb-0">
        <p
          id="title-text"
          className="text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3rem]"
        >
          From <span className="text-accent">Spark</span> to{" "}
          <span className="text-accent">Spotlight:</span> we take you every step
          of the way to success.
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:items-end">
        <div className="mb-8 flex basis-1/2 md:mb-0">
          <div className="md:pr-10">
            <div className="mb-12 grid grid-cols-4 gap-1 rounded-full border-2 border-accent2 p-3.5">
              {Steps.map((step, index) => (
                <button
                  key={index}
                  className={`cursor-pointer overflow-hidden rounded-full px-2 py-3 text-center text-base font-medium transition-all duration-300 md:px-2.5 md:py-3.5 ${activeStep === index ? "bg-accent2 text-black" : "bg-transparent text-white"}`}
                  onClick={() => setActiveStep(index)}
                >
                  {step.title}
                </button>
              ))}
            </div>
            <p
              ref={textRef}
              className="mb-12 text-[1.8rem] font-[500] leading-8 sm:text-[2rem] sm:leading-8"
            >
              {Steps[activeStep].text}
            </p>

            <p
              ref={descRef}
              className="desc mb-8 text-base leading-7 text-dark_grey md:text-lg"
            >
              {Steps[activeStep].desc}
            </p>
            <Button hasArrow>Book a call</Button>
          </div>
        </div>
        <div
          id="img-wrapper"
          className="relative mt-6 flex basis-1/2 justify-start md:mt-0 md:justify-end"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)" }}
        >
          <Image
            priority
            alt="plan-img"
            src={Steps[activeStep].imgSrc}
            width={200}
            height={200}
            className="h-[350px] w-full md:h-[95%] md:w-[95%] lg:h-[426px] lg:w-[90%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductSteps;

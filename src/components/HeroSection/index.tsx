import { useRef } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Button from "../Button";
import { MarqueeImgs } from "@/constants";

const HeroSection = () => {
  const heroHeaderRef = useRef<HTMLHeadingElement | null>(null);
  const heroTextRef = useRef<HTMLParagraphElement | null>(null);
  const marqueeHeader = useRef<HTMLHeadingElement | null>(null);

  useGSAP(
    () => {
      if (
        !heroHeaderRef.current ||
        !heroTextRef.current ||
        !marqueeHeader.current
      )
        return;

      gsap.registerPlugin(ScrollTrigger);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top bottom",
        },
      });

      const heroHeader = new SplitType(heroHeaderRef.current, {
        types: "words,chars",
      });

      gsap.utils.toArray(heroHeader.chars).forEach((word) =>
        tl.from(word as HTMLElement, {
          duration: 0.14,
          autoAlpha: 0,
          ease: "power4.out",
        }),
      );

      const heroText = new SplitType(heroTextRef.current, {
        types: "words,chars",
      });

      tl.from(heroText.words, {
        duration: 5,
        autoAlpha: 0,
        stagger: 0.2,
        ease: "power4.out",
      });

      const marqueeText = new SplitType(marqueeHeader.current, {
        types: "words,chars",
      });

      tl.from(
        marqueeText.words,
        {
          duration: 1.5,
          autoAlpha: 0,
          stagger: 0.2,
          ease: "power4.out",
        },
        "<",
      );
    },
    {
      dependencies: [],
    },
  );

  return (
    <div
      id="hero"
      className="bg-[url('/images/header-background.svg')] bg-top bg-no-repeat md:min-h-screen"
    >
      <div className="wrapper">
        <div className="my-10 w-full rounded-[2rem] bg-white bg-opacity-10 p-5 py-8 sm:rounded-[3rem] md:p-8 lg:p-10">
          <div className="max-w-[56rem]">
            <div className="min-h-[180px]">
              <h1
                ref={heroHeaderRef}
                className="mb-7 text-[3.5rem] font-normal leading-[1] sm:text-[4rem] lg:text-[5rem]"
              >
                We build <span className="text-accent">products</span> that
                shape a better future
              </h1>
            </div>
            <div className="mb-8 max-w-3xl">
              <p
                ref={heroTextRef}
                className="mb-8 text-base leading-7 text-dark_grey md:text-lg"
              >
                We’re the architects of digital excellence across industries. We
                redefine business with cutting-edge digital strategies that
                invokes sector-wide transformation.
              </p>
            </div>
            <div className="mb-5">
              <Button hasArrow>Book a Call</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="min-h-[60px]">
          <p
            ref={marqueeHeader}
            className="mx-auto mb-12 max-w-[90%] text-center text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3rem]"
          >
            Success in <span className="text-accent">Motion</span> – Our
            clients’ journey
          </p>
        </div>

        <div className="bg-marqueeBg flex flex-col gap-5">
          <Marquee direction="left">
            <div className="ml-5 flex w-full items-stretch gap-5 overflow-hidden">
              {MarqueeImgs.map((img, i) => (
                <div key={i} className="relative h-[340px] w-auto">
                  <div className="absolute left-0 top-0 -z-10 h-full w-full animate-pulse bg-accent bg-opacity-10"></div>
                  <Image
                    alt={`Project Image ${i + 1}`}
                    height={100}
                    width={100}
                    className="h-full w-full overflow-hidden"
                    src={img.src}
                  />
                </div>
              ))}
            </div>
          </Marquee>
          <Marquee direction="right">
            <div className="ml-5 flex w-full items-stretch gap-5 overflow-hidden">
              {MarqueeImgs.map((img, i) => (
                <div key={i} className="relative h-[340px] w-auto">
                  <div className="absolute left-0 top-0 -z-10 h-full w-full animate-pulse bg-accent bg-opacity-10"></div>
                  <Image
                    alt={`Project Image ${i + 1}`}
                    height={100}
                    width={100}
                    className="h-full w-full overflow-hidden"
                    src={img.src}
                  />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

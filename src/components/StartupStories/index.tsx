import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { Stories } from "@/constants";

const StartupStories = () => {
  const headingRef = useRef<HTMLParagraphElement | null>(null);

  const [active, setActive] = useState(0);

  const cardStyle = (index: number) => {
    switch (index) {
      case 0:
        return "0px";
      case 1:
        return "20%";
      case 2:
        return "40%";
      case 3:
        return "30%";
      case 4:
        return "50%";
      default:
        return "0px";
    }
  };

  useGSAP(
    () => {
      if (!headingRef.current) return;

      gsap.registerPlugin(ScrollTrigger);

      const heading = new SplitType(headingRef.current, {
        types: "words,chars",
      });

      gsap.from(heading.words, {
        autoAlpha: 0,
        duration: 0.75,
        stagger: 0.25,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom",
        },
      });
    },
    {
      dependencies: [],
      scope: "#startupStories",
    },
  );

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from("#img-wrapper", {
        duration: 1.5,
        autoAlpha: 0.2,
        clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
        ease: "power4.out",
        scrollTrigger: {
          trigger: "#img-wrapper",
          start: "top 75%",
          end: "bottom top",
          markers: true,
        },
      });
    },
    {
      dependencies: [active],
      scope: "#startupStories",
    },
  );

  const currentStory = Stories[active];

  return (
    <div id="startupStories" className="wrapper py-10">
      <p
        ref={headingRef}
        className="mx-auto mb-12 max-w-4xl text-center text-[2rem] leading-[2.5rem] sm:text-[2.2rem] sm:leading-[2.5rem] lg:text-[2.6rem] lg:leading-[3.5rem]"
      >
        Discover the <span className="text-accent">transformative stories</span>{" "}
        of startups that scaled new heights with us
      </p>

      <div className="hide-scrollbar w-full overflow-x-scroll">
        <div className="grid w-full min-w-[750px] grid-cols-5 rounded-full border-[1px] border-[#06438C]">
          {Stories.map((story, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer p-[1.1rem] transition-all duration-300 first:rounded-l-full last:rounded-r-full ${
                active === index ? "bg-accent3" : ""
              }`}
              onClick={() => setActive(index)}
            >
              <div className="mx-auto flex h-full w-fit min-w-fit items-center justify-center gap-1.5 text-[17px] font-medium text-white">
                <Image
                  width={20}
                  height={20}
                  alt={story.company}
                  className={story.imgClassname || "w-full"}
                  src={story.img}
                />
                {story.tabName && story.tabName}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="bg-accent3 mt-5 flex w-full flex-col rounded-[1.8rem] p-5 sm:flex-row sm:p-7 md:w-[70%] lg:relative lg:w-[50%]"
        style={{
          left: cardStyle(active),
        }}
      >
        <div className="pr-3 sm:basis-[58%]">
          <p className="mb-4 text-base font-bold">{currentStory.company}</p>
          <p className="mb-3 text-base leading-7">{currentStory.about}</p>
          <p className="mb-4 text-[15px] font-semibold">{currentStory.user}</p>
        </div>

        <div className="relative mt-3 h-[24rem] w-full object-top sm:mt-0 sm:h-auto sm:w-auto sm:basis-[42%]">
          <div className="absolute left-0 top-0 z-0 h-full w-full animate-pulse rounded-xl bg-accent bg-opacity-10"></div>
          <div
            id="img-wrapper"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
            }}
          >
            <Image
              priority
              layout="fill"
              src={currentStory.userImg}
              alt={`${currentStory.user} - ${currentStory.company}`}
              className="relative rounded-xl object-top"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: "0px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupStories;

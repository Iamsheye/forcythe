import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface TextScrambleProps {
  text: string;
  duration?: number;
  scrambleSpeed?: number;
}

const TextScramble = ({
  text,
  duration = 1.25,
  scrambleSpeed = 0.0075,
}: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState(text);
  const textRef = useRef<HTMLSpanElement | null>(null);

  const scrambleText = (originalText: string): string => {
    const chars = "0123456789";

    return originalText
      .split("")
      .map((char) =>
        char === " " ? " " : chars[Math.floor(Math.random() * chars.length)]
      )
      .join("");
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (!textRef.current) return;

    let progress = 0;
    const scrambledChars = [...text];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top bottom",
      },
      onUpdate: () => {
        progress += scrambleSpeed;
        const interimText = scrambledChars.map((char) => {
          return Math.random() < progress || char === " "
            ? char
            : scrambleText(char)[0];
        });
        setDisplayText(interimText.join(""));
      },
      onComplete: () => setDisplayText(text),
    });

    tl.to(textRef.current, {
      opacity: 1,
      duration,
    });

    return () => {
      tl.kill();
    };
  });

  return <span ref={textRef}>{displayText}</span>;
};

export default TextScramble;

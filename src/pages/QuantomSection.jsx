// components/QuantomSection.tsx
import React, { useEffect, useRef } from "react";
import buildWithQuantom from "../../public/images/buildWithQuantom.svg";
import Image from "next/image";
import gsap from "gsap";
import rightUpVector from "../../public/images/upper-right-vector.svg";

const QuantomSection = () => {
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);
  const wheelRef = useRef(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    const arrowDiv = arrowDivRef.current;
    const arrow = arrowRef.current;

    gsap.to(wheelRef.current, {
      rotate: -360,
      duration: 6,
      repeat: -1,
      ease: "linear",
    });

    const handleEnter = () => {
      gsap.to(text, { color: "black", duration: 0.3 });
      gsap.to(arrowDiv, { width: 250, duration: 0.3 });
      gsap.to(arrow, { rotate: 49, duration: 0.4 });
    };

    const handleLeave = () => {
      gsap.to(text, { color: "white", duration: 0.3 });
      gsap.to(arrowDiv, { width: 57, duration: 0.5 });
      gsap.to(arrow, { rotate: 0, duration: 0.4 });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div className="flex flex-col xl:flex-row items-center justify-between gap-10 w-full">
      <div>
        <Image src={buildWithQuantom} alt="Build With Quantom" />
      </div>

      <div className="flex flex-col justify-between 2xl:w-[472px] max-w-full">
        <h1 className="text-[20px] text-white leading-[160%] custom-tracking">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>

        <div className="mt-10 w-[210px] h-[60px] relative ">
          <div
            ref={buttonRef}
            className="flex overflow-hidden border-2 border-[#D84315] rounded-[10px] bg-[#FF5722] relative cursor-pointer"
          >
            <div className="w-[151px] h-[56px] flex items-center justify-center z-20 bg-transparent">
              <span
                ref={textRef}
                className="text-white text-[16px] font-medium z-30"
              >
                Explore Now
              </span>
            </div>

            <div
              ref={arrowDivRef}
              className="bg-white h-[56px] absolute right-0 z-10 rounded-l-[10px] overflow-hidden"
              style={{ width: "57px" }}
            >
              <div className="absolute right-[18px] h-full flex items-center justify-center pointer-events-none">
                <Image
                  ref={arrowRef}
                  src={rightUpVector}
                  width={20}
                  height={23}
                  alt="Arrow Icon"
                  className="z-40"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantomSection;

import React, { useEffect, useRef } from "react";
import whatWeDoImg from "../../public/images/WhatWeDo.svg";
import Image from "next/image";
import robotImg from "../../public/images/whatWeDoRobot.svg";
import gsap from "gsap";
import rightUpVector from "../../public/images/upper-right-vector.svg";

const WhatWeDoSection = () => {
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
      gsap.fromTo(
        text,
        { color: "white" },
        { color: "black", duration: 0.3, ease: "none" }
      );

      gsap.fromTo(
        arrowDiv,
        { width: 57 },
        { width: 250, duration: 0.3, ease: "none" }
      );

      gsap.fromTo(arrow, { rotate: 0 }, { rotate: 49, duration: 0.4 });
    };

    const handleLeave = () => {
      gsap.fromTo(
        text,
        { color: "black" },
        { color: "white", duration: 0.3, ease: "none" }
      );

      gsap.fromTo(
        arrowDiv,
        { width: 250 },
        { width: 57, duration: 0.5, ease: "none" }
      );

      gsap.fromTo(arrow, { rotate: 49 }, { rotate: 0, duration: 0.4 });
    };

    button.addEventListener("mouseenter", handleEnter);
    button.addEventListener("mouseleave", handleLeave);

    return () => {
      button.removeEventListener("mouseenter", handleEnter);
      button.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <Image src={whatWeDoImg} />
          </div>
          <div>
            <div className="2xl:w-[562px]">
              <p className="text-[20px] text-white leading-[160%] custom-tracking">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="2xl:mt-[100px] relative">
        <div>
          <Image src={robotImg} className="rounded-4xl 3xl:w-full" />
        </div>

        <div className="2xl:w-[520px] absolute 2xl:top-[140px] 2xl:right-[100px]">
          <p className="text-[20px] 3xl:text-[28px] text-white leading-[160%] custom-tracking">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat
          </p>
          <div className="2xl:mt-[61px] 2xl:w-[210px] 2xl:h-[60px] relative">
            <div
              ref={buttonRef}
              className="flex overflow-hidden border-2 border-white 2xl:rounded-[10px] relative cursor-pointer"
            >
              <div className="bg-transparent 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center z-20">
                <span
                  ref={textRef}
                  className="text-white 2xl:text-[16px] font-medium z-30"
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
                    className="static-arrow z-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoSection;

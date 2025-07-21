"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import heroGuy from "../../public/images/hero-guy-img.png";
import NstepImg from "../../public/images/NSTEP.svg";
import solutionsImg from "../../public/images/Solutions.svg";
import rightUpVector from "../../public/images/upper-right-vector.svg";
import whiteBgBox from "../../public/images/white-bg-box.svg"
import gsap from "gsap";

const HeroSection = () => {
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
      <div className="flex justify-center items-center 2xl:mt-[202px]">
        <div className="">
          <div>
            <Image src={NstepImg} width={1101} height={300} />
          </div>
          <div className="mt-4">
            <Image src={solutionsImg} width={574} height={120} />
          </div>
        </div>
      </div>

      <div className="flex justify-between 2xl:w-[1200px] relative">
        <div className="w-[416px] mt-7">
          <h1 className="text-[20px]  text-white leading-[160%] custom-tracking">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </h1>

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

        <div>
          <div className="absolute 2xl:right-0 2xl:-top-10 z-50">
            <Image src={heroGuy} />
          </div>

          <div className="absolute 2xl:-right-[150px] 2xl:-bottom-[164px] z-0">
            <Image src={whiteBgBox} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import buildWithQuantom from "../../public/images/buildWithQuantom.svg";
import rightUpVector from "../../public/images/upper-right-vector.svg";

const QuantomSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const buttonContainerRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const text = textRef.current;
    const buttonWrap = buttonContainerRef.current;
    const button = buttonRef.current;

    // Set initial hidden state
    gsap.set([image, text, buttonWrap], { opacity: 0, y: 50 });

    // Observe container for entry
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([image, text, buttonWrap], {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    // Hover interaction
    const arrowDiv = arrowDivRef.current;
    const arrow = arrowRef.current;
    const handleEnter = () => {
      gsap.to(text, { color: "black", duration: 0.3 });
      gsap.to(button, { color: "black", duration: 0.3 });
      gsap.to(arrowDiv, { width: 250, duration: 0.3 });
      gsap.to(arrow, { rotate: 49, duration: 0.4 });
    };

    const handleLeave = () => {
      gsap.to(text, { color: "white", duration: 0.3 });
      gsap.to(button, { color: "white", duration: 0.3 });

      gsap.to(arrowDiv, { width: 57, duration: 0.5 });
      gsap.to(arrow, { rotate: 0, duration: 0.4 });
    };

    if (button) {
      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      observer.disconnect();
      if (button) {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col xl:flex-row items-center justify-between 2xl:space-x-52 w-full"
    >
      <div ref={imageRef}>
        <Image src={buildWithQuantom} alt="Build With Quantom" />
      </div>

      <div className="flex flex-col justify-between 2xl:w-[472px] max-w-full">
        <h1
          ref={textRef}
          className="text-[20px] text-white leading-[160%] custom-tracking"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>

        {/* <div
          ref={buttonContainerRef}
          className="mt-10 w-[210px] h-[60px] relative"
        >
          <div
            ref={buttonRef}
            className="flex overflow-hidden border-2 border-[#D84315] rounded-[10px] bg-[#FF5722] relative cursor-pointer"
          >
            <div className="w-[151px] h-[56px] flex items-center justify-center z-20 bg-transparent">
              <span className="text-white text-[16px] font-medium z-30">
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
        </div> */}

        <div className="lg-1080:mt-[45px] lg-1080:w-[180px] lg-1080:h-[50px] xl-1280:mt-[55px] xl-1280:w-[195px] xl-1280:h-[55px] 2xl:mt-[61px] 2xl:w-[210px] 2xl:h-[60px] relative">
          <div
            ref={buttonRef}
            className="flex overflow-hidden border-2 border-[#D84315] rounded-[10px] bg-[#FF5722] 2xl:rounded-[10px] relative cursor-pointer"
          >
            <div className="bg-transparent lg-1080:w-[125px] lg-1080:h-[46px] xl-1280:w-[140px] xl-1280:h-[51px] 2xl:w-[151px] 2xl:h-[] flex items-center justify-center z-20">
              <span
                ref={textRef}
                className="text-white lg-1080:text-[14px] xl-1280:text-[15px] 2xl:text-[16px] font-medium z-30"
              >
                Explore Now
              </span>
            </div>

            <div
              ref={arrowDivRef}
              className="bg-white lg-1080:h-[46px] xl-1280:h-[51px] h-[56px] absolute right-0 z-10 rounded-l-[10px] overflow-hidden"
              style={{ width: "57px" }}
            >
              <div className="absolute lg-1080:right-[16px] xl-1280:right-[17px] right-[18px] h-full flex items-center justify-center pointer-events-none">
                <Image
                  ref={arrowRef}
                  src={rightUpVector}
                  width={20}
                  height={23}
                  alt="Arrow Icon"
                  className="static-arrow z-40 lg-1080:w-[16px] lg-1080:h-[18px] xl-1280:w-[18px] xl-1280:h-[20px]"
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

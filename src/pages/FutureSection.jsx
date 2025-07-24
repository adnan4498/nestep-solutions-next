"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import theSvg from "../../public/images/The.png";
import futureSvg from "../../public/images/Future.svg";
import isSvg from "../../public/images/Is.svg";
import rareSvg from "../../public/images/Rare.svg";
import robotSvg from "../../public/images/robot-future.svg";
import redCenterBlur from "../../public/images/red-hero-center-blur.svg";
import redLeftBlur from "../../public/images/future-center-blur.svg";

const FutureSection = () => {
  const containerRef = useRef(null);
  const theRef = useRef(null);
  const futureRef = useRef(null);
  const isRef = useRef(null);
  const rareRef = useRef(null);
  const textRef = useRef(null);
  const robotRef = useRef(null);
  const blurCenterRef = useRef(null);
  const blurRightRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (
            theRef.current &&
            futureRef.current &&
            isRef.current &&
            rareRef.current &&
            textRef.current &&
            robotRef.current &&
            blurCenterRef.current &&
            blurRightRef.current
          ) {
            const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

            tl.from(theRef.current, { y: -50, opacity: 0 })
              .from(blurCenterRef.current, { scale: 0.5, opacity: 0 }, "-=0.8")
              .from(blurRightRef.current, { scale: 0.5, opacity: 0 }, "-=0.8")
              .from(textRef.current, { y: 30, opacity: 0 }, "-=0.6")
              .from(futureRef.current, { x: -100, opacity: 0 }, "-=0.4")
              .from(robotRef.current, { scale: 0.8, opacity: 0 }, "-=0.4")
              .from(isRef.current, { x: 100, opacity: 0 }, "-=0.4")
              .from(rareRef.current, { y: 50, opacity: 0 }, "-=0.2");

            gsap.to(robotRef.current, {
              y: 15,
              duration: 2.5,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1
            });

            gsap.to([blurCenterRef.current, blurRightRef.current], {
              scale: 1.03,
              opacity: 0.7,
              duration: 5,
              ease: "power1.inOut",
              yoyo: true,
              repeat: -1,
              stagger: 0.8
            });
          }
        }
      },
      { threshold: 0.05 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    const textElements = [theRef.current, futureRef.current, isRef.current, rareRef.current];
    textElements.forEach((el) => {
      if (el) {
        el.addEventListener("mouseenter", () => {
          gsap.to(el, { scale: 1.05, duration: 0.4, ease: "power2.out" });
        });
        el.addEventListener("mouseleave", () => {
          gsap.to(el, { scale: 1, duration: 0.4, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0"></div>

      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full">
          <div className="flex justify-between items-start mb-8">
            <div
              className="flex-shrink-0 z-10 absolute 2xl:left-[200px] cursor-pointer"
              ref={theRef}
            >
              <Image src={theSvg} alt="The" className="h-24 md:h-32 lg:h-40 w-auto" />
            </div>

            <div
              className="absolute z-0 2xl:w-[900px] 2xl:-top-10"
              ref={blurCenterRef}
            >
              <Image src={redCenterBlur} className="w-full h-full z-0" alt="" />
            </div>

            <div
              className="absolute z-0 2xl:w-[900px] 2xl:right-0 2xl:-top-10"
              ref={blurRightRef}
            >
              <Image src={redLeftBlur} className="w-full h-full z-0" alt="" />
            </div>

            <div
              className="ml-8 mt-4 absolute 2xl:right-[0px] 2xl:top-[50px] w-[562px]"
              ref={textRef}
            >
              <p className="text-[20px] text-white leading-[160%] custom-tracking">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="flex items-center 2xl:gap-[52px] mb-8 2xl:mt-[250px]">
            <div className="z-50 cursor-pointer" ref={futureRef}>
              <Image src={futureSvg} alt="Future" className="h-32 md:h-40 lg:h-48 w-auto" />
            </div>

            <div className="absolute 2xl:bottom-[250px] left-[100px] right-0 flex justify-center z-30">
              <div ref={robotRef} className="cursor-pointer">
                <Image
                  src={robotSvg}
                  alt="Central Element"
                  className="rounded-[80px] 2xl:w-[945.5052px] z-30"
                />
              </div>
            </div>

            <div className="flex-shrink-0 z-50 cursor-pointer" ref={isRef}>
              <Image src={isSvg} alt="Is" className="h-32 md:h-40 lg:h-48 w-auto z-50" />
            </div>
          </div>

          <div className="flex justify-end 2xl:mt-[100px] z-0" ref={rareRef}>
            <div className="flex-shrink-0 z-0 cursor-pointer">
              <Image src={rareSvg} alt="Rare" className="h-32 md:h-40 lg:h-48 w-auto z-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureSection;
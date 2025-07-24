// components/NewsAndUpdateSection.jsx

"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import newsUpdateImg from "../../public/images/NewsAndUpdate.svg";
import mobileImg from "../../public/images/mobileImg.svg";
import paintImg from "../../public/images/paintImg.svg";
import apartmentImg from "../../public/images/apartmentImg.svg";
import redLeftBlur from "../../public/images/future-center-blur.svg";

import lockIcon from "../../public/images/lock-image.svg";
import lockFirstLayer from "../../public/images/lock-gray-first-layer.svg";
import lockFirstLayer2 from "../../public/images/lock-gray-second-layer.svg";
import lockFirstLayer3 from "../../public/images/lock-gray-third-layer.svg";

import puzzleIcon from "../../public/images/puzzle-icon.svg";
import puzzleFirstLayer from "../../public/images/puzzle-gray-layer1.svg";
import puzzleSecondLayer from "../../public/images/puzzle-gray-layer2.svg";

import worldIcon from "../../public/images/world-icon.svg";
import worldFirstLayer from "../../public/images/world-gray-layer1.svg";
import worldSecondLayer from "../../public/images/world-gray-layer2.svg";

gsap.registerPlugin(ScrollTrigger);

const NewsAndUpdateSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const headingRefs = useRef([]);
  const paraRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.from(imageRef.current, {
      opacity: 0,
      y: 40,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
      },
    });

    gsap.from(headingRefs.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    gsap.from(paraRefs.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

    cardRefs.current.forEach((card) => {
      const shine = card?.querySelector(".hover-shine");
      if (!card || !shine) return;

      card.addEventListener("mouseenter", () => {
        gsap.to(card, {
          scale: 1.03,
          backgroundColor: "#1a1a1a",
          duration: 0.2,
          ease: "power2.out",
        });

        gsap.fromTo(
          shine,
          { x: "-100%" },
          {
            x: "100%",
            duration: 0.6,
            ease: "power2.inOut",
          }
        );
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          scale: 1,
          backgroundColor: "#141414",
          duration: 0.2,
          ease: "power2.out",
        });
      });
    });
  }, []);

  const setHeadingRef = (el) => {
    if (el && !headingRefs.current.includes(el)) headingRefs.current.push(el);
  };

  const setParaRef = (el) => {
    if (el && !paraRefs.current.includes(el)) paraRefs.current.push(el);
  };

  const setCardRef = (el, idx) => {
    if (el) cardRefs.current[idx] = el;
  };

  return (
    <div className="text-white relative" ref={containerRef}>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-shrink-0" ref={imageRef}>
          <Image src={newsUpdateImg} alt="News and Update" className="w-full" />
        </div>
        <div className="max-w-xl 2xl:w-[562px] z-40">
          <p className="text-[20px] leading-[160%] tracking-tight" ref={setParaRef}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>

      <div className="absolute z-0 2xl:w-[900px] 2xl:right-64 2xl:-bottom-44">
        <Image src={redLeftBlur} alt="" className="w-full h-full z-0" />
      </div>

      <section className="pt-24 z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[500px] z-40">
          {/* Card 1 */}
          <div
            ref={(el) => setCardRef(el, 0)}
            className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 row-span-2 flex flex-col gap-4 justify-between h-full z-40 relative overflow-hidden group"
          >
            <div className="hover-shine absolute pointer-events-none top-0 left-[-75%] w-[200%] h-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />

            <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40">
              <Image src={lockIcon} alt="Data Security" width={80} height={80} />
            </div>
            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[305px] z-20">
              <Image src={lockFirstLayer} alt="" />
            </div>
            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[255px] z-20">
              <Image src={lockFirstLayer2} alt="" />
            </div>
            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[204px] z-20">
              <Image src={lockFirstLayer3} alt="" />
            </div>
            <div className="flex flex-col gap-5">

            <h3 className="2xl:text-[24px] font-semibold leading-snug 2xl:mt-10" ref={setHeadingRef}>
              Your data is safe, always.
            </h3>
            <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking" ref={setParaRef}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            ref={(el) => setCardRef(el, 1)}
            className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex items-center 2xl:gap-24 3xl:gap-[300px] h-full z-40 relative overflow-hidden group"
          >
            <div className="hover-shine absolute pointer-events-none top-0 left-[-75%] w-[200%] h-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />

            <div className="2xl:flex 2xl:flex-col gap-3 2xl:w-[383px]">
              <h3 className="2xl:text-[30px] font-semibold leading-snug 2xl:mt-10" ref={setHeadingRef}>
                Customize your experience.
              </h3>
              <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking" ref={setParaRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40">
              <Image src={puzzleIcon} alt="Customize" width={72} height={72} />
            </div>
            <div className="absolute 2xl:right-[50px] z-20">
              <Image src={puzzleFirstLayer} alt="" />
            </div>
            <div className="absolute 2xl:right-[25px] z-20">
              <Image src={puzzleSecondLayer} alt="" />
            </div>
          </div>

          {/* Card 3 */}
          <div
            ref={(el) => setCardRef(el, 2)}
            className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex justify-between items-center 2xl:gap-24 h-full z-40 relative overflow-hidden group"
          >
            <div className="hover-shine absolute pointer-events-none top-0 left-[-75%] w-[200%] h-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />

            <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40 2xl:ml-[40px]">
              <Image src={worldIcon} alt="Customize" width={72} height={72} />
            </div>
            <div className="2xl:flex 2xl:flex-col gap-3 2xl:w-[348px]">
              <h3 className="2xl:text-[30px] font-semibold leading-snug 2xl:mt-10" ref={setHeadingRef}>
                Decentralized. Distributed. Always On.
              </h3>
              <p className="2xl:text-[17px] text-[#A1A1A1] leading-[140%] custom-tracking" ref={setParaRef}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="absolute 2xl:left-[35px] z-20">
              <Image src={worldFirstLayer} alt="" />
            </div>
            <div className="absolute 2xl:left-[10px] z-20">
              <Image src={worldSecondLayer} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndUpdateSection;

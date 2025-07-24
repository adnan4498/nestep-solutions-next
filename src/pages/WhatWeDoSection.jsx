import React, { useEffect, useRef } from "react";
import whatWeDoImg from "../../public/images/WhatWeDo.svg";
import Image from "next/image";
import robotImg from "../../public/images/whatWeDoRobot.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import rightUpVector from "../../public/images/upper-right-vector.svg";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const WhatWeDoSection = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const textRef = useRef(null);
  const arrowDivRef = useRef(null);
  const arrowRef = useRef(null);
  const wheelRef = useRef(null);
  const titleRef = useRef(null);
  const topTextRef = useRef(null);
  const bottomTextRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial states - hide text elements
      gsap.set([titleRef.current, topTextRef.current], {
        opacity: 0,
        y: 50
      });
      
      gsap.set(bottomTextRef.current, {
        opacity: 0,
        x: 50
      });

      // Text entrance animation timeline
      const textTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate text elements in sequence
      textTl
        .to(titleRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        })
        .to(topTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.6")
        .to(bottomTextRef.current, {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out"
        }, "-=0.4");

    }, containerRef);

    // Original wheel rotation and button hover animations
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

    if (button) {
      button.addEventListener("mouseenter", handleEnter);
      button.addEventListener("mouseleave", handleLeave);
    }

    return () => {
      ctx.revert();
      if (button) {
        button.removeEventListener("mouseenter", handleEnter);
        button.removeEventListener("mouseleave", handleLeave);
      }
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div>
        <div className="flex justify-between items-center">
          <div ref={titleRef}>
            <Image src={whatWeDoImg} alt="What We Do" />
          </div>
          <div>
            <div ref={topTextRef} className="2xl:w-[562px]">
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
          <Image src={robotImg} className="rounded-4xl 3xl:w-full" alt="Robot" />
        </div>

        <div className="2xl:w-[520px] absolute 2xl:top-[140px] 2xl:right-[100px]">
          <div ref={bottomTextRef}>
            <p className="text-[20px] 3xl:text-[28px] text-white leading-[160%] custom-tracking">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat
            </p>
          </div>
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
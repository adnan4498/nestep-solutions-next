"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import heroGuy from "../../public/images/hero-guy-img.png";
import heroSkeleton from "../../public/images/hero-skeleton.svg";
import NstepImg from "../../public/images/NSTEP.svg";
import solutionsImg from "../../public/images/Solutions.svg";
import rightUpVector from "../../public/images/upper-right-vector.svg";
import whiteBgBox from "../../public/images/white-bg-box.svg";
import whiteRectangle from "../../public/images/white-rectangle.svg";
import redRectangle from "../../public/images/red-rectangle.svg";
import redCenterBlur from "../../public/images/red-hero-center-blur.svg"

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
    <div className="px-[40]">
    <div className="relative overflow-hidden lg-1080:h-[900px] xl-1280:h-[1000px] 2xl:h-[1200px] z-40">
      <div className="flex justify-center items-center lg-1080:mt-[120px] xl-1280:mt-[160px] 2xl:mt-[202px]">
        <div className="z-30">
          <div className="">
            <Image src={NstepImg} width={1101} height={300} className="lg-1080:w-[800px] xl-1280:w-[950px] 2xl:w-[1100px] 3xl:w-[1500px]" />
          </div>
          <div className="mt-4 z-50">
            <Image src={solutionsImg} width={574} height={120} className="z-50 lg-1080:w-[450px] xl-1280:w-[500px] 2xl:w-[574px] 3xl:w-[630px]" />
          </div>
        </div>
      </div>

      <div className="absolute z-0 opacity-50 blur-2xl lg-1080:w-[650px] lg-1080:top-8 lg-1080:-left-10 xl-1280:w-[750px] xl-1280:top-8 xl-1280:-left-5 2xl:w-[900px] 2xl:top-10 2xl:-left-0 3xl:left-[150px]">
        <Image src={whiteRectangle} className="w-full h-full" />
      </div>

      <div className="absolute z-40 opacity-50 blur-2xl lg-1080:w-[650px] lg-1080:top-0 lg-1080:-right-16 xl-1280:w-[750px] xl-1280:top-0 xl-1280:-right-20 2xl:w-[900px] 2xl:top-0 2xl:-right-24 3xl:right-[100px]">
        <Image src={redRectangle} className="w-full h-full" />
      </div>

      <div className="absolute z-0 lg-1080:w-[650px] lg-1080:top-40 xl-1280:w-[750px] xl-1280:top-48 2xl:w-[900px] 2xl:top-60">
        <Image src={redCenterBlur} className="w-full h-full z-0" />
      </div>

      <div className="flex justify-between lg-1080:w-[900px] xl-1280:w-[1000px] 2xl:w-[1200px] relative">
        <div className="lg-1080:w-[320px] xl-1280:w-[370px] w-[416px] mt-7">
          <h1 className="lg-1080:text-[16px] xl-1280:text-[18px] text-[20px] text-white leading-[160%] custom-tracking">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </h1>

          <div className="lg-1080:mt-[45px] lg-1080:w-[180px] lg-1080:h-[50px] xl-1280:mt-[55px] xl-1280:w-[195px] xl-1280:h-[55px] 2xl:mt-[61px] 2xl:w-[210px] 2xl:h-[60px] relative">
            <div
              ref={buttonRef}
              className="flex overflow-hidden border-2 border-[#D84315] rounded-[10px] bg-[#FF5722] 2xl:rounded-[10px] relative cursor-pointer"
            >
              <div className="bg-transparent lg-1080:w-[125px] lg-1080:h-[46px] xl-1280:w-[140px] xl-1280:h-[51px] 2xl:w-[151px] 2xl:h-[56px] flex items-center justify-center z-20">
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

        {/* <div>
          <div className="absolute lg-1080:right-0 lg-1080:-top-8 xl-1280:right-0 xl-1280:-top-9 2xl:right-0 2xl:-top-10 z-50 3xl:-right-[150px]">
            <Image src={heroGuy} className="lg-1080:w-[400px] lg-1080:h-auto xl-1280:w-[450px] xl-1280:h-auto" />
          </div>

          <div className="absolute lg-1080:right-3 lg-1080:-top-10 xl-1280:right-3 xl-1280:-top-12 2xl:right-4 2xl:-top-14 z-50 3xl:-right-[150px]">
            <Image src={heroSkeleton} className="opacity-20 hover:opacity-100 transition-all ease-in-out duration-1100 lg-1080:w-[400px] lg-1080:h-auto xl-1280:w-[450px] xl-1280:h-auto" />
          </div>

          <div className="absolute lg-1080:-right-[100px] lg-1080:-bottom-[120px] xl-1280:-right-[125px] xl-1280:-bottom-[140px] 2xl:-right-[150px] 2xl:-bottom-[164px] 3xl:-bottom-[166px] z-0 3xl:-right-[310px]">
            <Image src={whiteBgBox} className="lg-1080:w-[300px] lg-1080:h-auto xl-1280:w-[350px] xl-1280:h-auto" />
          </div>
        </div> */}

         <div>
          <div className="absolute 2xl:right-0 2xl:-top-10 z-50 3xl:-right-[150px]">
            <Image src={heroGuy} />
          </div>

          <div className="absolute 2xl:right-4  2xl:-top-14 z-50  3xl:-right-[150px]">
            <Image src={heroSkeleton} className="opacity-20 hover:opacity-100 transition-all ease-in-out duration-1100" />
          </div>


          <div className="absolute 2xl:-right-[150px] 2xl:-bottom-[164px] 3xl:-bottom-[166px] z-0 3xl:-right-[310px]">
            <Image src={whiteBgBox} />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroSection;
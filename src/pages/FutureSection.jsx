import Image from "next/image";
import React from "react";
import theSvg from "../../public/images/The.png";
import futureSvg from "../../public/images/Future.svg";
import isSvg from "../../public/images/Is.svg";
import rareSvg from "../../public/images/Rare.svg";
import robotSvg from "../../public/images/robot-future.svg";

const FutureSection = () => {
  return (
    <div className="relative w-full min-h-screen  overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 "></div>

      {/* Main content container */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full">
          {/* Top section with "The" and Lorem text */}
          <div className="flex justify-between items-start mb-8 ">
            {/* The SVG */}
            <div className="flex-shrink-0 z-0 absolute 2xl:left-[200px]">
              <Image
                src={theSvg}
                alt="The"
                className="h-24 md:h-32 lg:h-40 w-auto"
              />
            </div>

            {/* Lorem ipsum text */}
            <div className=" ml-8 mt-4 absolute 2xl:right-[0px] 2xl:top-[50px] w-[562px]">
              <p className="text-[20px] text-white leading-[160%] custom-tracking">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          {/* Middle section with "Future" and center image */}
          <div className="flex items-center 2xl:gap-[52px] mb-8 2xl:mt-[250px]">
            {/* Future SVG */}
            <div className="z-50">
              <Image
                src={futureSvg}
                alt="Future"
                className="h-32 md:h-40 lg:h-48 w-auto"
              />
            </div>

            {/* Center circular image */}
            <div className="absolute 2xl:bottom-[250px] left-[100px] right-0 flex justify-center z-30">
              <div className="">
                <Image
                  src={robotSvg}
                  alt="Central Element"
                  className="rounded-[80px] 2xl:w-[945.5052px] z-30"
                />
              </div>
            </div>

            {/* Is SVG */}
            <div className="flex-shrink-0 z-50">
              <Image
                src={isSvg}
                alt="Is"
                className="h-32 md:h-40 lg:h-48 w-auto z-50"
              />
            </div>
          </div>

          {/* Bottom section with "Rare" */}
          <div className="flex justify-end 2xl:mt-[100px] z-0">
            <div className="flex-shrink-0 z-0">
              <Image
                src={rareSvg}
                alt="Rare"
                className="h-32 md:h-40 lg:h-48 w-auto z-0"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Additional atmospheric effects */}
      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div> */}
    </div>
  );
};

export default FutureSection;

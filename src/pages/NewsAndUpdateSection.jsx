// components/NewsAndUpdateSection.tsx

import React from "react";
import Image from "next/image";

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

import worldIcon from "../../public/images/world-icon.svg"
import worldFirstLayer from "../../public/images/world-gray-layer1.svg"
import worldSecondLayer from "../../public/images/world-gray-layer2.svg"

const NewsAndUpdateSection = () => {
  return (
    <div className="text-white relative">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-shrink-0">
          <Image src={newsUpdateImg} alt="News and Update" className="w-full" />
        </div>
        <div className="max-w-xl 2xl:w-[562px] z-40">
          <p className="text-[20px] leading-[160%] tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <div className="absolute z-0 2xl:w-[900px] 2xl:right-64 2xl:-bottom-44">
        <Image src={redLeftBlur} alt="" className="w-full h-full z-0" />
      </div>

      <section className="pt-24 z-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[500px] z-40">
          <div className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 row-span-2 flex flex-col gap-4 justify-between h-full z-40 ">
            <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40">
              <Image
                src={lockIcon}
                alt="Data Security"
                width={80}
                height={80}
              />
            </div>

            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[305px] z-20 ">
              <Image src={lockFirstLayer} />
            </div>

            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[255px] z-20">
              <Image src={lockFirstLayer2} />
            </div>

            <div className="absolute 2xl:-left-[0px] 2xl:bottom-[204px] z-20">
              <Image src={lockFirstLayer3} />
            </div>

            <h3 className="2xl:text-[24px] font-semibold leading-snug 2xl:mt-10">
              Your data is safe, always.
            </h3>
            <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col gap-6 z-40">
            <div className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex items-center 2xl:gap-24 3xl:gap-[300px] h-full z-40 ">
              <div className="2xl:flex 2xl:flex-col gap-3 2xl:w-[383px]">
                <h3 className="2xl:text-[30px] font-semibold leading-snug 2xl:mt-10">
                  Customize your experience.
                </h3>
                <p className="2xl:text-[20px] text-[#A1A1A1] leading-[140%] custom-tracking">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris
                </p>
              </div>

              <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40">
                <Image
                  src={puzzleIcon}
                  alt="Customize"
                  width={72}
                  height={72}
                />
              </div>

              <div className="absolute 2xl:right-[50px] z-20 ">
                <Image src={puzzleFirstLayer} />
              </div>

              <div className="absolute 2xl:right-[25px] z-20 ">
                <Image src={puzzleSecondLayer} />
              </div>
            </div>

            {/* Card 3 */}
            {/* <div className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex flex-col gap-4 h-full z-40">
              <div className="2xl:w-[96px] 2xl:h-[96px] rounded-full bg-gradient-to-br from-[#292929] to-[#141414] flex items-center justify-center shadow-[0px_4px_15px_rgba(255,255,255,0.1)]">
                <Image
                  src={apartmentImg}
                  alt="Decentralized"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="2xl:text-[24px] font-semibold leading-snug 2xl:mt-10">
                Decentralized. Distributed. Always On.
              </h3>
              <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div> */}

            <div className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex justify-between items-center 2xl:gap-24 h-full z-40 relative">
              <div className="2xl:w-[96px] 2xl:h-[96px] flex items-center justify-center relative z-40 2xl:ml-[40px]">
                <Image
                  src={worldIcon}
                  alt="Customize"
                  width={72}
                  height={72}
                />
              </div>

              <div className="2xl:flex 2xl:flex-col gap-3 2xl:w-[348px]">
                <h3 className="2xl:text-[30px] font-semibold leading-snug 2xl:mt-10">
                  Decentralized. Distributed. Always On.
                </h3>
                <p className="2xl:text-[20px] text-[#A1A1A1] leading-[140%] custom-tracking">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="absolute 2xl:left-[35px] z-20 ">
                <Image src={worldFirstLayer} />
              </div>

              <div className="absolute 2xl:left-[10px] z-20 ">
                <Image src={worldSecondLayer} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndUpdateSection;

import React from "react";
import Image from "next/image";

import whatWeServeImg from "../../public/images/WhatWeServe.svg";
import globeImg from "../../public/images/globeImg.svg";
import paintImg from "../../public/images/paintImg.svg";
import mobileImg from "../../public/images/mobileImg.svg";
import apartmentImg from "../../public/images/apartmentImg.svg";

const WhatWeDoServe = () => {
  const services = [
    {
      icon: globeImg,
      alt: "Buy and sell",
      title: "Buy and sell without middlemen",
      description:
        "Businesses use Quantum to build peer-to-peer marketplaces that are fast, secure, and free from middlemen.",
    },
    {
      icon: paintImg,
      alt: "Digital art",
      title: "Own and protect your digital art",
      description:
        "Artists and collectors use Quantum to create and trade digital art with proof of authenticity, powered by blockchain.",
    },
    {
      icon: mobileImg,
      alt: "One ID",
      title: "One ID for everything",
      description:
        "Quantum lets users create secure, portable digital IDs they can use across platforms—protecting privacy while enabling seamless access.",
    },
    {
      icon: apartmentImg,
      alt: "Share data",
      title: "Share data safely and quickly",
      description:
        "Quantum helps companies share sensitive data safely and instantly—across teams, partners, or borders.",
    },
  ];

  return (
    <div className="">
      <div className="py-16 ">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-shrink-0">
            <Image
              src={whatWeServeImg}
              alt="What we serve"
              className="w-full "
            />
          </div>
          <div className="text-white max-w-xl 2xl:w-[562px]">
            <p className="text-[20px] leading-[160%] tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </div>
        </div>
      </div>

      <section className="text-white pb-24 2xl:mt-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6">
          {services.map((service, index) => {
            const colSpanClass =
              index === 0 || index === 3 ? "lg:col-span-4" : "lg:col-span-6";

            return (
              <div
                key={index}
                className={`bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 relative overflow-hidden min-h-[220px] flex flex-col gap-4 w-full ${colSpanClass}`}
              >
                <div className="absolute top-0 left-[64px] right-0 h-px bg-[#292929]" />

                <div className="2xl:w-[96px] 2xl:h-[96px] rounded-full bg-gradient-to-br from-[#292929] to-[#141414] flex items-center justify-center shadow-[0px_4px_15px_rgba(255,255,255,0.1)]">
                  <Image
                    src={service.icon}
                    alt={service.alt}
                    width={48}
                    height={48}
                  />
                </div>

                <h3 className="2xl:text-[32px] font-semibold leading-snug 2xl:mt-10">
                  {service.title}
                </h3>
                <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default WhatWeDoServe;

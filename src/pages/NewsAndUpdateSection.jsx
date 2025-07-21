import React from "react";
import Image from "next/image";

import newsUpdateImg from "../../public/images/NewsAndUpdate.svg";
import mobileImg from "../../public/images/mobileImg.svg";
import paintImg from "../../public/images/paintImg.svg";
import apartmentImg from "../../public/images/apartmentImg.svg";

const updates = [
  {
    icon: mobileImg,
    alt: "Data Security",
    title: "Your data is safe, always.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: paintImg,
    alt: "Customize",
    title: "Customize your experience.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: apartmentImg,
    alt: "Decentralized",
    title: "Decentralized. Distributed. Always On.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const NewsAndUpdateSection = () => {
  return (
    <div className="text-white py-16">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-shrink-0">
          <Image src={newsUpdateImg} alt="News and Update" className="w-full" />
        </div>
        <div className="max-w-xl 2xl:w-[562px]">
          <p className="text-[20px] leading-[160%] tracking-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>

      <section className="pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:h-[500px]">
          <div className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 row-span-2 flex flex-col gap-4 justify-between h-full">
            <div className="absolute top-0 left-[64px] right-0 h-px bg-[#292929]" />
            <div className="2xl:w-[96px] 2xl:h-[96px] rounded-full bg-gradient-to-br from-[#292929] to-[#141414] flex items-center justify-center shadow-[0px_4px_15px_rgba(255,255,255,0.1)]">
              <Image src={updates[0].icon} alt={updates[0].alt} width={48} height={48} />
            </div>
            <h3 className="2xl:text-[24px] font-semibold leading-snug 2xl:mt-10">{updates[0].title}</h3>
            <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking">{updates[0].description}</p>
          </div>

          <div className="flex flex-col gap-6">
            {[updates[1], updates[2]].map((item, index) => (
              <div
                key={index}
                className="bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 flex flex-col gap-4 h-full"
              >
                <div className="2xl:w-[96px] 2xl:h-[96px] rounded-full bg-gradient-to-br from-[#292929] to-[#141414] flex items-center justify-center shadow-[0px_4px_15px_rgba(255,255,255,0.1)]">
                  <Image src={item.icon} alt={item.alt} width={48} height={48} />
                </div>
                <h3 className="2xl:text-[24px] font-semibold leading-snug 2xl:mt-10">{item.title}</h3>
                <p className="2xl:text-[18px] text-[#A1A1A1] leading-[140%] custom-tracking">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsAndUpdateSection;

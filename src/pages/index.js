import Image from "next/image";
import Navbar from "@/shared/Navbar";
import HeroSection from "./HeroSection";
import FutureSection from "./FutureSection";
import WhatWeDoSection from "./WhatWeDoSection";
import WhatWeDoServe from "./WhatWeDoServe";
import NewsAndUpdateSection from "./NewsAndUpdateSection";
import WhatUsersSaysSection from "./WhatUsersSaysSection";
import QuantomSection from "./QuantomSection";
import quantomRobot from "../../public/images/quantomRobot.svg";
import Footer from "@/shared/Footer";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

export default function Home() {
  return (
    <>
      <SmoothScrollProvider>
        <div>
          <Navbar />
        </div>

          <HeroSection />

        <div className="2xl:mt-[87px] mx-[40px]">
          <FutureSection />
        </div>

        <div className="mt-[287px] mx-[40px] mb-[100px]">
          <WhatWeDoSection />
        </div>

        <div className="mt-[287px] mx-[40px] mb-[100px]">
          <WhatWeDoServe />
        </div>

        <div className="mt-[287px] mx-[40px] mb-[100px]">
          <NewsAndUpdateSection />
        </div>

        <div className="bg-black 2xl:h-[px] px-[40px] mb-[px]">
          <div className="mt-[287px] pt-[106px]">
            <WhatUsersSaysSection />
          </div>
        </div>

        <div className="relative w-full min-h-[823px] flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src={quantomRobot}
              alt="Quantum Robot Background"
              fill
              style={{ objectFit: "cover" }}
              priority
            />
          </div>

          <div className="relative z-10 mx-[40px] w-full ">
            <QuantomSection />
          </div>
        </div>

        <div className="bg-black 2xl:h-[674px] px-[40px]">
          <div className="mt-[287px] pt-[106px]">
            <Footer />
          </div>
        </div>
      </SmoothScrollProvider>
    </>
  );
}

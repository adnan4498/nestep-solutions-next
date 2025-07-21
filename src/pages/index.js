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

export default function Home() {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="mx-[40px]">
        <HeroSection />
      </div>

      <div className="mt-[287px] mx-[40px]">
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

      <div className="mt-[287px] mx-[40px] mb-[100px]">
        <WhatUsersSaysSection />
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

      <div className="relative z-10 px-6 w-full max-w-[1440px]">
        <QuantomSection />
      </div>


      <div className="mt-[287px] mx-[40px] mb-[100px]">
        <Footer />
      </div>
    </div>
    </>
  );
}

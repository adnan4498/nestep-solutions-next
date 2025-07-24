"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import whatWeServeImg from "../../public/images/WhatWeServe.svg";
import globeImg from "../../public/images/globeImg.svg";
import paintImg from "../../public/images/paintImg.svg";
import mobileImg from "../../public/images/mobileImg.svg";
import apartmentImg from "../../public/images/apartmentImg.svg";
import wwSRedBlur from "../../public/images/wwServe-red-blur.svg";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDoServe = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);
  const textRef = useRef(null);

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

  useEffect(() => {
    gsap.from([headingRef.current, textRef.current], {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
      },
    });

    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: cardsRef.current[0],
        start: "top 80%",
      },
    });

    // Hover animations
    cardsRef.current.forEach((card) => {
      if (!card) return;
      const shine = card.querySelector(".hover-shine");

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

  return (
    <div className="relative">
      <div className="py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="flex-shrink-0 z-50" ref={headingRef}>
            <Image src={whatWeServeImg} alt="What we serve" className="w-full" />
          </div>
          <div className="text-white max-w-xl 2xl:w-[562px]" ref={textRef}>
            <p className="text-[20px] leading-[160%] tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure
            </p>
          </div>
        </div>
      </div>

      <div className="absolute z-0 2xl:-left-[50px] 2xl:-top-[900px]">
        <Image src={wwSRedBlur} className="w-full h-full z-0" alt="" />
      </div>

      <section className="text-white pb-24 2xl:mt-[102px]">
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 cursor-pointer">
          {services.map((service, index) => {
            const colSpanClass =
              index === 0 || index === 3 ? "lg:col-span-4" : "lg:col-span-6";

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`group bg-[#141414] border border-[#292929] rounded-[20px] px-8 py-10 relative overflow-hidden min-h-[220px] flex flex-col gap-4 w-full ${colSpanClass} transition-transform duration-200`}
              >
                {/* Shine overlay */}
                <div className="hover-shine absolute pointer-events-none top-0 left-[-75%] w-[200%] h-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-200" />

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

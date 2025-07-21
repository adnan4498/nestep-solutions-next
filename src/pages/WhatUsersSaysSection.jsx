"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import newsUpdateImg from "../../public/images/NewsAndUpdate.svg";
import Image from "next/image";

const testimonials = [
  {
    name: "Amira T",
    title: "Tech Founder",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
  },
  {
    name: "Juno K",
    title: "Visual Creator",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut",
  },
  {
    name: "Daniel R",
    title: "Enterprise CTO",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const CustomLeftArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-8 bottom-6 w-12 h-12 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full z-10 flex items-center justify-center transition-colors duration-200"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const CustomRightArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-8 bottom-6 w-12 h-12 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full z-10 flex items-center justify-center transition-colors duration-200"
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

const WhatUsersSaysSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-20 relative">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-shrink-0">
          <Image src={newsUpdateImg} alt="News and Update" className="w-full" />
        </div>
        <div className="max-w-xl 2xl:w-[428px]">
          <p className="text-[20px] leading-[160%] tracking-tight">
            Hear how Quantum is helping people unlock new possibilities and
            simplify the way they build, share, and grow.
          </p>
        </div>
      </div>

      <div className="relative 2xl:mt-[139px]">
        <Carousel
          responsive={{
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3,
            },
            tablet: {
              breakpoint: { max: 1024, min: 640 },
              items: 2,
            },
            mobile: {
              breakpoint: { max: 640, min: 0 },
              items: 1,
            },
          }}
          infinite
          arrows
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          itemClass="px-3"
          containerClass="pb-20"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-3xl p-8 h-[280px] flex flex-col mx-3"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-neutral-600 flex-shrink-0"></div>
                <div>
                  <h3 className="text-white font-semibold text-lg leading-tight 2xl:text-[32px]">
                    {testimonial.name}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-tight mt-1 ">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <div className="flex-1">
                <p className="text-neutral-300 text-base leading-relaxed">
                  {testimonial.message}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default WhatUsersSaysSection;

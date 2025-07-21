"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import logo from "../../public/images/logo.svg"
import { Button } from "@/components/ui/moving-border";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About Us", "What We do", "Testimonial", "Industries"];

  return (
    <nav
      className={`py-8 md:py-10 px-[36px] fixed w-full z-50 top-0 start-0 transition-all duration-300 ${
        scrolled
          ? "bg-[#00051C]/60 backdrop-blur-xl shadow-md "
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex flex-wrap items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src={logo}
            className="h-12 md:h-16 3xl:h-20 ml-1"
            alt="Logo"
            width={180}
            height={16}
          />
        </div>

        {/* Desktop Navigation Items - Center */}
        <div className="hidden cursor-pointer md:flex justify-center gap-[64px] 3xl:gap-[96px] text-base 3xl:text-lg font-light group">
          {navItems.map((item) => (
            <div
              key={item}
              className={`transition-colors duration-300 ${
                activeItem === item
                  ? "text-[#46F0FF]"
                  : "text-white hover:!text-[#46F0FF]"
              }`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Get Started Button and Mobile Menu Toggle */}
        <div className="flex md:order-2 items-center">
          <Button
            className="font-semibold text-lg cursor-pointer"
            containerClassName="hidden md:inline-block"
            borderRadius="9999px"
            duration={3000}
          >
            Get started
          </Button>
          
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none ml-4"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-90 transition-all duration-300 transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full pt-16 pb-24">
          <div className="absolute top-6 right-6">
            <button
              onClick={toggleMenu}
              className="text-white p-2 rounded-full hover:bg-white hover:text-[#01B2C1] transition duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <ul className="flex flex-col items-center space-y-8 w-full max-w-xs">
            {navItems.map((item) => (
              <li key={item} className="w-full">
                <a
                  href="#"
                  onClick={() => handleItemClick(item)}
                  className={`block py-3 text-center text-xl 3xl:text-2xl relative font-extralight transition-all duration-300 ${
                    activeItem === item
                      ? "text-[#01B2C1]"
                      : "text-white hover:text-[#01B2C1]"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute bottom-2 left-1/4 w-1/2 h-px transition-all duration-300 ${
                      activeItem === item
                        ? "bg-[#01B2C1] scale-x-100"
                        : "bg-white scale-x-0 group-hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <button
              type="button"
              className="bg-[#01B2C1] text-white px-8 py-3 3xl:px-10 3xl:py-4 3xl:text-xl rounded-full font-semibold hover:bg-white hover:text-[#01B2C1] transition duration-300"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
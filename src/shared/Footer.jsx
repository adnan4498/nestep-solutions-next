"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

import NstepImg from "../../public/images/NSTEP.svg";
import solutionsImg from "../../public/images/Solutions.svg";
import footerLogo from "../../public/images/footer-logo.svg";

const Footer = () => {
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const columnsRef = useRef([]);
  const bottomImagesRef = useRef([]);

  useEffect(() => {
    const logo = logoRef.current;
    const cols = columnsRef.current;
    const bottoms = bottomImagesRef.current;

    gsap.set([logo, ...cols, ...bottoms], { opacity: 0, y: 50 });

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to([logo, ...cols, ...bottoms], {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              stagger: 0.2,
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const setColRef = (el, i) => {
    if (el) columnsRef.current[i] = el;
  };

  const setBottomRef = (el, i) => {
    if (el) bottomImagesRef.current[i] = el;
  };

  return (
    <footer ref={containerRef} className="bg-black text-white">
      <div className="flex justify-between">
        <div className="flex items-center">
          <Image
            ref={logoRef}
            src={footerLogo}
            className="w-full"
            alt="Logo"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 2xl:gap-44">
          {[
            {
              title: "Navigation",
              links: ["Home", "Features", "Use Cases", "Pricing", "Contact"],
            },
            {
              title: "Product",
              links: [
                "Features",
                "Use Cases",
                "Integrations",
                "Developer Tools",
                "API Docs",
              ],
            },
            {
              title: "Resources",
              links: [
                "Docs",
                "Blog",
                "Support",
                "Privacy Policy",
                "Terms of Service",
              ],
            },
          ].map((section, i) => (
            <div key={i} ref={(el) => setColRef(el, i)}>
              <h3 className="text-lg font-semibold mb-6 text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((label, idx) => (
                  <li key={idx}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 pt-8">
        <div className="flex items-end">
          <div ref={(el) => setBottomRef(el, 0)}>
            <Image src={NstepImg} width={1101} height={300} alt="NSTEP" />
          </div>
          <div className="mt-4" ref={(el) => setBottomRef(el, 1)}>
            <Image src={solutionsImg} width={574} height={120} alt="Solutions" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

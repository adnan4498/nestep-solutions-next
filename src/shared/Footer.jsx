import React from "react";
import NstepImg from "../../public/images/NSTEP.svg";
import solutionsImg from "../../public/images/Solutions.svg";
import Image from "next/image";
import footerLogo from "../../public/images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white ">
      <div className="">
        {/* <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Image src={NstepImg} />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={solutionsImg} />
          </div>
        </div> */}

        <div className="flex justify-between">
          <div className="flex items-center ">
            <Image
              src={footerLogo}
              className=" w-full "
              alt="Logo"
              //   width={406}
              //   height={91}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 2xl:gap-44">
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Navigation
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Product</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Integrations
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Developer Tools
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    API Docs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Resources
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8">
          <div className="flex items-end">
            <div>
              <Image src={NstepImg} width={1101} height={300} />
            </div>
            <div className="mt-4">
              <Image src={solutionsImg} width={574} height={120} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

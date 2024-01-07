"use client"

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const mainLinks = [
    { name: "Card access" },
    { name: "Banking" },
    { name: "Processing" },
    { name: "About" },
    { name: "Carrier" },
    { name: "Contact" },
  ];


  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isPrintHovered, setIsPrintHovered] = useState(false);
  const [isDigitalHovered, setIsDigitalHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };
  return (
    <div className=" w-full border border-neutral1000 py-4 left-0 z-20">
      <div className="md:flex items-center  bg-white xl:py-0 md:px-16 lg:px-10 xl:px-10 2xl:px-52">
            <div className="cursor-pointer flex items-center">
              
                    <img
                    src="/vector@2x.png"
                    alt="icon"
                    className="h-8"
                    />
                
            </div>

            <ul
            className={`md:flex md:items-center ml-40 md:pb-0   pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                open ? "top-10 " : "top-[-490px]"
            }`}
                >
            {mainLinks.map((link) => (
                <li
                key={link.name}
                className="md:ml-8 md:my-0 my-7 text-h6 font-poppins relative hidden lg:block group"
                >
                    <div
                        
                    >
                            <Link
                            href='/'
                            className={`text-black group-hover:text-red ${
                                activeLink === link.link
                                ? "font-bold text-red border-b-2 border-red"
                                : ""
                            }`}
                            onClick={scrollToTop}
                            >
                            {link.name}
                            </Link>
                           
                    </div>
                </li>
            ))}
          
              
        </ul>
        <div className=" -mt-10 md:-mt-0">
        <button
                onClick={() => {
                    scrollToTop();
                    setOpen(!open);
                }}
                className="bg-neutral1000 ml-[240px] md:ml-48 text-neutral400 font-Inter py-2 px-7  hover:bg-indigo-400 duration-500"
                >
                Login
                </button>
                </div>
      </div>
    </div>
  );
};

export default Navbar;

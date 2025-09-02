import React, { useState } from "react";
import { Link } from "react-router-dom";
import home from "../../src/assets/images/Low angle greyscale of a building with modern brutalist architecture under the sunlight.svg";
import arrow from "../../src/assets/images/Arrow 1.svg";
import logo from "../../src/assets/images/Frame 8 (2).svg";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Project", link: "/project" },
    { name: "Blog", link: "/blog" },
    { name: "Career", link: "/career" },
    { name: "Contact Us", link: "/contact" },
  ];

  return (
    <div className="relative w-full h-screen">
      <img
        src={home}
        alt="Modern brutalist building"
        className="w-full h-full object-cover"
      />

      {/* Top Left Logo */}
      <div className="flex items-center ">
        <div className="absolute top-0 left-4 md:left-8">
          <img
            src={logo}
            alt="Logo"
            className="w-14 h-14 sm:w-10 sm:h-10 md:w-20 md:h-20"
          />
        </div>

        {/* Top Center Text */}
        <div
          className="absolute top-4 left-1/2 transform -translate-x-1/2
				bg-white bg-opacity-50 px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-2.5 text-center
				uppercase text-white flex items-center justify-center gap-2 underline text-sm sm:text-base md:text-lg font-bold"
        >
          <p className="text-[12px] lg:text-[20px] whitespace-nowrap">
            Book consultation
          </p>
          <img
            src={arrow}
            alt="Arrow"
            className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5"
          />
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex sm:flex-col sm:justify-end absolute top-4 right-4 text-white text-sm sm:text-base md:text-lg font-bold items-end">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 mb-1 sm:mb-2 md:mb-3"
          >
            <Link to={item.link} className="flex items-center gap-2">
              {item.name}
              <img
                src={arrow}
                alt="Arrow"
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4"
              />
            </Link>
          </li>
        ))}
      </ul>

      {/* Dropdown Menu for Small Screens */}
      {menuOpen && (
        <ul className="absolute top-16 right-4 bg-black bg-opacity-75 text-white text-base font-bold flex flex-col gap-4 p-4 rounded-md sm:hidden">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-end justify-end gap-2"
              onClick={() => setMenuOpen(false)}
            >
              <Link to={item.link} className="flex items-center gap-2">
                {item.name}
                <img src={arrow} alt="Arrow" className="w-3 h-3" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

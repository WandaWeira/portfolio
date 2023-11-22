import React from "react";
import logo from "../assets/wanda.jpg";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between py-4">
      {/* fixed top-0 */}
      {/* Logo and Title */}
      <div className="flex items-center justify-center md:justify-start gap-4">
        <img
          className="w-8 h-8 md:w-12 md:h-12 rounded-full"
          src={logo}
          alt="logo"
        />
        <h1 className="text-lg md:text-xl font-semibold">Portfolio</h1>
      </div>

      {/* Navigation */}
      <ul className="flex flex-col md:flex-row md:gap-8">
        <li className="mb-2 md:mb-0">Projects</li>
        <li className="mb-2 md:mb-0">Technologies</li>
        <li className="mb-2 md:mb-0">About me</li>
      </ul>

      {/* Social Icons */}
      <div className="flex mt-4 md:mt-0 gap-4">
        <FaGithub className="w-5 h-5 md:w-6 md:h-6" />
        <CiLinkedin className="w-5 h-5 md:w-6 md:h-6" />
      </div>
    </div>
  );
};

export default Header;

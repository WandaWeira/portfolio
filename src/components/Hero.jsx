import React from "react";
import profileImage from "../assets/wanda.jpg"; // Import your image file

const Hero = () => {
  return (
    <div className="my-28 max-w-screen-xl mx-auto flex items-center">
      <div className="w-full md:w-1/2 md:pl-16">
        <h1 className="text-bold text-5xl">Rashiidah Weira Wanda</h1>
        <p className="text-gray-400 my-10 text-xl">
          Passionate front-end developer dedicated to creating engaging and
          user-friendly web experiences. Proficient in modern technologies, I
          bring creativity and precision to every project.
        </p>
        <button className="bg-gradient-to-r from-cyan-400 to-violet-900 p-2 my-10 rounded-3xl w-48">
          Lets begin
        </button>
      </div>
    </div>
  );
};

export default Hero;

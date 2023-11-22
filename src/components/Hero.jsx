import React from 'react';
import hero from '../assets/weira.png';

const Hero = () => {
  return (
    <div className="my-8 md:my-28 max-w-screen-xl mx-auto flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 md:pr-8">
        <h1 className="text-bold text-3xl md:text-5xl">Rashiidah Weira Wanda</h1>
        <p className="text-gray-400 my-4 md:my-10 text-base md:text-xl">
          Passionate front-end developer dedicated to creating engaging and
          user-friendly web experiences. Proficient in modern technologies, I
          bring creativity and precision to every project.
        </p>
        <button className="bg-gradient-to-r from-cyan-400 to-violet-900 p-2 my-4 md:my-10 rounded-3xl w-full md:w-48">
          Let's begin
        </button>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <img src={hero} alt="Hero" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Hero;

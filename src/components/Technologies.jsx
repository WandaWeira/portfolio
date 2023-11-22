import React from "react";

const Technologies = () => {
  return (
    <div className="w-full md:pl-16">
      <h1 className="font-semibold text-3xl">Technologies</h1>
      <div className="mx-28">
        <div className="w-full mt-10 mb-4">
          <div className="flex justify-between">
            <p>HTML</p>
            <p>Advanced</p>
          </div>
          <div className="relative pt-0.5 text-xs text-center text-white bg-lighter w-full rounded-xl h-4">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-violet-900 h-full w-1/4 rounded-xl"></div>
          </div>
        </div>
        <div className="w-full my-4">
          <div className="flex justify-between">
            <p>HTML</p>
            <p>Advanced</p>
          </div>
          <div className="relative pt-0.5 text-xs text-center text-white bg-lighter w-full rounded-xl h-4">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-violet-900 h-full w-1/2 rounded-xl"></div>
          </div>
        </div>
        <div className="w-full my-4">
          <div className="flex justify-between">
            <p>HTML</p>
            <p>Advanced</p>
          </div>
          <div className="relative pt-0.5 text-xs text-center text-white bg-lighter w-full rounded-xl h-4">
            <div className="absolute top-0 left-0 bg-gradient-to-r from-cyan-400 to-violet-900 h-full w-3/4 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

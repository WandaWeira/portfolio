import React from "react";

const ProjectCard = ({image, name, description}) => {
  return (
    <div className="border w-full border-gray-400 rounded-tl-2xl rounded-br-2xl p-2 shadow-2xl my-5">
      <img
        className="w-full h-1/2 rounded-md object-cover"
        src={image}
        alt="card"
      />
      <h2 className="font-semibold text-lg my-3 text-center">{name}</h2>
      <hr className="bg-gradient-to-r from-cyan-400 to-violet-900 h-1 border-none" />
      <p className="my-4 text-center">{description}</p>
      <button className="bg-gradient-to-r from-cyan-400 to-violet-900 p-2 mb-4 rounded-3xl w-1/2">
        Look it up
      </button>
    </div>
  );
};

export default ProjectCard;

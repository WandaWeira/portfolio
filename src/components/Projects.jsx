import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="md:pl-16">
      <h1 className="font-semibold text-3xl">Projects</h1>
      <div className="flex flex-col md:flex-row md:gap-36 mt-4">
        <ProjectCard
          image="https://static3.depositphotos.com/1003681/164/i/600/depositphotos_1646367-stock-photo-crocus.jpg"
          name="Project 1"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ProjectCard
          image="https://static3.depositphotos.com/1003681/164/i/600/depositphotos_1646367-stock-photo-crocus.jpg"
          name="Project 2"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>

      <div className="flex flex-col md:flex-row md:gap-36 mt-4">
        <ProjectCard
          image="https://static3.depositphotos.com/1003681/164/i/600/depositphotos_1646367-stock-photo-crocus.jpg"
          name="Project 3"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
        <ProjectCard
          image="https://static3.depositphotos.com/1003681/164/i/600/depositphotos_1646367-stock-photo-crocus.jpg"
          name="Project 4"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
};

export default Projects;

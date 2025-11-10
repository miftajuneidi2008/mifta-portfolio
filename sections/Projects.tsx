import ProjectCard from "@/components/ProjectCard";
import { projectData } from "@/data/data";
import React from "react";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-5xl">
      <div className="title-container mb-10">
        <div className="title">Projects</div>
        <p className="sub-title">Things I’ve built so far</p>
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 ">
        {projectData.map((project,index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;

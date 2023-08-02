import React from "react";
import { IProject } from "./types/main";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className="flex flex-1 w-full items-center group justify-center relative">
        <img
          // src={`/projects/${project.image}`}
          src={`/${project.image}`}
          className="absolute inset-0 w-full h-full object-cover"
          alt=""
        />
        <div className="group-hover:opacity-100 opacity-0 duration-500">
          <div className="bg-black bg-opacity-50 inset-0 absolute"></div>
          <h2 className="absolute self-center font-bold text-3xl">
            {project.name}
          </h2>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

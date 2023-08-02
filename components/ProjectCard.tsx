import React from "react";
import { IProject } from "./types/main";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className="flex flex-1 w-full items-center  justify-center relative">
        <img
          // src={`/projects/${project.image}`}
          src={`/${project.image}`}
          className="absolute inset-0 w-full h-full object-cover group"
          alt=""
        />
        <div className="group-hover:block hidden bg-black backdrop-brightness-50 inset-0 absolute"></div>
        <h2 className="group-hover:block hidden absolute self-center font-bold text-3xl">
          {project.name}
        </h2>
      </div>
    </>
  );
};

export default ProjectCard;

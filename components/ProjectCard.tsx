import React from "react";
import { IProject } from "./types/main";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className="flex-1 w-full group relative">
        <img
          src={`/projects/${project.image}`}
          className="absolute inset-0 w-full h-full object-cover object-top duration-1000 group-hover:object-bottom"
          alt=""
        />
        <a
          href={project.previewLink}
          className="group-hover:opacity-100 opacity-0 duration-500 cursor-pointer"
        >
          <div className="bg-black bg-opacity-50 inset-0 absolute"></div>
          <h2 className="font-bold absolute text-3xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
            {project.name}
          </h2>
        </a>
      </div>
    </>
  );
};

export default ProjectCard;

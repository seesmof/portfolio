import React from "react";
import { IProject } from "./types/main";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className="flex flex-1 w-full items-center justify-center">
        {project.name}
      </div>
    </>
  );
};

export default ProjectCard;

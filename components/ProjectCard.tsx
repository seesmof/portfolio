import React from "react";
import { IProject } from "./types/main";

interface Props {
  project: IProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <>
      <div className="flex"></div>
    </>
  );
};

export default ProjectCard;

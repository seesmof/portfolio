"use client";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/projects";
import { useState } from "react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Home() {
  const ButtonStyles = `px-4 h-10 flex items-center duration-500 active:scale-95 hover:bg-neutral-700 rounded-md bg-inherit text-lg text-white font-medium`;
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <>
      <ProjectCard project={Projects[currentProject]} />
      <div className="flex h-min flex-row bg-inherit w-full p-4 gap-2 items-center justify-center self-center">
        <button
          onClick={() => {
            if (currentProject === 0) {
              setCurrentProject(Projects.length - 1);
            } else {
              setCurrentProject(currentProject - 1);
            }
          }}
          className={ButtonStyles}
        >
          <BsChevronLeft className="stroke-1" />
        </button>
        <a href="https://github.com/seesmof" className={ButtonStyles}>
          preview
        </a>
        <button
          onClick={() => {
            if (currentProject === Projects.length - 1) {
              setCurrentProject(0);
            } else {
              setCurrentProject(currentProject + 1);
            }
          }}
          className={ButtonStyles}
        >
          <BsChevronRight className="stroke-1" />
        </button>
      </div>
    </>
  );
}

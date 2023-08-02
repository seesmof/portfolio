"use client";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/projects";
import { useState } from "react";

export default function Home() {
  const ButtonStyles = `px-4 py-2 text-lg text-white font-medium`;
  const [currentProject, setCurrentProject] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex flex-col text-neutral-50">
        <div className="h-min sticky top-0 bg-inherit">
          <Navbar />
        </div>
        <ProjectCard project={Projects[currentProject]} />
        <div className="flex flex-row gap-2 items-center justify-center fixed bottom-4 self-center">
          <button
            onClick={() => {
              setCurrentProject(currentProject - 1);
            }}
            className={ButtonStyles}
          >
            &lt;
          </button>
          <a href="https://github.com/seesmof" className={ButtonStyles}>
            preview
          </a>
          <button
            onClick={() => {
              setCurrentProject(currentProject + 1);
            }}
            className={ButtonStyles}
          >
            &gt;
          </button>
        </div>
      </div>
    </>
  );
}

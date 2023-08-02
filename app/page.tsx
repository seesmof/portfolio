import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-neutral-900 flex flex-col text-neutral-50">
        <Navbar />
        {Projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}

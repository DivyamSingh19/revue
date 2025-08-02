import React from "react";
import ProjectCard from "../portfolio/projectcard";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  tags?: string[];
};

const MinimalLayout = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project, i) => (
        <ProjectCard key={i} project={project} />
      ))}
    </div>
  );
};

export default MinimalLayout;

"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import MinimalLayout from "@/components/layout/minimal";
import { useLayout } from "@/lib/layoutcontext";

// saare layouts issi page pe render honge 
const dummyProjects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio to showcase projects.",
    tech: ["Next.js", "TailwindCSS"],
    github: "https://github.com/your-repo",
    demo: "https://your-demo-link.com",
    tags: ["Featured", "Responsive"],
  },
  {
    title: "Todo App",
    description: "Simple todo app with filters and dark mode.",
    tech: ["React", "TypeScript"],
    github: "https://github.com/your-todo-repo",
    demo: "https://todo-demo.com",
    tags: ["Productivity"],
  },
];


const Portfolio = () => {
   const { layout } = useLayout();
    const renderLayout = () => {
      switch (layout) {
        case "minimal":
          return <MinimalLayout projects={dummyProjects} />;
        case "classic":
        // Add other cases...
        default:
          return <div>Please select a layout</div>;
      }
    };

    return <div className="p-8">{renderLayout()}</div>;
  
};

export default Portfolio;

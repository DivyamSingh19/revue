import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  github?: string;
  demo?: string;
  tags?: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="w-full max-w-md">
      {project.image && (
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover rounded-t-xl"
          />
        </div>
      )}

      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent>
        {project.tech?.length && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tech.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between items-center">
        <div className="flex gap-2">
          {project.github && (
            <Button size="icon" variant="ghost" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {project.demo && (
            <Button size="icon" variant="ghost" asChild>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
        {project.tags?.length && (
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;

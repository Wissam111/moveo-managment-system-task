import { getProjects } from "@/actions/projects/get-all-projects";
import Container from "@/components/containers/container";
import ProjectsList from "@/components/projects/projects-list";
import React from "react";

const Projects = async () => {
  const data = await getProjects({});

  return (
    <Container>
      <div className="flex flex-col gap-4 py-10">
        <h1 className="font-bold text-2xl">PROJECTS</h1>
        <ProjectsList data={data?.items} />
      </div>
    </Container>
  );
};

export default Projects;

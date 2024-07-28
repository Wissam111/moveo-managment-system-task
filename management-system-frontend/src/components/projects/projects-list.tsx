"use client";
import { Project } from "@/types/projects";
import React from "react";
import ProjectCard from "./project-card";
import Button from "../ui/button";
import { GoPlus } from "react-icons/go";
import UseProjectOperations from "./use-project-operations";
import ProjectOperationModal from "./project-operation-modal";
import UseProjectsData from "./use-projects-data";
type Props = {
  data?: Project[];
};

const ProjectsList: React.FC<Props> = ({ data }) => {
  const {
    open,
    setOpen,
    updateProjects,
    projects,
    onSelectProject,
    handleDeleteProject,
  } = UseProjectsData({ data });
  return (
    <>
      <div>
        <Button
          className="font-semibold py-5 px-4"
          icon={<GoPlus size={20} />}
          onClick={() => setOpen(true)}
        >
          Add Project
        </Button>
        <div className="flex items-center gap-4 flex-wrap w-fit py-4">
          {projects?.map((project: Project) => (
            <ProjectCard
              key={project?._id}
              project={project}
              handleDelete={() => handleDeleteProject(project?._id)}
            />
          ))}
        </div>
      </div>
      <ProjectOperationModal
        open={open}
        showModal={() => setOpen(true)}
        closeModal={() => setOpen(false)}
        updateProjects={updateProjects}
      />
    </>
  );
};

export default ProjectsList;

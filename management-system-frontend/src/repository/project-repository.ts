// @ts-nocheck
import React from "react";
import apiCall from "@/network/apiCall";
import { PROJECTS_URLS } from "@/network/api";
import { RequestMethod } from "@/utils/Enums";

const ProjectRepository = () => {
  const getAllProjects = async ({ page = 1, pageSize = 10, search = "" }) => {
    const data = await apiCall({
      url: PROJECTS_URLS.GetProjects,
      method: RequestMethod.POST,
      body: {
        page,
        pageSize,
        search,
      },
    });
    return data;
  };
  const createProject = async ({ name, description }) => {
    const data = await apiCall({
      url: PROJECTS_URLS.CreateProject,
      method: RequestMethod.POST,
      body: {
        name,
        description,
      },
    });
    return data;
  };
  const deleteProject = async (projectId: string) => {
    const data = await apiCall({
      url: `${PROJECTS_URLS.DeleteProject}/${projectId}`,
      method: RequestMethod.DELETE,
    });
    return data;
  };

  return { getAllProjects, createProject, deleteProject };
};
const projectRepository = ProjectRepository();

export default projectRepository;

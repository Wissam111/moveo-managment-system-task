// @ts-nocheck
import projectRepository from "@/repository/project-repository";

export const getProjects = async (data) => {
  try {
    const response = await projectRepository.getAllProjects(data);
    return response?.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

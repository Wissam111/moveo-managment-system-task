// @ts-nocheck
import projectRepository from "@/repository/project-repository";
import { ToastType } from "@/utils/Enums";
import useToast from "@/hooks/useToast";
import { PROJECT_ACTION_TYPES } from "@/constants/actionTypes";
import { Project } from "@/types/projects";
import { Dispatch } from "redux";
const { SUCCESS, ERROR } = ToastType;

const ProjectsActions = () => {
  const { showToast } = useToast();

  const createProject = async (data) => {
    try {
      const response = await projectRepository.createProject(data);
      showToast(SUCCESS, response?.message);

      return response;
    } catch (e) {
      data: {
        error: {
          message: "Porject with this name already exists";
        }
      }
      const message = e?.data?.error?.message;
      showToast(ToastType.ERROR, message);
    }
  };
  const deleteProject = async (projectId) => {
    try {
      const response = await projectRepository.deleteProject(projectId);
      showToast(SUCCESS, response?.message);
      return response;
    } catch (e) {
      showToast(ERROR, e?.error?.message);
    }
  };
  const updateProject = (project: Project) => {
    return async (dispatch: Dispatch) => {
      dispatch({
        type: PROJECT_ACTION_TYPES.UPDATE_PROJECT_SUCCESS,
        payload: project,
      });
    };
  };

  return { createProject, updateProject, deleteProject };
};

export default ProjectsActions;

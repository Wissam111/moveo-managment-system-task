// @ts-nocheck
import { ToastType } from "@/utils/Enums";
import taskRepository from "@/repository/task-repository";
import useToast from "@/hooks/useToast";
import { PROJECT_ACTION_TYPES } from "@/constants/actionTypes";
import { Project } from "@/types/projects";
import { Dispatch } from "redux";
const { SUCCESS, ERROR } = ToastType;

const TasksActions = () => {
  const { showToast } = useToast();

  const getTasks = async (data) => {
    try {
      const response = await taskRepository.getAllTasks(data);
      return response?.data;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };
  const createTask = async (data) => {
    try {
      const response = await taskRepository.createTask(data);
      showToast(SUCCESS, response?.message);
      return response;
    } catch (e) {
      showToast(ERROR, e?.message || e?.error?.message);
    }
  };
  const updateTask = async (data) => {
    try {
      const response = await taskRepository.updateTask(data);
      showToast(SUCCESS, response?.message);
      return response;
    } catch (e) {
      const message = e?.data?.error?.message;
      showToast(ERROR, e?.message || message);
    }
  };
  const deleteTask = async (taskId: string) => {
    try {
      const response = await taskRepository.deleteTask(taskId);
      showToast(SUCCESS, response?.message);
      return response;
    } catch (e) {
      const message = e?.data?.error?.message;
      showToast(ERROR, e?.message || message);
    }
  };
  return { createTask, getTasks, updateTask, deleteTask };
};

export default TasksActions;

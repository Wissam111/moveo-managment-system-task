// @ts-nocheck
import React from "react";
import apiCall from "@/network/apiCall";
import { TASKS_URLS } from "@/network/api";
import { RequestMethod } from "@/utils/Enums";

const TaskRepository = () => {
  const getAllTasks = async ({
    page = 1,
    pageSize = 10,
    search = "",
    projectId,
    sort = "desc",
    sortBy = "createdAt",
  }) => {
    const data = await apiCall({
      url: TASKS_URLS.GetTasks,
      method: RequestMethod.POST,
      body: {
        page,
        pageSize,
        search,
        projectId,
        sort,
        sortBy,
      },
    });
    return data;
  };
  const createTask = async ({
    title,
    description,
    projectId,
    priority,
    status,
  }) => {
    const data = await apiCall({
      url: TASKS_URLS.CreateTask,
      method: RequestMethod.POST,
      body: {
        title,
        description,
        priority,
        status,
        projectId,
      },
    });
    return data;
  };
  const updateTask = async ({
    title,
    description,
    projectId,
    priority,
    status,
    taskId,
  }) => {
    const data = await apiCall({
      url: `${TASKS_URLS.UpdateTask}/${taskId}`,
      method: RequestMethod.PATCH,
      body: {
        title,
        description,
        priority,
        status,
        projectId,
      },
    });
    return data;
  };
  const deleteTask = async (taskId) => {
    const data = await apiCall({
      url: `${TASKS_URLS.DeleteTask}/${taskId}`,
      method: RequestMethod.DELETE,
    });
    return data;
  };
  return { getAllTasks, createTask, updateTask, deleteTask };
};
const taskRepository = TaskRepository();

export default taskRepository;

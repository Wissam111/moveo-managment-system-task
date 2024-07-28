// @ts-nocheck
import taskRepository from "@/repository/task-repository";
import { GetTasksResponseData } from "@/types/tasks";
export const getTasks = async (data: {
  projectId?: string;
}): Promise<GetTasksResponseData | undefined> => {
  try {
    const response = await taskRepository.getAllTasks(data);
    return response?.data;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

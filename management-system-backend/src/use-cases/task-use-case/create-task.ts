import { TaskDto } from "entities/dtos";
import { makeTask } from "../../entities";

export const buildCreateTaskUseCase = ({ taskDb }) => {
  return async ({
    title,
    description,
    projectId,
    status,
    priority,
  }: TaskDto) => {
    const task = makeTask({
      title,
      description,
      projectId,
      status,
      priority,
    });
    return await taskDb.create(task);
  };
};

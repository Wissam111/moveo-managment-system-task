import { NotFoundError } from "../../utils/errors";

export const buildGetTaskUseCase = ({ taskDb }) => {
  return async ({ taskId }: { taskId: string }) => {
    const task = await taskDb.findById({ id: taskId });
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    return task;
  };
};

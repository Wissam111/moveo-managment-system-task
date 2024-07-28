import { NotFoundError } from "../../utils/errors";
export const buildDeleteTaskUseCase = ({ taskDb }) => {
  return async ({ taskId }: { taskId: string }) => {
    const task = await taskDb.findById({ id: taskId });
    if (!task) {
      throw new NotFoundError("Task not found");
    }
    return await taskDb.deleteById({ id: taskId });
  };
};

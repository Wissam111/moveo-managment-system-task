import { makeTask } from "../../entities";
import { TaskDto } from "entities/dtos";
import { NotFoundError } from "../../utils/errors";
interface UpdateTaslInput extends TaskDto {
  taskId: string;
}
export const buildUpdateTaskUseCase = ({ taskDb }) => {
  return async ({ taskId, ...updatedData }: UpdateTaslInput) => {
    const task = await taskDb.findById({ id: taskId });

    if (!task) {
      throw new NotFoundError("Task not found");
    }

    const _updatedData = makeTask({
      id: taskId,
      ...updatedData,
    });
    return await taskDb.update(_updatedData);
  };
};

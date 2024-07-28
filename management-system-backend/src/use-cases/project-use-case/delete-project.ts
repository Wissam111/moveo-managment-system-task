import { NotFoundError } from "../../utils/errors";
export const buildDeleteProjectUseCase = ({ projectDb }) => {
  return async ({ projectId }: { projectId: string }) => {
    const project = await projectDb.findById({ id: projectId });
    if (!project) {
      throw new NotFoundError("project not found");
    }
    return await projectDb.deleteById({ id: projectId });
  };
};

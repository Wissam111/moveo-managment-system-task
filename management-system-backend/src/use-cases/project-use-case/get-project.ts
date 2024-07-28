import { NotFoundError } from "../../utils/errors";
export const buildGetProjectUseCase = ({ projectDb }) => {
  return async ({ projectId }: { projectId: string }) => {
    const project = await projectDb.findById({ id: projectId });
    if (!project) {
      throw new NotFoundError("Project not found");
    }
    return project;
  };
};

import { ProjectDto } from "entities/dtos";
import { makeProject } from "../../entities";
import { NotFoundError } from "../../utils/errors";

interface UpdateProjectInput extends ProjectDto {
  projectId: string;
}

export const buildUpdateProjectUseCase = ({ projectDb }) => {
  return async ({ projectId, ...updatedData }: UpdateProjectInput) => {
    const project = await projectDb.findById({ id: projectId });

    // check if the project exists
    if (!project) {
      throw new NotFoundError("Project not found");
    }

    const updatedProject = makeProject({ id: projectId, ...updatedData });
    return await projectDb.update(updatedProject);
  };
};

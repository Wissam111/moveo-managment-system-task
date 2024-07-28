import { ProjectDto } from "entities/dtos";
import { makeProject } from "../../entities";
import { ValidationError } from "../../utils/errors";

export const buildCreateProjectUseCase = ({ projectDb }: any) => {
  return async ({ name, description }: ProjectDto) => {
    const project = makeProject({
      name,
      description,
    });

    // check if this project name already exists
    const exists = await projectDb.findByTitle({ title: name });
    console.log(exists);
    if (exists)
      throw new ValidationError("Porject with this name already exists");

    return await projectDb.create(project);
  };
};

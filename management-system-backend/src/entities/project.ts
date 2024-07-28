import { ProjectDto } from "entities/dtos";
import { ValidationError } from "../utils/errors";

export const buildMakeProject = (ID) => {
  return function makeProject({
    id = ID.makeId(),
    name,
    description,
    createdAt = new Date(),
  }: ProjectDto) {
    if (!name) {
      throw new ValidationError("Project must have a name");
    }

    if (!description) {
      throw new ValidationError("Project must have a description");
    }

    return Object.freeze({
      id,
      name,
      description,
      createdAt,
    });
  };
};

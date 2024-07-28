import { TaskPriority, TaskStatus } from "../utils/enums";
import { TaskDto } from "entities/dtos";
import { ValidationError } from "../utils/errors";

const TASK_STATUS_VALUES = Object.values(TaskStatus);
const TASK_PRIORITY_VALUES = Object.values(TaskPriority);
export const buildMakeTask = (ID) => {
  return function makeTask({
    id = ID.makeId(),
    title,
    description,
    projectId,
    status,
    priority,
    createdAt = new Date(),
  }: TaskDto) {
    if (!title) {
      throw new ValidationError("Task must have a title");
    }

    if (!description) {
      throw new ValidationError("Task must have a description");
    }

    if (!projectId) {
      throw new ValidationError("Task must have a projectId");
    }

    if (!TASK_STATUS_VALUES.includes(status)) {
      throw new ValidationError(
        `Task must have a status of ${Object.keys(TaskStatus)}`
      );
    }

    if (!TASK_PRIORITY_VALUES.includes(priority)) {
      throw new ValidationError(
        `Task must have a priority of ${Object.keys(TaskPriority)}`
      );
    }

    return Object.freeze({
      id,
      title,
      description,
      status,
      projectId,
      priority,
      createdAt,
    });
  };
};

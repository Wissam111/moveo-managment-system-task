const { taskDb } = require("../../data-access");
import { buildCreateTaskUseCase } from "./create-task";
import { buildDeleteTaskUseCase } from "./delete-task";
import { buildGetTaskUseCase } from "./get-task";
import { buildGetTasksUseCase } from "./get-tasks";
import { buildUpdateTaskUseCase } from "./update-task";

const createTask = buildCreateTaskUseCase({ taskDb });
const deleteTask = buildDeleteTaskUseCase({ taskDb });
const getTask = buildGetTaskUseCase({ taskDb });
const updateTask = buildUpdateTaskUseCase({ taskDb });
const getTasks = buildGetTasksUseCase({ taskDb });

module.exports = Object.freeze({
  createTask,
  deleteTask,
  getTask,
  updateTask,
  getTasks,
});

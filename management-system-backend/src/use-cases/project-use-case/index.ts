const { projectDb } = require("../../data-access");
import { buildCreateProjectUseCase } from "./create-project";

import { buildDeleteProjectUseCase } from "./delete-project";
import { buildGetProjectUseCase } from "./get-project";
import { buildGetProjectsUseCase } from "./get-projects";
import { buildUpdateProjectUseCase } from "./update-project";

const createProject = buildCreateProjectUseCase({ projectDb });
const deleteProject = buildDeleteProjectUseCase({ projectDb });
const getProject = buildGetProjectUseCase({ projectDb });
const updateProject = buildUpdateProjectUseCase({ projectDb });
const getProjects = buildGetProjectsUseCase({ projectDb });

module.exports = Object.freeze({
  createProject,
  deleteProject,
  getProject,
  updateProject,
  getProjects,
});

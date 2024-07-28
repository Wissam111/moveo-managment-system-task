const AUTH_BASE = "auth";
export const AUTH_URLS = {
  Signin: `${AUTH_BASE}/signin`,
};
const PROJECTS_BASE = "projects";
export const PROJECTS_URLS = {
  GetProjects: `${PROJECTS_BASE}/GetProjects`,
  CreateProject: `${PROJECTS_BASE}`,
  DeleteProject: `${PROJECTS_BASE}`,
};
const TASKS_BASE = "tasks";
export const TASKS_URLS = {
  GetTasks: `${TASKS_BASE}/GetTasks`,
  CreateTask: `${TASKS_BASE}`,
  UpdateTask: `${TASKS_BASE}`,
  DeleteTask: `${TASKS_BASE}`,
};

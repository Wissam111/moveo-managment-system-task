const projectService = require("./project-use-case");
const taskService = require("./task-use-case");
const authService = require("./auth-use-case");
module.exports = Object.freeze({
  projectService,
  taskService,
  authService,
});

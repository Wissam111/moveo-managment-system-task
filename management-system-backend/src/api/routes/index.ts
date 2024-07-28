import express, { Router } from "express";
const projectsRoutes = require("./projects");
const tasksRoutes = require("./tasks");
const authRoutes = require("./auth");
// const authRoutes = require("./auth");
// const { errors } = require("celebrate");
// const { useSwaggerMiddlewares } = require("../swagger");

module.exports = async () => {
  const router: Router = express.Router();

  router.use("/projects", projectsRoutes);
  router.use("/tasks", tasksRoutes);
  router.use("/auth", authRoutes);

  return router;
};

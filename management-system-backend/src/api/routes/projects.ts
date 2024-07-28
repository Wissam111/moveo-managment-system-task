import express, { Router } from "express";
import { requireAuthentication } from "../../api/middlewares/requireAuthentication";
import { makeRoleAuthorization } from "../../api/middlewares/requireAuthorization";
const { projectController } = require("../../controllers");

const router: Router = express.Router();

router.get(
  "/:id",
  makeRoleAuthorization({ role: "admin" }),
  projectController.getProject
);

router.post("/getProjects", projectController.getProjects);

router.use(requireAuthentication);
router.post("/", projectController.createProject);
router.delete("/:id", projectController.deleteProject);

router.patch(
  "/:id",
  makeRoleAuthorization({ role: "basic" }),
  projectController.updateProject
);

module.exports = router;

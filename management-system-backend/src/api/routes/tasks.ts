import { requireAuthentication } from "../../api/middlewares/requireAuthentication";
import express, { Router } from "express";

const { taskController } = require("../../controllers");

const router: Router = express.Router();

router.use(requireAuthentication);

router.get("/:id", taskController.getTask);

router.post("/GetTasks", taskController.getTasks);

router.post("/", taskController.createTask);

router.delete("/:id", taskController.deleteTask);

router.patch("/:id", taskController.updateTask);

module.exports = router;

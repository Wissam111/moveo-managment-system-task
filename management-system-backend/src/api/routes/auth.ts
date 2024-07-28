import express, { Router } from "express";
const { authController } = require("../../controllers");

const router: Router = express.Router();

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);

module.exports = router;

import express from 'express';
import admin from "../middlewares/admin";
import instructorController from '../controllers/instructorController';

let router = express.Router();

router.get("/:id", instructorController.fetchInstructor);

router.post("/new", admin, instructorController.newInstructor);
router.post("/:id", admin, instructorController.updateInstructor);

export default router;

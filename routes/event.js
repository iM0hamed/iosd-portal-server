import express from 'express';
import admin from "../middlewares/admin";
import eventController from '../controllers/eventController';

let router = express.Router();

router.get("/", eventController.index);
router.get("/recent", eventController.recent);

router.post("/new", admin, eventController.new);
router.post("/:id", admin, eventController.edit);
router.delete("/:id", admin, eventController.delete);

export default router;
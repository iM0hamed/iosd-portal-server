import express from 'express';
import admin from "../middlewares/admin";
import progressController from '../controllers/progressController';

let router = express.Router();

router.get("/:id", progressController.fetchProgress);

router.post("/new", progressController.newProgress);
router.post("/:id/video/:vid", admin, progressController.markVideo);

export default router;    
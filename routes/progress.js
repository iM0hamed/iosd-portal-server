import express from 'express';
import admin from "../middlewares/admin";
import progressController from '../controllers/progressController';

let router = express.Router();

router.get("/:id/video/:vid", progressController.markVideo);
router.get("/:id", progressController.fetchProgress);
router.post("/new", progressController.newProgress);

export default router;    
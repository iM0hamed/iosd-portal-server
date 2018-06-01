import express from 'express';
import mentorController from './../controllers/mentorController'
import authenticate from './../middlewares/authenticate';
import admin from "../middlewares/admin";

let router = express.Router();

router.get("/mentors/all", mentorController.all);
router.get("/mentor/:id", mentorController.show);

router.post('/mentor/new' , admin , mentorController.new);
router.post('/mentor/:id', admin, mentorController.edit);
router.delete('/mentor/:id', admin, mentorController.delete);

export default router;
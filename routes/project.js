import express from 'express';
import projectController from './../controllers/projectController'
import admin from "../middlewares/admin";

let router = express.Router();

router.get('/projects/all', projectController.all);
router.get('/project/:id', projectController.show);

router.post('/project/new', admin, projectController.new);
router.post('/project/:id', admin, projectController.edit);
router.delete('/project/:id', admin, projectController.delete);

export default router;
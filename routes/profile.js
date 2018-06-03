import express from 'express';
import profileController from './../controllers/profileController'
import admin from "../middlewares/admin";

let router = express.Router();

router.get('/:id', profileController.show);
router.post('/update', profileController.edit);
router.get('/', profileController.index);


export default router;
import express from 'express';
import admin from "../middlewares/admin";
import upload from '../middlewares/upload';
import uploadController from '../controllers/uploadController';

let router = express.Router();

router.post('/', upload, uploadController.upload);

export default router;
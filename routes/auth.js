
import express from 'express';
let router = express.Router();

import admin from "../middlewares/admin";
import authController from "../controllers/authController";

// TODO: Add Admin MiddleWare in Singup

router.post('/signup' ,  authController.signup);
router.post('/login', authController.login);


export default router;

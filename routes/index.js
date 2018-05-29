import express from 'express';
let router = express.Router();

import admin from '../middlewares/admin';
import authenticate from '../middlewares/authenticate';
import userController from '../controllers/userController';
import dummyController from '../controllers/dummyController';

import adminRoutes from './admin';
import libraryRoutes from './library';

//user routes
router.post('/signup', userController.signup);
router.post('/login', userController.login);

//library routes
router.use("/library", authenticate, libraryRoutes);

//admin routes
router.use("/admin", [authenticate, admin], adminRoutes);

//dummy routes
router.get('/say-hello', dummyController.sayHello);
router.get('/private-info', authenticate, dummyController.privateMessage);

export default router;

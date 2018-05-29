import express from 'express';
let router = express.Router();

import authenticate from '../middlewares/authenticate';

import libraryRoutes from './library';
import authRoutes from './auth' ;


router.use("/library", authenticate, libraryRoutes);
router.use("/auth", authRoutes);

//admin routes
// router.use("/admin", [authenticate, admin], adminRoutes);


export default router;

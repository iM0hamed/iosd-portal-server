import express from 'express';
let router = express.Router();

import authenticate from '../middlewares/authenticate';

import libraryRoutes from './library';
import authRoutes from './auth' ;
import blogRoutes from './blog' ;
import eventRoutes from './event';
import mentorRoutes from './mentor';
import projectRoutes from './project';
import profileRoutes from './profile';
import courseRoutes from './course';
import instructorRoutes from './instructor';
import progressRoutes from './progress';

router.use("/auth", authRoutes);
router.use("/blog", authenticate, blogRoutes );
router.use("/library", authenticate, libraryRoutes);
router.use("/events", authenticate, eventRoutes);
router.use("/", authenticate, mentorRoutes);
router.use("/", authenticate, projectRoutes);
router.use("/profile", authenticate, profileRoutes);
router.use("/", authenticate, courseRoutes);
router.use("/instructors", authenticate, instructorRoutes);
router.use("/progress/course", authenticate, progressRoutes);

router.use("*" , (req, res) => {
    res.status(404).send({
        success : false ,
        message : "Not Found"
    })
})

router.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({
        success : false ,
        message : "Internal App Error"
    })
})

export default router;

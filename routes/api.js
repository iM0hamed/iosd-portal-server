import express from 'express';
let router = express.Router();

import authenticate from '../middlewares/authenticate';

import libraryRoutes from './library';
import authRoutes from './auth' ;
import blogRoutes from './blog' ;

router.use("/auth", authRoutes);
router.use("/blog", authenticate, blogRoutes );
router.use("/library", authenticate, libraryRoutes);

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
//admin routes
// router.use("/admin", [authenticate, admin], adminRoutes);


export default router;

import express from 'express';
import apiRouter from './api' ;
import dummyController from "../controllers/dummyController";


let router = express.Router();

router.use('/api/v1', apiRouter);
router.get('/', dummyController.sayHello);

export default router;
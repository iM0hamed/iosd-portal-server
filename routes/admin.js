import express from 'express';
import adminController from './../controllers/adminController';
let router = express.Router();

//admin library routes
// router.post('/library/book/new', adminController.bookNew);
router.post('/library/book/:id', adminController.bookEdit);
router.delete('/library/book/:id', adminController.bookDelete);

export default router;


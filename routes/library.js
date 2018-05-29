import express from 'express';
import libraryController from './../controllers/libraryController'
import authenticate from './../middlewares/authenticate';
import admin from "../middlewares/admin";

let router = express.Router();

router.get("/books", libraryController.index);
router.get("/book/:id", libraryController.show);

router.post('/book/new' , admin , libraryController.bookNew);
router.post('/book/:id', admin ,libraryController.bookEdit);
router.delete('/book/:id', admin , libraryController.bookDelete);

export default router;
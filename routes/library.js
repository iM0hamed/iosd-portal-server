import express from 'express';
import libraryController from './../controllers/libraryController'
import authenticate from './../middlewares/authenticate';

let router = express.Router();

router.get("/books", libraryController.index);
router.get("/book/:id", libraryController.show);

export default router;
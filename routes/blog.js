import express from 'express';
import admin from "../middlewares/admin";
import blogController from "../controllers/blogController";

let router = express.Router();

router.get('/posts' , blogController.fetchPosts);
router.get('/post/:guid' , blogController.fetchPost);

router.post('/refresh' ,admin ,  blogController.refreshBlog);

export default router;
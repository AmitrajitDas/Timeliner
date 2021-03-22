import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPosts);

export default router;
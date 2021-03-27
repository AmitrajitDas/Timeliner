import express from 'express';

import { getPost, createPost, updatePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPost);
router.post('/', createPost);
router.patch('/:id', updatePost);

export default router;
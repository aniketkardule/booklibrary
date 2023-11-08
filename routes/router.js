import express from 'express';
import { getBooks, getBook, insertBook, updateBook, deleteBook } from '../controller/controller.js';

const router = express.Router();

router.get('/',getBooks);
router.get('/book', getBook);
router.post('/book', insertBook);
router.patch('/book', updateBook);
router.delete('/book', deleteBook);

export default router;

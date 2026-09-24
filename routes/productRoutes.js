import express from 'express';
import {
  uploadProduct,
  getAllProducts,
} from '../controllers/productController.js';
import upload from '../config/multer.js';

const router = express.Router();

router.post('/upload/:studentId', upload.single('image'), uploadProduct);
router.get('/getall', getAllProducts);

export default router;
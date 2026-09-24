import productModel from '../models/productModel.js';
import studentModel from '../models/studentModel.js';
import cloudinary from '../config/cloudinary.js';

/**
 * create : upload product
 * get all :
 * get one
 * update : update product (stock)
 * delete
 */

//create / upload
export const uploadProduct = async (req, res) => {
  try {
    const getStudentID = await studentModel.findById(req.params.studentId);
    const { name, description, price, category, stock, quantity, image } = req.body;

    if (!getStudentID) {
      return res.status(404).json({
        message: 'Student not found',
      });
    }

    if(!req.file) {
      return res.status(400).json({
        message: 'Image file is required...pleae upload an image file',
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path)
    const imageurl = result.secure_url;

    const product = await productModel.create({
      name,
      description,
      price,
      category,
      stock,
      quantity,
      image: imageurl,
    });

    getStudentID.products.push(product._id);
    await getStudentID.save();

    return res.status(201).json({
      message: 'Product uploaded successfully',
      product,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//get all
export const getAllProducts = async (req, res) => {
  try {
    const getAll = await productModel.find();
    return res.status(200).json({
      message: 'All products fetched successfully',
      data: getAll,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  uploadProduct,
  getAllProducts,
};
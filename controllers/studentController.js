import studentModel from '../models/studentModel.js';
import mongoose from 'mongoose';

//CREATE STUDENT ACCOUNT 
export const createStudentAccount = async (req, res) => {
  try {
    const { name, email, regNo } = req.body;
    const student = await studentModel.create({
      name, email, regNo
    })
    return res.status(201).json({
      message: "Student account created successfully",
      data: student
    })
  } catch (error) {
    return res.status(400).json({
      message: "Error creating student account",
      error: error.message
    })
  }
    }


    export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials"
      });
    }
    return res.status(200).json({
      message: "User logged in successfully",
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error logging in user",
      error: error.message
    });
  }
};


//GET A SINGLE STUDENT (GET)
export const getSingleStudent = async (req, res) => {
  try {
    const { id } = req.params; // Extract the student ID from the request parameters
    const student = await studentModel.findById(id)// Use the findById method to retrieve the student document from the database based on the provided ID
    if (!student) { // Check if the provided ID is a valid MongoDB ObjectId
      return res.status(404).json({
        message: "Student not found"
      });
    }

    return res.status(200).json({
      message: "Student retrieved successfully",
      data: student
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error retrieving student",
      error: error.message
    });
  }
};


//GENEARL GET (GET)
export const getAllStudents = async (req, res) => {
  try {
    const getAllStudents = await studentModel.find();
    return res.status(200).json({
      message: "All students retrieved successfully",
      data: getAllStudents
    })
  }catch (error) {
    return res.status(400).json({
      message: "Error retrieving students",
      error: error.message
    })
  }
}


//UPDATE STUDENT (PUT)
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, regNo } = req.body;
    const updatedStudent = await studentModel.findByIdAndUpdate(id, { 
      name, email, regNo
    }, { returnDocument: 'after' });
    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    return res.status(200).json({
      message: "Student updated successfully",
      data: updatedStudent
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error updating student",
      error: error.message
    });
  }
};


//DELETE STUDENT
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    //const { name, email, password } = req.body;
    const deleteStudent = await studentModel.findByIdAndDelete(id);
    if (!deleteStudent) {
      return res.status(404).json({
        message: "Student not found"
      });
    }
    return res.status(200).json({
      message: "Student deleted successfully",
      data: deleteStudent
    });
  } catch (error) {
    return res.status(400).json({
      message: "Error deleting student",
      error: error.message
    });
  }
};
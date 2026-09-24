import express from 'express';
import { 
    createStudentAccount,
    getSingleStudent,
    updateStudent,
    deleteStudent,
    getAllStudents,
    loginUser

} from '../controllers/studentController.js';

const studentRouter = express.Router();

studentRouter.post('/new-student', createStudentAccount);
studentRouter.get('/get-student/:id', getSingleStudent);
studentRouter.get('/get-all-students', getAllStudents);
studentRouter.put('/update-student/:id', updateStudent);
studentRouter.delete('/delete-student/:id', deleteStudent);
studentRouter.post('/login', loginUser);

export default studentRouter;;

//GET http://localhost:3000/students/get-student/6a9bdfdc4843958b587826a4
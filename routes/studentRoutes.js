import express from 'express';
import { 
    createStudentAccount,
    getSingleStudent,
    updateStudent,
    deleteStudent,
    getAllStudents

} from '../controllers/studentController.js';

const router = express.Router();

router.post('/new-student', createStudentAccount);
router.get('/get-student/:id', getSingleStudent);
router.get('/get-all-students', getAllStudents);
router.put('/update-student/:id', updateStudent);
router.delete('/delete-student/:id', deleteStudent);

export default router;

//GET http://localhost:3000/students/get-student/6a9bdfdc4843958b587826a4
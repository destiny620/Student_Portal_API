import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  regNo: { type: String, required: true },  
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], 
});

const studentModel = mongoose.model('Student', userSchema);
export default studentModel;




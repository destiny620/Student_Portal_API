import "dotenv/config.js";
import express from 'express';//it is a web framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools for handling HTTP requests, routing, middleware, and more.
import mongoose from 'mongoose';
// const userRoute = require('./routes/userRoutes.js');//it imports the userRoutes module, which contains the routes for handling user-related HTTP requests. The routes are defined in a separate file (userRoutes.js) to keep the code organized and modular.

import studentRoutes from './routes/studentRoutes.js';
import productRoutes from './routes/productRoutes.js';//it imports the productRoutes module, which contains the routes for handling product-related HTTP requests. The routes are defined in a separate file (productRoutes.js) to keep the code organized and modular.


const app = express();
const PORT = process.env.PORT || 3000;
const ATLAS_STRING3 = process.env.ATLAS_STRING3;

if (!ATLAS_STRING3 || !/^mongodb(?:\+srv)?:\/\//.test(ATLAS_STRING3)) {
  throw new Error('ATLAS_STRING3 must be set to a valid MongoDB connection string.');
}

mongoose
  .connect(ATLAS_STRING3)
  .then(() => {
    console.log('✅ MongoDB Connected successfully!');
    
    // 🚀 MOVE YOUR APP.LISTEN INSIDE HERE
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ Connection Error: ', err.message);
    console.log('Please check your network, Atlas IP whitelist, or connection string.');
    process.exit(1);
  });



app.use(express.json())


app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use('/students', studentRoutes)//it mounts the studentRoutes middleware on the '/students' path. This means that any requests to routes starting with '/students' will be handled by the studentRoutes module, which contains the defined routes for student-related operations.;
app.use('/products', productRoutes);//it mounts the productRoutes middleware on the '/products' path. This means that any requests to routes starting with '/products' will be handled by the productRoutes module, which contains the defined routes for product-related operations.;
// app.listen(port, () => {
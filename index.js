import express from 'express';//it is a web framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools for handling HTTP requests, routing, middleware, and more.
import mongoose from 'mongoose';
// const userRoute = require('./routes/userRoutes.js');//it imports the userRoutes module, which contains the routes for handling user-related HTTP requests. The routes are defined in a separate file (userRoutes.js) to keep the code organized and modular.

import userRoutes from './routes/studentRoutes.js';

const mongoURI = 'mongodb://localhost:27017/cohort8_db';

const atlas_string2 = "mongodb+srv://omoefedestiny1993_db_user:oVk4pb45RXEMILaJ@cluster0.ibnrchx.mongodb.net/cohort8_db?appName=Cluster0";

const atlas_string3 = "mongodb://omoefedestiny1993_db_user:oVk4pb45RXEMILaJ@ac-njxax7d-shard-00-00.ibnrchx.mongodb.net:27017,ac-njxax7d-shard-00-01.ibnrchx.mongodb.net:27017,ac-njxax7d-shard-00-02.ibnrchx.mongodb.net:27017/?ssl=true&replicaSet=atlas-nicq89-shard-0&authSource=admin&appName=Cluster0";

mongoose
  .connect(mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('Connection Error: ', err.message);
    console.log('Start MongoDB locally, then run the app again.');
  });

const app = express()//it creates an instance of an Express application, which is used to define routes, middleware, and other configurations for the web server.
const port = 3000//it specifies the port number on which the Express server will listen for incoming HTTP requests. In this case, the server will listen on port 3000.

app.use(express.json())


app.get('/', (req, res) => {
  res.send('Server is running!')
})

app.use('/students', userRoutes)//it mounts the userRoutes middleware on the '/students' path. This means that any requests to routes starting with '/students' will be handled by the userRoutes module, which contains the defined routes for student-related operations.;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})//it starts the Express server and listens for incoming HTTP requests on the specified port (5555 in this case). When the server is successfully running, it logs a message to the console indicating the URL where the server can be accessed.
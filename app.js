import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user-routes.js';
import blogRouter from './routes/blog-routes.js';

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog",blogRouter);
mongoose.connect(process.env.MONGO)
  .then(() => {
    app.listen(5000);
    console.log("Connected to MongoDB and listening on port 5000");
  })
  .catch((error) => console.log(error));

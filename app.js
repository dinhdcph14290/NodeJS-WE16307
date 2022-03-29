import express from 'express';
import mongoose from 'mongoose';

import homeRoute from './routes/home'
import productRoute from './routes/products'
import categoryRoute from './routes/category'
import authRoute from './routes/auth'
const app = express();

app.use(express.json())
app.use(homeRoute);
app.use("/api",productRoute);
app.use("/api",categoryRoute)
app.use("/api",authRoute)

mongoose.connect('mongodb://localhost:27017/we16307');

const port = 3001;
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    });
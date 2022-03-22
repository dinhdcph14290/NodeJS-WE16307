import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import homeRoute from './routes/home'
import productRoute from './routes/products'
const app = express();


app.use(morgan('tiny'))
app.use(express.json())  // to read json data when uploaded

app.use(homeRoute);
app.use("/api",productRoute);

mongoose.connect('mongodb://localhost:27017/we16307');

const port = 3001;
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    });
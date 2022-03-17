import express from 'express';
import morgan from 'morgan';
import homeRoute from './routes/home'
import productRoute from './routes/products'
const app = express();


app.use(morgan('combined'))
app.use(express.json())  // to read json data when uploaded
app.use(homeRoute);
app.use("/api",productRoute);

const port = 3001;
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    });
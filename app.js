import express from 'express';
import homeRoute from './routes/home'
import productRoute from './routes/products'
const app = express();

app.use(express.json())
app.use(homeRoute);
app.use("/api",productRoute);

const port = 3001;
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    });
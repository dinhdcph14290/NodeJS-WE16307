const http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);

const homeRoute = require('./routers/home');
app.use(homeRoute);
const productsRouter = require('./routers/products');
app.use(productsRouter);
const detailProductRouter = require('./routers/detailProduct');
app.use(detailProductRouter);
// ---Phần chưa tách Router ---
// app.get('/news',(request,response)=>{
//     response.send(`
//         <h1>News page</h1>
//     `);
// });
//Bước 2: Khởi tạo server
// const server = http.createServer((request, response)=>{
//     if(request.url === '/'){
//         response.setHeader("Content-Type","text/html");
//         response.write("<h1>Home Page</h1>");
//         response.end();
//     }
// });

//Bước 3: Cổng thực thi
const port = 8080;
    server.listen(port, ()=>{
        console.log(`Server is running on ${port}`);
    });
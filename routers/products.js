const express = require('express');
const route = express.Router();

route.get('/products',(request,response)=>{
    response.send(`
        <h1>Products page</h1>
    `);
});
module.exports = route;
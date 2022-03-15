const express = require('express');
const route = express.Router();

route.get('/products/:productId',(request,response)=>{
    response.send(`
        <h1>Detail products page</h1>
        ${request.params.productId}
    `);
});
module.exports = route;
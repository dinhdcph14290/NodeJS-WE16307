const express = require('express');
const route = express.Router();

route.get('/',(request,response)=>{
    response.send(`
        <h1>Home page</h1>
        <h4>Welcome to CiDii</h4>
    `);
});
module.exports = route;
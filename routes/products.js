import express from "express";
import { response } from "express";
import { request } from "express";
const router = express.Router();
const products = [
    {id:1,name:"Product 1"},
    {id:2,name:"Product 2"},
    {id:3,name:"Product 3"}
]

// show products
router.get('/products',(request,response)=>{
    response.json(products)
});
// Show detail  
router.get('/products/:id',(request,response)=>{
    const product = products.find(item => item.id === +request.params.id)
    response.json(product)
});
router.post('/products',(request,response)=>{
    products.push(request.body)
    response.json(products)
});
router.delete('/products:id',(request,response) =>{
    const product = products.filter(item.id != +request.params.id)
    response.json(product)
})
router.put('/products/:id',(request,response)=>{
    response.json(products.map(item => item.id === +request.params.id ? request.body : item))
})
export default router;

import Product from "../models/products"
// const products = [
//     {id:1,name:"Product 1"},
//     {id:2,name:"Product 2"},
//     {id:3,name:"Product 3"}
//]

export const listProduct = async (request,response)=>{
    try {
        const product =await Product.find().exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Loi khong hien thi duoc"})
    }
    // response.json(products)
}
export const listProductDetail =async (request,response)=>{
    try {
        const product =await Product.findOne({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"})
    }
    // const product = products.find(item => item.id === +request.params.id)
    // response.json(product)
}
export const createProduct = async (request,response)=>{
    try {
        const product = await Product(request.body).save()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong the them san pham"})
    }
    // products.push(request.body)
    // response.json(products)
}
export const deleteProduct =async (request,response) =>{
    try {
        const product =await Product.findOneAndDelete({_id:request.params.id}).exec()
        response.json(product)
    } catch (error) {
        response.status(400).json({message:"Khong xoa duoc"})
    }
    // const product = products.filter(item.id != +request.params.id)
    // response.json(product)
}
export const updateProduct = async (request,response)=>{
    try {
        const product =await Product.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
        response.json()
    } catch (error) {
        response.status(400).json({message:"Khong cap nhat duoc"})
    }
    // response.json(products.map(item => item.id === +request.params.id ? request.body : item))
}
import { response } from "express";
import { request } from "express";
import category from "../models/category";
import products from "../models/products";

export const createCategory =async (request,response) => {
    try {
        const category =await Category(request,response).save()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong tao moi duoc"});
    }
}
export const listCategory =async (request,response) => {
    try {
        const category = await Category.find().exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Khong tao moi duoc"});
        
    }
}
export const listCategoryDetail = async (request,response) => {
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        //Show category
        // const product = await Product.find({category}).select("-category").exec()
        //Ẩn category
        response.json({category,product})
    } catch (error) {
        response.status(400).json({message:"Khong the hien thi"})
    }
}
export const deleteCategory = async (request,response) => {
    try {
        const category =await Category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"khong xoa duoc"})
    }
}
export const updateCategory = async (request,response) => {
    try {
        const category =await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
    } catch (error) {
        response.status(400).json({message:"Khong cap nhat duoc"})
    }
}

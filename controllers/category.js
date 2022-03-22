import { response } from "express";
import { request } from "express";
import Category from "../models/category";
import Products from "../models/products";

export const createCategory =async (request,response) => {
    try {
        const category =await Category(request.body).save()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không tạo mới được sản phẩm này!"});
    }
}
export const listCategory =async (request,response) => {
    try {
        const category = await Category.find().exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không hiển thị được danh sách sản phẩm!"});
        
    }
}
export const listCategoryDetail = async (request,response) => {
    try {
        const category = await Category.findOne({_id:request.params.id}).exec()
        const product = await Product.find({category}).exec()
        // const product = await Product.find({category}).populate("category").exec()
        //Show category
        // const product = await Product.find({category}).select("-category").exec()
        //Hidden category
        response.json({category,product})
    } catch (error) {
        response.status(400).json({message:"Không thể hiển thị chi tiết sản phẩm"})
    }
}
export const deleteCategory = async (request,response) => {
    try {
        const category =await Category.findOneAndDelete({_id:request.params.id}).exec()
        response.json(category)
    } catch (error) {
        response.status(400).json({message:"Không xóa được sản phẩm này!"})
    }
}
export const updateCategory = async (request,response) => {
    try {
        const category =await Category.findOneAndUpdate({_id:request.params.id},request.body,{new:true}).exec()
    } catch (error) {
        response.status(400).json({message:"Không cập nhật được sản phẩm này"})
    }
}

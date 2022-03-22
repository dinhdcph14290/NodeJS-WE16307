import express from "express";
import { listCategory, listCategoryDetail } from "../controllers/category";
const router = express.Router();

router.get("/category",listCategory)
router.get("/category/:id",listCategoryDetail)
router.post("/category",createCategory)
router.delete("/category/:id", deleteCategory)
router.put("/category/:id",updateCategory)

export default router
import { type Request, type Response } from "express"
import * as service from "../services/category.service.js"

export const create = async (req: Request, res: Response) => {
    try {
        const category = await service.createCategory(req.body)
        res.status(201).json(category)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to create category" })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const categories = await service.getCategories()
        res.json(categories)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch categories" })
    }
}

export const findOne = async (req: Request, res: Response) => {
    try {
        const category = await service.getCategory(Number(req.params.id))
        res.json(category)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch category" })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const category = await service.updateCategory(
            Number(req.params.id),
            req.body
        )
        res.json(category)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to update category" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await service.deleteCategory(Number(req.params.id))
        res.json({ message: "Category deleted" })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to delete category" })
    }
}
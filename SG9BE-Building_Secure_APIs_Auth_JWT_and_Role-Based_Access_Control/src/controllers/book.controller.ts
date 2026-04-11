import { type Request, type Response } from "express"
import * as service from "../services/book.service.js"

export const create = async (req: Request, res: Response) => {
    try {
        const data = await service.createBook(req.body)
        res.status(201).json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to create book" })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const data = await service.getBooks()
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch books" })
    }
}

export const findOne = async (req: Request, res: Response) => {
    try {
        const data = await service.getBook(Number(req.params.id))
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch book" })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const data = await service.updateBook(Number(req.params.id), req.body)
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to update book" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await service.deleteBook(Number(req.params.id))
        res.json({ message: "Book deleted" })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to delete book" })
    }
}
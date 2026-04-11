import { type Request, type Response } from "express"
import * as service from "../services/author.service.js"

export const create = async (req: Request, res: Response) => {
    try {
        const data = await service.createAuthor(req.body)
        res.status(201).json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to create author" })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const data = await service.getAuthors()
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch authors" })
    }
}

export const findOne = async (req: Request, res: Response) => {
    try {
        const data = await service.getAuthor(Number(req.params.id))
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch author" })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const data = await service.updateAuthor(Number(req.params.id), req.body)
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to update author" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await service.deleteAuthor(Number(req.params.id))
        res.json({ message: "Author deleted" })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to delete author" })
    }
}
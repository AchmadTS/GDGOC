// TUGAS
import { type Request, type Response } from "express"
import * as service from "../services/profile.service.js"

export const create = async (req: Request, res: Response) => {
    try {
        const data = await service.createProfile(req.body)
        res.status(201).json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to create profile" })
    }
}

export const findAll = async (req: Request, res: Response) => {
    try {
        const data = await service.getProfiles()
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch profiles" })
    }
}

export const findOne = async (req: Request, res: Response) => {
    try {
        const data = await service.getProfile(Number(req.params["id"]))
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to fetch profile" })
    }
}

export const update = async (req: Request, res: Response) => {
    try {
        const data = await service.updateProfile(Number(req.params["id"]), req.body)
        res.json(data)
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to update profile" })
    }
}

export const remove = async (req: Request, res: Response) => {
    try {
        await service.deleteProfile(Number(req.params["id"]))
        res.json({ message: "Profile deleted" })
    } catch (error: any) {
        res.status(500).json({ message: error.message || "Failed to delete profile" })
    }
}
// END TUGAS
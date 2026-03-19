import { type Request, type Response } from "express"
import * as service from "../services/member.service.js"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createMember(req.body)
    res.status(201).json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to create member" })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getMembers()
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch members" })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const data = await service.getMember(Number(req.params.id))

    if (!data) {
      return res.status(404).json({ message: "Member not found" })
    }

    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch member" })
  }
}

export const update = async (req: Request, res: Response) => {
  try {
    const data = await service.updateMember(Number(req.params.id), req.body)

    if (!data) {
      return res.status(404).json({ message: "Member not found" })
    }

    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to update member" })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    await service.deleteMember(Number(req.params.id))
    res.json({ message: "Member deleted" })
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete member" })
  }
}
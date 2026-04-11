import { type Request, type Response } from "express"
import * as service from "../services/loan.service.js"

export const create = async (req: Request, res: Response) => {
  try {
    const data = await service.createLoan(req.body)
    res.status(201).json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to create loan" })
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const data = await service.getLoans()
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch loans" })
  }
}

export const findOne = async (req: Request, res: Response) => {
  try {
    const data = await service.getLoan(Number(req.params.id))

    if (!data) {
      return res.status(404).json({ message: "Loan not found" })
    }

    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to fetch loan" })
  }
}

export const returnLoan = async (req: Request, res: Response) => {
  try {
    const data = await service.returnBook(Number(req.params.id))
    res.json(data)
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to return book" })
  }
}

export const remove = async (req: Request, res: Response) => {
  try {
    await service.deleteLoan(Number(req.params.id))
    res.status(204).send()
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Failed to delete loan" })
  }
}
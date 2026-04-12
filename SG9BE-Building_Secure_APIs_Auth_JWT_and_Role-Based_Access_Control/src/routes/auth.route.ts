import type { Request, Response } from "express";
import * as service from "../services/auth.service.js";

export const register = async (req: Request, res: Response) => {
    try {
        const user = await service.register(req.body);

        res.status(201).json({
            message: "User registered successfully",
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
            },
        });
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { user, token } = await service.login(req.body);

        res.cookie("auth_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Berhasil login",
            token: token,
            role: user.role,
            data: {
                id: user.id,
                email: user.email,
                name: user.name,
            }
        });
    } catch (error: any) {
        res.status(400).json({ error: "Email atau password salah" });
    }
};

export const logout = (req: Request, res: Response) => {
    res.clearCookie("auth_token");
    res.status(200).json({ message: "Berhasil logout" });
};

export const me = async (req: Request, res: Response) => {
    try {
        const userId = (req as any).user.id || (req as any).userId;
       const user = await service.getUserProfile(userId);

       if (!user) {
           return res.status(404).json({ error: "User tidak ditemukan" });
       }
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
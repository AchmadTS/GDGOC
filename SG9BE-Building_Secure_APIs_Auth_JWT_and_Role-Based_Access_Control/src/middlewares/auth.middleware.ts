import { type Request, type Response, type NextFunction } from 'express';
import jwt from "jsonwebtoken";
import { SECRET_KEY } from "../config/jwt.js";

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    let token = authHeader && authHeader.split(" ")[1]; 

    if (!token) {
        token = req.cookies?.auth_token;
    }

    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        (req as any).user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ error: "Invalid token atau sesi berakhir" });
    }
};
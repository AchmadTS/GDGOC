import { type Request, type Response, type NextFunction } from 'express';

export const adminOnly = (req: Request, res: Response, next: NextFunction) => {
  
    const userRole = (req as any).user?.role?.toLowerCase();

    if (userRole !== 'admin') {
        return res.status(403).json({ 
            message: "Forbidden",
            error: "Akses ditolak, hanya untuk Admin." 
        });
    }

    next();
};
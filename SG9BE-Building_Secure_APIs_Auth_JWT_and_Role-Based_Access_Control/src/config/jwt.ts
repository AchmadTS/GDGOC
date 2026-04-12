import { type JwtPayload } from 'jsonwebtoken'

export interface Token extends JwtPayload {
    userId: number
    role: 'admin' | 'user'
}

const SECRET = process.env.SECRET_KEY;

if (!SECRET) {
    throw new Error("SECRET_KEY belum diset di .env");
}

export const SECRET_KEY = SECRET;
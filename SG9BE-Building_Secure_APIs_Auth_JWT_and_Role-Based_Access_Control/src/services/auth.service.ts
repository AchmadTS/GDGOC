import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { SECRET_KEY, type Token } from "../config/jwt.js";
import { prisma } from "../config/prisma.js";

const generateToken = (user: any) => {
    const payload: Token = { userId: user.id, role: user.role };
    return jwt.sign(payload, SECRET_KEY, {
        expiresIn: '24h',
        algorithm: 'HS256'
    });
};

export const register = async (userData: any) => {
    const { email, password, name, role } = userData;

    const hashedPassword = await bcrypt.hash(password, 10);

    return prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            name: name || "User",
            role: role || "user"
        }
    });
};

export const login = async (loginData: any) => {
    const { email, password } = loginData;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) throw new Error("User tidak ditemukan");

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) throw new Error("Email atau password salah");

    const token = generateToken(user);
    return { user, token };
};

export const getUserProfile = async (userId: number) => {
    return prisma.user.findUnique({
        where: { id: userId },
        select: {
            id: true,
            name: true,
            email: true,
            role: true,
            createdAt: true
        }
    });
};
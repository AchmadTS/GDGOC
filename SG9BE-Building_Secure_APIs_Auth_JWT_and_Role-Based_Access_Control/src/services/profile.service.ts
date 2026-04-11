// TUGAS
import { prisma } from "../config/prisma.js"

export const createProfile = (data: any) => {
    return prisma.profile.create({ data })
}

export const getProfiles = () => {
    return prisma.profile.findMany({
        include: { author: true }
    })
}

export const getProfile = (id: number) => {
    return prisma.profile.findUnique({
        where: { id },
        include: { author: true }
    })
}

export const updateProfile = (id: number, data: any) => {
    return prisma.profile.update({
        where: { id },
        data
    })
}

export const deleteProfile = (id: number) => {
    return prisma.profile.delete({
        where: { id }
    })
}
// END TUGAS
import { prisma } from "../config/prisma.js"

export const createCategory = (data: any) => {
  return prisma.category.create({ data })
}

export const getCategories = () => {
  return prisma.category.findMany({
    include: { books: true },
  })
}

export const getCategory = (id: number) => {
  return prisma.category.findUnique({
    where: { id },
  })
}

export const updateCategory = (id: number, data: any) => {
  return prisma.category.update({
    where: { id },
    data,
  })
}

export const deleteCategory = (id: number) => {
  return prisma.category.delete({
    where: { id },
  })
}
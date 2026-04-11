import { prisma } from "../config/prisma.js"

export const createBook = async (data: any) => {

  const { title, year, categoryId, publisherId, authorIds } = data

  return prisma.book.create({
    data: {
      title,
      year,
      categoryId,
      publisherId,
      authors: {
        connect: authorIds.map((id: number) => ({ id }))
      }
    },
    include: {
      category: true,
      publisher: true,
      authors: true
    }
  })
}

export const getBooks = () => {
  return prisma.book.findMany({
    include: {
      category: true,
      publisher: true,
      authors: true
    }
  })
}

export const getBook = (id: number) => {
  return prisma.book.findUnique({
    where: { id },
    include: {
      category: true,
      publisher: true,
      authors: true
    }
  })
}

export const updateBook = (id: number, data: any) => {
  const { title, year, categoryId, publisherId, authorIds } = data

  return prisma.book.update({
    where: { id },
    data: {
      title,
      year,
      categoryId,
      publisherId,
      authors: {
        set: authorIds.map((id: number) => ({ id }))
      }
    },
    include: {
      category: true,
      publisher: true,
      authors: true
    }
  })
}

export const deleteBook = (id: number) => {
  return prisma.book.delete({
    where: { id }
  })
}
import { prisma } from "../config/prisma.js"

export const createLoan = async (data: { memberId: number; bookId: number }) => {

  const existing = await prisma.loan.findFirst({
    where: {
      bookId: data.bookId,
      returnDate: null
    }
  })

  if (existing) {
    throw new Error("Book is currently borrowed and not yet returned")
  }

  return prisma.loan.create({
    data: {
      memberId: data.memberId,
      bookId: data.bookId
    },
    include: {
      member: true,
      book: true
    }
  })
}


export const getLoans = async () => {
  return prisma.loan.findMany({
    include: {
      member: true,
      book: true
    }
  })
}


export const getLoan = async (id: number) => {
  return prisma.loan.findUnique({
    where: { id },
    include: {
      member: true,
      book: true
    }
  })
}


export const returnBook = async (id: number) => {

  const loan = await prisma.loan.findUnique({
    where: { id }
  })

  if (!loan) {
    throw new Error("Loan not found")
  }

  if (loan.returnDate) {
    throw new Error("Book already returned")
  }

  return prisma.loan.update({
    where: { id },
    data: {
      returnDate: new Date()
    },
    include: {
      member: true,
      book: true
    }
  })
}


export const deleteLoan = async (id: number) => {
  return prisma.loan.delete({
    where: { id }
  })
}
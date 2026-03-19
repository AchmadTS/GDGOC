import { z } from "zod"

export const createLoanSchema = z.object({
  memberId: z.number(),
  bookId: z.number()
})

export const returnLoanSchema = z.object({
  returnDate: z.string().datetime().optional()
})
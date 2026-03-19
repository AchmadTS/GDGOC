import { z } from "zod"

export const bookSchema = z.object({
  title: z.string(),
  year: z.number(),
  categoryId: z.number(),
  publisherId: z.number().optional(),
  authorIds: z.array(z.number())
})
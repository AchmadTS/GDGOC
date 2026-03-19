import { z } from "zod"

export const createMemberSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phone: z.string().optional(),
  address: z.string().optional()
})

export const updateMemberSchema = createMemberSchema.partial()
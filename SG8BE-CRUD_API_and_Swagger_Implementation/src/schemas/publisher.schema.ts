import { z } from "zod"

export const publisherSchema = z.object({
  name: z.string().min(3)
})
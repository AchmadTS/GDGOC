// TUGAS
import { z } from "zod"

export const profileSchema = z.object({
    bio: z.string().min(3),
    authorId: z.number()
})
// END TUGAS
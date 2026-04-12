import { type Request, type Response, type NextFunction } from "express"
import { ZodType } from "zod"

export const validate =
    (schema: ZodType) =>
        (req: Request, res: Response, next: NextFunction) => {
            try {
                schema.parse(req.body)
                next()
            } catch (error: any) {
                return res.status(400).json({
                    message: "Validation error",
                    errors: error.errors,
                })
            }
        }
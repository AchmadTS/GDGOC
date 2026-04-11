import { Router } from "express"
import * as controller from "../controllers/loan.controller.js"
import { validate } from "../middlewares/validation.middleware.js"
import { createLoanSchema, returnLoanSchema } from "../schemas/loan.schema.js"

const router = Router()

router.get("/",controller.findAll)
router.get("/:id",controller.findOne)

router.post("/",
    validate(createLoanSchema),
    controller.create)

router.patch("/:id/return",
    validate(returnLoanSchema),
    controller.returnLoan)

router.delete("/:id",
    controller.remove)

export default router
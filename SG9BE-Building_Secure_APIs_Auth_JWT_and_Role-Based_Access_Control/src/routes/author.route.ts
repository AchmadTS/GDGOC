import { Router } from "express"
import * as controller from "../controllers/author.controller.js"
import { validate } from "../middlewares/validation.middleware.js"
import { authorSchema } from "../schemas/author.schema.js"

const router: Router = Router()

router.get("/", controller.findAll)
router.get("/:id", controller.findOne)

router.post("/",
    validate(authorSchema),
    controller.create)
router.put("/:id",
    validate(authorSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router
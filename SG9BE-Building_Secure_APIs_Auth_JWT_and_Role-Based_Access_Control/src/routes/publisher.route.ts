import { Router } from "express"
import * as controller from "../controllers/publisher.controller.js"
import { validate } from "../middlewares/validation.middleware.js"
import { publisherSchema } from "../schemas/publisher.schema.js"

const router: Router = Router()

router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.post("/",
    validate(publisherSchema),
    controller.create)
router.put("/:id",
    validate(publisherSchema),
    controller.update)
router.delete("/:id",
    controller.remove)

export default router
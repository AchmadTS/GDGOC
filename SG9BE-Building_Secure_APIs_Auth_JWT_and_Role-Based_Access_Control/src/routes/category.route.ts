import { Router } from "express"
import * as controller from "../controllers/category.controller.js"
import { validate } from "../middlewares/validation.middleware.js"
import { categorySchema } from "../schemas/category.schema.js"

const router: Router = Router()

router.get("/", controller.findAll)

router.get("/:id", controller.findOne)

router.post(
  "/",
  validate(categorySchema),
  controller.create
)

router.put(
  "/:id",
  validate(categorySchema),
  controller.update
)

router.delete("/:id", controller.remove)

export default router
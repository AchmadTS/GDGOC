// TUGAS
import { Router } from "express"
import * as controller from "../controllers/profile.controller.js"
import { validate } from "../middlewares/validation.middleware.js"
import { profileSchema } from "../schemas/profile.schema.js"

const router = Router()

router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.post("/", validate(profileSchema), controller.create)
router.put("/:id", validate(profileSchema), controller.update)
router.delete("/:id", controller.remove)

export default router
// END TUGAS
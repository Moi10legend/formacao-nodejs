import {Router} from "express"
import * as controller from "./controllers/players-controller"

const router = Router()

router.get("/players", controller.getPlayerController)
router.get("/players/:id", controller.getPlayerByIdController)

router.post("/players", controller.postPlayerController)

router.delete("/players/:id", controller.deletePlayerController)

router.patch("/players/:id", controller.updatePlayerController)

export {
    router,
}
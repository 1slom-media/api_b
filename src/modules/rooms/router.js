import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/rooms", controller.GET);
router.get("/rooms/:roomsId", controller.GET);
router.post("/rooms",controller.POST);
router.put("/rooms/:roomsId",controller.PUT);
router.delete("/rooms/:roomsId", controller.DELETE);


export default router;
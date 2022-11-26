import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/galery", controller.GET);
router.get("/galery/:galeryId", controller.GET);
router.post("/galery",controller.POST);
router.put("/galery/:galeryId",controller.PUT);
router.delete("/galery/:galeryId", controller.DELETE);


export default router;
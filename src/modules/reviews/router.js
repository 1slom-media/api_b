import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/reviews", controller.GET);
router.get("/reviews/:reviewsId", controller.GET);
router.post("/reviews",controller.POST);
router.put("/reviews/:reviewsId",controller.PUT);
router.delete("/reviews/:reviewsId", controller.DELETE);


export default router;
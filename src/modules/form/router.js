import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/form", controller.GET);
router.get("/form/:formId", controller.GET);
router.post("/form",controller.POST);
router.put("/form/:formId",controller.PUT);
router.delete("/form/:formId", controller.DELETE);


export default router;
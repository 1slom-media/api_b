import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.get("/contacts", controller.GET);
router.get("/contacts/:contactsId", controller.GET);
router.post("/contacts",controller.POST);
router.put("/contacts/:contactsId",controller.PUT);
router.delete("/contacts/:contactsId", controller.DELETE);


export default router;
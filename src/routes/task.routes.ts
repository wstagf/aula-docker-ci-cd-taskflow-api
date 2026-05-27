import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router();

const controller = new TaskController();

router.post("/", controller.create);
router.get("/", controller.findAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

export default router;
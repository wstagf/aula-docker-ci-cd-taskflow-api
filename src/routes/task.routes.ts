import { Router } from "express";
import { TaskController } from "../controllers/task.controller";

const router = Router();

const controller = new TaskController();

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Lista todas as tasks
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: Lista de tasks
 */
router.post("/", controller.create);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Cria uma nova task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       201:
 *         description: Task criada
 */
router.get("/", controller.findAll);


/**
 * @swagger
 * /tasks/{id}:
 *   put:
 *     summary: Atualiza uma task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Task atualizada
 */
router.put("/:id", controller.update);


/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: Remove uma task
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Task removida
 */
router.delete("/:id", controller.delete);

export default router;
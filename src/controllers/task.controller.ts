import { Request, Response } from "express";
import { TaskService } from "../services/task.service";

export class TaskController {
  private service = new TaskService();

  create = async (req: Request, res: Response) => {
    try {
      const task = await this.service.create(req.body);

      return res.status(201).json(task);
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Error",
      });
    }
  };

  findAll = async (req: Request, res: Response) => {
    const tasks = await this.service.findAll();

    return res.json(tasks);
  };

  update = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      const task = await this.service.update(
        Number(id),
        req.body
      );

      return res.json(task);
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Error",
      });
    }
  };

  delete = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await this.service.delete(Number(id));

      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({
        error: error instanceof Error ? error.message : "Error",
      });
    }
  };
}
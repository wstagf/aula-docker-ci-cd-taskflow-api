import { TaskRepository } from "../repositories/task.repository";
import { CreateTaskDTO, UpdateTaskDTO } from "../types/task.types";

export class TaskService {
  private repository = new TaskRepository();

  async create(data: CreateTaskDTO) {
    if (!data.title) {
      throw new Error("Title is required");
    }

    return this.repository.create(data);
  }

  async findAll() {
    return this.repository.findAll();
  }

  async update(id: number, data: UpdateTaskDTO) {
    return this.repository.update(id, data);
  }

  async delete(id: number) {
    return this.repository.delete(id);
  }
}
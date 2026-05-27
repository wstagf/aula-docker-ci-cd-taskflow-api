import { prisma } from "../config/prisma";
import { CreateTaskDTO, UpdateTaskDTO } from "../types/task.types";

export class TaskRepository {
  async create(data: CreateTaskDTO) {
    return prisma.task.create({
      data,
    });
  }

  async findAll() {
    return prisma.task.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(id: number, data: UpdateTaskDTO) {
    return prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: number) {
    return prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
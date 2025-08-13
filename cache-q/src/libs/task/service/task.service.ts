import { Injectable } from '@nestjs/common';
import { TaskModel } from '../database/task.model';
import { TaskStatus } from '../domain/task.types';
import { CreateTaskDto } from '../dto/task.request.dto';
import { TaskRepository } from '../repository/task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly repository: TaskRepository) {}

  async findAll(): Promise<TaskModel[]> {
    return await this.repository.findAll();
  }

  async findById(id: string): Promise<TaskModel | null> {
    return await this.repository.findOneById(id);
  }

  async create(request: CreateTaskDto): Promise<TaskModel> {
    const model = this.repository.create();
    model.name = request.name;
    model.description = request.description;
    model.status = TaskStatus.TODO;
    return await this.repository.insert(model);
  }

  async update(id: string, request: CreateTaskDto): Promise<void> {
    await this.repository.update(id, request);
  }

  async delete(id: string): Promise<void> {
    const model = await this.repository.findOneById(id);
    await this.repository.delete(model);
  }
}

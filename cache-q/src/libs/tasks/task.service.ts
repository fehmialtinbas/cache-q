import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskModel } from './database/task.model';
import { CreateTaskDto } from './dto/task.request.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskModel)
    private taskRepository: Repository<TaskModel>,
  ) {}

  async findAll(): Promise<TaskModel[]> {
    return this.taskRepository.find();
  }
  async findById(id: string): Promise<TaskModel | null> {
    return await this.taskRepository.findOneBy({ id });
  }
  async create(request: CreateTaskDto): Promise<TaskModel> {
    request.status = 'TODO';
    return await this.taskRepository.save(request);
  }

  async update(id: string, request: CreateTaskDto): Promise<void> {
    await this.taskRepository.update(
      { id },
      { ...request, updatedAt: new Date() },
    );
  }

  async delete(id: string): Promise<void> {
    await this.taskRepository.delete({ id });
  }
}

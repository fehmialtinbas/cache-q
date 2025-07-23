import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/task.request.dto';

@Injectable()
export class TaskService {
  async findAll(): Promise<string> {
    return 'Get tasks!';
  }
  async findById(id: string): Promise<string> {
    return `Get task with ID: ${id}`;
  }
  async createTask(request: CreateTaskDto): Promise<string> {
    return `Task created with name: t}`;
  }
}

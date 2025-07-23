import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  async findAll(): Promise<string> {
    return 'Get tasks!';
  }
  async findById(id: string): Promise<string> {
    return `Get task with ID: ${id}`;
  }
  async createTask(request: Request): Promise<string> {
    return `Task created with name: t}`;
  }
}

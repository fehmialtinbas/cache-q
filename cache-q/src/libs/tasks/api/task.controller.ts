import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskService } from '../task.service';

@ApiTags('tasks') // Swagger menüsünde kategorilendirir
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<string> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<string> {
    return await this.taskService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Görev oluştur' })
  @ApiResponse({ status: 201, description: 'Görev başarıyla oluşturuldu' })
  async createTask(@Body() request: Request): Promise<string> {
    return await this.taskService.createTask(request);
  }
}

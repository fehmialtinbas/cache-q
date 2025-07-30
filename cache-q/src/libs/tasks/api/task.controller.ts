import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TaskModel } from '../database/task.model';
import { CreateTaskDto } from '../dto/task.request.dto';
import { TaskService } from '../task.service';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async findAll(): Promise<TaskModel[]> {
    return await this.taskService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<TaskModel | null> {
    return await this.taskService.findById(id);
  }

  @Post()
  @ApiOperation({ summary: 'Görev oluştur' })
  @ApiResponse({ status: 201, description: 'Görev başarıyla oluşturuldu' })
  async createTask(@Body() request: CreateTaskDto): Promise<TaskModel> {
    return await this.taskService.create(request);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Görev güncelle' })
  @ApiResponse({ status: 200, description: 'Görev başarıyla güncellendi' })
  async updateTask(
    @Param('id') id: string,
    @Body() request: CreateTaskDto,
  ): Promise<void> {
    await this.taskService.update(id, request);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Görevi sil' })
  @ApiResponse({ status: 200, description: 'Görev başarıyla silindi' })
  async deleteTask(@Param('id') id: string): Promise<void> {
    await this.taskService.delete(id);
  }
}

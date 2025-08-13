import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { TaskStatus } from '../domain/task.types';

export class CreateTaskDto {
  @ApiProperty({ example: 'Task Name', description: 'Görev adı' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'Task Description', description: 'Görev açıklaması' })
  @IsString()
  description?: string;
  @ApiProperty({ example: 'pending', description: 'Görev durumu' })
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}

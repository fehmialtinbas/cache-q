import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../domain/task.types';

export class CreateTaskDto {
  @ApiProperty({ example: 'Task Name', description: 'Görev adı' })
  name: string;
  @ApiProperty({ example: 'Task Description', description: 'Görev açıklaması' })
  description?: string;
  @ApiProperty({ example: 'pending', description: 'Görev durumu' })
  status?: TaskStatus;
}

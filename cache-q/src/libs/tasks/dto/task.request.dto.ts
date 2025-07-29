import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'Task Name', description: 'Görev adı' })
  name: string;
  @ApiProperty({ example: 'Task Description', description: 'Görev açıklaması' })
  description?: string;
  @ApiProperty({ example: 'pending', description: 'Görev durumu' })
  status?: string;
}

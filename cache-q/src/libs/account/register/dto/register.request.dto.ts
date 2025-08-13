import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty({ example: 'User Name', description: 'Kullanıcı adı' })
  userName: string;
  @ApiProperty({ example: 'Email', description: 'Email' })
  email: string;
}

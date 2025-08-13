import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'User Name', description: 'Kullanıcı adı' })
  @IsString()
  userName: string;
  @ApiProperty({ example: 'Email', description: 'Email' })
  @IsString()
  email: string;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({ example: 'User Name', description: 'Kullanıcı adı' })
  @IsString()
  name: string;
  @ApiProperty({ example: 'User Password', description: 'Kullanıcı şifresi' })
  @IsString()
  password: string;
  @ApiProperty({ example: 'Email', description: 'Email' })
  @IsString()
  email: string;
}

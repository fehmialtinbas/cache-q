import { ApiProperty } from '@nestjs/swagger';
import { ModelBase } from 'src/libs/common/model.base';
import {
  Column,
  DeleteDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

export class TaskModel extends ModelBase {
  constructor(props: TaskModel) {
    super(props);
  }
  @PrimaryColumn()
  id: string;

  @ApiProperty({ example: 'Task Name', description: 'Görev adı' })
  @Column()
  name: string;

  @ApiProperty({ example: 'Task Description', description: 'Görev açıklaması' })
  @Column()
  description?: string;

  @Column()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}

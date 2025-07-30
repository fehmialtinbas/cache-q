import { ModelBase } from 'src/libs/common/model.base';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { TasksProps, TaskStatus } from '../domain/task.types';

@Entity('tasks')
export class TaskModel extends ModelBase {
  constructor(props: TasksProps) {
    super(props);
  }
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  status?: TaskStatus;

  @Column()
  description?: string;

  @CreateDateColumn()
  createdAt?: Date = new Date();

  @UpdateDateColumn()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RepositoryBase } from '../../common/repository.base';
import { TaskModel } from '../database/task.model';

export class TaskRepository extends RepositoryBase<TaskModel> {
  constructor(
    @InjectRepository(TaskModel)
    protected readonly repository: Repository<TaskModel>,
  ) {
    super(repository);
  }
}

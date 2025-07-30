import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { applicationDBConfig } from './infrastructure/connection.config';
import { TaskController } from './libs/tasks/api/task.controller';
import { TaskModel } from './libs/tasks/database/task.model';
import { TaskRepository } from './libs/tasks/task.repository';
import { TaskService } from './libs/tasks/task.service';

@Module({
  imports: [
    // Configure TypeORM with environment variables
    TypeOrmModule.forRoot(applicationDBConfig),
    TypeOrmModule.forFeature([TaskModel]),
  ],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
})
export class AppModule {}

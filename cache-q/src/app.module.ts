import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { applicationDBConfig } from './infrastructure/connection.config';
import { TaskController } from './libs/task/api/task.controller';
import { TaskModel } from './libs/task/database/task.model';
import { TaskRepository } from './libs/task/repository/task.repository';
import { TaskService } from './libs/task/service/task.service';

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

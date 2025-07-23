import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { applicationDBConfig } from './infrastructure/connection.config';
import { TaskController } from './libs/tasks/api/task.controller';
import { TaskService } from './libs/tasks/task.service';

@Module({
  imports: [TypeOrmModule.forRoot(applicationDBConfig)],
  controllers: [TaskController],
  providers: [TaskService],
})
export class AppModule {}

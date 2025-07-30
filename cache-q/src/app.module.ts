import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskController } from './libs/tasks/api/task.controller';
import { TaskModel } from './libs/tasks/database/task.model';
import { TaskRepository } from './libs/tasks/task.repository';
import { TaskService } from './libs/tasks/task.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env.development', '.env'],
    }),
    // Configure TypeORM with environment variables
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([TaskModel]),
  ],
  controllers: [TaskController],
  providers: [TaskRepository, TaskService],
})
export class AppModule {}

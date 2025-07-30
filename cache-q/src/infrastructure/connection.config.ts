import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

const service = new ConfigService();
export const applicationDBConfig = {
  type: 'postgres',
  host: service.get('DB_HOST'),
  port: service.get('DB_PORT'),
  database: service.get('DB_NAME'),
  username: service.get('DB_USERNAME'),
  password: service.get('DB_PASSWORD'),
  synchronize: true,
  logging: false,
  entities: ['libs/**/*.model{.ts,.js}'],
} as any;

//this is the dynamic module configuration for TypeORM
export const envConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('DB_HOST'),
    port: configService.get('DB_PORT'),
    database: configService.get('DB_NAME'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    synchronize: true,
    logging: true,
    entities: ['libs/**/*.model{.ts,.js}'],
  }),
  inject: [ConfigService],
};

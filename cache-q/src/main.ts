import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './libs/common/exception/http.exception.filter';
import { DefaultValidationPipe } from './libs/common/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Dokümantasyonu')
    .setDescription('API endpointleri Swagger UI üzerinde test edilebilir')
    .setVersion('1.0')
    .addBearerAuth() // JWT kullanıyorsan ekleyebilirsin
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.useGlobalFilters(new HttpExceptionFilter());
  app.useGlobalPipes(DefaultValidationPipe);
  app.setGlobalPrefix('api');

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

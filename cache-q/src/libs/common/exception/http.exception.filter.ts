import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ExceptionBase } from './exception.base';

@Catch(HttpException, ExceptionBase, Error)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: Error | HttpException | ExceptionBase, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = 'getStatus' in exception ? exception.getStatus() : 500;
    console.error(exception);
    response.status(status).json({
      status,
      message: (exception as any).validations || exception.message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}

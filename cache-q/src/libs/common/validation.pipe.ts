import { ValidationPipe } from '@nestjs/common';
import { BadRequestException } from './exception/exceptions';

export const DefaultValidationPipe = new ValidationPipe({
  transform: true,
  transformOptions: {
    enableImplicitConversion: true,
  },
  exceptionFactory: (errors) => {
    const result = errors.map((error) => ({
      property: error.property,
      message: error.constraints
        ? error.constraints[Object.keys(error.constraints)[0]]
        : 'Validation error',
    }));
    return new BadRequestException(result);
  },
});

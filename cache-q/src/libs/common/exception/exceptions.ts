import { ErrorCodes } from './error.codes';
import { ExceptionBase } from './exception.base';

/**
 * Used to indicate that an incorrect argument was provided to a method/function/class constructor
 *
 * @class ArgumentInvalidException
 * @extends {ExceptionBase}
 */
export class ArgumentInvalidException extends ExceptionBase {
  readonly status = 422;
  constructor(message: string = ErrorCodes.ARGUMENT_INVALID) {
    super(message);
  }
}

/**
 * Used to indicate that an argument was not provided (is empty object/array, null of undefined).
 *
 * @class ArgumentNotProvidedException
 * @extends {ExceptionBase}
 */
export class ArgumentNotProvidedException extends ExceptionBase {
  readonly status = 422;
  constructor(message: string = ErrorCodes.ARGUMENT_NOT_PROVIDED) {
    super(message);
  }
}

/**
 * Used to indicate that an argument is out of allowed range
 * (for example: incorrect string/array length, number not in allowed min/max range etc)
 *
 * @class ArgumentOutOfRangeException
 * @extends {ExceptionBase}
 */
export class ArgumentOutOfRangeException extends ExceptionBase {
  readonly status = 422;
  constructor(message: string = ErrorCodes.ARGUMENT_OUT_OF_RANGE) {
    super(message);
  }
}

/**
 * Used to indicate conflicting entities (usually in the database)
 *
 * @class ConflictException
 * @extends {ExceptionBase}
 */
export class ConflictException extends ExceptionBase {
  readonly status = 409;
  constructor(message: string = ErrorCodes.CONFLICT) {
    super(message);
  }
}

/**
 * Used to indicate that entity is not found
 *
 * @class NotFoundException
 * @extends {ExceptionBase}
 */
export class NotFoundException extends ExceptionBase {
  readonly status = 404;
  constructor(message: string = ErrorCodes.NOT_FOUND) {
    super(message);
  }
}

export class BadRequestException extends ExceptionBase {
  readonly status = 400;
  readonly validations: any[];

  constructor(
    validations: any[] = [],
    message: string = ErrorCodes.BAD_REQUEST,
  ) {
    super(message);
    this.validations = validations;
  }
}

/**
 * Used to indicate an internal server error that does not fall under all other errors
 *
 * @class InternalServerErrorException
 * @extends {ExceptionBase}
 */
export class InternalServerErrorException extends ExceptionBase {
  readonly status = 500;
  constructor(message: string = ErrorCodes.INTERNAL_SERVER_ERROR) {
    super(message);
  }
}

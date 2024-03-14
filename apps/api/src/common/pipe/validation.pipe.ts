import { type ArgumentMetadata, BadRequestException, Injectable, type PipeTransform } from '@nestjs/common';
import type { IValidation } from 'typia';

@Injectable()
export class ValidationPipe<T> implements PipeTransform<unknown, T> {
  constructor(private readonly validate: (input: unknown) => IValidation<T>) {}

  transform(value: unknown, { data }: ArgumentMetadata) {
    const result = this.validate(value);
    if (!result.success) {
      throw new BadRequestException(
        `The value \`${result.errors[0]!.value}\` is not a valid for the property \`${data}\`.`,
      );
    }

    return result.data;
  }
}

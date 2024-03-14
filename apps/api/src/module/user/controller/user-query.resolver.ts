import { Inject, Logger } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { createValidate } from 'typia';
import type { IQuery, UserWhereAuthIdInput } from '~api/generated/graphql';
import { InjectionToken } from '#api/common/constant/injection-token';
import { ValidationPipe } from '#api/common/pipe/validation.pipe';
import type { UserUseCaseInterface } from '#api/module/user/use-case/user.use-case';
import type { UserWhereAuthIdInputType } from './dto/input/user-where-auth-id.input';

@Resolver()
export class UserQuery implements Pick<IQuery, 'findUser'> {
  private readonly logger = new Logger(UserQuery.name);

  constructor(
    @Inject(InjectionToken.USER_USE_CASE)
    private readonly userUseCase: UserUseCaseInterface,
  ) {}

  @Query()
  async findUser(
    @Args('where', new ValidationPipe(createValidate<UserWhereAuthIdInputType>()))
    where: UserWhereAuthIdInput,
  ) {
    this.logger.log(`${this.findUser.name} called`);

    const foundUser = await this.userUseCase.findUser(where.authId);

    return foundUser;
  }
}

import { Inject, Injectable } from '@nestjs/common';
import { eq } from 'drizzle-orm';
import { DrizzleService } from '#api/infra/drizzle/drizzle.service';
import { schema } from '#api/infra/drizzle/schema';
import { User } from '#api/module/user/domain/user.model';
import type { UserRepositoryInterface } from '#api/module/user/repository/user.repository';

@Injectable()
export class UserRepository implements UserRepositoryInterface {
  constructor(@Inject(DrizzleService) private readonly drizzleService: DrizzleService) {}

  async find(userId: Parameters<UserRepositoryInterface['find']>[0]): Promise<User | null> {
    const user = (await this.drizzleService.drizzle.select().from(schema.user).where(eq(schema.user.id, userId)))[0];
    if (!user) {
      return null;
    }

    return new User({
      ...user,
      role: user.role as User['role'],
    });
  }

  async findByAuthId(authId: Parameters<UserRepositoryInterface['findByAuthId']>[0]): Promise<User | null> {
    const user = (
      await this.drizzleService.drizzle.select().from(schema.user).where(eq(schema.user.authId, authId))
    )[0];
    if (!user) {
      return null;
    }

    return new User({
      ...user,
      role: user.role as User['role'],
    });
  }
}

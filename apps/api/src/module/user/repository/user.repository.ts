import type { User } from '#api/module/user/domain/user.model';

export interface UserRepositoryInterface {
  find(userId: User['id']): Promise<User | null>;
  findByAuthId(authId: User['authId']): Promise<User | null>;
}

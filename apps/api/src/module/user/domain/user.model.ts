type UserRole = 'admin' | 'user';

export class User {
  readonly id: string;

  readonly authId: string;

  readonly role: UserRole;

  readonly name: string;

  readonly email: string;

  readonly avatarUrl: string;

  readonly credit: number;

  readonly createdAt: Date;

  constructor({ id, authId, role, name, email, avatarUrl, credit, createdAt }: Omit<User, 'canPay'>) {
    this.id = id;
    this.authId = authId;
    this.role = role;
    this.name = name;
    this.email = email;
    this.avatarUrl = avatarUrl;
    this.credit = credit;
    this.createdAt = createdAt;
  }

  canPay(price: number): boolean {
    return this.credit >= price;
  }
}

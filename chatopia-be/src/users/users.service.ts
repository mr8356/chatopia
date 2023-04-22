import { Injectable } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async join(user: User) {
    await this.usersRepository.saveUser(user);
  }

  async findUser(userId: string) {
    await this.usersRepository.findOneByUid(userId);
  }
}

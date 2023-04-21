import { InjectRepository } from '@nestjs/typeorm';
import { MongoRepository } from 'typeorm';
import { User } from 'src/entity/users.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private em: MongoRepository<User>,
  ) {}

  async saveUser(user: User): Promise<User> {
    return await this.em.save(user);
  }
  async findOneByUid(userId: string): Promise<User> {
    return await this.em.findOne({ where: { userId: userId } });
  }

  async findOneById(id: string): Promise<User> {
    return await this.em.findOne({ where: { id: id } });
  }

  async findAll(): Promise<User[]> {
    return await this.em.find();
  }

  async updateUser(user: User): Promise<User> {
    return await this.em.save(user);
  }

  async deleteUser(userId: string): Promise<void> {
    await this.em.delete(userId);
  }
}

// @EntityRepository(User)
// export class UserRepository extends MongoRepository<User> {}

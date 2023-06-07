import { InjectRepository } from "@nestjs/typeorm";
import { MongoRepository } from "typeorm";
import { User } from "src/entity/users.entity";
import { Injectable } from "@nestjs/common";
import { ObjectId } from "mongodb";
@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private em: MongoRepository<User>,
  ) {}

  async saveUser(user: User): Promise<User> {
    return await this.em.save(user);
  }
  async findOne(id: ObjectId): Promise<User> {
    return await this.em.findOne({ where: { _id: new ObjectId(id) } });
  }

  async findOneByUid(userId: string): Promise<User> {
    return await this.em.findOne({ where: { userId: userId } });
  }

  async findOneByEmail(email: string): Promise<User> {
    return await this.em.findOne({ where: { email } });
  }

  async findOneWithoutPassword(id: string): Promise<User> {
    return await this.em.findOne({
      where: { id },
      select: ["id", "userId", "name", "email", "avatar", "friends"],
    });
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

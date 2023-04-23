import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { User } from "src/entity/users.entity";
import { UsersRepository } from "./users.repository";
import { ObjectId } from "typeorm";

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async join(user: User): Promise<User> {
    // Validate input data
    if (!user.name || !user.email || !user.password) {
      throw new BadRequestException("요청 데이터가 잘못되었습니다");
    }

    if (
      typeof user.name !== "string" ||
      typeof user.email !== "string" ||
      typeof user.password !== "string"
    ) {
      throw new BadRequestException("요청 데이터가 잘못되었습니다");
    }

    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(user.email)) {
      throw new BadRequestException("잘못된 이메일 주소 형식입니다");
    }

    const users: User[] = await this.usersRepository.findAll();
    const duplicatedUser = users.find(
      (us) => us.userId === user.userId || us.email === user.email,
    );
    if (duplicatedUser) {
      throw new ConflictException("중복된 회원이 존재합니다.");
    }
    return await this.usersRepository.saveUser(user);
  }

  async findUser(userId: string): Promise<User> {
    let user: User = null;
    try {
      user = await this.usersRepository.findOneByUid(userId);
    } catch (error) {
      throw new NotFoundException("user not found");
    }
    return user;
  }

  async addFriend(userId: string, friendId: string) {
    const user = await this.usersRepository.findOneById(userId);
    const friend = await this.findUser(friendId);
    user.friends.push(friend.id);
    return await this.usersRepository.updateUser(user);
  }

  async findAllFriends(userId: string): Promise<ObjectId[]> {
    const user: User = await this.usersRepository.findOneById(userId);
    return user.friends;
  }
}

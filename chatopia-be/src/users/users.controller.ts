import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { User } from "src/entity/users.entity";
import { CreateUserDto } from "../dto/create-user.dto";
import { UsersService } from "./users.service";
import { ObjectId } from "typeorm";
import { LoginRequestDto } from "src/dto/login-request.dto";
import { AuthService } from "src/auth/auth.service";
import * as bcrypt from "bcrypt";
import { JwtAuthGuard } from "src/auth/jwt/jwt.guard";
import { CurrentUser } from "src/common/decorators/user.decorator";

@Controller("users")
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post("login")
  async login(@Body() loginRequestDto: LoginRequestDto) {
    await this.authService.jwtLogIn(loginRequestDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get("current")
  getCurrentUser(@CurrentUser() user: User) {
    // costom decorator
    return user;
  }

  @Post("add")
  async create(@Body() createUserDto: CreateUserDto) {
    const user = new User();
    // Validate input data
    if (
      !createUserDto.name ||
      !createUserDto.email ||
      !createUserDto.password
    ) {
      throw new BadRequestException("요청 데이터가 잘못되었습니다");
    }

    if (
      typeof createUserDto.name !== "string" ||
      typeof createUserDto.email !== "string" ||
      typeof createUserDto.password !== "string"
    ) {
      throw new BadRequestException("요청 데이터가 잘못되었습니다");
    }

    const emailRegex =
      /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(createUserDto.email)) {
      throw new BadRequestException("잘못된 이메일 주소 형식입니다");
    }
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = await bcrypt.hash(
      createUserDto.password,
      parseInt(process.env.SALT),
    );
    user.userId = createUserDto.userId;
    user.avatar = createUserDto.avatar;
    await this.usersService.join(user);
  }

  @Get("find/:userId")
  async findByUid(@Param("userId") userId: string) {
    await this.usersService.findUser(userId);
  }

  @Get("friends/add/:userId")
  async addFriend(@Param("userId") friendUid: string) {
    const myId = "123"; // undo session
    this.usersService.addFriend(myId, friendUid);
  }

  @Get("friends")
  async showFriends(): Promise<ObjectId[]> {
    const myId = "123"; // undo session
    return await this.usersService.findAllFriends(myId);
  }
}

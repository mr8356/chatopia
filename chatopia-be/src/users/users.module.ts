import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { CreateUserDto } from "../dto/create-user.dto";
import { User } from "src/entity/users.entity";
import { UsersRepository } from "./users.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthService } from "src/auth/auth.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    UsersService,
    CreateUserDto,
    UsersRepository,
    AuthService,
    JwtService,
  ],
  exports: [UsersService, UsersRepository],
})
export class UsersModule {}

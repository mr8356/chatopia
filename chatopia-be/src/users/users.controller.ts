import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from 'src/entity/users.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('add')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = new User();
    user.name = createUserDto.name;
    user.email = createUserDto.email;
    user.password = createUserDto.password;
    user.userId = createUserDto.userId;
    user.avatar = createUserDto.avatar;
    return await this.usersService.join(user);
  }

  @Get('find/:userId')
  async findByUid(@Param('userId') userId: string) {
    return await this.usersService.findUser(userId);
  }
}

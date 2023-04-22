import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from 'src/entity/users.entity';

@Module({
  controllers: [UsersController],
  providers: [UsersService, CreateUserDto],
})
export class UsersModule {}

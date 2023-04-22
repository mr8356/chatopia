import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { ChatsGateway } from './ChatsGateway';
import { UsersController } from './users/users.controller';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
import { User } from './entity/users.entity';

@Module({
  imports: [
    ChatsModule,
    UsersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: 'localhost',
      port: 27017,
      database: 'test',
      entities: [User],
      synchronize: true,
    } as ConnectionOptions),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, ChatsGateway],
})
export class AppModule {}

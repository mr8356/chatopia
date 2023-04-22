import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ChatsModule } from "./chats/chats.module";
import { ChatsGateway } from "./ChatsGateway";
import { UsersController } from "./users/users.controller";
import { UsersModule } from "./users/users.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entity/users.entity";
import { ConfigModule } from "@nestjs/config";
import { UsersService } from "./users/users.service";

@Module({
  imports: [
    ChatsModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, ChatsGateway, UsersService],
})
export class AppModule {}

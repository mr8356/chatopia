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
import { DataSource, MongoRepository } from "typeorm";
import { UsersService } from "./users/users.service";
import { UsersRepository } from "./users/users.repository";

@Module({
  imports: [
    ChatsModule,
    TypeOrmModule.forRoot({
      type: "mongodb",
      host: `mongodb://${process.env.MONGO_URL}/${process.env.DB_NAME}`,
      port: parseInt(process.env.PORT),
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [User],
    }),
    UsersModule,
    ConfigModule.forRoot(),
  ],
  controllers: [AppController, UsersController],
  providers: [AppService, ChatsGateway],
})
export class AppModule {}

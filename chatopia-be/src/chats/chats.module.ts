import { Module } from "@nestjs/common";
import { ChatsGateway } from "src/ChatsGateway";
import { ChatsService } from "./chats.service";
import { Chat } from "src/entity/chats.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ChatController } from "./chats.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Chat])],
  providers: [ChatsGateway, ChatsService],
  controllers: [ChatController],
})
export class ChatsModule {}

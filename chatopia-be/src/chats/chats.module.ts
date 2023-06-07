import { Module } from "@nestjs/common";
import { ChatsGateway } from "src/ChatsGateway";
import { ChatsService } from "./chats.service";

@Module({
  providers: [ChatsGateway, ChatsService],
})
export class ChatsModule {}

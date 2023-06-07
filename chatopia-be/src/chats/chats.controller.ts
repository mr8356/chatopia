import { Controller, Get, Param, Post, Body } from "@nestjs/common";
import { ChatsService } from "./chats.service";
import { Chat } from "../entity/chats.entity";
import { ObjectId } from "typeorm";
import { CurrentUserId } from "src/common/decorators/user.decorator";

@Controller("chats")
export class ChatController {
  constructor(private chatService: ChatsService) {}

  @Get(":roomId")
  async getChatsByRoomId(@Param("roomId") roomId: number): Promise<Chat[]> {
    return this.chatService.getChatsByRoomId(roomId);
  }

  @Post()
  async createChat(
    @Body("roomId") roomId: number,
    @Body("message") message: string,
    @CurrentUserId() senderId: ObjectId,
  ) {
    return this.chatService.addChat(senderId, roomId, message);
  }
}

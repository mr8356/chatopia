import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ObjectId } from "mongodb";
import { Chat } from "src/entity/chats.entity";
import { MongoRepository } from "typeorm";

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private em: MongoRepository<Chat>,
  ) {}

  async addChat(senderId: ObjectId, roomId: number, message: string) {
    const chat = new Chat();
    chat.senderId = senderId;
    chat.roomId = roomId;
    chat.message = message;
    chat.timestamp = new Date();
    await this.em.save(chat);
  }

  async getChatsByRoomId(roomId: number): Promise<Chat[]> {
    return this.em.find({
      where: { roomId },
      order: { timestamp: "ASC" }, // timestamp 필드를 기준으로 오름차순 정렬
    });
  }
}

import { ObjectId } from "mongodb";
import { Column, Entity, ObjectIdColumn } from "typeorm";

@Entity({ name: "chats" })
export class Chat {
  @ObjectIdColumn()
  id: ObjectId;
  @Column()
  roomId: number;
  @Column()
  senderId: ObjectId;
  @Column()
  message: string;
  @Column()
  timestamp: Date;
}

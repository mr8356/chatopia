import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatsGateway {
  @WebSocketServer() server: Server;

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: any): any {
    const message: string = payload.content;
    this.server.emit('message', {
      author: client.id,
      content: message,
    });
  }
}

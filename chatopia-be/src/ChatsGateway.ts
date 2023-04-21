import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ cors: true })
export class ChatsGateway {
  @WebSocketServer() server: Server;

  handleConnection(client: Socket) {
    this.server.emit('message', {
      author: 'server',
      content: `Client connected: ${client.id}`,
    });
    client.emit('connection', 'Successfully connected to the server');
  }

  @SubscribeMessage('chat')
  handleMessage(client: Socket, payload: any): any {
    const message: string = payload.content;
    this.server.emit('message', {
      author: client.id,
      content: message,
    });
  }
}

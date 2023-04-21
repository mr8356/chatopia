import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatsModule } from './chats/chats.module';
import { ChatsGateway } from './ChatsGateway';

@Module({
  imports: [ChatsModule],
  controllers: [AppController],
  providers: [AppService, ChatsGateway],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { ChatsGateway } from 'src/ChatsGateway';

@Module({
  providers: [ChatsGateway],
})
export class ChatsModule {}

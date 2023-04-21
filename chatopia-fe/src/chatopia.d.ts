import { Socket } from 'socket.io-client';
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $socket: Socket | null;
  }
}

export {}

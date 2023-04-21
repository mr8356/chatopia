import Vue from 'vue'

declare module 'vue/types/vue' {
  import { io } from "socket.io-client";

  interface Vue {
    $ws: io | null;
  }
}

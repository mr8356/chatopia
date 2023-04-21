import { io, Socket } from "socket.io-client";
import { Plugin } from "vue";

declare module '@vue/runtime-core' {
  interface Chatopia {
    auth: boolean;
  }

  interface ComponentCustomProperties {
    $socket: Socket;
    $chatopia: Chatopia;
  }
}

const plugin: Plugin = {
  install: (app) => {
    const socket = io(`${location.hostname}:3000`, { autoConnect: true });

    app.config.globalProperties.$socket = socket;
    app.config.globalProperties.$chatopia = {
      auth: false,
    };
  }
}

export default plugin;

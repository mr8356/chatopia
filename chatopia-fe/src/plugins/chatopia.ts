import { io, Socket } from "socket.io-client";
import { Plugin } from "vue";

declare module "@vue/runtime-core" {
  interface Chatopia {
    auth: boolean;

    backendUrl: string;
  }

  interface ComponentCustomProperties {
    $socket: Socket;
    $chatopia: Chatopia;
  }
}

const plugin: Plugin = {
  install: (app) => {
    const backendUrl = "http://localhost:3000";

    const socket = io(
      backendUrl.startsWith("https")
        ? backendUrl.replace("https", "wss")
        : backendUrl.replace("http", "ws"),
      { autoConnect: true }
    );

    app.config.globalProperties.$socket = socket;
    app.config.globalProperties.$chatopia = {
      auth: false,
      backendUrl,
    };
  },
};

export default plugin;

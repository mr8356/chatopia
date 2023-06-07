import { io, Socket } from "socket.io-client";
import { Plugin } from "vue";
import config from "../config";

declare module "@vue/runtime-core" {
  interface Chatopia {
    // authenticated: () => boolean;
    token: () => string | null;

    backendUrl: string;
  }

  interface ComponentCustomProperties {
    $socket: Socket;
    $chatopia: Chatopia;
  }
}

const plugin: Plugin = {
  install: (app) => {
    const backendUrl = config.backend_url;

    const socket = io(
      backendUrl.startsWith("https")
        ? backendUrl.replace("https", "wss")
        : backendUrl.replace("http", "ws"),
      { autoConnect: true }
    );

    app.config.globalProperties.$socket = socket;
    app.config.globalProperties.$chatopia = {
      backendUrl,
      token: () => localStorage.getItem("token"),
    };
  },
};

export default plugin;

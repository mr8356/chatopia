<template>
  <div id="chat">
    <div id="chat-box">
      <ChatMessage v-bind:key="message.content" v-for="message in messages" :content="message.content"></ChatMessage>
    </div>

    <form id="chat-form" @submit.prevent="sendMessage">
      <input type="text" id="chat-input" ref="chatInput">
      <button id="chat-send">Send</button>
    </form>

    <p>Status: {{ socket ? socket.connected : "no" }}</p>
  </div>
</template>

<script lang="ts">
import ChatMessage from "@/components/ChatMessage.vue";
import { Socket } from "socket.io-client";
import { io } from "socket.io-client";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatView',
  components: {
    ChatMessage,
  },
  created() {
    this.socket = io(`${location.hostname}:3000`);

    // const ws = new WebSocket(`${location.protocol === "https" ? "wss" : "ws"}://${location.hostname}:3000`);
    this.socket.on("connect", () => {
      console.log("connected");
    });
  },
  data() {
    return {
      socket: null as Socket | null,
      messages: [
        { content: "test" },
      ],
    };
  },
  methods: {
    sendMessage() {
      const chatInput = this.$refs.chatInput as HTMLInputElement;
        this.messages.unshift({ content: chatInput.value });
        this.socket?.emit("chat", { content: chatInput.value });
        chatInput.value = "";
    },
  },
});
</script>

<style>
#chat-box {
  display: flex;
  flex-direction: column-reverse;
}

#chat-form {
  display: flex;
}
</style>

<template>
  <div id="chat">
    <div id="chat-box">
      <ChatMessage v-bind:key="message.content" v-for="message in messages" :content="message.content"></ChatMessage>
    </div>

    <form id="chat-form" @submit.prevent="sendMessage">
      <input type="text" id="chat-input" ref="chatInput">
      <button id="chat-send">Send</button>
    </form>
  </div>
</template>

<script lang="ts">
import ChatMessage from "@/components/ChatMessage.vue";
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatView',
  components: {
    ChatMessage,
  },
  data() {
    return {
      messages: [
        { content: "test" },
      ],
    };
  },
  methods: {
    sendMessage() {
      const chatInput = this.$refs.chatInput as HTMLInputElement;
        this.messages.unshift({ content: chatInput.value });
        this.$socket.emit("chat", { content: chatInput.value });
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

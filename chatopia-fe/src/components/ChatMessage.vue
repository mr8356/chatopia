<template>
  <div id="message">
    <img id="message-avatar" src="@/assets/logo.png">
    <p>{{ content }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ChatView',
  props: {
    content: String,
  },
});
</script>

<style>
#message {
  display: flex;

  align-items: center;
}

#message-avatar {
  width: 24px;
  height: 24px;
}
</style>

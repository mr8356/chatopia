<template>
  <div id="auth">
    <main id="auth-container">
      <component :is="currentStage"/>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from "@/components/LoginForm.vue";

export default defineComponent({
  name: "AuthView",
  components: {
    LoginForm,
  },
  data() {
    return {
      currentStage: "LoginForm",
    };
  },
});
</script>

<style lang="scss">
#auth {
  display: flex;
  justify-content: center;
  align-items: center;

  flex: 1;

  #auth-container {
    width: 32%;
    height: 64%;

    border: 1px solid #c4c4c4;
    border-radius: 24px;

    padding: 16px;

    @media (max-width: 1023px) {
      width: 100%;
      height: 100%;

      border: none;
      border-radius: 0;
    }
  }
}
</style>

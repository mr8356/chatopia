<template>
  <form id="login">
    <AuthInput type="email" placeholder="아이디 또는 이메일"/>
    <AuthInput type="password" placeholder="비밀번호"/>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "@/components/AuthInput.vue";

export default defineComponent({
  name: "LoginForm",
  components: {
    AuthInput,
  },
});
</script>

<style lang="scss">
#login {
  display: flex;
  flex-direction: column;

  gap: 8px;
}
</style>

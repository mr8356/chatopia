<template>
  <form id="login">
    <AuthInput type="email" placeholder="아이디 또는 이메일"/>
    <AuthInput type="password" placeholder="비밀번호"/>

    <div class="auth-btngroup">
      <div class="spacer"></div>
      <router-link class="auth-btn_secondary" to="/auth/register">계정 만들기</router-link>
      <span>또는</span>
      <button class="auth-submit" type="submit">로그인</button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "@/components/AuthInput.vue";

export default defineComponent({
  name: "LoginForm",
  props: {
  },
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

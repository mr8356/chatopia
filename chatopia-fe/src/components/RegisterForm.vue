<template>
  <form id="login">
    <AuthInput type="username" placeholder="아이디" ref="usernameInput" />
    <AuthInput type="email" placeholder="이메일" ref="emailInput" />
    <AuthInput type="password" placeholder="비밀번호" ref="passwordInput" />

    <div class="auth-btngroup">
      <span>이미 계정이 있다면</span>
      <router-link class="auth-btn_secondary" to="/auth/login"
        >로그인</router-link
      >
      <div class="spacer"></div>
      <button class="auth-submit" type="submit" @click.prevent="createAccount">
        계정 만들기
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "@/components/AuthInput.vue";

export default defineComponent({
  name: "RegisterForm",
  props: {},
  components: {
    AuthInput,
  },
  methods: {
    async createAccount() {
      const usernameInput = this.$refs.usernameInput as HTMLInputElement;
      const emailInput = this.$refs.emailInput as HTMLInputElement;
      const passwordInput = this.$refs.passwordInput as HTMLInputElement;

      const res = await fetch(`${this.$chatopia.backendUrl}/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        }),
      });

      console.log(res.json());
    },
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

<template>
  <form id="login">
    <AuthInput
      type="username"
      placeholder="아이디"
      v-model:value="username.value"
      v-model:valid="username.valid"
      :required="true"
    />
    <AuthInput
      type="email"
      placeholder="이메일"
      v-model:value="email.value"
      v-model:valid="email.valid"
      :required="true"
    />
    <AuthInput
      type="password"
      placeholder="비밀번호"
      v-model:value="password.value"
      v-model:valid="password.valid"
      :required="true"
    />

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
  data() {
    return {
      username: {
        value: "",
        valid: false,
      },
      email: {
        value: "",
        valid: false,
      },
      password: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    async createAccount() {
      if (!this.username.valid || !this.email.valid || !this.password.valid) {
        return;
      }

      const res = await fetch(`${this.$chatopia.backendUrl}/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.username.value,
          email: this.email.value,
          password: this.password.value,
        }),
      });

      const json = await res.json();
      console.log(json);
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

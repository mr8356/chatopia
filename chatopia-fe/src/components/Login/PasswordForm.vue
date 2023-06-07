<template>
  <form id="login-password" class="loginform">
    <h2>
      <a :onclick="$router.back"
        ><img
          class="icon"
          src="@/assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg"
      /></a>
      비밀번호를 입력해주세요
    </h2>

    <AuthInput
      type="password"
      placeholder="비밀번호"
      v-model:value="password.value"
      v-model:valid="password.valid"
      :required="true"
    />

    <div class="auth-btngroup">
      <span>비밀번호를 잊었나요?</span>
      <router-link class="auth-btn_links" to="/auth/lost+found"
        >비밀번호 찾기</router-link
      >
      <div class="spacer"></div>
      <button class="auth-submit" type="submit" @click.prevent="$emit('login')">
        다음
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "@/components/AuthInput.vue";

export default defineComponent({
  name: "PasswordForm",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    AuthInput,
  },
  emits: ["update:value", "login"],
  data() {
    return {
      password: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    async nextStep() {
      if (!this.password.valid) {
        return;
      }
    },
  },
  watch: {
    "password.value": function () {
      this.$emit("update:value", this.password.value);
    },
  },
});
</script>

<style lang="scss">
.login {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  width: 100%;
  transform-origin: center center;
  transform: scale(1);
  scroll-snap-align: center;
  margin-right: 16px;

  gap: 8px;

  & > h2 {
    text-align: left;
    font-weight: 400;
    font-size: 20px;
  }
}
</style>

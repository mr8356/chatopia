<template>
  <form id="login-email" class="loginform">
    <h2>이메일 주소를 입력해주세요</h2>

    <AuthInput
      type="email"
      placeholder="사용자 이름 또는 이메일"
      v-model:value="email.value"
      v-model:valid="email.valid"
      :required="true"
    />

    <!--/*
    <p class="list"></p>
    */ -->

    <div class="auth-btngroup">
      <span>계정이 없으신가요?</span>
      <router-link class="auth-btn_links" to="/auth/register"
        >계정 만들기</router-link
      >
      <div class="spacer"></div>
      <button class="auth-submit" type="submit" @click.prevent="nextStep">
        다음
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "../AuthInput.vue";

export default defineComponent({
  name: "EmailForm",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  components: {
    AuthInput,
  },
  data() {
    return {
      email: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    async nextStep() {
      if (!this.email.valid) {
        return;
      }

      this.$router.push("#step-2");
    },
  },
  watch: {
    "email.value": function () {
      this.$emit("update:value", this.email.value);
    },
  },
});
</script>

<style lang="scss">
.loginform {
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
    display: flex;

    text-align: left;
    font-weight: 400;
    font-size: 20px;

    & .icon {
      width: 20px;
    }
  }
}
</style>

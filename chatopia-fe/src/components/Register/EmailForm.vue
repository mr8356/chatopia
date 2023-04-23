<template>
  <form id="register-email" class="registerform">
    <h2>
      <a :onclick="$router.back"
        ><img
          class="icon"
          src="@/assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg"
      /></a>
      사용할 이메일 주소를 입력해주세요
    </h2>

    <AuthInput
      type="email"
      placeholder="이메일 주소"
      v-model:value="email.value"
      v-model:valid="email.valid"
      :required="true"
    />

    <p class="list">이메일 주소는 로그인 또는 비밀번호 찾기에 사용됩니다</p>
    <p class="list">이메일 당 계정 하나만 생성 가능합니다</p>

    <div class="auth-btngroup">
      <span>이미 계정이 있다면,</span>
      <router-link class="auth-btn_links" to="/auth/login">로그인</router-link>
      <div class="spacer"></div>
      <button class="auth-submit" type="submit" @click.prevent="nextStep">
        다음
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthInput from "@/components/AuthInput.vue";

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
.registerform {
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

<template>
  <form id="register-name" class="registerform">
    <h2>
      <a :onclick="$router.back"
        ><img
          class="icon"
          src="@/assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg"
      /></a>
      이름을 입력해주세요
    </h2>

    <AuthInput
      type="name"
      placeholder="이름"
      v-model:value="name.value"
      v-model:valid="name.valid"
      :required="true"
    />

    <p class="list">이름은 다른 사용자에게 보여집니다</p>

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
  name: "NameForm",
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
      name: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    async nextStep() {
      if (!this.name.valid) {
        return;
      }

      this.$router.push("#step-4");
    },
  },
  watch: {
    "name.value": function () {
      this.$emit("update:value", this.name.value);
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
    text-align: left;
    font-weight: 400;
    font-size: 20px;
  }
}
</style>

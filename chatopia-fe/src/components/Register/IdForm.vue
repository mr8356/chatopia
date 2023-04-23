<template>
  <form id="register-id" class="registerform">
    <h2>
      <a :onclick="$router.back"
        ><img
          class="icon"
          src="@/assets/arrow_back_ios_FILL0_wght400_GRAD0_opsz48.svg"
      /></a>
      사용할 태그를 입력해주세요
    </h2>

    <div id="register-id_input">
      <span>@</span>
      <AuthInput
        type="name"
        placeholder="chatopia"
        v-model:value="id.value"
        v-model:valid="id.valid"
        :required="true"
      />
    </div>

    <p class="list">태그는 서로를 찾을 때 사용합니다</p>
    <p class="list">태그는 각 사용자 별로 고유하며 중복되지 않습니다</p>
    <p class="list list-spacer"></p>
    <p class="list">태그 생성 규칙:</p>
    <p class="list list-l2">
      영어 소문자, 숫자 그리고 -와 _만 포함할 수 있습니다
    </p>
    <p class="list list-l2">
      태그는 최소 4글자부터 최대 20글자까지 사용할 수 있습니다
    </p>
    <p class="list list-l2">태그는 이용규칙을 준수해서 만들어야합니다</p>

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
  name: "IdForm",
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
      id: {
        value: "",
        valid: false,
      },
    };
  },
  methods: {
    async nextStep() {
      if (!this.id.valid) {
        return;
      }

      this.$router.push("#step-3");
    },
  },
  watch: {
    "id.value": function () {
      this.$emit("update:value", this.id.value);
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

  & #register-id_input {
    display: flex;
    flex-direction: row;

    align-items: center;

    & > span {
      margin-right: 4px;
      margin-bottom: 14px;
    }

    & > .authinput-container {
      flex: 1;
    }
  }
}
</style>

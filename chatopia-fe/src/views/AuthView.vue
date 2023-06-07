<template>
  <div id="auth">
    <main id="auth-container">
      <h1>Chatopia</h1>
      <component :is="getCurrentStage" />
      <div class="spacer"></div>
      <footer>
        <p>
          계속함으로서,
          <router-link to="/legal/eula">최종 이용자 약관</router-link>과
          <router-link to="/legal/privacy">개인정보 처리방침</router-link>을
          동의한 것으로 간주합니다
        </p>
      </footer>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginContainer from "@/components/Login/LoginContainer.vue";
import RegisterContainer from "@/components/Register/RegisterContainer.vue";

export default defineComponent({
  name: "AuthView",
  components: {
    LoginContainer,
    RegisterContainer,
  },
  data() {
    return {
      currentStage: "LoginContainer",
    };
  },
  created() {
    if (this.$route.name === "Register") {
      this.currentStage = "RegisterContainer";
    }
  },
  methods: {},
  computed: {
    getCurrentStage() {
      if (this.$route.name === "Register") {
        return "RegisterContainer";
      }

      return "LoginContainer";
    },
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
    display: flex;
    flex-direction: column;

    width: 440px;
    max-width: 440px;
    height: 64%;

    border: 1px solid #c4c4c4;
    border-radius: 24px;

    padding: 16px;

    @media (max-width: 1023px) {
      width: 100%;
      max-width: 100%;
      height: 100%;

      border: none;
      border-radius: 0;
    }
  }

  p {
    padding: 0;
    margin: 0;

    text-align: left;

    font-size: 14px;
    color: #555;

    &.list {
      padding: 0 8px;

      &::before {
        content: "•";
        margin-right: 4px;
      }

      &.list-spacer::before {
        content: "";
      }

      &.list-l2 {
        padding: 0 14px;
      }
    }
  }
}

.auth-btngroup {
  display: flex;

  align-items: center;

  gap: 8px;

  .auth-submit {
    padding: 8px 12px;

    outline: none;
    background-color: #0077ff;
    border: none;
    border-radius: 8px;

    color: #fff;

    transition: all 150ms ease-in-out;

    cursor: pointer;

    &:hover {
      background-color: #2289ff;
    }

    &:active {
      background-color: #005eca;
    }
  }

  .auth-btn_secondary {
    padding: 8px 12px;

    outline: none;
    background-color: white;
    border: 1px solid #c4c4c4;
    border-radius: 8px;

    color: #333;

    transition: all 150ms ease-in-out;

    text-decoration: none;

    &:hover {
      background-color: #dddddd;
    }

    &:active {
      background-color: #a5a5a5;
    }
  }
}
</style>

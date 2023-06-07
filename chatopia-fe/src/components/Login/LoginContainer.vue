<template>
  <div id="login-container">
    <div id="login-container_slide" ref="slider">
      <EmailForm v-model:value="email" />
      <PasswordForm v-model:value="password" @login="doLogin" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import EmailForm from "./EmailForm.vue";
import PasswordForm from "./PasswordForm.vue";

export default defineComponent({
  name: "LoginContainer",
  components: {
    EmailForm,
    PasswordForm,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  created() {
    this.$router.replace("");
  },
  methods: {
    async doLogin() {
      if (!this.email || !this.password) {
        return; // TODO: UI/UX
      }

      const res = await fetch(`${this.$chatopia.backendUrl}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password,
        }),
      });

      try {
        const json = await res.json();

        if (json.token) {
          localStorage.setItem("token", json.token);

          // Redirect to main
          this.$router.push("/");
        }
      } catch {
        /* TODO: Error handling */
      }
    },
  },
  watch: {
    "$route.hash": function () {
      const slider = this.$refs.slider as HTMLDivElement;

      if (this.$route.hash.startsWith("#step-")) {
        const step = parseInt(this.$route.hash.replace("#step-", ""));
        slider.scrollTo(slider.clientWidth * (step - 1), 0);
        return;
      }

      slider.scrollTo(0, 0);
    },
  },
});
</script>

<style lang="scss">
#login-container {
  max-width: 100%;
  position: relative;

  & > #login-container_slide {
    display: flex;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
}
</style>

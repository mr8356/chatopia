<template>
  <div id="register-container">
    <div id="register-container_slide" ref="slider">
      <EmailForm v-model:value="email" />
      <IdForm v-model:value="id" />
      <NameForm v-model:value="name" />
      <PasswordForm v-model:value="password" @register="doRegister" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IdForm from "@/components/Register/IdForm.vue";
import EmailForm from "@/components/Register/EmailForm.vue";
import NameForm from "@/components/Register/NameForm.vue";
import PasswordForm from "@/components/Register/PasswordForm.vue";

export default defineComponent({
  name: "RegisterContainer",
  components: {
    IdForm,
    EmailForm,
    NameForm,
    PasswordForm,
  },
  data() {
    return {
      email: "",
      name: "",
      id: "",
      password: "",
    };
  },
  created() {
    // Remove hash
    this.$router.replace("");
  },
  methods: {
    async doRegister() {
      if (!this.email || !this.id || !this.name || !this.password) {
        return;
      }

      const res = await fetch(`${this.$chatopia.backendUrl}/users/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.email,
          userid: this.id,
          name: this.name,
          password: this.password,
        }),
      });
      const json = await res.json();
      console.log(json);
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
#register-container {
  max-width: 100%;
  position: relative;

  & > #register-container_slide {
    display: flex;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    scroll-snap-type: x mandatory;
  }
}
</style>

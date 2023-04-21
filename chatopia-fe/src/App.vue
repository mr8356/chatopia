<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/chat">Chat</router-link>
  </nav>
  <main>
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  data() {
    return {
      //
    };
  },
  created() {
    // this.$ws = io(`${location.hostname}:3000`);

    // // const ws = new WebSocket(`${location.protocol === "https" ? "wss" : "ws"}://${location.hostname}:3000`);
    // this.$ws.on("connect", () => {
    //   console.log("connected");
    // });

    // ws.addEventListener("open", () => {
    //   this.$ws = ws;
    //   console.log("open");
    // });
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  main {
    display: flex;
    justify-content: center;
  }
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <router-view />
</template>

<style lang="scss">
@import "normalize.css";

html,
body,
#app {
  height: 100%;
  scroll-behavior: smooth;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

.spacer {
  flex: 1;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

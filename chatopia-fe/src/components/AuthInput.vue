<template>
  <div class="authinput-container">
    <input id="authinput-input" :type="type" :placeholder="placeholder">
    <span id="authinput-error">입력 값이 잘못되었습니다</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthInput",
  props: {
    type: String,
    placeholder: String,
  },
});
</script>

<style lang="scss">
#authinput-container {
  display: flex;
}

#authinput-input {
  width: 100%;

  border: 2px solid #c4c4c4;
  outline: none;

  padding: 8px 12px;
  border-radius: 8px;

  transition: all 150ms ease-in-out;

  &:focus {
    border: 2px solid #0077ff;
  }
}

#authinput-error {
  display: block;

  text-align: left;
  padding-left: 14px;

  color: #e44444;

  font-size: 12px;
}
</style>

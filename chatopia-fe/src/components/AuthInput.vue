<template>
  <div
    class="authinput-container"
    :class="{ 'authinput-container_error': !!errorMessage }"
  >
    <input
      id="authinput-input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @change="inputChanged"
      @keypress="inputChanged"
      @input="inputChanged"
      :required="required"
    />
    <span id="authinput-error">{{ errorMessage }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AuthInput",
  props: {
    type: String,
    placeholder: String,
    required: Boolean,
    value: {
      type: String,
      default: "",
    },
    valid: {
      type: Boolean,
      deafult: false,
    },
  },
  emits: ["update:value", "update:valid"],
  data() {
    return {
      isFocus: false,
      edited: false,
    };
  },
  methods: {
    inputChanged(evt: Event) {
      this.edited = true;

      const element = evt.target as HTMLInputElement;

      this.$emit("update:value", element.value || "");

      console.log(element.checkValidity(), element.validity.valid);

      this.$emit("update:valid", element.validity.valid);
      // this.valid = element.validity.valid;
    },
  },
  computed: {
    errorMessage() {
      if (!this.edited) {
        return "";
      }

      if (this.valid) {
        return "";
      }

      if (this.type === "email") {
        return "잘못된 이메일 주소";
      }

      return "잘못된 입력 값";
    },
  },
});
</script>

<style lang="scss">
.authinput-container {
  display: flex;
  flex-direction: column;
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
  height: 14px;
}

.authinput-container {
  &.authinput-container_error {
    #authinput-input {
      border: 2px solid #e44444;
    }
  }
}
</style>

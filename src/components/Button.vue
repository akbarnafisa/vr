<template>
  <button
    :class="btnClass"
    :disabled="disabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
      validator: (val) => [
        'primary',
        'secondary',
        'ghost',
      ].includes(val),
    },
    size: {
      type: String,
      default: 'large',
      validator: (val) => [
        'large',
        'medium',
        'small',
      ].includes(val),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    btnClass () {
      return [
        'btn',
        `btn-${this.type}`,
        `btn-${this.size}`,
      ]
    },
  },
}
</script>

.<style lang="scss" scoped>
.btn {
  position: relative;
  display: block;
  white-space: nowrap;
  border: 0;
  border-radius: 4px;
  outline: none;
  touch-action: manipulation;
  font-weight: 600;
  font-family: $font-family;

  &-large {
    font-size: 16px;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: .2px;
    height: 40px;
    padding: 0 16px;
  }
  &-medium {
    height: 32px;
    font-size: 12px;
    padding: 0 12px;
  }
  &-small {
    height: 24px;
    padding: 0 8px;
    font-size: 12px;
  }

  &-primary {
    color: $white;
    background-color: $blue-3;
  }
  &-secondary {
    border: solid 1px $blue-3;
    background: $white;
    color: $blue-3;
  }
  &-ghost {
    color: $blue-3;
    background-color: transparent;
  }
}
</style>
<style lang="stylus">
.input
  position relative
  width 100%

  &__text
    width 100%
    border-radius 4px
    padding 0 16px
    font-size rem(14px)

    &:focus,
    &:active
      outline none
      border-color var(--primary-color)

    &:hover
      border-color var(--primary-color)

  &[data-is-disabled=true]
    .input__text
      border none
      pointer-events none
      background-color rgba(0, 0, 0, 0.05)
      color #bfbfbf

    .input__icon
      display none

  &__prefix
    position absolute
    display flex
    justify-content center
    align-items center
    height 100%
    left 0
    top 0

  &__suffix
    position absolute
    display flex
    justify-content center
    align-items center
    height 100%
    right 0
    top 0

  &__error-message
    color var(--error-color)
    font-size 12px
    position absolute
    left 10px
    bottom -20px
    z-index 1

  &[data-is-error=true]
    .input__text
      border-color var(--error-color)
</style>
<template lang="pug">
.input(:data-is-disabled="isDisabled" :data-is-error="isError")
  input.input__text(
              :type="type"
              :value="value"
              @input="$emit('input', $event.target.value)"
              :readonly="readonly"
              :placeholder="placeholder"
              :maxlength = "maxLength"
              @keypress="keyPressEvent"
              @blur="$emit('Input:blur')"
              )
  .input__prefix
    slot(name="prefix")
  .input__suffix
    slot(name="suffix")
  template(v-if="isError")
    span.input__error-message {{errorMessage}}
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: [String, Number, Object, Array],
      default: ''
    },
    isError: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    type: {
      type: String,
      default: () => {
        return 'text'
      }
    },
    readonly: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    isDisabled: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    placeholder: {
      type: String,
      default: () => {
        return ''
      }
    },
    maxLength: {
      type: Number,
      default: () => {
        return 100
      }
    },
    isOnlyNumber: {
      type: Boolean,
      default: false
    },
    hasPoint: {
      type: Boolean,
      default: true
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  mounted () {},
  methods: {
    keyPressEvent ($event) {
      const keyCode = $event.keyCode ? $event.keyCode : $event.which
      if (this.isOnlyNumber) {
        // if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
        if ((keyCode < 48 || keyCode > 57) && keyCode !== 46) {
          $event.preventDefault()
        }
      }
      if (!this.hasPoint) {
        if (keyCode === 46) {
          $event.preventDefault()
        }
      }
    }
  }
}
</script>

<style lang="stylus"></style>
<template lang="pug">
.test {{this.fullName}}

</template>
<script lang="ts">
import Vue, { PropOptions } from 'vue'

interface User {
  firstName: string
  lastName: number
}

export default Vue.extend({
  name: 'Test',

  props: {
    firstName: {
      type: [String],
      required: true
    }
  },

  data() {
    return {
      message: 'This is a message'
    }
  },

  computed: {
    fullName(): string {
      return `${this.firstName}`
    }
  }
})
</script>

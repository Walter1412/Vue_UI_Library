<template lang="pug">
.about
  Input(v-model="form.name")
  div {{form.name}}
</template>
<script lang="ts">
import Vue from 'vue'
import Input from '@/components/Input.vue'
export default Vue.extend({
  data() {
    return {
      form: {
        name: '123131'
      }
    }
  },
  components: {
    Input
  }
})
</script>

<template>
  <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
  </header>
</template>

<script>
import { bus } from '../main';

export default {
  props: {
    title: {
      type: String,
      required: true
    },
  },
  data () {
    return {}
  },
  methods: {
    changeTitle() {
      // this.$emit('changeTitle', 'Khariokis Wizards')
      this.title = 'Khariokis Wizards';
      bus.$emit('titleChange', 'Khariokis Wizards')
    }
  },
}
</script>

<style scoped>
header {
    background: lightgreen;
    padding: 10px;
}
h1 {
    color: #222;
    text-align: center;
}
</style>

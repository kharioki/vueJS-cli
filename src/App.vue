<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Your first Vue file, Yipee!!!'
    }
  },
  methods: {
    greeting() {
      return 'Heeey, Cowboy!!'
    }
  },
}
</script>

<style>

</style>

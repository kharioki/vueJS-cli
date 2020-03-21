<template>
  <div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog';
import showBlogs from './components/showBlogs';
import header from './components/header';

export default {
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs,
    'app-header': header,
  },
  data () {
    return {
      component: 'form-one'
    }
  },
  methods: {},
}
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Nunito SeniBold';
}
</style>

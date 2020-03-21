<template>
  <div id="show-blogs">
      <h1>All Blog Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow>{{ blog.title | toUppercase }}</h2>
          <article>{{ blog.body | snippet }}</article>
      </div>
  </div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
        blogs: [],
        search: ''
    }
  },
  methods: {},
  created () {
    this.$http
    .get('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        this.blogs = data.body.slice(0, 10);
    });
  },
  computed: {
      filteredBlogs() {
          return this.blogs.filter(blog => blog.title.match(this.search)) 
      }
  },
  filters: {
      toUppercase(value) {
        return value.toUpperCase();
      }
  },
  directives: {
      rainbow: {
        bind(el, binding, vnode) {
          // el.style.color = '#' + Math.random().toString().slice(2, 8);
          el.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
      }
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>

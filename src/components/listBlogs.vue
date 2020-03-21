<template>
  <div id="show-blogs">
      <h1>List Blog Titles</h1>
      <input type="text" v-model="search" placeholder="search blogs" />
      <div v-for="blog in filteredBlogs" class="single-blog">
          <h2 v-rainbow>{{ blog.title | capitalize }}</h2>
      </div>
  </div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

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
  computed: {},
  filters: {
      toUppercase(value) {
        return value.toUpperCase();
      },
      capitalize(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
  },
  directives: {
      rainbow: {
        bind(el, binding, vnode) {
          // el.style.color = '#' + Math.random().toString().slice(2, 8);
          el.style.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        }
      }
  },
  mixins: [searchMixin]
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
